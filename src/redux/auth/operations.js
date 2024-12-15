import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const registration = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/login", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkApi.rejectWithValue("No token found");
    }

    try {
      setAuthHeader(persistedToken);
      console.log("Token being sent:", persistedToken);

      const response = await axios("/users/current");
      return response.data;
    } catch (e) {
      console.error("Refresh error:", e.response?.data || e.message);
      const errorMessage =
        e.response?.data?.message || "Unable to refresh user";
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

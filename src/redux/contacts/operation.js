import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

// Получение контактов
export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token;
    if (!token) {
      return rejectWithValue("Token not found. Please log in again.");
    }

    setAuthHeader(token);

    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Добавление контакта
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token;
    if (!token) {
      return rejectWithValue("Token not found. Please log in again.");
    }

    setAuthHeader(token);

    try {
      const { data } = await axios.post("/contacts", contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token;
    if (!token) {
      return rejectWithValue("Token not found. Please log in again.");
    }

    setAuthHeader(token);

    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

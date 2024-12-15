import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const api = axios.create({
  baseURL: "https://connections-api.goit.global",
});

const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = "";
};

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
      const { data } = await api.get("/contacts");
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

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
      const { data } = await api.post("/contacts", contact);
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
      await api.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { cleanUpParams } from "../../src/utils/utils";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const getCampers = createAsyncThunk(
  "campers/fetchData",
  async (params, thunkAPI) => {
    const refinedParams = cleanUpParams(params);
    const queryParams = new URLSearchParams(refinedParams);

    try {
      const result = await axios.get(`/campers?${queryParams}&limit=5`);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ status: error.response?.status, message: error.message });
    }
  }
);

export const getCamperById = createAsyncThunk(
  "campers/fetchById",
  async (camperId, thunkAPI) => {
    try {
      const result = await axios.get(`/campers/${camperId}`);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ status: error.response?.status, message: error.message });
    }
  }
);

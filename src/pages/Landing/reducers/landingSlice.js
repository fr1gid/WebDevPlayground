/*
 *
 * Landing slice
 *
 */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { getError } from "utils";
import { BRANCH_NAME } from "../constants";

export const subscribe = createAsyncThunk(
  `${BRANCH_NAME}/subscribe`,
  async (param, { extra, rejectWithValue }) => {
    const { api } = extra;
    const { email } = param || {};
    try {
      const response = await api.post("/v1/subscribe", {
        email_address: email,
      });
      return response.data;
    } catch (err) {
      const errorMsg = getError(err);
      message.info(errorMsg, 5);
      return rejectWithValue(message);
    }
  }
);

const initialState = {
  subscribePending: false,
  subscribeSuccess: false,
};

const landingSlice = createSlice({
  name: BRANCH_NAME,
  initialState,
  extraReducers: {
    [subscribe.fulfilled]: (state) => {
      state.subscribePending = false;
      state.subscribeSuccess = true;
    },
    [subscribe.pending]: (state) => {
      state.subscribePending = true;
    },
    [subscribe.rejected]: (state) => {
      state.subscribePending = false;
    },
  },
});

export default landingSlice.reducer;

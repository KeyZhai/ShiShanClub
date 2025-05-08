import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getActivityList } from "../service/activity";

interface ActivityState {
  activityList: any[];
}

const initialState: ActivityState = {
  activityList: [],
};

export const fetchActivityList = createAsyncThunk(
  "activity/fetchActivityList",
  async () => {
    const response = await getActivityList();
    return response.data;
  }
);

const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchActivityList.fulfilled, (state, action) => {
      state.activityList = action.payload.data;
    });
  },
});

export default activitySlice.reducer;

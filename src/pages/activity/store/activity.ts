import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getActivityList, getActivityDetail } from "../service/activity";

interface ActivityState {
  activityList: any[];
  activityDetail: any;
}

const initialState: ActivityState = {
  activityList: [],
  activityDetail: null,
};

export const fetchActivityList = createAsyncThunk(
  "activity/fetchActivityList",
  async () => {
    const response = await getActivityList();
    return response.data;
  }
);

export const fetchActivityDetail = createAsyncThunk(
  "activity/fetchActivityDetail",
  async (name: string) => {
    const response = await getActivityDetail(name);
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
    builder.addCase(fetchActivityDetail.fulfilled, (state, action) => {
      state.activityDetail = action.payload.data;
    });
  },
});

export default activitySlice.reducer;

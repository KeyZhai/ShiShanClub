import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getClubList, getClubDetail } from "../service/club";

interface ClubState {
  clubList: any[];
  clubDetail: any;
}

const initialState: ClubState = {
  clubList: [],
  clubDetail: {},
};

export const fetchClubList = createAsyncThunk(
  "club/fetchClubList",
  async () => {
    const response = await getClubList();
    return response.data;
  }
);

export const fetchClubDetail = createAsyncThunk(
  "club/fetchClubDetail",
  async (name: string) => {
    const response = await getClubDetail(name);
    console.log(response.data);
    return response.data;
  }
);

const clubSlice = createSlice({
  name: "club",
  initialState,
  reducers: {
    setClubList: (state, action) => {
      state.clubList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchClubList.fulfilled, (state, action) => {
      state.clubList = action.payload.data;
    });
    builder.addCase(fetchClubDetail.fulfilled, (state, action) => {
      state.clubDetail = action.payload.data;
    });
  },
});

export default clubSlice.reducer;
export const { setClubList } = clubSlice.actions;

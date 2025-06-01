import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import request from "@/service";
// 定义用户状态的接口
interface UserState {
  username: string;
  isLoggedIn: boolean;
  email: string;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  token: string;
  myClub: any[];
  myJoinedActivity: any[];
}

// 初始状态
const initialState: UserState = {
  username: "",
  isLoggedIn: false,
  email: "",
  loading: "idle",
  error: null,
  token: "",
  myJoinedActivity: [],
  myClub: [],
};

// 创建异步登录操作
export const loginUser = createAsyncThunk(
  "user/login",
  async (
    credentials: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      // 在这里进行登录API调用
      // 示例：
      const response = await request.post("/user/login", credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue("登录失败，请检查用户名和密码");
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async (
    credentials: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await request.post("/user/register", credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue("注册失败，请检查用户名和密码");
    }
  }
);

// 创建用户Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = "";
      state.email = "";
    },
    setUser: (
      state,
      action: PayloadAction<{ username: string; email: string }>
    ) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    setClubList: (state, action) => {
      state.myJoinedActivity = action.payload.activityInfo;
      state.myClub = action.payload.clubInfo;
      console.log("设置社团列表", state.myClub);
      console.log("设置活动列表", state.myJoinedActivity);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.isLoggedIn = true;
        state.username = action.payload.data.user.data.username;
        state.token = action.payload.data.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });
  },
});

// 导出actions
export const { logout, setUser, setClubList } = userSlice.actions;

// 导出reducer
export default userSlice.reducer;

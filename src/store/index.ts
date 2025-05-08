import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import clubReducer from "../pages/club/store/club";
import activityReducer from "../pages/activity/store/activity";
export const store = configureStore({
  reducer: {
    user: userReducer,
    club: clubReducer,
    activity: activityReducer,
    // 这里可以添加其他的reducer
  },
});

// 从store本身推断出RootState和AppDispatch类型
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

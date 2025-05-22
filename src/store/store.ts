import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./dashboardSlices/userSlice";
import courseReducer from "./dashboardSlices/courseSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    course: courseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

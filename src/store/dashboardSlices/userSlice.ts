import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type UserType = {
  fullName: string;
  email: string;
  mobile: string;
  clinic: string;
  country: string;
  city: string;
  service: string;
  createdAt: string;
};

type UserState = {
  users: UserType[];
  loading: boolean;
  error: string | null;
};

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

// ✅ Async thunk to fetch users
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  try {
    const res = await axios.get<UserType[]>(
      "http://localhost:3000/dashboard/api/users"
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload ?? [];
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export default userSlice.reducer;

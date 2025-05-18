import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export type UserType = {
  _id: string;
  fullName: string;
  email: string;
  mobile: string;
  clinic: string;
  country: string;
  city: string;
  service: string;
  createdAt: string;
  role: string;
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
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  try {
    const res = await axios.get<UserType[]>(`${base_url}/dashboard/api/users`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteUser = createAsyncThunk<
  { deletedId: string; message: string }, // return type
  string // argument type
>("user/deleteUser", async (id) => {
  try {
    const res = await axios.delete(`${base_url}/dashboard/api/users/${id}`);
    console.log(res.data);
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
      //fetch Users
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
      })
      //delete User
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter(
          (user) => user._id !== action.payload.deletedId
        );
        toast.success(action.payload.message);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to delete user";
        toast.error("Failed to delete user");
      });
  },
});

export default userSlice.reducer;

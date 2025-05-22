import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export type CourseType = {
  _id?: string;
  title: string;
  description: string;
  language: string;
  mode: string;
  level: string;
  price: string;
  moreInfo: string;
  category: string;
  image: string;
};

type CourseState = {
  courses: CourseType[];
  course: CourseType | null;
  loading: boolean;
  error: string | null;
};

const initialState: CourseState = {
  courses: [],
  course: null,
  loading: false,
  error: null,
};
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

export const createCourse = createAsyncThunk(
  "course/createCourse",
  async (data: CourseType, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${base_url}/dashboard/api/courses`, data);

      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data?.message || "An error occurred"
        );
      }

      return rejectWithValue("An unknown error occurred");
    }
  }
);
export const fetchCourses = createAsyncThunk(
  "course/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios(`${base_url}/dashboard/api/courses`);
      return res.data;
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data?.message || "An error occurred"
        );
      }

      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const fetchCourse = createAsyncThunk(
  "course/fetchCourse",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await axios(`${base_url}/dashboard/api/courses/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data?.message || "An error occurred"
        );
      }

      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const deleteCourse = createAsyncThunk(
  "course/deleteCourse",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`${base_url}/dashboard/api/courses/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data?.message || "An error occurred"
        );
      }

      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const editCourse = createAsyncThunk(
  "course/editCourse",
  async (
    { editedCourse, id }: { editedCourse: CourseType; id: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.patch(
        `${base_url}/dashboard/api/courses/${id}`,
        editedCourse
      );
      return res.data;
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data?.message || "An error occurred"
        );
      }

      return rejectWithValue("An unknown error occurred");
    }
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    clearCourse(state) {
      state.course = null;
    },
  },
  extraReducers: (buildre) => {
    buildre
      //create new course
      .addCase(createCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courses.push(action.payload.newCourse);
        toast.success(action.payload.message);
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error(action.payload as string);
      })
      //fetch all courses
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload.courses;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error(action.payload as string);
      })
      // fetch single course
      .addCase(fetchCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.course = action.payload.course;
      })
      .addCase(fetchCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error(action.payload as string);
      })
      //delete course
      .addCase(deleteCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = state.courses.filter(
          (course) => course._id != action.payload.course.id
        );
        toast.success(action.payload.message);
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error(action.payload as string);
      })
      //edit course
      .addCase(editCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = state.courses.map((course) =>
          course._id === action.payload.course.id
            ? action.payload.course
            : course
        );
        toast.success(action.payload.message);
      })
      .addCase(editCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error(action.payload as string);
      });
  },
});

export const { clearCourse } = courseSlice.actions;
export default courseSlice.reducer;

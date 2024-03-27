/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

export const CourseSlice = createSlice({
  name: "courseFilter",
  initialState: {
    value: {
      course: [
        "python fullstack",
        "java fullstack",
        "python",
        "java",
        "ui/ux",
        "front-end development",
        "mern stack",
        "mean stack",
        "c",
        "c++",
        "testing",
        "sql",
        "javascript",
        "selinium",
        "flutter",
      ],
    },
  },
  reducers: {
    checkBox: (state, action) => {
      state.value = action.payload;
    },
  },
});
export default CourseSlice.reducer;
export const { checkBox } = CourseSlice.actions;

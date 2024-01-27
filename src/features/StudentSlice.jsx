/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

export const StudentSlice = createSlice({
  name: "studentReduce",
  initialState: {
    value: {
      studentVal:["hello"]
    },
  },
  reducers: {
    studentAction: (state, action) => {
      state.value = action.payload;
    },
  },
});
export default StudentSlice.reducer;
export const { studentAction } = StudentSlice.actions;

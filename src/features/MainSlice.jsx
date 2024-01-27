/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

export const MainSlice = createSlice({
  name: "filter",
  initialState: {
    value: {
      sort: "",
    },
  },
  reducers: {
    sorting: (state, action) => {
      state.value = action.payload;
    },
  },
});
export default MainSlice.reducer;
export const { sorting } = MainSlice.actions;

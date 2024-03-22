import { createSlice } from "@reduxjs/toolkit";

export const DateSlice = createSlice({
  name: "dateSlice",
  initialState: {
    value: {
      from: "",
      to: "",
    },
  },
  reducers: {
    filterByDate: (state, action) => {
      state.value = action.payload;
    },
  },
});
export default DateSlice.reducer;
export const { filterByDate } = DateSlice.actions;

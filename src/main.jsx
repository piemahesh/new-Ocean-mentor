import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import MainReducer from "../src/features/MainSlice";
import CourseReducer from "../src/features/CourseSlice";
import StudentReducer from "../src/features/StudentSlice";

const store = configureStore({
  reducer: {
    filter: MainReducer,
    courseFilter: CourseReducer,
    studentReduce: StudentReducer,
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

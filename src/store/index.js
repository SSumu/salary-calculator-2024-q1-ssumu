import { configureStore } from "@reduxjs/toolkit";
import earningsReducer from "./earningsSlice";
import deductionsReducer from "./deductionsSlice";
import salaryReducer from "./salarySlice";

const store = configureStore({
  reducer: {
    earnings: earningsReducer,
    deductions: deductionsReducer,
    salary: salaryReducer,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";
import { calculateNetSalary, calculateCTC } from "../utils/calculations";

const initialState = {
  basicSalary: 0,
  earnings: [],
  deductions: [],
  netSalary: 0,
  ctc: 0,
};

const salarySlice = createSlice({
  name: "salary",
  initialState,
  reducers: {
    setBasicSalary: (state, action) => {
      state.basicSalary = action.payload;
    },
    addEarning: (state, action) => {
      state.earnings.push(action.payload);
    },
    addDeduction: (state, action) => {
      state.deductions.push(action.payload);
    },
    removeEarning: (state, action) => {
      state.earnings = state.earnings.filter(
        (_, index) => index !== action.payload
      );
    },
    removeDeduction: (state, action) => {
      state.deductions = state.deductions.filter(
        (_, index) => index !== action.payload
      );
    },
    calculateSalaries: (state) => {
      state.netSalary = calculateNetSalary(
        state.basicSalary,
        state.earnings,
        state.deductions
      );
      state.ctc = calculateCTC(
        state.basicSalary,
        state.earnings,
        state.deductions
      );
    },
  },
});

export const {
  setBasicSalary,
  addEarning,
  addDeduction,
  removeEarning,
  removeDeduction,
  calculateSalaries,
} = salarySlice.actions;
export default salarySlice.reducer;

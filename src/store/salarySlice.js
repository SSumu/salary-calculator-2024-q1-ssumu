import { createSlice } from "@reduxjs/toolkit";
import { calculateNetSalary, calculateCTC } from "../utils/calculations";

const salarySlice = createSlice({
  name: "salary",
  initialState: {
    basicSalary: 0,
    netSalary: 0,
    ctc: 0,
  },
  reducers: {
    setBasicSalary: (state, action) => {
      state.basicSalary = action.payload;
    },
    calculateSalaries: (state, action) => {
      const { earnings, deductions } = action.payload;
      state.netSalary = calculateNetSalary(
        state.basicSalary,
        earnings,
        deductions
      );
      state.ctc = calculateCTC(state.basicSalary, earnings, deductions);
    },
  },
});

export const { setBasicSalary, calculateSalaries } = salarySlice.actions;
export default salarySlice.reducer;

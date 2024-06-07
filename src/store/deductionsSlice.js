import { createSlice } from "@reduxjs/toolkit";

const deductionsSlice = createSlice({
  name: "deductions",
  initialState: [],
  reducers: {
    addDeduction: (state, action) => {
      state.push(action.payload);
    },
    updateDeduction: (state, action) => {
      const index = state.findIndex((d) => d.id === action.payload.id);
      state[index] = action.payload;
    },
    deleteDeduction: (state, action) => {
      return state.filter((d) => d.id !== action.payload);
    },
  },
});

export const { addDeduction, updateDeduction, deleteDeduction } =
  deductionsSlice.actions;
export default deductionsSlice.reducer;

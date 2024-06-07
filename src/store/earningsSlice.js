import { createSlice } from "@reduxjs/toolkit";

const earningsSlice = createSlice({
  name: "earnings",
  initialState: [],
  reducers: {
    addEarning: (state, action) => {
      state.push(action.payload);
    },
    updateEarning: (state, action) => {
      const index = state.findIndex((e) => e.id === action.payload.id);
      state[index] = action.payload;
    },
    deleteEarning: (state, action) => {
      return state.filter((e) => e.id !== action.payload);
    },
  },
});

export const { addEarning, updateEarning, deleteEarning } =
  earningsSlice.actions;
export default earningsSlice.reducer;

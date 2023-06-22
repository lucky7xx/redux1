import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
  name: "numbers",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

const eNumberSlice = createSlice({
  name: "eNumbers",
  initialState: {
    value: 100,
  },
  reducers: {
    eIncrement: (state) => {
      state.value += 100;
    },
    eDecrement: (state) => {
      state.value -= 100;
    },
  },
});

export const { increment, decrement } = numberSlice.actions;
export const { eIncrement, eDecrement } = eNumberSlice.actions;
export const eNumberSliceReducer = eNumberSlice.reducer;
export const numberSliceReducer = numberSlice.reducer;

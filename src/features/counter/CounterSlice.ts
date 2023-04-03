import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    amountAdded: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;

'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  id: string;
  value: number;
  isToogle: boolean;
}

const initialState: CounterState = {
  id: '',
  value: 0,
  isToogle: false
};

export const counterSlice = createSlice({
  name: 'toogle',
  initialState,
  reducers: {
    toogleON: (state) => {
      return { ...state, isToogle: true };
    },
    toogleOFF: (state) => {
      return { ...state, isToogle: false };
    },

    saveID(state, { payload }) {
      return { ...state, id: payload };
    }
  }
});

export const { toogleOFF, toogleON, saveID } = counterSlice.actions;
export default counterSlice.reducer;

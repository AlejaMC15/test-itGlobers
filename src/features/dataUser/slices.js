import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const datalSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    //Functions
    info: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { info } = datalSlice.actions;
export default datalSlice.reducer;

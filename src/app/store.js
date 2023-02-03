import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataUser/slices";

export const store = configureStore({
  reducer: {
    info: dataReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import initialState from "./mock-data";
import calculatorReducer from "./slices/calculator";

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
  preloadedState: {
    calculator: initialState,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { randomUUID } from "crypto";
import { CalculatorT, EntryT } from "@/app/types/calculator";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { transliterate as tr } from "transliteration";

const initialState: CalculatorT = {
  income: [],
  fixedExpenses: [],
  inflatingExpenses: [],
  investments: [],
  savings: [],
  remaining: {
    id: "remaining",
    name: "Remaining",
    value: 0,
    type: "Remaining",
  },
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addEntry: (
      state,
      action: PayloadAction<{
        category: keyof CalculatorT;
        entry: EntryT;
      }>,
    ) => {
      const { category, entry } = action.payload;

      if (Array.isArray(state[category])) {
        state[category].push({
          id: randomUUID(),
          type: entry.type,
          name: tr(entry.name),
          value: entry.value,
        });
      } else {
        console.error(`Cannot add entry to category: ${category}`);
      }
    },
    deleteEntry: (state, action: PayloadAction<EntryT["id"]>) => {
      const entryId = action.payload;

      (Object.keys(state) as Array<keyof CalculatorT>).forEach((category) => {
        if (Array.isArray(state[category])) {
          const index = state[category].findIndex(
            (entry) => entry.id === entryId,
          );
          if (index !== -1) {
            state[category].splice(index, 1);
          }
        }
      });
    },
  },
});

export const { addEntry, deleteEntry } = calculatorSlice.actions;

export default calculatorSlice.reducer;

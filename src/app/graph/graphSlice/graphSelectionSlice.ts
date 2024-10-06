import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GraphSelectState } from "./types";

const initialState: GraphSelectState = {
  predicates: [],
};

export const graphSelection = createSlice({
  name: "graphSelection",
  initialState: initialState,
  reducers: {
    addPredicate(state: GraphSelectState, action: PayloadAction<string>) {
      state.predicates.push(action.payload);
    },
    removePredicate(state: GraphSelectState, action: PayloadAction<string>) {
      state.predicates = state.predicates.filter((predicate) => predicate !== action.payload);
    },
    resetPredicates(state: GraphSelectState) {
      state.predicates = [];
    },
  },
});

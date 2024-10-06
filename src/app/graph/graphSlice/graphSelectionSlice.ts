import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GraphSelectState } from "./types";

const initialState: GraphSelectState = {
  predicates: [],
  types: [],
  graphName: "",
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
    addType(state: GraphSelectState, action: PayloadAction<string>) {
      state.types.push(action.payload);
    },
    removeType(state: GraphSelectState, action: PayloadAction<string>) {
      state.types = state.types.filter((predicate) => predicate !== action.payload);
    },
    resetTypes(state: GraphSelectState) {
      state.types = [];
    },
    setGraphName(state: GraphSelectState, action: PayloadAction<string>) {
      state.graphName = action.payload;
    },
  },
});

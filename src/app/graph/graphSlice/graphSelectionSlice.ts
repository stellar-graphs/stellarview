import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GraphLoadingState, GraphSelectState } from "./types";

const initialState: GraphSelectState = {
  predicates: [],
  types: [],
  graphName: "",
  graphStatus: {
    status: "UNINITIALIZED",
  },
  graph: {
    edges: [],
    nodes: [],
  }
};

export const graphSelection = createSlice({
  name: "graphSelection",
  initialState: initialState,
  reducers: {
    addPredicate(state: GraphSelectState, action: PayloadAction<string>) {
      state.predicates.push(action.payload);
    },
    setGraph(state: GraphSelectState, action: PayloadAction<cytoscape.ElementsDefinition>) {
      state.graph = action.payload;
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
    setGraphStatus(state: GraphSelectState, action: PayloadAction<GraphLoadingState>) {
      state.graphStatus = action.payload;
    },
  },
});

export interface TerminusdbBindings {
  bindings: any;
}

export interface GraphLoadingState {
  status: "UNINITIALIZED" | "LOADING" | "ERROR" | "LOADED";
  error?: object
}

export interface GraphSelectState {
  graphName: string;
  predicates: Array<string>;
  types: Array<string>;
  graphStatus: GraphLoadingState;
  graph: cytoscape.ElementsDefinition;
}

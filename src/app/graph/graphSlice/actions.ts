import { AppDispatch, graphSelectionActions } from "@/lib/store";
import { GraphEdge } from "@/pages/api/edges";

export const loadGraph = (
  types: Array<string>,
  predicates: Array<string>,
  advance: () => void
): ((dispatch: AppDispatch) => Promise<void>) => {
  return async (dispatch: AppDispatch) => {
    dispatch(
      graphSelectionActions.setGraphStatus({
        status: "LOADING",
        error: undefined,
      })
    );
    const response = (await fetch("/api/edges", {
      method: "POST",
      body: JSON.stringify({ types, predicates }),
    }));

    // console.log(typeof response)
    const nodes: Record<string, cytoscape.NodeDefinition> = {};
    const edges: Record<string, cytoscape.EdgeDefinition> = {};

    (await response.json()).forEach((edge: GraphEdge) => {
      nodes[edge.src_iri] = {
        data: {
          id: edge.src_iri,
          label: edge.src_label,
        },
      };
      nodes[edge.dst_iri] = {
        data: {
          id: edge.dst_iri,
          label: edge.dst_label,
        },
      };
      edges[`${edge.src_iri}-${edge.dst_iri}`] = {
        data: {
          id: `${edge.src_iri}-${edge.dst_iri}`,
          source: edge.src_iri,
          target: edge.dst_iri,
          label: edge.edge_name,
        },
      };
    });

    const data: cytoscape.ElementsDefinition = {
      nodes: Object.values(nodes),
      edges: Object.values(edges),
    };

    dispatch(
      graphSelectionActions.setGraphStatus({
        status: "LOADING",
        error: undefined,
      })
    );
    advance();
    dispatch(graphSelectionActions.setGraph(data));
  };
};

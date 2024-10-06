"use client";
import { useAppSelector } from "@/lib/hooks";
import CytoscapeInstance from "@/components/Layouts/CytoscapeInstance";


const config = {
  boxSelectionEnabled: false,
  autounselectify: true,

  layout: {
    name: "concentric",
    fit: true,
    padding: 40,
    minNodeSpacing: 100,
    animate: false, // whether to transition the node positions
    animationDuration: 500, // duration of animation in ms if enabled
    animationEasing: undefined, // easing of animation if enabled
    concentric: function (node: any) {
      return node.degree();
    },
    levelWidth: function (/* nodes: any */) {
      return 2;
    },
  },

  style: [
    {
      selector: "node",
      style: {
        // height: 20,
        // width: 20,
        // "background-color": "#30c9bc",

        width: " 40",
        height: " 40",
        "font-size": "9",
        "font-weight": "bold",
        "min-zoomed-font-size": "4",
        label: "data(label)",
        "text-wrap": "wrap",
        "text-max-width": "50",
        "text-valign": "center",
        "text-halign": "center",
        "text-events": "yes",
        color: "#000",
        "text-outline-width": "1",
        "text-outline-color": "#fff",
        "text-outline-opacity": "1",
        "overlay-color": "#fff",
      },
    },

    {
      selector: "edge",
      style: {
        "curve-style": "haystack",
        "haystack-radius": 0,
        opacity: 0.333,
        label: "data(label)",
        "font-size": "9",
        "text-rotation": "autorotate",
        "width": 2,
        "z-index": 0,
        "overlay-opacity": 0,
        "events": "no",
        // "curve-style": "haystack",
        // "haystack-radius": 0,
        // width: 5,
        // opacity: 0.5,
        // "line-color": "#a8eae5",
      },
    },
    {
      selector: "node[label]",
      css: {},
      style: {
        "text-background-color": "#ffffff",
        "text-background-opacity": "1.0",
        // "text-margin-y": "14px",
      },
    },
  ] as cytoscape.Stylesheet[],
};

export const ShowRelations: React.FC = () => {
  const graphSelection = useAppSelector((state) => state.graphSelection);
  return <CytoscapeInstance layout={config.layout} cytoStylesheet={config.style} elements={graphSelection.graph} />;
};

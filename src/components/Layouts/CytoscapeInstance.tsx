import * as React from "react";
import Cytoscape from "cytoscape";
import CytoscapeComponent from "react-cytoscapejs";
import cxtmenu from "cytoscape-cxtmenu";

Cytoscape.use(cxtmenu);

const CytoscapeInstance: React.FC<IProps> = (props) => {
  const [key, setKey] = React.useState<string>("");

  React.useEffect(() => {
    // Hiding on unmount as it takes a while to clear up the state otherwise.
    const setUniqueKey = async () => {
      setKey(String(new Date().getTime()));
    };
    setUniqueKey();
  }, [props.elements]);

  React.useEffect(() => {
    const localKey = key;
    if (localKey !== "") {
      return () => document.getElementById("canvas_" + localKey)?.setAttribute("class", "hidden");
    }
  }, [key]);

  return (
    (key && (
      <div id={"canvas_" + key} className={"w-full flex flex-grow"}>
        <CytoscapeComponent
          maxZoom={12}
          minZoom={0.02}
          className={"w-full flex-grow"}
          userZoomingEnabled={true}
          cy={props.cy}
          layout={props.layout}
          stylesheet={props.cytoStylesheet}
          style={props.style}
          elements={[...props.elements.nodes, ...props.elements.edges]}
        />
      </div>
    )) || <></>
  );
};

interface IProps {
  elements: Cytoscape.ElementsDefinition;
  layout?: Cytoscape.LayoutOptions;
  style?: React.CSSProperties;
  cytoStylesheet?: Cytoscape.Stylesheet | Cytoscape.Stylesheet[] | string;
  cy?: (cy: Cytoscape.Core) => void;
}
export default CytoscapeInstance;
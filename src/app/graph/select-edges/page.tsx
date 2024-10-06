import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { SelectTypes } from "./select-edges";

export const metadata: Metadata = {
  title: "Select Edges (2/3) | Stellar Graphs",
  description: "Step 2/3: Select edges to include in the graph",
};

const Settings = () => {
  return (
    <DefaultLayout>
      <div className="h-full flex flex-grow">
        <div className="m-auto">
          <SelectTypes/>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Settings;

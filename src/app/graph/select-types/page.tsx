import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { SelectTypes } from "./select-types";

export const metadata: Metadata = {
  title: "Select Types | Stellar Graphs",
  description: "Select types to include in the graph",
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

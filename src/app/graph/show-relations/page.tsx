import { Metadata } from "next";
import { ShowRelations } from "./show-relations";
import Header from "@/components/section/header";

export const metadata: Metadata = {
  title: "Show Relations | Stellar Graphs",
  description: "Shows the relationships between dataset selection",
};

const Settings = () => {
  return (
    <div className="flex flex-grow min-h-full">
      {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

      <div className="relative flex flex-1 flex-col lg:ml-72.5">
        <Header />

        <main className="flex-grow h-full p-4">
          <div className="h-full flex flex-grow rounded-sm bg-slate-50">
            <ShowRelations />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;

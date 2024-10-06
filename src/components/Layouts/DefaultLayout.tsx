"use client";
import React from "react";
import Header from "../section/header";
// import Header from "./Header";


export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [sidebarOpen, setSidebarOpen] = useState(false); // Switch to Redux state

  return (
    <>
      <div className="flex flex-grow min-h-full">
        {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

        <div className="relative flex flex-1 flex-col lg:ml-72.5">
          <Header  />
          
          <main className="flex h-full">
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
              {/* {sidebarOpen ? <>open</> : <>closed</>} */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

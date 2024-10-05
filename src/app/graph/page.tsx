import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Predicates } from "@/components/dynamic/predicates";

export const metadata: Metadata = {
  title: "Stellar Graph Settings",
  description:
    "Edit your settings",
};

const Settings = () => {



  return (
    <DefaultLayout>
      <Predicates/>
    </DefaultLayout>
  );
};

export default Settings;

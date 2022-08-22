import React from "react";
import Header from "../components/header";
import ReleaseNotesComponent from "../components/release-notes";
import Footer from "../components/footer";
import AppHelmet from "../components/helmet";

const ReleaseNotes = () => {
  return (
    <>
      <AppHelmet
        title={"Jump.trade and MCL Game Release Notes"}
        description={
          "Bird's eye view of all the latest updates to the Jump.trade Marketplace and the MCL Game"
        }
      />
      <Header bgImage />
      <ReleaseNotesComponent />
      <Footer />
    </>
  );
};

export default ReleaseNotes;

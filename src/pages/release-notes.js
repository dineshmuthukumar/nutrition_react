import React from "react";
import Header from "../components/header";
import ReleaseNotesComponent from "../components/release-notes";
import Footer from "../components/footer";

const ReleaseNotes = () => {
  return (
    <>
      <Header bgImage />
      <ReleaseNotesComponent />
      <Footer />
    </>
  );
};

export default ReleaseNotes;

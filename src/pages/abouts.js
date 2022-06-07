import React from "react";
import Header from "../components/header";
import OurTeam from "../components/abouts-us/our-team";
import OurInvestor from "../components/abouts-us/our-investors";
import OurTeamBeyond from "../components/abouts-us/our-team-beyond";
import Footer from "../components/footer";
import "../styles/_common.scss";

const FAQ = () => {
  return (
    <>
      <Header bgImage />
      <OurTeam />
      <OurInvestor />
      <OurTeamBeyond />
      <Footer />
    </>
  );
};

export default FAQ;

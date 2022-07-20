import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import MclGame from "../components/mcl-game";
import AppHelmet from "../components/helmet";

const Blog = () => {
  return (
    <>
      <AppHelmet
        title={"Meta Cricket League | NFT Cricket Game | Jump.trade"}
        description={
          "The Meta Cricket League is the world's first NFT cricket game that enables you earn real rewards for your skills and for every shot you play! Play MCL Now!"
        }
      />
      <Header bgImage />
      <MclGame />
      <Footer />
    </>
  );
};

export default Blog;

import React from "react";
import OwlCarousel from "react-owl-carousel";
import Card from "./card";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./style.scss";

const MclCompletedTournaments = () => {
  return (
    <>
      <OwlCarousel
        className="owl-theme completed-tournament-list-carousel"
        loop
        margin={0}
        smartSpeed={500}
        center={true}
        dots={true}
        responsive={{
          0: {
            items: 1,
          },
          768: {
            items: 3,
          },
          800: {
            items: 3,
          },
          1024: {
            items: 5,
          },
          1200: {
            items: 5,
          },
          1541: {
            items: 5,
          },
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </OwlCarousel>
    </>
  );
};

export default MclCompletedTournaments;

import React from "react";
import OwlCarousel from "react-owl-carousel";
import Card from "./card";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./style.scss";

const MclCompletedTournaments = () => {
  return (
    <>
      <section className="complete-tournament-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="sec-title">
                Completed
                <span>tournaments</span>
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
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
                    items: 2,
                  },
                  800: {
                    items: 2,
                  },
                  1024: {
                    items: 2,
                  },
                  1200: {
                    items: 3,
                  },
                  1541: {
                    items: 3,
                  },
                }}
              >
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MclCompletedTournaments;

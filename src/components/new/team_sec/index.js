import React, { useEffect, useState } from "react";
import pro_bg2 from "../../../images/new-images/demos/demo-food2/products/pro_bg2.png";
import nutri_leaf from "../../../images/new-images/demos/demo-food2/products/nutri_leaf.png";

const TeamSection = ({ homeContent }) => {
  return (
    <>
      <section
        className="team_sec pb-5 pt-5"
        data-animation-options="{'name': 'fadeInUpShorter','duration': '1.2s', 'delay': '.2s' }"
      >
        <div className="container">
          <h2 className="title-echo">
            <span>{homeContent?.section?.sixth?.title}</span>
          </h2>
          <p>{homeContent?.section?.sixth?.description}</p>
        </div>
      </section>
    </>
  );
};


export default TeamSection;

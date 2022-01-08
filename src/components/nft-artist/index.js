import React, { useState } from "react";
import ReadMoreReact from "read-more-react";
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import AritstPills from "./artist-pills";
import amitabh_img from "../../images/artist-image.png";
import stanlee_img from "../../images/stanlee.jpg";

import "./style.scss";

const NFTArtist = ({ id }) => {
  return (
    <div className="nft-artist">
      <div className="row mt-4 artist-content">
        <div className="col-12 col-md-5">
          <img
            className="artist-img"
            src={id === 1 ? amitabh_img : stanlee_img}
            alt="artist logo"
          />
        </div>
        <div className="col-12 col-md-7 mt-4 mt-md-0 artist-details-content">
          <div className="artist-name">The Inspiration</div>
          <div className="at-name">
            {id === 1 ? "Amitabh Bachchan" : "Stan Lee"}
          </div>
          <div className="artist-desc mt-5">
            <ReadMoreReact
              min={300}
              ideal={300}
              max={700}
              text={
                id === 1
                  ? `Amitabh Bachchan is, without question, the most influential film personality of the last century. In an illustrious career that spans four decades, he’s donned multiple portfolios like acting, production, television hosting, and singing!`
                  : `The inspiration behind the creation of all our art NFTs - both illustrations and video - is none other than the creation of the legendary Stan Lee. Stan Lee is one of the most prolific and formidable creator of superheroes in the last 100 years, and he has been the creative brain behind the creation of some memorable multiverses. Chakra is the only Indian superhero that Stan Lee has co-created!`
              }
            />
          </div>
          <div className="artist-pill-container mt-4">
            <AritstPills title="Managed By" value="BeyondLife.club" />
          </div>
          {/* <div className="bottom-owner-contact-links">
            <div className="share-link-owner">
              <FaFacebookF />
            </div>
            <div className="share-link-owner">
              <FaInstagram />
            </div>
            <div className="share-link-owner">
              <FaTwitter />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NFTArtist;

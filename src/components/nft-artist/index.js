import React, { useState } from "react";
import ReadMoreReact from "read-more-react";
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import AritstPills from "./artist-pills";
import amitabh_img from "../../images/artist-image.png";
import stanlee_img from "../../images/stanlee.jpg";
import ht_img from "../../images/ht_logo.png";
import metaverse_couple from "../../images/metaverse-couple.jpg";
import kalpana from "../../images/Kalpana.png";
import latimes from "../../images/latimes/latimes.jpg";

import "./style.scss";

const NFTArtist = ({ id }) => {
  return (
    <div className="nft-artist">
      <div className="row mt-4 artist-content">
        <div className="col-12 col-md-5">
          <img
            className="artist-img"
            src={(() => {
              if (id === 1) {
                return amitabh_img;
              } else if (
                id === parseInt(process.env.REACT_APP_HINDUSTAN_TIMES_ID)
              ) {
                return ht_img;
              } else if (id === parseInt(process.env.REACT_APP_META_VERSE_ID)) {
                return metaverse_couple;
              } else if (
                id === parseInt(process.env.REACT_APP_KALPANA_CHAWLA_ID)
              ) {
                return kalpana;
              } else if (id === 103) {
                return latimes;
              } else {
                return stanlee_img;
              }
            })()}
            alt="artist logo"
          />
        </div>
        <div className="col-12 col-md-7 mt-4 mt-md-0 artist-details-content">
          <div className="artist-name">
            {id !== 133 ? "The Inspiration" : "Kalpana Chawla"}
          </div>
          <div className="at-name">
            {(() => {
              if (id === 1) {
                return "Amitabh Bachchan";
              } else if (
                id === parseInt(process.env.REACT_APP_HINDUSTAN_TIMES_ID)
              ) {
                return "Hindustan Times";
              } else if (id === parseInt(process.env.REACT_APP_META_VERSE_ID)) {
                return "Metaverse Wedding";
              } else if (
                id === parseInt(process.env.REACT_APP_KALPANA_CHAWLA_ID)
              ) {
                return "Exclusive Photographs Presented By Jean-Pierre Harrison";
              } else if (id === 103) {
                return "Latimes";
              } else {
                return "Stan Lee";
              }
            })()}
          </div>
          <div className="artist-desc mt-5">
            <ReadMoreReact
              min={300}
              ideal={500}
              max={700}
              text={(() => {
                if (id === 1)
                  return `Amitabh Bachchan is, without question, the most influential film personality of the last century. In an illustrious career that spans four decades, he's donned multiple portfolios like acting, production, television hosting, and singing!`;
                else if (
                  id === parseInt(process.env.REACT_APP_HINDUSTAN_TIMES_ID)
                )
                  return `Hindustan Times is one of India's most respected and leading English news destination, with a legacy of close to a hundred years. Through the course of the century, HT has witnessed and set forth India's most iconic moments to its citizenry. As India celebrates its 73rd Republic Day on 26th January 2022, we invite you to stake claim to piece of India's glorious history through the lens of the Hindustan Times. HT's foray into Web 3.0 through its NFTs is an attempt in bringing its storied past into the future. This would include timeless tokens of spectacular landmarks and milestones in Indian history which was published in the daily through the course of the last century Many such iconic timeless tokens are being put up for an auction on 26th Jan. For any further details on this please log on www.nft.hindustantimes.com and stake your claim to a piece of history.`;
                else if (id === parseInt(process.env.REACT_APP_META_VERSE_ID))
                  return `The NFT Collection featuring the first meta-verse wedding of Asia is one of the most exclusive collections brought to you by BeyondLife.club. The NFT collection brings you artwork featuring backgrounds and attires from the Harry Potter and cyberpunk era in addition to the classic wedding attire featuring the bride, groom, and the father-in-law!`;
                else if (
                  id === parseInt(process.env.REACT_APP_KALPANA_CHAWLA_ID)
                )
                  return `Kalpana Chawla… The name would not need any introduction for any Indian woman and for any Indian for that matter! Kalpana Chawla has been a source of inspiration for millions of women who have dared to fly beyond the confines of their constraints. She is an aerospace engineer, an astronaut, and a wonderful human being who left behind, a legacy that will be a blazing trail for Indian women to follow and to look up to!`;
                else if (id === 103)
                  return `Latimes The name would not need any introduction for any Indian woman and for any Indian for that matter! Kalpana Chawla has been a source of inspiration for millions of women who have dared to fly beyond the confines of their constraints. She is an aerospace engineer, an astronaut, and a wonderful human being who left behind, a legacy that will be a blazing trail for Indian women to follow and to look up to!`;
                else
                  return `The inspiration behind the creation of all our art NFTs - both illustrations and video - is none other than the creation of the legendary Stan Lee. Stan Lee is one of the most prolific and formidable creator of superheroes in the last 100 years, and he has been the creative brain behind the creation of some memorable multiverses. Chakra is the only Indian superhero that Stan Lee has co-created!`;
              })()}
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

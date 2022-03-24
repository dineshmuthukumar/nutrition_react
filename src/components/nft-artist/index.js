import React from "react";
import ReadMoreReact from "read-more-react";

import AritstPills from "./artist-pills";
import amitabh_img from "../../images/artist-image.png";
import stanlee_img from "../../images/stanlee.jpg";
import ht_img from "../../images/ht_logo.png";
import metaverse_couple from "../../images/metaverse-couple.jpg";
import kalpana from "../../images/Kalpana.png";
import latimes from "../../images/latimes/latimes.jpg";
import viacom18 from "../client-category/fullyfaltoo/img/Viacom18.jpeg";

import "./style.scss";
const NFTArtist = ({ id, artist }) => {
  return (
    <div className="nft-artist">
      <div className="row mt-4 artist-content">
        <div className="col-12 col-md-5">
          <img
            className="artist-img"
            src={(() => {
              if (artist?.image_url) {
                return artist?.image_url;
              } else if (id === 1) {
                return amitabh_img;
              } else if (
                id === parseInt(process.env.REACT_APP_HINDUSTAN_TIMES_ID)
              ) {
                return ht_img;
              } else if (id === parseInt(process.env.REACT_APP_FF_ID)) {
                return viacom18;
              } else if (id === parseInt(process.env.REACT_APP_META_VERSE_ID)) {
                return metaverse_couple;
              } else if (
                id === parseInt(process.env.REACT_APP_KALPANA_CHAWLA_ID)
              ) {
                return kalpana;
              } else if (id === parseInt(process.env.REACT_APP_LATIMES_ID)) {
                return latimes;
              } else {
                return stanlee_img;
              }
            })()}
            alt="artist logo"
          />
        </div>
        <div className="col-12 col-md-7 mt-4 mt-md-0 artist-details-content">
          <div className="artist-name">{artist?.display_name}</div>
          <div className="at-name">{artist?.short_desc}</div>
          <div className="artist-desc mt-5">
            <ReadMoreReact
              min={300}
              ideal={500}
              max={700}
              text={artist?.desc}
            />
          </div>
          <div className="artist-pill-container mt-4">
            <AritstPills title="Managed By" value={artist?.managed_by} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTArtist;

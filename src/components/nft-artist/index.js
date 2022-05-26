import React from "react";
import ReadMoreReact from "read-more-react";

import AritstPills from "./artist-pills";

import "./style.scss";
const NFTArtist = ({ artist }) => {
  return (
    <div className="nft-artist">
      <div className="row mt-4 artist-content">
        <div className="col-12 col-md-5">
          <img
            className="artist-img"
            src={artist?.image_url}
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

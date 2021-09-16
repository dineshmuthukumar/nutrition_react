import React from "react";
import AritstPills from "./artist-pills";
import "./style.scss";

const NFTArtist = () => {
  return (
    <div className="nft-artist">
      <div className="title">Artist</div>
      <div className="row mt-4 artist-content">
        <div className="col-12 col-md-5">
          <img className="artist-img" src="https://picsum.photos/500/500" />
        </div>
        <div className="col-12 col-md-7 mt-4 mt-md-0">
          <div className="artist-name">Amitabh Bachchan</div>
          <div className="at-name">@ABNFT</div>
          <div className="artist-desc mt-4">
            Amitabh Bachchan is an Indian actor, film producer, television host,
            occasional playback singer and former politician known for his work
            in Hindi cinema. He is regarded as one of the most influential
            actors in the history of Indian cinema.
          </div>
          <div className="artist-pill-container mt-4">
            <AritstPills title="Created By" value="Amitabh Bachchan" />
            <AritstPills title="Managed By" value="The Bachchan Estate" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTArtist;

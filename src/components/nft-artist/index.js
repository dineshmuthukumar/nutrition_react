import React from "react";
import ReadMoreReact from "read-more-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import AritstPills from "./artist-pills";
import artistImg from "../../images/artist-image.png";
import "./style.scss";

const NFTArtist = () => {
  return (
    <div className="nft-artist">
      <div className="row mt-4 artist-content">
        <div className="col-12 col-md-5">
          <img className="artist-img" src={artistImg} />
        </div>
        <div className="col-12 col-md-7 mt-4 mt-md-0 artist-details-content">
          <div className="artist-name">Amitabh Bachchan</div>
          <div className="at-name">@AmitabhBachchan</div>
          <div className="artist-desc mt-4">
            <ReadMoreReact
              min={300}
              ideal={300}
              max={700}
              text={`Amitabh Bachchan is an Indian actor, film producer, television host, occasional playback singer and former politician known for his work in Hindi cinema. He is regarded as one of the most influential actors in the history of Indian cinema. Amitabh Bachchan is an Indian actor, film producer, television host, occasional playback singer and former politician known for his work in Hindi cinema. He is regarded as one of the most influential actors in the history of Indian cinema. Amitabh Bachchan is an Indian actor, film producer, television host, occasional playback singer and former politician known for his work in Hindi cinema. He is regarded as one of the most influential actors in the history of Indian cinema.`}
            />
          </div>
          <div className="artist-pill-container mt-4">
            <AritstPills title="Managed By" value="GuardianLink" />
          </div>
          <div className="bottom-owner-contact-links">
            <div className="share-link-owner">
              <FaFacebookF />
            </div>
            <div className="share-link-owner">
              <FaInstagram />
            </div>
            <div className="share-link-owner">
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTArtist;

import React from "react";
import "./style.scss";

const NFTMedia = () => {
  return (
    <div className="nft-media">
      {/* <img src="https://picsum.photos/780/750" /> */}
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif" />
      {/* <video controls>
        <source
          src="https://www.w3schools.com/tags/movie.mp4"
          type="video/mp4"
        />
      </video> */}

      {/* <audio controls className="shadow-sm ">
        <source
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio> */}
    </div>
  );
};

export default NFTMedia;

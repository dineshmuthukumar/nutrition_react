import React from "react";
import { useHistory } from "react-router";

const NFTDrops = ({ title, desc, imgUrl, nftId, nftType }) => {
  const erc721 = nftType == "erc721";

  const history = useHistory();

  const handleClick = () => {
    history.push(`/details/${nftId}`);
  };

  return (
    <div
      class="row mt-5 justify-content-center"
      role="button"
      onClick={handleClick}
    >
      <div class="col-md-9">
        <div
          class="bl_drop_list p-3"
          style={{ backgroundImage: "url(https://picsum.photos/780/750)" }}
        >
          <div class="bl_meta">
            <p>Amitabh Bachchan</p>
            <h3>{title}</h3>
          </div>
          <div class="bl_timer">
            <p>Starting in</p>
            <h3>
              11<span>h</span> 23<span>m</span> 41<span>s</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDrops;

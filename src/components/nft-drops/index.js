import React from "react";
import { useHistory } from "react-router";
import NFTCounter from "./../nft-counter";
import dayjs from "dayjs";

const NFTDrops = ({
  time,
  label,
  title,
  desc,
  imgUrl,
  bidPrice,
  nftId,
  nftType,
  isEnded,
  isStarted = false,
}) => {
  const erc721 = nftType == "erc721";

  const history = useHistory();

  const handleClick = () => {
    history.push(`/details/${nftId}`);
  };

  return (
    <div className="row mt-5 justify-content-center">
      <div className="col-md-9" role="button" onClick={handleClick}>
        <div
          className="bl_drop_list p-3"
          style={{ backgroundImage: "url(https://picsum.photos/780/750)" }}
        >
          <div className="bl_meta">
            <p>Amitabh Bachchan</p>
            <h3>{title}</h3>
          </div>

          {isStarted && (
            <div className="bl_timer">
              <p>{erc721 ? "Bid Price" : "Buy Price"}</p>
              <h3 className="font-onesevenrem">${bidPrice}</h3>
            </div>
          )}

          <div className="bl_timer" style={isStarted ? { right: 0 } : {}}>
            <p>{label}</p>
            <h3>
              {isEnded ? (
                <>{time && dayjs(time).format("DD. MM. YYYY")}</>
              ) : (
                <NFTCounter time={time} timeClass="font-onesevenrem" />
              )}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDrops;
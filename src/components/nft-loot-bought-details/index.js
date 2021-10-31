import React from "react";
import ReadMoreReact from "read-more-react";
// import { useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";

import BidValue from "../bid-value";
import ToolTip from "../tooltip";
import NFTTimeLeft from "../nft-time-left";
import { ReactComponent as DiscordSvg } from "./../../icons/discord_logo.svg";
import { currencyFormat } from "../../utils/common";

import "./style.scss";

const NFTLootBoughtDetails = ({ nft }) => {
  // const { user } = useSelector((state) => state.user.data);

  return (
    <>
      <div className="creator mt-3">
        Amitabh's Exclusive NFTs
        <ToolTip
          icon={<FaCheckCircle size={16} className="ms-2 check-icon" />}
          content="Verified Artist"
          placement="right"
        />
      </div>
      <div className="nft-title-container">
        <div className="nft-title">{nft.name}</div>

        <ToolTip
          icon={
            <div
              className="discord"
              onClick={() =>
                window.open("https://discord.com/invite/87s8ReJ5FA", "_blank")
              }
            >
              {/* <div className="count">22</div> */}
              <DiscordSvg />
            </div>
          }
          content="View this NFT bid's discord server"
          placement="left"
        />
      </div>
      <p className="text-secondary mt-1 mb-5 nft-desc">
        {nft && <ReadMoreReact min={40} ideal={40} text={nft.description} />}
      </p>

      <div className="bottom-content">
        <div className="d-flex">
          <BidValue
            title={nft.nft_type === "erc721" ? "Bid Price" : "Price"}
            value={
              nft.nft_type === "erc721"
                ? currencyFormat(nft.minimum_bid, "USD")
                : currencyFormat(nft.buy_amount, "USD")
            }
          />
        </div>
        <hr className="custom-divider" />
        <div className="d-flex">
          <NFTTimeLeft
            title="Bought on"
            tooltipText="NFT Bought date"
            time={new Date()}
            isEnded={true}
          />
        </div>
        <hr className="custom-divider" />
        <div className="d-flex">
          <BidValue
            title="You Owned"
            value={
              nft.total_user_buys &&
              `${nft.total_user_buys} / ${nft.total_quantity}`
            }
          />
        </div>
        <hr className="custom-divider" />
      </div>
    </>
  );
};

export default NFTLootBoughtDetails;

import React from "react";
import NFTDrops from "../nft-drops";
import goBtn from "../../images/arrow.svg";
import "./style.scss";

const NFTList = ({ data = [] }) => {
  return (
    <div class="bl_drop_wrapper">
      <div class="container-fluid">
        {data.map((nft) => {
          let label = "",
            time,
            isEnded = false,
            isStarted = false,
            bidBuyValue = 0;

          if (new Date(nft.auction_start_time) > new Date()) {
            label = "Starting in";
            time = nft.auction_start_time;
          } else if (new Date(nft.auction_end_time) > new Date()) {
            label = "Ends in";
            time = nft.auction_end_time;
            isStarted = true;
          } else {
            time = nft.auction_end_time;
            label = "Ended at";
            isEnded = true;
          }

          if (nft.nft_type === "erc721") {
            bidBuyValue = nft.minimum_bid;
          } else {
            bidBuyValue = nft.buy_amount;
          }

          return (
            <NFTDrops
              isStarted={isStarted}
              isEnded={isEnded}
              time={time}
              label={label}
              title={nft.name}
              bidPrice={bidBuyValue}
              desc={nft.description}
              nftId={nft.slug}
              nftType={nft.nft_type}
            />
          );
        })}
      </div>
      <div class="container-fluid mt-5 mb-5">
        <div class="row mt-5 justify-content-center">
          <div class="col-md-9">
            <div class="nbl_newsletter">
              <div class="nbl_newsletter_form">
                <h2>Don't miss out on the featured Drops</h2>
                <form>
                  <input
                    type="text"
                    name="email"
                    placeholder="name@email.com"
                  />
                  <button type="button">
                    <img className="newsletter_btn_icon" src={goBtn} style={{ maxWidth: "80%" }} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTList;

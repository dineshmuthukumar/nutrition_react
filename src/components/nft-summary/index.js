import React from "react";
import { currencyFormat } from "../../utils/common";
import Badge from "./badge";
import "./style.scss";

const NFTSummary = ({ nft, socketData }) => {
  const erc721 = nft.nft_type === "erc721";
  return (
    <div className="bg-white shadow-sm nft-summary">
      <div className="row">
        <div className="d-flex align-items-center justify-content-around">
          <div className="p-4">
            {erc721 ? (
              <Badge
                title="Total Bids"
                value={
                  socketData.totalBid ? socketData.totalBid : nft.total_bids
                }
              />
            ) : (
              <Badge
                title="Total Buys"
                value={
                  socketData.totalBuy ? socketData.totalBuy : nft.total_buys
                }
              />
            )}
          </div>
          <div className="p-4">
            {erc721 ? (
              <Badge
                title="Price"
                value={
                  socketData.price
                    ? currencyFormat(socketData.price, "USD")
                    : nft.minimum_bid && currencyFormat(nft.minimum_bid, "USD")
                }
                // diff="+2000"
                diff={
                  socketData.bidChange ? socketData.bidChange : nft.bid_change
                }
                tooltip="Price increased from last bid"
              />
            ) : (
              <Badge
                title="Price"
                value={
                  socketData.price
                    ? currencyFormat(socketData.price, "USD")
                    : nft.buy_amount && currencyFormat(nft.buy_amount, "USD")
                }
                // diff="-2000"
                tooltip="Buy price"
              />
            )}
          </div>
          <div className="p-4">
            <Badge
              title="Total Views"
              value={
                socketData.totalViews ? socketData.totalViews : nft.page_views
              }
            />
          </div>
          <div className="p-4">
            <Badge
              title="Total Favourites"
              value={
                socketData.totalFavourites
                  ? socketData.totalFavourites
                  : nft.total_favourites
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTSummary;

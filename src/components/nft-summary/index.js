import React from "react";
import { abbreviateNumber, currencyFormat, percDiff } from "../../utils/common";
import Badge from "./badge";
import "./style.scss";

const NFTSummary = ({
  nft,
  // socketData
  totalBid,
  bidChange,
  totalBuy,
  price,
  totalViews,
  totalFavourites,
}) => {
  const erc721 = nft.nft_type === "erc721";
  return (
    <div className="bg-white shadow-sm nft-summary">
      <div className="row">
        <div className="d-flex align-items-center justify-content-around flex-wrap flex-row point-box">
          
          <div className="p-4 point-list">
            {erc721 ? (
              <Badge
                title="Price"
                // value={
                //   price
                //     ? currencyFormat(price, "USD")
                //     : nft.minimum_bid && currencyFormat(nft.minimum_bid, "USD")
                // }
                value={(() => {
                  if (price && price >= 1000) {
                    return `$${abbreviateNumber(price)}`;
                  } else if (price && price < 1000) {
                    return currencyFormat(price, "USD");
                  } else if (nft.minimum_bid && nft.minimum_bid >= 1000) {
                    return `$${abbreviateNumber(nft.minimum_bid)}`;
                  } else {
                    return currencyFormat(nft.minimum_bid, "USD");
                  }
                })()}
                // diff="+2000"
                diff={bidChange ? bidChange : nft.bid_change}
                tooltip="Price increased from last bid"
              />
            ) : (
              <Badge
                title="Price"
                value={
                  price
                    ? currencyFormat(price, "USD")
                    : nft.buy_amount && currencyFormat(nft.buy_amount, "USD")
                }
                // diff="-2000"
                tooltip="Buy price"
              />
            )}
          </div>
          {erc721 && (
            <div className="p-4 point-list">
              <Badge
                title="Base Price"
                value={(() => {
                  if (nft.starting_bid >= 1000) {
                    return `$${abbreviateNumber(nft.starting_bid)}`;
                  } else {
                    return currencyFormat(nft.starting_bid, "USD");
                  }
                })()}
                // diff="+2000"
                // diff={bidChange ? bidChange : nft.bid_change}
                diff={
                  price
                    ? percDiff(nft.starting_bid, price)
                    : percDiff(nft.starting_bid, nft.minimum_bid)
                }
                tooltip="Base Price"
              />
            </div>
          )}
          <div className="p-4 point-list">
            {erc721 ? (
              <Badge
                title="Bids"
                value={totalBid ? totalBid : nft.total_bids}
              />
            ) : (
              <Badge
                title="Buys"
                value={totalBuy ? totalBuy : nft.total_buys}
              />
            )}
          </div>
          <div className="p-4 point-list">
            <Badge
              title="Views"
              value={totalViews ? totalViews : nft.page_views}
            />
          </div>
          <div className="p-4 point-list">
            <Badge
              title="Favourites"
              value={totalFavourites ? totalFavourites : nft.total_favourites}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTSummary;

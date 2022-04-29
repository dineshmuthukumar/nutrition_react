import React from "react";
import _ from "lodash";
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
  const orderDetails = _.get(nft, "order_details", {});
  return (
    <div className="bg-dark">
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex justify-content-around flex-wrap flex-row point-box">
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
                    } else if (
                      orderDetails.minimum_bid &&
                      orderDetails.minimum_bid >= 1000
                    ) {
                      return `$${abbreviateNumber(orderDetails.minimum_bid)}`;
                    } else {
                      return currencyFormat(orderDetails.minimum_bid, "USD");
                    }
                  })()}
                  // diff="+2000"
                  diff={
                    bidChange ? bidChange : orderDetails.bid_change.toFixed(2)
                  }
                  tooltip="Price increased from last bid"
                />
              ) : (
                <Badge
                  title="Price"
                  value={
                    price
                      ? currencyFormat(price, "USD")
                      : orderDetails.buy_amount &&
                        currencyFormat(orderDetails.buy_amount, "USD")
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
                    if (orderDetails.starting_bid >= 1000) {
                      return `$${abbreviateNumber(orderDetails.starting_bid)}`;
                    } else {
                      return currencyFormat(orderDetails.starting_bid, "USD");
                    }
                  })()}
                  // diff="+2000"
                  // diff={bidChange ? bidChange : orderDetails.bid_change}
                  diff={
                    price
                      ? percDiff(orderDetails.starting_bid, price)
                      : percDiff(
                          orderDetails.starting_bid,
                          orderDetails.minimum_bid
                        )
                  }
                  tooltip="Initial Seller-Listed Price"
                />
              </div>
            )}
            <div className="p-4 point-list">
              {erc721 ? (
                <Badge
                  title="Bids"
                  value={totalBid ? totalBid : orderDetails.total_bids}
                />
              ) : (
                <Badge
                  title="Buys"
                  value={totalBuy ? totalBuy : orderDetails.total_buys}
                />
              )}
            </div>
            {/* <div className="p-4 point-list">
            <Badge
              title="Views"
              value={totalViews ? totalViews : orderDetails.page_views}
            />
          </div> */}
            <div className="p-4 point-list">
              <Badge
                title="Favourites"
                value={totalFavourites ? totalFavourites : nft.total_favourites}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTSummary;

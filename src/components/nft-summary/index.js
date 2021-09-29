import React from "react";
import { currencyFormat } from "../../utils/common";
import Badge from "./badge";
import "./style.scss";

const NFTSummary = ({ nft, socketData }) => {
  const erc721 = nft.nft_type === 'erc721';
  return (
    <div className="bg-white shadow-sm nft-summary">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="p-4">
            {erc721 ?
              <Badge title="Total Bids" value={socketData.totalBid ? socketData.totalBid : 2000} />
              : <Badge title="Total Buys" value={socketData.totalBuy ? socketData.totalBuy : 2000} />
            }
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="p-4">
            {erc721 ?
              (<Badge
                title="Price"
                value={socketData.price ? currencyFormat(socketData.price, 'USD') : nft.minimum_bid && currencyFormat(nft.minimum_bid, 'USD')}
                diff="-2000"
                tooltip="Price increased from last bid"
              />)
              :
              (<Badge
                title="Price"
                value={socketData.price ? currencyFormat(socketData.price, 'USD') : nft.buy_amount && currencyFormat(nft.buy_amount, 'USD')}
                // diff="-2000"
                tooltip="Buy price"
              />)
            }

          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="p-4">
            <Badge title="Total Views" value="23457" />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="p-4">
            <Badge title="Total Favourites" value="76543" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTSummary;

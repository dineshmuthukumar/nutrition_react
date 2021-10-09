import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import { useParams } from "react-router-dom";
import { nftDetailApi } from "../api/methods";
import BidAuction from "../components/bid-auction";
import BidHistory from "../components/bid-history";
import BidWinner from "../components/bid-winner";
import ChainAttributes from "../components/chain-attributes";
import Header from "../components/header";
import NFTArtist from "../components/nft-artist";
import NFTBaseDetails from "../components/nft-basic-details";
import NFTMedia from "../components/nft-media";
import NFTMore from "../components/nft-more";
import NFTProperties from "../components/nft-properties";
import NFTSectionTitle from "../components/nft-section-title";
import NFTTags from "../components/nft-tags";
import toaster from "../utils/toaster";
import NFTSummary from "./../components/nft-summary";
import SubHeader from "./../components/sub-header";
import {
  bidDetail,
  buyDetail,
  pageView,
  totalFav,
} from "../api/actioncable-methods";

const Details = () => {
  const { params: matchParams } = useRouteMatch();

  const data = {
    soldFor: 2000.99,
    soldOn: "Sep 16, 21 11:11pm",
    lastBid: 1976.0,
    lastBidDate: "Sep 16, 21 11:09pm",
  };

  const params = useParams();
  const [small, setSmall] = useState(false);
  const [nft, setNft] = useState({});
  const [socketData, setSocketData] = useState({
    totalBid: 0,
    bidChange: 0,
    totalBuy: 0,
    price: 0,
    totalViews: 0,
    totalFavourites: 0,
    availableQty: 0,
  });

  useEffect(() => {
    buyDetail((data) => {
      setSocketData({
        ...socketData,
        availableQty: data.quantity,
        totalBuy: data.total_buys,
      });
    });
    bidDetail((data) => {
      setSocketData({
        ...socketData,
        price: data.minimum_bid,
        bidChange: data.bid_change,
        totalBid: data.total_bids,
      });
    });
    pageView((data) => {
      setSocketData({ ...socketData, totalViews: data.page_views });
    });

    totalFav((data) => {
      setSocketData({ ...socketData, totalFavourites: data.total_favourites });
    });

    nftDetail(params.id);
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 800) {
          updateSubHeader(true);
          localStorage.setItem("sub-header", "true");
        } else {
          updateSubHeader(false);
          localStorage.setItem("sub-header", "false");
        }
      });
    }
  }, []);

  const updateSubHeader = (input) => {
    if (input) {
      if (localStorage.getItem("sub-header") === "false") {
        setSmall(input);
      }
    } else {
      if (localStorage.getItem("sub-header") === "true") {
        setSmall(input);
      }
    }
  };

  const nftDetail = async (id) => {
    try {
      let response = await nftDetailApi({ nft_id: id });
      setNft(response.data.data.nft);
    } catch (err) {
      console.log(err);
      toaster(500, "Something went wrong");
    }
  };

  return (
    <>
      {small ? <SubHeader nft={nft} /> : <Header />}
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-12 col-lg-7 align-self-center">
            <NFTMedia
              title={nft?.name}
              slug={nft?.slug}
              isFav={nft?.is_user_fav}
            />
          </div>
          <div className="col-12 col-lg-5">
            <NFTBaseDetails
              nft={nft}
              isPlaceBid={matchParams.placebid}
              socketData={socketData}
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <NFTSummary nft={nft} socketData={socketData} />
          </div>
        </div>
        <NFTSectionTitle title="Bid Details" />
        <div className="row mt-5">
          <div className="col-12 col-lg-6 order-lg-2 mb-4">
            {/* <BidHistory input={[1, 2, 3, 4, 5, 6, 7, 8, 5, 5]} /> */}
            {/* <BidAuction status="end" bottomTitle="Auction starting in" /> */}
            {/* <BidAuction
              status="end"
              bottomTitle="Limited Edition"
              bottomValue="1000/1000"
            /> */}
            <BidWinner data={data} />
          </div>
          <div className="col-12 col-lg-6 order-lg-1">
            <NFTProperties />
            <div className="mt-4"></div>
            <ChainAttributes />
            <div className="mt-4"></div>
            <NFTTags tags={nft.tag_names} />
          </div>
        </div>
        <NFTSectionTitle title="Artist" />
        <div className="mt-5">
          <NFTArtist />
        </div>
        <div className="mt-5">
          <NFTMore />
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default Details;

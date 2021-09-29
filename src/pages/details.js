import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import { useParams } from "react-router-dom";
import { nftDetailApi } from "../api/methods";
// import { socketJoinCommonRoom, socketNewMessage, socketStatus, socketTotalBid } from "../api/socket-methods";
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
    totalBuy: 0,
    price: 0,
    totalViews: 23457,
    totalFavourites: 76543,
  });

  useEffect(() => {
    // socketJoinCommonRoom('room_1');
    // socketStatus((data) => console.log(data));
    // socketNewMessage((data) => console.log(data));
    // socketTotalBid((data) => setTotalBid(data.total_bid));

    nftDetail(params.id);
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 800)
      );
    }
    setSocketData({ ...socketData, totalBid: 11 });
  }, []);

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
            <NFTMedia title={nft?.name} />
          </div>
          <div className="col-12 col-lg-5">
            <NFTBaseDetails nft={nft} isPlaceBid={matchParams.placebid} />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <NFTSummary nft={nft} socketData={socketData} />
          </div>
        </div>
        <NFTSectionTitle title="Bid Details" />
        <div className="row mt-5 align-items-center">
          <div className="col-12 col-lg-6 order-lg-2">
            <BidHistory input={[1, 2, 3, 4, 5, 6, 7, 8, 5, 5]} />
            {/* <BidAuction status="end" bottomTitle="Auction starting in" /> */}
            {/* <BidAuction
              status="end"
              bottomTitle="Limited Edition"
              bottomValue="1000/1000"
            /> */}
            {/* <BidWinner data={data} /> */}
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

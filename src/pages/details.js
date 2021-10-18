import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import { useParams } from "react-router-dom";
import {
  nftBidHistory,
  nftBidWinner,
  nftBuyHistory,
  nftDetailApi,
  nftMoreApi,
} from "../api/methods";
import BidAuction from "../components/bid-auction";
import BidHistory from "../components/bid-history";
import BuyHistory from "../components/buy-history/index";
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
import { NFTLoader } from "../components/nft-basic-details/content-loader";
import {
  bidDetail,
  buyDetail,
  pageView,
  totalFav,
  winnerDetail,
} from "../api/actioncable-methods";

const Details = () => {
  const { params: matchParams } = useRouteMatch();

  const { slug } = useParams();
  const [small, setSmall] = useState(false);
  const [nft, setNft] = useState({});
  const [auctionEndTime, setAuctionEndTime] = useState("");
  const [nftMoreList, setNftMoreList] = useState([]);
  const [buyHistory, setBuyHistory] = useState([]);
  const [bidHistory, setBidHistory] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [bidWinner, setBidWinner] = useState(null);
  const [erc721, setErc721] = useState(false);
  const [isAuctionStarted, setIsAuctionStarted] = useState(false);
  const [isAuctionEnded, setIsAuctionEnded] = useState(false);
  const [soldOut, setSoldOut] = useState(false);
  const [loader, setLoader] = useState(false);
  const [socketData, setSocketData] = useState({
    totalBid: 0,
    bidChange: 0,
    totalBuy: 0,
    price: 0,
    totalViews: 0,
    totalFavourites: 0,
    availableQty: null,
  });

  useEffect(() => {
    buyDetail({ slug }, (data) => {
      setSocketData({
        ...socketData,
        availableQty: data.quantity,
        totalBuy: data.total_buys,
      });
      if (data.history) {
        setBuyHistory((buyHistory) => [data.history, ...buyHistory]);
      }
      if (data.quantity === 0) {
        setSoldOut(true);
      }
    });
    bidDetail({ slug }, (data) => {
      setSocketData({
        ...socketData,
        price: data.minimum_bid,
        bidChange: data.bid_change,
        totalBid: data.total_bids,
      });
      if (data.history) {
        setBidHistory((bidHistory) => [data.history, ...bidHistory]);
      }
      if (data.auction_end_time) {
        setAuctionEndTime(data.auction_end_time);
      }
    });
    pageView({ slug }, (data) => {
      setSocketData({ ...socketData, totalViews: data.page_views });
    });

    totalFav({ slug }, (data) => {
      setSocketData({ ...socketData, totalFavourites: data.total_favourites });
    });

    winnerDetail({ slug }, (data) => {
      setBidWinner(data.winner);
    });

    nftDetail(slug);
    nftMore();
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

  const nftDetail = async (slug) => {
    try {
      setLoader(true);
      let response = await nftDetailApi({ nft_slug: slug });
      const NFT = response.data.data.nft;
      setAuctionEndTime(NFT.auction_end_time);
      setIsAuctionStarted(
        new Date(NFT.time).getTime() >=
          new Date(NFT.auction_start_time).getTime()
      );
      setIsAuctionEnded(
        new Date(NFT.time).getTime() > new Date(NFT.auction_end_time).getTime()
      );
      setErc721(NFT.nft_type === "erc721");
      if (NFT.nft_type === "erc721") {
        let history = await nftBidHistory({ nft_slug: slug, page: 1 });
        let winner = await nftBidWinner({ nft_slug: slug });
        setBidHistory(history.data.data.histories);
        setTotalCount(history.data.data.total_count);
        setBidWinner(winner.data.data.winner);
      } else {
        if (NFT.quantity === 0) {
          setSoldOut(true);
        }
        let history = await nftBuyHistory({ nft_slug: slug, page: 1 });
        setBuyHistory(history.data.data.histories);
        setTotalCount(history.data.data.total_count);
      }
      setNft(response.data.data.nft);
      setLoader(false);
    } catch (err) {
      // setLoader(false);
      console.log(err);
      toaster(500, "Something went wrong");
    }
  };

  const nftMore = async () => {
    try {
      let response = await nftMoreApi({ page: 1 });
      setNftMoreList(response.data.data.nfts);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAuctionStartTimer = () => {
    setIsAuctionStarted(true);
  };
  const handleAuctionEndTimer = () => {
    setIsAuctionEnded(true);
  };

  return (
    <>
      {small ? (
        <SubHeader
          nft={nft}
          isAuctionStarted={isAuctionStarted}
          isAuctionEnded={isAuctionEnded}
          soldOut={soldOut}
        />
      ) : (
        <Header />
      )}
      {loader ? (
        <NFTLoader />
      ) : (
        <div className="container-fluid">
          <div className="bid_section_wrapper">
            <div className="row fit-to-height">
              <div className="col-12 col-lg-7">
                <NFTMedia
                  image={nft?.image_url}
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
                  isAuctionStarted={isAuctionStarted}
                  isAuctionEnded={isAuctionEnded}
                  soldOut={soldOut}
                  auctionEndTime={auctionEndTime}
                  handleAuctionStartTimer={handleAuctionStartTimer}
                  handleAuctionEndTimer={handleAuctionEndTimer}
                  winner={bidWinner}
                />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <NFTSummary nft={nft} socketData={socketData} />
            </div>
          </div>
          <NFTSectionTitle title="NFT Details" />
          <div className="row mt-5 align-items-center">
            <div className="col-12 col-lg-6 order-lg-2 mb-4">
              {(() => {
                if (erc721) {
                  if (isAuctionStarted && !isAuctionEnded) {
                    return (
                      <BidHistory
                        nft={nft}
                        histories={bidHistory}
                        isAuctionEnded={isAuctionEnded}
                        totalCount={totalCount}
                      />
                    );
                  } else if (isAuctionEnded) {
                    if (bidWinner) {
                      return (
                        <BidWinner winner={bidWinner} histories={bidHistory} />
                      );
                    } else {
                      return (
                        <BidHistory
                          nft={nft}
                          histories={bidHistory}
                          isAuctionEnded={isAuctionEnded}
                          totalCount={totalCount}
                        />
                      );
                    }
                  } else {
                    return (
                      <BidAuction
                        status="start"
                        bottomTitle="Auction starting in"
                        time={nft.auction_start_time}
                      />
                    );
                  }
                } else {
                  if (isAuctionStarted && !isAuctionEnded) {
                    return (
                      <BuyHistory
                        nft={nft}
                        histories={buyHistory}
                        isAuctionEnded={isAuctionEnded}
                        totalCount={totalCount}
                      />
                    );
                  } else if (isAuctionEnded) {
                    return (
                      <BidAuction
                        status="end"
                        bottomTitle={
                          nft.total_quantity
                            ? "Limited Edition"
                            : "Unlimited Edition"
                        }
                        bottomValue={(() => {
                          if (nft.total_quantity) {
                            return socketData.availableQty >= 0 &&
                              socketData.availableQty != null
                              ? `${socketData.availableQty} / ${nft.total_quantity}`
                              : `${nft.quantity} / ${nft.total_quantity}`;
                          } else {
                            return socketData.totalBuy
                              ? `${socketData.totalBuy} / unlimited`
                              : `${nft.total_buys}  / unlimited`;
                          }
                        })()}
                      />
                    );
                  } else {
                    return (
                      <BidAuction
                        status="start"
                        bottomTitle="Auction starting in"
                        time={nft.auction_start_time}
                      />
                    );
                  }
                }
              })()}
              {/* <BidWinner data={data} /> */}
            </div>
            <div className="col-12 col-lg-6 order-lg-1">
              <NFTProperties />
              <div className="mt-5"></div>
              <ChainAttributes />
              <div className="mt-5"></div>
              <NFTTags tags={nft.tag_names} />
            </div>
          </div>
          <NFTSectionTitle title="Artist" />
          <div className="mt-5">
            <NFTArtist />
          </div>
          <div className="mt-5">
            <NFTMore nftList={nftMoreList} />
          </div>
          <br />
          <br />
        </div>
      )}
    </>
  );
};

export default Details;

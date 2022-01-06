import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import _ from "lodash";

import {
  nftBidHistory,
  nftBidWinner,
  nftBuyHistory,
  nftDetailApi,
  nftMoreApi,
  orderBidHistory,
  nftOwnerApi,
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
import NFTSummary from "../components/nft-summary";
import SubHeader from "../components/sub-header";
import { NFTLoader } from "../components/nft-basic-details/content-loader";
import {
  bidDetail,
  buyDetail,
  pageView,
  totalFav,
  userBidDetail,
  userBuyDetail,
  winnerDetail,
} from "../api/actioncable-methods";
import OwnerList from "../components/owner-list";
import Footer from "../components/footer/index";
import NFTOrderHistory from "../components/nft-order-details/index";

const Details = () => {
  const history = useHistory();
  const { slug, orderSlug } = useParams();
  const [small, setSmall] = useState(false);
  const [nft, setNft] = useState({});
  const [auctionEndTime, setAuctionEndTime] = useState("");
  const [nftMoreList, setNftMoreList] = useState([]);
  const [buyHistory, setBuyHistory] = useState([]);
  const [bidHistory, setBidHistory] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [bidWinner, setBidWinner] = useState(null);
  const [nftOwner, setNFTOwner] = useState([]);
  const [erc721, setErc721] = useState(false);
  const [isAuctionStarted, setIsAuctionStarted] = useState(false);
  const [isAuctionEnded, setIsAuctionEnded] = useState(false);
  const [soldOut, setSoldOut] = useState(false);
  const [loader, setLoader] = useState(true);
  const [placeBidPop, setPlaceBidPop] = useState(false);
  const [placeBuyPop, setPlaceBuyPop] = useState(false);
  const [putOnSalePop, setPutOnSalePop] = useState(false);
  const [cancelTheSalePop, setCancelTheSalePop] = useState(false);

  const [isOrderOnSale, setIsOrderOnSale] = useState(false);
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);
  const [isOrderCancelled, setIsOrderCancelled] = useState(false);

  // Socket State
  const [totalBid, setTotalBid] = useState(0);
  const [bidChange, setBidChange] = useState(0);
  const [totalBuy, setTotalBuy] = useState(0);
  const [price, setPrice] = useState(0);
  const [totalViews, setTotalViews] = useState(0);
  const [totalFavourites, setTotalFavourites] = useState(0);
  const [availableQty, setAvailableQty] = useState(null);
  const [userTotalBuys, setUserTotalBuys] = useState(0);
  const [userOutBid, setUserOutBid] = useState(false);
  const [userLastBid, setUserLastBid] = useState(0);

  const { user } = useSelector((state) => state.user.data);

  const isOwner = _.has(nft, "owner_details");
  const ownerOrdersList = _.get(nft, "owner_details.orders", []);

  const inputRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });

    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollHandler = () => {
    const position = inputRef.current?.getBoundingClientRect();
    if (position?.top <= 0) {
      updateSubHeader(true);
      localStorage.setItem("sub-header", "true");
    } else {
      updateSubHeader(false);
      localStorage.setItem("sub-header", "false");
    }
  };

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    buyDetail(orderSlug, (data) => {
      console.log(data);
      setAvailableQty(data.quantity);
      setTotalBuy(data.total_buys);
      if (data.history) {
        setBuyHistory((buyHistory) => [data.history, ...buyHistory]);
      }
      if (data.quantity === 0) {
        setSoldOut(true);
      }
    });
    bidDetail(orderSlug, (data) => {
      setTotalBid(data.total_bids);
      setBidChange(data.bid_change);
      setPrice(data.minimum_bid);
      if (data.history) {
        setBidHistory((bidHistory) => [data.history, ...bidHistory]);
      }
      // if (data.auction_end_time) {
      //   setAuctionEndTime(data.auction_end_time);
      // }
    });
    pageView(orderSlug, (data) => {
      setTotalViews(data.page_views);
    });

    totalFav(orderSlug, (data) => {
      setTotalFavourites(data.total_favourites);
    });

    // winnerDetail(slug, (data) => {
    //   setBidWinner(data.winner);
    // });

    nftDetail(slug, orderSlug);
    // nftMore();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user) {
      if (erc721) {
        userBidDetail(orderSlug, user.slug, (data) => {
          setUserLastBid(data.user_bid);
          setUserOutBid(data.outbid);
        });
      } else {
        userBuyDetail(orderSlug, user.slug, (data) => {
          setUserTotalBuys(data.user_buys);
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [erc721]);

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

  const nftDetail = async (slug, orderSlug) => {
    try {
      setLoader(true);
      let response = await nftDetailApi({
        nft_slug: slug,
        order_slug: orderSlug,
      });
      const NFT = response.data.data.nft;

      if (NFT?.order_details) {
        setIsOrderOnSale(NFT.order_details?.status === "onsale");
        setIsOrderSuccess(NFT.order_details?.status === "success");
        setIsOrderCancelled(NFT.order_details?.status === "cancelled");
      }

      if (NFT?.order_details?.status === "cancelled") {
        history.push("/");
      }

      setAuctionEndTime(NFT.auction_end_time);
      setIsAuctionStarted(
        new Date(NFT.time).getTime() >=
          new Date(NFT.auction_start_time).getTime()
      );
      setIsAuctionEnded(
        new Date(NFT.time).getTime() > new Date(NFT.auction_end_time).getTime()
      );
      setErc721(NFT.nft_type === "erc721");
      if (NFT.nft_type === "erc721" && orderSlug) {
        let history = await orderBidHistory({ order_slug: orderSlug, page: 1 });
        setBidHistory(history.data.data.histories);
        setTotalCount(history.data.data.total_count);
      } else {
        if (NFT?.order_details?.available_quantity === 0) {
          setSoldOut(true);
        }
        // let history = await nftBuyHistory({ nft_slug: slug, page: 1 });
        // setBuyHistory(history.data.data.histories);
        // setTotalCount(history.data.data.total_count);
      }
      let owners = await nftOwnerApi({ nft_slug: slug });
      setNFTOwner(owners.data.data.owners);

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
      <Header />
      {loader ? (
        <NFTLoader />
      ) : (
        <div className="container-fluid">
          <div className="bid_section_wrapper">
            <div className="row fit-to-height">
              <div className="col-12 col-lg-7">
                <NFTMedia
                  nft={nft}
                  title={nft?.name}
                  slug={nft?.slug}
                  isFav={nft?.is_user_fav}
                />
              </div>
              <div className="col-12 col-lg-5">
                <NFTBaseDetails
                  nft={nft}
                  placeBidPop={placeBidPop}
                  setPlaceBidPop={setPlaceBidPop}
                  placeBuyPop={placeBuyPop}
                  setPlaceBuyPop={setPlaceBuyPop}
                  putOnSalePop={putOnSalePop}
                  setPutOnSalePop={setPutOnSalePop}
                  cancelTheSalePop={cancelTheSalePop}
                  setCancelTheSalePop={setCancelTheSalePop}
                  //Socket states start
                  totalBid={totalBid}
                  bidChange={bidChange}
                  totalBuy={totalBuy}
                  price={price}
                  totalViews={totalViews}
                  totalFavourites={totalFavourites}
                  availableQty={availableQty}
                  userTotalBuys={userTotalBuys}
                  userOutBid={userOutBid}
                  userLastBid={userLastBid}
                  //Socket states end

                  isAuctionStarted={isAuctionStarted}
                  isAuctionEnded={isAuctionEnded}
                  soldOut={soldOut}
                  auctionEndTime={auctionEndTime}
                  handleAuctionStartTimer={handleAuctionStartTimer}
                  handleAuctionEndTimer={handleAuctionEndTimer}
                  winner={bidWinner}
                  owners={nftOwner}
                  //Order
                  isOrderOnSale={isOrderOnSale}
                  isOrderSuccess={isOrderSuccess}
                  isOrderCancelled={isOrderCancelled}
                  orderSlug={orderSlug}
                  latestBid={bidHistory.length > 0 ? bidHistory[0] : {}}
                />
              </div>
            </div>
          </div>
          {orderSlug && (
            <div className="row mt-5">
              <div className="col-12" ref={inputRef}>
                <NFTSummary
                  nft={nft}
                  totalBid={totalBid}
                  bidChange={bidChange}
                  totalBuy={totalBuy}
                  price={price}
                  totalViews={totalViews}
                  totalFavourites={totalFavourites}
                />
              </div>
            </div>
          )}

          {isOwner && (
            <>
              <NFTSectionTitle title="Order Details" />
              <div className="row mt-5">
                <NFTOrderHistory orderList={ownerOrdersList} />
              </div>
            </>
          )}

          <NFTSectionTitle title="NFT Details" />
          <div className="row mt-5">
            <div className="col-12 col-lg-6 order-lg-2 mb-4">
              {(() => {
                if (erc721) {
                  return (
                    <BidHistory
                      nft={nft}
                      orderSlug={orderSlug}
                      isOwner={isOwner}
                      nftOwner={nftOwner[0]}
                      histories={bidHistory}
                      isAuctionEnded={isAuctionEnded}
                      totalCount={totalCount}
                      isOrderOnSale={isOrderOnSale}
                      isOrderSuccess={isOrderSuccess}
                      isOrderCancelled={isOrderCancelled}
                    />
                  );
                } else {
                  return <OwnerList nft={nft} nftOwners={nftOwner} />;
                }
              })()}
            </div>
            <div className="col-12 col-lg-6 order-lg-1">
              {(() => {
                if (nft.properties && typeof nft.properties === "string") {
                  let propertiesData = JSON.parse(nft.properties);
                  if (
                    propertiesData &&
                    Object.keys(propertiesData).length > 0
                  ) {
                    return <NFTProperties properties={propertiesData} />;
                  }
                } else {
                  if (
                    nft.properties &&
                    Object.keys(nft.properties).length > 0
                  ) {
                    return <NFTProperties properties={nft.properties} />;
                  }
                }
              })()}

              <div className="mt-5"></div>
              <ChainAttributes chains={nft.chain_attributes} />
              <div className="mt-5"></div>
              <NFTTags tags={nft.tag_names} />
            </div>
          </div>
          <NFTSectionTitle title="Artist" />
          <div className="mt-5">
            <NFTArtist />
          </div>
          {nftMoreList.length > 0 && (
            <div className="mt-5">
              <NFTMore nftList={nftMoreList} />
            </div>
          )}
          <br />
          <br />
        </div>
      )}
      <Footer />
    </>
  );
};

export default Details;

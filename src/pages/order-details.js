import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//import { useHistory } from "react-router";
import _ from "lodash";

import {
  nftDetailApi,
  orderBidHistory,
  nftOwnerApi,
  nftTransactionHistory,
  orderPurchaseDetailsApi,
  nftBidWinner,
  nftUpgradeHistory,
} from "../api/methods";
import BidHistory from "../components/bid-history";
import ChainAttributes from "../components/chain-attributes";
import Header from "../components/header";
import NFTArtist from "../components/nft-artist";
import NFTMedia from "../components/nft-media";
import NFTProperties from "../components/nft-properties";
import NFTSectionTitle from "../components/nft-section-title";
import NFTTags from "../components/nft-tags";
import toaster from "../utils/toaster";
import { NFTLoader } from "../components/nft-basic-details/content-loader";
import {
  acceptBid,
  bidDetail,
  buyDetail,
  cancelSaleDetail,
  orderPurchaseDetails,
  outDatedBid,
  ownerDetails,
  pageView,
  totalFav,
  userBidDetail,
  userBuyDetail,
} from "../api/actioncable-methods";
import { artistApi } from "../api/base-methods";
import { get_cart_list_thunk } from "../redux/thunk/user_cart_thunk";
import OwnerList from "../components/owner-list";
import Footer from "../components/footer/index";
import NFTOrderSummary from "../components/nft-order-summary";
import NFTOrderBaseDetails from "../components/nft-order-basic-details";
import NFTPurchaseDetails from "../components/nft-purchase-details/index";
import AdditionalPerks from "../components/additional-perks/index";
import BidWinner from "../components/bid-winner/index";

import NFTPlayerStats from "../components/nft-player-stats";

const OrderDetails = ({ CurrentOrderSlug, details = false }) => {
  //const history = useHistory();
  const dispatch = useDispatch();
  const [bidExpiry, setBidExpiry] = useState();
  const [isBidder, setIsBidder] = useState(false);
  const { slug } = useParams();
  let { orderSlug } = useParams();

  orderSlug = details ? CurrentOrderSlug : orderSlug;

  const [nft, setNft] = useState({});
  const [bidHistory, setBidHistory] = useState([]);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [bidWinner, setBidWinner] = useState(null);
  const [nftOwner, setNFTOwner] = useState([]);
  const [erc721, setErc721] = useState(false);
  const [soldOut, setSoldOut] = useState(false);
  const [transferringNFT, setTransferringNFT] = useState(false);
  const [loader, setLoader] = useState(true);
  const [ownerLoader, setOwnerLoader] = useState(true);
  const [transactionLoader, setTransactionLoader] = useState(false);
  const [transactionHasNext, setTransactionHasNext] = useState(false);
  const [ownerCount, setOwnerCount] = useState(0);
  const [placeBidPop, setPlaceBidPop] = useState(false);
  const [placeBuyPop, setPlaceBuyPop] = useState(false);
  const [putOnSalePop, setPutOnSalePop] = useState(false);
  const [cancelTheSalePop, setCancelTheSalePop] = useState(false);

  const [isOrderOnSale, setIsOrderOnSale] = useState(false);
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);
  const [isOrderCancelled, setIsOrderCancelled] = useState(false);
  const [purchaseList, setPurchaseList] = useState([]);

  //NFT Upgrade Details

  const [upgradeHistory, setUpgradeHistory] = useState([]);
  const [upgradeLoader, setUpgradeLoader] = useState(false);
  const [upgradeHasNext, setUpgradeHasNext] = useState(false);

  // Timed Auction
  const [auctionEndTime, setAuctionEndTime] = useState("");
  const [isAuctionStarted, setIsAuctionStarted] = useState(false);
  const [isAuctionEnded, setIsAuctionEnded] = useState(false);
  const [winnerBanner, setWinnerBanner] = useState(false);

  // Socket State
  const [totalBid, setTotalBid] = useState(0);
  const [bidChange, setBidChange] = useState(0);
  const [totalBuy, setTotalBuy] = useState(0);
  const [price, setPrice] = useState(0);
  const [totalViews, setTotalViews] = useState(0);
  const [totalFavourites, setTotalFavourites] = useState(0);
  const [availableQty, setAvailableQty] = useState(null);
  const [totalQty, setTotalQty] = useState(null);
  const [userTotalBuys, setUserTotalBuys] = useState(0);
  const [userOutBid, setUserOutBid] = useState(false);
  const [userLastBid, setUserLastBid] = useState(0);
  const [bidOutDated, setBidOutDated] = useState(false);
  const [bidExpired, setBidExpired] = useState(false);
  const [artist, setArtist] = useState({});

  const { user } = useSelector((state) => state.user.data);

  const isOwner = _.get(nft, "order_details.owned", false);
  const orderDetails = _.get(nft, "order_details", {});

  useEffect(() => {
    // document.body.scrollTop = document.documentElement.scrollTop = 0;

    buyDetail(slug, orderSlug, (data) => {
      purchaseDetails();
      setAvailableQty(data.available_quantity);
      setTotalBuy(data.total_buys);
      // if (data.purchase_details) {
      //   setPurchaseList((purchaseList) => [
      //     data.purchase_details,
      //     ...purchaseList,
      //   ]);
      // }
      if (data.available_quantity === 0) {
        setTransferringNFT(true);
      }
      if (data.order_completed) {
        setSoldOut(true);
        dispatch(get_cart_list_thunk());
      }
    });
    bidDetail(orderSlug, (data) => {
      setTotalBid(data.total_bids);
      setBidChange(data.bid_change);
      setPrice(data.minimum_bid);
      if (data.history) {
        setBidHistory((bidHistory) => [data.history, ...bidHistory]);
      }
      if (data.auction_end_time) {
        setAuctionEndTime(data.auction_end_time);
      }
      setBidOutDated(false);
      setBidExpired(false);
    });
    pageView(orderSlug, (data) => {
      setTotalViews(data.page_views);
    });

    totalFav(slug, (data) => {
      setTotalFavourites(data.total_favourites);
    });

    nftDetail(slug, orderSlug);
    nftOwners();
    nftTransaction();
    purchaseDetails();
    orderBidWinner();
    nftUpgradeDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user) {
      userBidDetail(orderSlug, user.slug, (data) => {
        setUserLastBid(data.user_bid);
        setUserOutBid(data.outbid);
      });
      userBuyDetail(orderSlug, user.slug, (data) => {
        setUserTotalBuys(data.user_buys);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    cancelSaleDetail(slug, orderSlug, (data) => {
      setTotalQty(data.total_quantity);
      setAvailableQty(data.available_quantity);
      if (data.status === "cancelled") {
        setIsOrderCancelled(true);
        setIsOrderOnSale(false);
      }
      if (data.available_quantity === 0 && data.total_quantity > 0) {
        setTransferringNFT(true);
      }
    });

    acceptBid(slug, orderSlug, (data) => {
      purchaseDetails();
      setAvailableQty(data.available_quantity);

      if (data.available_quantity === 0) {
        setTransferringNFT(true);
      }
      if (data.order_completed) {
        setSoldOut(true);
        setBidWinner(data.winner_details);
        setWinnerBanner(true);
        dispatch(get_cart_list_thunk());
      }
    });

    orderPurchaseDetails(slug, orderSlug, (data) => {
      purchaseDetails();
      setAvailableQty(data.available_quantity);
      if (data.status === "onsale") {
        setIsOrderOnSale(true);
      }
      if (data.available_quantity === 0) {
        setTransferringNFT(true);
      } else {
        setTransferringNFT(false);
      }
      if (data.order_completed) {
        setSoldOut(true);
        orderBidWinner();
        dispatch(get_cart_list_thunk());
      }
    });

    outDatedBid(slug, orderSlug, (data) => {
      setBidOutDated(true);
      setPrice(data.minimum_bid);
      if (data.history) {
        bidHistories();
      }
    });

    ownerDetails(slug, (data) => {
      nftOwners();
      nftTransaction();
      orderBidWinner();
      nftUpgradeDetails();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nftDetail = async (slug, orderSlug) => {
    try {
      setLoader(true);
      let response = await nftDetailApi({
        nft_slug: slug,
        order_slug: orderSlug,
      });
      const NFT = response.data.data.nft;
      setNft(NFT);
      setErc721(NFT.nft_type === "erc721");

      if (NFT.celebrity_slug) {
        artistDetail(NFT.celebrity_slug);
      }

      if (NFT?.order_details) {
        if (NFT?.order_details?.timed_auction) {
          setAuctionEndTime(NFT.order_details?.auction_end_time);
          setIsAuctionStarted(
            new Date(NFT.time).getTime() >=
              new Date(NFT.order_details?.auction_start_time).getTime()
          );
          setIsAuctionEnded(
            new Date(NFT.time).getTime() >
              new Date(NFT.order_details?.auction_end_time).getTime()
          );
        }

        setIsOrderOnSale(NFT.order_details?.status === "onsale");
        setIsOrderSuccess(NFT.order_details?.status === "success");
        setIsOrderCancelled(NFT.order_details?.status === "cancelled");

        if (NFT?.order_details?.purchase_details.length > 0) {
          setPurchaseList(NFT?.order_details?.purchase_details);
        }
      }

      if (NFT?.order_details?.order_completed) {
        setSoldOut(true);
      }

      if (
        NFT?.order_details?.available_quantity === 0 &&
        NFT?.order_details?.total_quantity > 0
      ) {
        setTransferringNFT(true);
      }

      if (NFT.nft_type === "erc721" && orderSlug) {
        let history = await orderBidHistory({ order_slug: orderSlug, page: 1 });
        setBidHistory(history.data.data.histories);
        setTotalCount(history.data.data.total_count);
      }

      setLoader(false);
    } catch (err) {
      console.log(err);
      toaster(
        500,
        "The request could not be processed at this time. Please try again."
      );
    }
  };

  const nftOwners = async () => {
    try {
      setOwnerLoader(true);
      let owners = await nftOwnerApi({ nft_slug: slug, page: 1 });
      setNFTOwner(owners.data.data.owners);
      setOwnerCount(owners.data.data.total_count);
      setOwnerLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  const nftTransaction = async () => {
    try {
      setTransactionLoader(true);
      let transactions = await nftTransactionHistory({
        nft_slug: slug,
        page: 1,
        order_slug: orderSlug,
      });
      setTransactionHistory(transactions.data.data.nfts);
      setTransactionHasNext(transactions.data.data.next_page);
      setTransactionLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  const nftUpgradeDetails = async () => {
    try {
      setUpgradeLoader(true);
      let transactions = await nftUpgradeHistory({
        nft_slug: slug,
        page: 1,
        order_slug: orderSlug,
      });
      setUpgradeHistory(transactions.data.data.histories);
      setUpgradeHasNext(transactions.data.data.next_page);
      setUpgradeLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  const purchaseDetails = async () => {
    try {
      let response = await orderPurchaseDetailsApi({
        order_slug: orderSlug,
        page: 1,
      });
      setPurchaseList(response.data.data.purchase_details);
    } catch (error) {
      console.log(error);
    }
  };

  const bidHistories = async () => {
    try {
      let history = await orderBidHistory({ order_slug: orderSlug, page: 1 });
      if (history.data.success) {
        setBidHistory(history.data.data.histories);
        setTotalCount(history.data.data.total_count);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const orderBidWinner = async () => {
    try {
      let winner = await nftBidWinner({ order_slug: orderSlug });
      setBidWinner(winner.data.data.winner);
      if (winner.data.data.winner !== null) {
        setWinnerBanner(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleBidExpiredEndTimer = () => {
    setBidExpired(true);
    setBidOutDated(true);
  };

  const handleAuctionStartTimer = () => {
    setIsAuctionStarted(true);
  };
  const handleAuctionEndTimer = () => {
    setIsAuctionEnded(true);
    // getOrderDetails();
  };

  const handleBeforeAuctionEndTimer = () => {
    getOrderDetails();
  };

  const getOrderDetails = async () => {
    try {
      let response = await nftDetailApi({
        nft_slug: slug,
        order_slug: orderSlug,
      });
      const NFT = response.data.data.nft;
      if (NFT?.order_details) {
        if (NFT?.order_details?.timed_auction) {
          setAuctionEndTime(NFT.order_details?.auction_end_time);
          setIsAuctionStarted(
            new Date(NFT.time).getTime() >=
              new Date(NFT.order_details?.auction_start_time).getTime()
          );
          setIsAuctionEnded(
            new Date(NFT.time).getTime() >
              new Date(NFT.order_details?.auction_end_time).getTime()
          );
        }

        setIsOrderOnSale(NFT.order_details?.status === "onsale");
        setIsOrderSuccess(NFT.order_details?.status === "success");
        setIsOrderCancelled(NFT.order_details?.status === "cancelled");
      }

      if (NFT?.order_details?.order_completed) {
        setSoldOut(true);
      }

      if (
        NFT?.order_details?.available_quantity === 0 &&
        NFT?.order_details?.total_quantity > 0
      ) {
        setTransferringNFT(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const artistDetail = async (slug) => {
    try {
      let response = await artistApi(slug);
      setArtist(response.data.data.celebrity);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {nft?.name && (
        <Header
          bgImage
          title={`${nft?.name} | MCL NFT Marketplace | Jump.trade`}
          description={`${nft?.name} is a Meta Cricket League ${nft?.core_statistics?.role?.value} Playable NFT! Purchase This NFT Now to Play the MCL P2E Cricket Game & Win Cash Rewards!`}
          image={nft?.asset_url}
          canonical={`${process.env.REACT_APP_MARKETPLACE_URL}/nft-marketplace/details/${nft?.slug}`}
        />
      )}
      {loader ? (
        <NFTLoader />
      ) : (
        <section className="detail-page-content">
          <div className="bid_section_wrapper">
            <div className="container-fluid">
              <div className="row fit-to-height">
                <div className="col-12 col-lg-7">
                  <NFTMedia
                    nft={nft}
                    title={nft?.name}
                    slug={nft?.slug}
                    isFav={nft?.is_user_fav}
                    statistics={nft?.core_statistics}
                  />
                </div>
                <div className="col-12 col-lg-5">
                  <NFTOrderBaseDetails
                    bidExpiry={bidExpiry}
                    isBidder={isBidder}
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
                    totalQty={totalQty}
                    userTotalBuys={userTotalBuys}
                    userOutBid={userOutBid}
                    userLastBid={userLastBid}
                    //Socket states end

                    soldOut={soldOut}
                    transferringNFT={transferringNFT}
                    winner={bidWinner}
                    owners={nftOwner}
                    //Order
                    isOrderOnSale={isOrderOnSale}
                    isOrderSuccess={isOrderSuccess}
                    isOrderCancelled={isOrderCancelled}
                    orderSlug={orderSlug}
                    slug={slug}
                    latestBid={bidHistory.length > 0 ? bidHistory[0] : {}}
                    bidOutDated={bidOutDated}
                    handleBidExpiredEndTimer={handleBidExpiredEndTimer}
                    bidExpired={bidExpired}
                    // Timed Auction
                    isAuctionStarted={isAuctionStarted}
                    isAuctionEnded={isAuctionEnded}
                    auctionEndTime={auctionEndTime}
                    handleAuctionStartTimer={handleAuctionStartTimer}
                    handleAuctionEndTimer={handleAuctionEndTimer}
                    handleBeforeAuctionEndTimer={handleBeforeAuctionEndTimer}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="property_section_wrapper">
            <div className="container-fluid">
              {orderSlug && (
                <div className="row mt-5">
                  <div className="col-12">
                    <NFTOrderSummary
                      nft={nft}
                      totalBid={totalBid}
                      bidChange={bidChange}
                      totalBuy={totalBuy}
                      price={price}
                      totalViews={totalViews}
                      totalFavourites={totalFavourites}
                      isOwner={isOwner}
                    />
                  </div>
                </div>
              )}

              {purchaseList.length > 0 && (
                <>
                  <NFTSectionTitle title="PURCHASE DETAILS" />
                  <div className="row mt-5">
                    <NFTPurchaseDetails nft={nft} list={purchaseList} />
                  </div>
                </>
              )}

              <NFTSectionTitle title="NFT DETAILS" />
              <div className="row mt-5">
                <div className="col-12 col-lg-6 order-lg-2 order-1 mb-4">
                  {(() => {
                    if (erc721) {
                      if (winnerBanner) {
                        return (
                          <BidWinner
                            winner={bidWinner}
                            orderSlug={orderSlug}
                            histories={bidHistory}
                          />
                        );
                      } else {
                        return (
                          <BidHistory
                            setBidExpiry={setBidExpiry}
                            setIsBidder={setIsBidder}
                            nft={nft}
                            orderSlug={orderSlug}
                            isOwner={isOwner}
                            nftOwner={nftOwner[0]}
                            histories={bidHistory}
                            totalCount={totalCount}
                            isOrderOnSale={isOrderOnSale}
                            isOrderSuccess={isOrderSuccess}
                            isOrderCancelled={isOrderCancelled}
                            orderDetails={orderDetails}
                            soldOut={soldOut}
                            transferringNFT={transferringNFT}
                            // Transaction History
                            transactionHistory={transactionHistory}
                            transactionLoader={transactionLoader}
                            transactionHasNext={transactionHasNext}
                            // Upgrade History
                            upgradeHistory={upgradeHistory}
                            setUpgradeHistory={setUpgradeHistory}
                            setUpgradeHasNext={setUpgradeHasNext}
                            upgradeLoader={upgradeLoader}
                            upgradeHasNext={upgradeHasNext}
                            handleBidExpiredEndTimer={handleBidExpiredEndTimer}
                            bidExpired={bidExpired}
                            isAuctionStarted={isAuctionStarted}
                            isAuctionEnded={isAuctionEnded}
                          />
                        );
                      }
                    } else {
                      return (
                        nftOwner && (
                          <OwnerList
                            isLoading={ownerLoader}
                            nft={nft}
                            nftOwners={nftOwner}
                            totalCount={ownerCount}
                            orderSlug={orderSlug}
                            // Transaction History
                            transactionHistory={transactionHistory}
                            transactionLoader={transactionLoader}
                            transactionHasNext={transactionHasNext}
                          />
                        )
                      );
                    }
                  })()}
                </div>
                <div className="col-12 col-lg-6 order-lg-1 order-2">
                  {nft?.properties?.length > 0 && (
                    <NFTProperties
                      properties={nft?.properties}
                      statistics={nft?.core_statistics}
                    />
                  )}

                  <div className="mt-5"></div>
                  <ChainAttributes chains={nft.chain_attributes} />

                  {nft?.core_statistics && nft?.statistics.length > 0 && (
                    <>
                      <div className="mt-5"></div>
                      <NFTPlayerStats
                        stats={nft?.statistics}
                        core={nft?.core_statistics}
                      />
                    </>
                  )}

                  {nft?.tag_names?.length > 0 && (
                    <>
                      <div className="mt-5"></div>
                      <NFTTags tags={nft.tag_names} />
                    </>
                  )}
                  {nft?.comic?.length > 0 && (
                    <>
                      <div className="mt-5"></div>
                      <AdditionalPerks comics={nft.comic} />
                    </>
                  )}
                </div>
              </div>

              {artist?.show_artist && (
                <>
                  <NFTSectionTitle title={artist?.title} />
                  <div className="mt-5">
                    <NFTArtist id={nft.celebrity_id} artist={artist} />
                  </div>
                  <br />
                  <br />
                </>
              )}
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};

export default OrderDetails;

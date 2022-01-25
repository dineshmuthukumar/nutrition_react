import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import _ from "lodash";

import {
  nftDetailApi,
  orderBidHistory,
  nftOwnerApi,
  nftTransactionHistory,
  orderPurchaseDetailsApi,
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
  ownerDetails,
  pageView,
  totalFav,
  userBidDetail,
  userBuyDetail,
} from "../api/actioncable-methods";
import OwnerList from "../components/owner-list";
import Footer from "../components/footer/index";
import NFTOrderSummary from "../components/nft-order-summary";
import NFTOrderBaseDetails from "../components/nft-order-basic-details";
import NFTPurchaseDetails from "../components/nft-purchase-details/index";

const OrderDetails = () => {
  const history = useHistory();
  const { slug, orderSlug } = useParams();
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
  const [page, setPage] = useState(1);

  const [isOrderOnSale, setIsOrderOnSale] = useState(false);
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);
  const [isOrderCancelled, setIsOrderCancelled] = useState(false);
  const [purchaseList, setPurchaseList] = useState([]);

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

  const { user } = useSelector((state) => state.user.data);

  const isOwner = _.get(nft, "order_details.owned", false);
  const orderDetails = _.get(nft, "order_details", {});

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;

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
      }
    });
    bidDetail(orderSlug, (data) => {
      setTotalBid(data.total_bids);
      setBidChange(data.bid_change);
      setPrice(data.minimum_bid);
      if (data.history) {
        setBidHistory((bidHistory) => [data.history, ...bidHistory]);
      }
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
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    ownerDetails(slug, (data) => {
      nftOwners();
      nftTransaction();
    });
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

      if (NFT?.order_details) {
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
        page: page,
        order_slug: orderSlug,
      });
      setTransactionHistory(transactions.data.data.nfts);
      setTransactionHasNext(transactions.data.data.next_page);
      setTransactionLoader(false);
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
                <NFTOrderBaseDetails
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
                />
              </div>
            </div>
          </div>
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
                />
              </div>
            </div>
          )}

          {purchaseList.length > 0 && (
            <>
              <NFTSectionTitle title="Purchase Details" />
              <div className="row mt-5">
                <NFTPurchaseDetails nft={nft} list={purchaseList} />
              </div>
            </>
          )}

          <NFTSectionTitle title="NFT Details" />
          <div className="row mt-5">
            <div className="col-12 col-lg-6 order-lg-2 order-1 mb-4">
              {(() => {
                if (erc721) {
                  return (
                    <BidHistory
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
                    />
                  );
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
              {nft?.tag_names?.length > 0 && (
                <>
                  <div className="mt-5"></div>
                  <NFTTags tags={nft.tag_names} />
                </>
              )}
            </div>
          </div>

          <NFTSectionTitle title="Artist" />
          <div className="mt-5">
            <NFTArtist id={nft.celebrity_id} />
          </div>
          {/* {nftMoreList.length > 0 && (
            <div className="mt-5">
              <NFTMore nftList={nftMoreList} />
            </div>
          )} */}
          <br />
          <br />
        </div>
      )}
      <Footer />
    </>
  );
};

export default OrderDetails;

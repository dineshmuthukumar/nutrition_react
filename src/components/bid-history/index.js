import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { Modal, Table } from "react-bootstrap";
import { IoIosRocket } from "react-icons/io";
import { BiX } from "react-icons/bi";
import _ from "lodash";

import BidCard from "./bid-card";
import BidName from "./bid-name";
import HistoryHeader from "../history-header";
import HistoryConfirm from "../history-confirm";
import TransactionCard from "./transaction-card";
import userImg from "../../images/user_1.jpg";
import { orderBidHistory } from "../../api/methods";
import { currencyFormat } from "../../utils/common";
import { TableLoader } from "../nft-basic-details/content-loader";

import "./style.scss";

const BidHistory = ({
  setBidExpiry = () => {},
  setIsBidder = () => {},
  nft,
  orderSlug,
  isOwner,
  histories = [],
  totalCount,
  nftOwner,
  isOrderOnSale,
  isOrderSuccess,
  isOrderCancelled,
  soldOut,
  transferringNFT,
  transactionHistory = [],
  transactionLoader,
  transactionHasNext,
  handleBidExpiredEndTimer,
  bidExpired,
  orderDetails,
  isAuctionStarted,
  isAuctionEnded,
}) => {
  const { slug } = useParams();
  const [modalShow, setModalShow] = useState(false);
  const [bidHistories, setBidHistories] = useState({});
  const [page, setPage] = useState(1);
  const [bidHistoryList, setBidHistoryList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [acceptBidConfirm, setAcceptBidConfirm] = useState(false);
  const [acceptBidDetail, setAcceptBidDetail] = useState({});
  const isBid = _.get(nft, "order_details.is_bid", false);
  const [key, setKey] = useState("bid-history");

  const { user } = useSelector((state) => state.user.data);

  useEffect(() => {
    if (orderSlug && isOrderOnSale && isBid) {
      setKey("bid-history");
    } else {
      setKey("transaction-history");
    }
  }, [orderSlug, isOrderOnSale]);

  useEffect(() => {
    setAcceptBidConfirm(false);
  }, [histories]);

  const fetchHistory = async (pageNo) => {
    try {
      let result = await orderBidHistory({
        order_slug: orderSlug,
        page: pageNo,
      });
      setBidHistoryList([...bidHistoryList, ...result.data.data.histories]);
      setBidHistories(result.data.data);
    } catch (error) {
      console.log(error);
      toast.error(
        "The request could not be processed at this time. Please try again."
      );
    }
  };

  const fetchMoreHistory = () => {
    if (bidHistories.next_page) {
      fetchHistory(page + 1);
      setPage(page + 1);
    }
  };

  const handleClick = async () => {
    setModalShow(true);
    try {
      setLoading(true);
      let history = await orderBidHistory({
        order_slug: orderSlug,
        page: page,
      });
      setBidHistories(history.data.data);
      setBidHistoryList(history.data.data.histories);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(
        "The request could not be processed at this time. Please try again."
      );
    }
  };

  const handleClose = () => {
    setModalShow(false);
    setPage(1);
    setBidHistories({});
    setBidHistoryList([]);
  };

  return (
    <>
      {(acceptBidConfirm || soldOut || transferringNFT) && !bidExpired ? (
        <HistoryConfirm
          nft={nft}
          orderSlug={orderSlug}
          acceptBidDetail={acceptBidDetail}
          acceptBidConfirm={acceptBidConfirm}
          setAcceptBidConfirm={setAcceptBidConfirm}
          isOrderOnSale={isOrderOnSale}
          isOrderSuccess={isOrderSuccess}
          isOrderCancelled={isOrderCancelled}
          soldOut={soldOut}
          transferringNFT={transferringNFT}
        />
      ) : (
        <div className="bid-history if_bid_empty_cell">
          <HistoryHeader nftOwner={nftOwner} nft={nft} />

          {(transactionHistory.length > 0 || (isBid && isOrderOnSale)) && (
            <div className="bid-history-title-content">
              <div className="bid-history-title">
                <ul className="nav-btn-grp">
                  {isBid && isOrderOnSale && (
                    <li>
                      <span
                        className={`${key === "bid-history" ? "active" : ""}`}
                        onClick={() => setKey("bid-history")}
                      >
                        Bid History
                      </span>
                    </li>
                  )}
                  {transactionHistory.length > 0 && (
                    <li>
                      <span
                        className={`${
                          key === "transaction-history" ? "active" : ""
                        }`}
                        onClick={() => setKey("transaction-history")}
                      >
                        Transaction History
                      </span>
                    </li>
                  )}
                </ul>
              </div>
              <div className="bid-history-filter"></div>
            </div>
          )}

          {(() => {
            if (key === "bid-history") {
              return (
                isBid && (
                  <>
                    {histories.length > 0 && isOrderOnSale ? (
                      <div
                        className={`bid-history-content ${
                          isOwner && !orderDetails?.timed_auction ? "owner" : ""
                        }`}
                      >
                        {histories.map((history, i) => (
                          <BidCard
                            setBidExpiry={setBidExpiry}
                            setIsBidder={setIsBidder}
                            isOrderOnSale={isOrderOnSale}
                            isOwner={isOwner}
                            key={`bid-history${i}`}
                            latestIndex={i}
                            history={history}
                            acceptBidConfirm={acceptBidConfirm}
                            setAcceptBidConfirm={setAcceptBidConfirm}
                            setAcceptBidDetail={setAcceptBidDetail}
                            handleEndTimer={handleBidExpiredEndTimer}
                            bidExpired={bidExpired}
                            orderDetails={orderDetails}
                            isAuctionEnded={isAuctionEnded}
                          />
                        ))}

                        {totalCount <= histories.length ? (
                          <>{/* <BidCard isEnd /> */}</>
                        ) : (
                          <div className="bid-histroy-card">
                            <div className="history-end-content">
                              <span role="button" onClick={handleClick}>
                                View More
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      isOrderOnSale && (
                        <div className="bid-empty-content">
                          <div className="empty-top-container">
                            <div className="empty-top-content">
                              <IoIosRocket color="white" />
                              {!isAuctionStarted && !isAuctionEnded ? (
                                <div className="empty-text">
                                  Auction has not yet begun
                                </div>
                              ) : isAuctionEnded ? (
                                <div className="empty-text">
                                  Auction has ended. <br />
                                  No active bids.
                                </div>
                              ) : (
                                <div className="empty-text">
                                  No active bids yet. <br />
                                  {!isOwner && "Be the first to make a bid."}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </>
                )
              );
            } else if (key === "transaction-history") {
              return (
                transactionHistory.length > 0 && (
                  <div className="bid-history-content">
                    {transactionHistory.map((history, i) => (
                      <TransactionCard
                        key={`transaction-history${i}`}
                        nft={nft}
                        history={history}
                      />
                    ))}
                    {transactionHasNext && (
                      <div className="bid-histroy-card">
                        <div className="history-end-content">
                          <span role="button" onClick={handleClick}>
                            View More
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )
              );
            }
          })()}
        </div>
      )}

      <Modal size="xl" centered show={modalShow} className="history-modal">
        <Modal.Header className="bg-dark p-0">
          <Modal.Title className="flex-fill">
            <div className="modal-bid-history-title-content">
              <div className="modal-bid-history-title">History</div>
              <div className="modal-bid-history-filter">
                <BiX
                  role="button"
                  style={{ color: "#fff" }}
                  size={25}
                  onClick={handleClose}
                />
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <TableLoader />
          ) : (
            <Table responsive="lg" className="history-table-expand mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Event</th>
                  <th>Bider</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Price Change</th>
                  <th className="text-center">Date</th>
                </tr>
              </thead>
              <tbody>
                {bidHistoryList.map((history, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>Bid placed by</td>
                    <td>
                      <BidName
                        imgUrl={
                          !history.private && history.avatar_url
                            ? history.avatar_url
                            : user?.slug === history.slug && history.avatar_url
                            ? history.avatar_url
                            : userImg
                        }
                        text={
                          !history.private && history.user_name
                            ? history.user_name
                            : user?.slug === history.slug
                            ? `@${user.first_name}${user.last_name}`
                            : history.user_name
                        }
                        isTable
                        slug={history.slug}
                      />
                    </td>
                    <td className="text-center">
                      <div className="usd-value">
                        {currencyFormat(history.bid_amount, "USD")}
                      </div>
                    </td>
                    <td className="text-center text-success">
                      {`${history.bid_change.toFixed(2)}%`}
                    </td>
                    <td className="text-center">
                      <div className="date">
                        {dayjs(history.created_at).format(
                          "MMM D, YYYY hh:mm A"
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
                {bidHistories.next_page ? (
                  <tr>
                    <td className="text-center text-secondary p-3" colSpan="6">
                      <span role="button" onClick={fetchMoreHistory}>
                        Load More
                      </span>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td className="text-center text-secondary p-3" colSpan="6">
                      {/* You've reached the end of the list */}
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BidHistory;

import React, { useState } from "react";
import dayjs from "dayjs";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { Modal, Table } from "react-bootstrap";
import { IoIosRocket } from "react-icons/io";
import { BiX } from "react-icons/bi";

import BidCard from "./bid-card";
import BidName from "./bid-name";
import HistoryHeader from "../history-header";
import HistoryConfirm from "../history-confirm";
import userImg from "../../images/user_1.png";
import amitabh from "../../images/amitabh.png";
import { nftBidHistory } from "../../api/methods";
import { currencyFormat } from "../../utils/common";
import { TableLoader } from "../nft-basic-details/content-loader";

import "./style.scss";

const BidHistory = ({
  nft,
  isOwner,
  histories = [],
  isAuctionEnded,
  totalCount,
  nftOwner,
}) => {
  const { slug } = useParams();
  const [modalShow, setModalShow] = useState(false);
  const [bidHistories, setBidHistories] = useState({});
  const [page, setPage] = useState(1);
  const [bidHistoryList, setBidHistoryList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHistory = async (pageNo) => {
    try {
      let result = await nftBidHistory({ nft_slug: slug, page: pageNo });
      setBidHistoryList([...bidHistoryList, ...result.data.data.histories]);
      setBidHistories(result.data.data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
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
      let history = await nftBidHistory({ nft_slug: slug, page: page });
      setBidHistories(history.data.data);
      setBidHistoryList(history.data.data.histories);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
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
      <div className="bid-history if_bid_empty_cell">
        <HistoryHeader nftOwner={nftOwner} />
        <div className="bid-history-title-content">
          <div className="bid-history-title">History</div>
          <div className="bid-history-filter"></div>
        </div>

        {histories.length > 0 ? (
          <div className={`bid-history-content ${isOwner ? "owner" : ""}`}>
            {histories.map((history, i) => (
              <BidCard key={`bid-history${i}`} history={history} />
            ))}

            {totalCount <= histories.length ? (
              <BidCard isEnd />
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
          <div className="bid-empty-content">
            <div className="empty-top-container">
              <div className="empty-top-content">
                <IoIosRocket color="white" />
                <div className="empty-text">
                  No active bids yet. <br />
                  Be the first to make a bid.
                </div>
              </div>
            </div>

            <div className="empty-bottom-content">
              <img src={amitabh} alt="" />
              <div className="nft-owner-history-details">
                <div className="publish-time text-secondary">
                  {dayjs(nft.auction_start_time).format("MMM D, YYYY hh:mm A")}
                </div>
                <div className="nft-owner">Bid listed by @beyondlife.club</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <HistoryConfirm /> */}
    </>
  );
};

export default BidHistory;

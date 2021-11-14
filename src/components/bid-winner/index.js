import React, { useState } from "react";
import dayjs from "dayjs";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { Modal, Table } from "react-bootstrap";
import { BiX } from "react-icons/bi";

import BidName from "../bid-history/bid-name";
import userImg from "../../images/user_1.png";
import { nftBidHistory } from "../../api/methods";
import { currencyFormat } from "../../utils/common";
import { TableLoader } from "../nft-basic-details/content-loader";
import "./style.scss";

const BidWinner = ({ winner, histories }) => {
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
      <div className="bid-winner">
        <div className="winner-title">
          <div className="winner-text">WINNER</div>
        </div>

        <div className="winner-user-details">
          <img alt="" src={winner.avatar_url ? winner.avatar_url : userImg} />
          <div className="winner-id">{winner.user_name}</div>
        </div>

        <div className="nft-sold-details">
          <div className="sold-for">
            <div className="sold-for-title">NFT sold for</div>
            <div className="sold-for-value">
              {currencyFormat(winner.sold_amount, "USD")}
            </div>
          </div>
          <div className="sold-on">
            <div className="sold-on-title">NFT sold on</div>
            <div className="sold-on-value">
              {dayjs(winner.sold_at).format("MMM D, YYYY hh:mm A")}
            </div>
          </div>
        </div>

        <div className="nft-lastbid-details">
          <div className="lastbid-left">
            <div className="lastbid-title">Last Bid</div>
            <div className="lastbid-value">
              {currencyFormat(winner.last_bid, "USD")}
            </div>
          </div>
          <div className="lastbid-right">
            <div className="lastbid-date-title">Last Bid Date</div>
            <div className="lastbid-date-value">
              {dayjs(winner.last_bid_at).format("MMM D, YYYY hh:mm A")}
            </div>
          </div>
        </div>

        <div className="bottom-section">
          <button
            type="button"
            className="btn btn-dark rounded-pill border border-white bidding-history-btn"
            onClick={handleClick}
          >
            Bidding History
          </button>
        </div>
      </div>

      <Modal size="xl" centered show={modalShow} className="history-modal">
        <Modal.Header className="bg-dark p-0">
          <Modal.Title className="flex-fill">
            <div className="modal-bid-history-title-content">
              <div className="modal-bid-history-title">History</div>
              <div className="modal-bid-history-filter">
                {/* <div className="me-2">
                  <Nav>
                    <NavDropdown
                      title="Sort By"
                      menuVariant="white"
                      align="end"
                      className="history-dropdown"
                    >
                      <NavDropdown.Item href="#action/3.1">
                        First bid to last
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Last bid to first
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </div> */}
                {/* <BsFullscreenExit
                  role="button"
                  style={{ color: "#fff" }}
                  size={25}
                  onClick={() => setModalShow(false)}
                /> */}
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
                        imgUrl={!history.private ? history.avatar_url : userImg}
                        text={history.user_name}
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
                      You've reached the end of the list
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

export default BidWinner;

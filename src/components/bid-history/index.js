import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { Modal, Table } from "react-bootstrap";
import { IoIosRocket } from "react-icons/io";
import { BiX } from "react-icons/bi";

import BidCard from "./bid-card";
import BidName from "./bid-name";
import userImg from "../../images/user_1.png";
import amitabh from "../../images/amitabh.png";
import { nftBidHistory } from "../../api/methods";
import { currencyFormat } from "../../utils/common";
import { TableLoader } from "../nft-basic-details/content-loader";

import "./style.scss";

const BidHistory = ({ nft, histories = [], isAuctionEnded, totalCount }) => {
  const { slug } = useParams();
  const [modalShow, setModalShow] = useState(false);
  const [bidHistories, setBidHistories] = useState([]);
  const [page, setPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchHistory = async () => {
    try {
      if (bidHistories.length >= totalRecords) {
        setHasMore(false);
        return;
      }
      let history = await nftBidHistory({
        nft_slug: slug,
        page: page,
      });
      setBidHistories([...bidHistories, ...history.data.data.histories]);
      setTotalRecords(history.data.data.total_count);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (bidHistories.length < totalRecords) {
      setHasMore(true);
    } else {
      setHasMore(false);
    }
  }, [bidHistories, totalRecords, hasMore]);

  const handleClick = async () => {
    setModalShow(true);
    try {
      setLoading(true);
      setPage((page) => page + 1);
      let history = await nftBidHistory({
        nft_slug: slug,
        page: page,
      });
      setBidHistories(history.data.data.histories);
      setTotalRecords(history.data.data.total_count);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleClose = () => {
    setModalShow(false);
    setPage(1);
    setBidHistories([]);
  };
  return (
    <>
      <div className="bid-history if_bid_empty_cell">
        <div className="bid-history-title-content">
          <div className="bid-history-title">History</div>
          <div className="bid-history-filter">
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
            {/* {histories.length > 0 && (
              <AiOutlineExpand
                role="button"
                style={{ color: "#fff" }}
                size={25}
                onClick={() => setModalShow(true)}
              />
            )} */}
          </div>
        </div>

        {histories.length > 0 ? (
          <div className="bid-history-content">
            {histories.map((history, i) => (
              <BidCard key={`biy-history${i}`} history={history} />
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
                {isAuctionEnded ? (
                  <div className="empty-text">
                    Auction has ended. <br />
                    No active bids.
                  </div>
                ) : (
                  <div className="empty-text">
                    No active bids yet. <br />
                    Be the first to make a bid.
                  </div>
                )}
              </div>
            </div>

            <div className="empty-bottom-content">
              <img src={amitabh} alt="" />
              <div className="nft-owner-history-details">
                <div className="publish-time text-secondary">
                  {dayjs(nft.auction_start_time).format("MMM D, YYYY hh:mm A")}
                </div>
                <div className="nft-owner">
                  Bid listed by <BidName text="@amitabhbachchan" static_name />
                </div>
              </div>
            </div>
          </div>
        )}
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
                {bidHistories.map((history, i) => (
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
                {hasMore ? (
                  <tr>
                    <td className="text-center text-secondary p-3" colSpan="6">
                      <span role="button" onClick={fetchHistory}>
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

export default BidHistory;

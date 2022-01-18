import React, { useState } from "react";
import dayjs from "dayjs";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { Modal, Table } from "react-bootstrap";
import { IoIosRocket } from "react-icons/io";
import { BiX } from "react-icons/bi";

import BuyCard from "./buy-card";
import BuyName from "./buy-name";
import amitabh from "../../images/amitabh.png";
import userImg from "../../images/user_1.jpg";
import { TableLoader } from "../nft-basic-details/content-loader";
import { nftBuyHistory } from "../../api/methods";
import { currencyFormat } from "../../utils/common";

import "./style.scss";

const BuyHistory = ({ nft, histories = [], isAuctionEnded, totalCount }) => {
  const { slug } = useParams();
  const [modalShow, setModalShow] = useState(false);
  const [buyHistories, setBuyHistories] = useState({});
  const [buyHistoryList, setBuyHistoryList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchHistory = async (pageNo) => {
    try {
      let result = await nftBuyHistory({ nft_slug: slug, page: pageNo });
      setBuyHistories(result.data.data);
      setBuyHistoryList([...buyHistoryList, ...result.data.data.histories]);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const fetchMoreHistory = () => {
    if (buyHistories.next_page) {
      fetchHistory(page + 1);
      setPage(page + 1);
    }
  };

  const handleClick = async () => {
    setModalShow(true);
    try {
      setLoading(true);
      let history = await nftBuyHistory({ nft_slug: slug, page: page });
      setBuyHistories(history.data.data);
      setBuyHistoryList(history.data.data.histories);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleClose = () => {
    setModalShow(false);
    setPage(1);
    setBuyHistories({});
    setBuyHistoryList([]);
  };
  return (
    <>
      <div className="bid-history">
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
                    First buy to last
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Last buy to first
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
              <BuyCard key={`buy-history${i}`} history={history} />
            ))}

            {totalCount <= histories.length ? (
              <>{/* <BuyCard isEnd /> */}</>
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
                    No NFTs bought.
                  </div>
                ) : (
                  <div className="empty-text">
                    No NFTs bought yet. <br />
                    Be the first to buy.
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
                  NFTs listed by <BuyName text="@amitabhbachchan" static_name />
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
                        First buy to last
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Last buy to first
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
                  <th>Bought by</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Date</th>
                </tr>
              </thead>
              <tbody>
                {buyHistoryList.map((history, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>NFT auction</td>
                    <td>
                      <BuyName
                        imgUrl={!history.private ? history.avatar_url : userImg}
                        text={history.user_name}
                        isTable
                        slug={history.slug}
                      />
                    </td>
                    <td className="text-center">{history.quantity}</td>
                    <td className="text-center">
                      <div className="usd-value">
                        {currencyFormat(history.buy_amount, "USD")}
                      </div>
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

                {buyHistories.next_page && (
                  <tr>
                    <td className="text-center text-secondary p-3" colSpan="6">
                      <span role="button" onClick={fetchMoreHistory}>
                        Load More
                      </span>
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

export default BuyHistory;

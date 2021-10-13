import React, { useState } from "react";
import dayjs from "dayjs";
import { Modal, Button, Table, Nav, NavDropdown } from "react-bootstrap";
import { BsFullscreenExit } from "react-icons/bs";
import BidName from "../bid-history/bid-name";
import { currencyFormat } from "../../utils/common";
import "./style.scss";

const BidWinner = ({ histories }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="bid-winner">
        <div className="winner-text">WINNER</div>

        <div className="winner-user-details">
          <img src="https://picsum.photos/200/200" />
          <div className="winner-id">@rtyuio</div>
        </div>

        <div className="nft-sold-details">
          <div className="sold-for">
            <div className="sold-for-title">NFT sold for</div>
            <div className="sold-for-value">$2098.98</div>
          </div>
          <div className="sold-on">
            <div className="sold-on-title">NFT sold on</div>
            <div className="sold-on-value">Sep 16, 21 11:11pm</div>
          </div>
        </div>

        <div className="nft-lastbid-details">
          <div className="lastbid-left">
            <div className="lastbid-title">Last Bid</div>
            <div className="lastbid-value">$2098.98</div>
          </div>
          <div className="lastbid-right">
            <div className="lastbid-date-title">Last Bid Date</div>
            <div className="lastbid-date-value">Sep 16, 21 11:11pm</div>
          </div>
        </div>

        <div className="bottom-section">
          <button
            type="button"
            className="btn btn-dark rounded-pill border border-white bidding-history-btn"
            onClick={() => setModalShow(true)}
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
                <BsFullscreenExit
                  role="button"
                  style={{ color: "#fff" }}
                  size={25}
                  onClick={() => setModalShow(false)}
                />
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              {histories.map((history, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>Bid placed by</td>
                  <td>
                    <BidName
                      imgUrl={history.avatar_url}
                      text={history.user_name}
                      isTable
                    />
                  </td>
                  <td className="text-center">
                    <div className="usd-value">
                      {currencyFormat(history.bid_amount, "USD")}
                    </div>
                  </td>
                  <td
                    className={`text-center ${
                      i % 2 === 0 ? "text-success" : "text-danger"
                    }`}
                  >
                    1.00%
                  </td>
                  <td className="text-center">
                    <div className="date">
                      {dayjs(history.created_at).format("MMM D, YYYY hh:mma")}
                    </div>
                  </td>
                </tr>
              ))}

              <tr>
                <td className="text-center text-secondary p-3" colSpan="6">
                  You've reached the end of the list
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BidWinner;

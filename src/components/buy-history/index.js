import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Modal, Button, Table, Nav, NavDropdown } from "react-bootstrap";
import { AiOutlineExpand } from "react-icons/ai";
import { BsFullscreenExit } from "react-icons/bs";
import { IoIosRocket } from "react-icons/io";
import { currencyFormat } from "../../utils/common";
import BuyCard from "./buy-card";
import BuyName from "./buy-name";
import "./style.scss";

const BuyHistory = ({ nft, histories = [] }) => {
  const [modalShow, setModalShow] = useState(false);
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
            <AiOutlineExpand
              role="button"
              style={{ color: "#fff" }}
              size={25}
              onClick={() => setModalShow(true)}
            />
          </div>
        </div>

        {histories.length > 0 ? (
          <div className="bid-history-content">
            {histories.map((history, i) => (
              <BuyCard key={`buy-history${i}`} history={history} />
            ))}

            <BuyCard isEnd />
          </div>
        ) : (
          <div className="bid-empty-content">
            <div className="empty-top-container">
              <div className="empty-top-content">
                <IoIosRocket color="white" />
                <div className="empty-text">
                  No NFTs bought yet. <br />
                  Be the first to buy.
                </div>
              </div>
            </div>

            <div className="empty-bottom-content">
              <img src="https://picsum.photos/100/100" />
              <div className="nft-owner-history-details">
                <div className="publish-time text-secondary">
                  Sep 20, 2021 11:15pm
                </div>
                <div className="nft-owner">
                  NFTs listed by <BuyName text="@amitabhbachchan" />
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
                <th>Bought by</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Price</th>
                <th className="text-center">Date</th>
              </tr>
            </thead>
            <tbody>
              {histories.map((history, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>NFT auction</td>
                  <td>
                    <BuyName
                      imgUrl={history.avatar_url}
                      text={history.user_name}
                      isTable
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

export default BuyHistory;

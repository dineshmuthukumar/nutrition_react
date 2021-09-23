import React, { useState } from "react";
import { Modal, Button, Table, Nav, NavDropdown } from "react-bootstrap";
import { AiOutlineExpand } from "react-icons/ai";
import { BsFullscreenExit } from "react-icons/bs";
import { IoIosRocket } from "react-icons/io";
import BidCard from "./bid-card";
import BidName from "./bid-name";
import "./style.scss";

const BidHistory = ({ input = [] }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="bid-history">
        <div className="bid-history-title-content">
          <div className="bid-history-title">History</div>
          <div className="bid-history-filter">
            <div className="me-2">
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
                    Last bid first
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </div>
            <AiOutlineExpand
              role="button"
              style={{ color: "#fff" }}
              size={25}
              onClick={() => setModalShow(true)}
            />
          </div>
        </div>

        {input.length > 0 ? (
          <div className="bid-history-content">
            {input.map((o) => (
              <BidCard />
            ))}

            <BidCard isEnd />
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
              <img src="https://picsum.photos/100/100" />
              <div className="nft-owner-history-details">
                <div className="publish-time text-secondary">
                  Sep 20, 2021 11:15pm
                </div>
                <div className="nft-owner">
                  Bid placed by <BidName text="johndoe" />
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
                <div className="me-2">
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
                        Last bid first
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </div>
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
                <th className="text-end">Price</th>
                <th className="text-end">Price Change</th>
                <th className="text-end">Date</th>
              </tr>
            </thead>
            <tbody>
              {input.map((o) => (
                <tr>
                  <td>{o}</td>
                  <td>Bid placed by</td>
                  <td>
                    <BidName text="johndoe" isTable />
                  </td>
                  <td className="text-end">
                    <div className="usd-value">$2,900.39</div>
                  </td>
                  <td
                    className={`text-end ${
                      o % 2 === 0 ? "text-success" : "text-danger"
                    }`}
                  >
                    1.00%
                  </td>
                  <td className="text-end">
                    <div className="date">Apr 23, 2021 6:42pm</div>
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

export default BidHistory;

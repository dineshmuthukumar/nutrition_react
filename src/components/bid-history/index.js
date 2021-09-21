import React, { useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import { AiOutlineDown, AiOutlineExpand } from "react-icons/ai";
import { BsFullscreenExit } from "react-icons/bs";
import BidCard from "./bid-card";
import BidName from "./bid-name";
import "./style.scss";

const BidHistory = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="history">
      <div className="bid-history">
        <div className="bid-history-title">
          <span className="bid-history-title-content">History</span>
          <span className="bid-history-sort float-end">Sort By <AiOutlineDown size={15} className="ms-1" /></span>
          <AiOutlineExpand style={{ color: "#fff" }} size={25} className="ms-1" onClick={() => setModalShow(true)} />
        </div>
        <div className="bid-history-content mt-3">
          <BidCard />
          <BidCard />
          <BidCard />
          <BidCard />
          <BidCard />
          <BidCard />
          <BidCard />
          <BidCard />
          <BidCard />
          <BidCard />
          <BidCard />
        </div>
      </div>
      <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={modalShow} >
        <Modal.Header style={{ backgroundColor: "#000", color: "#fff" }}>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="bid-history-title">
              <span className="bid-history-title-content">History</span>
              <span className="bid-history-sort float-end">Sort By <AiOutlineDown size={15} className="ms-1" /></span>
              <BsFullscreenExit size={25} className="ms-1" onClick={() => setModalShow(false)} />
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table responsive="lg">
            <thead>
              <tr>
                <th>#</th>
                <th>Event</th>
                <th>Bider</th>
                <th>Price</th>
                <th>Price Change</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Bid placed by</td>
                <td><BidName text="johndoe" /></td>
                <td><div className="usd-value">$2,900.39</div></td>
                <td><div style={{ color: "#00a954" }}>1.00%</div></td>
                <td><div className="date">Apr 23, 2021 6:42pm</div></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Bid placed by</td>
                <td><BidName text="johndoe" /></td>
                <td><div className="usd-value">$2,900.39</div></td>
                <td><div style={{ color: "#00a954" }}>1.00%</div></td>
                <td><div className="date">Apr 23, 2021 6:42pm</div></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Bid placed by</td>
                <td><BidName text="johndoe" /></td>
                <td><div className="usd-value">$2,900.39</div></td>
                <td><div style={{ color: "#00a954" }}>1.00%</div></td>
                <td><div className="date">Apr 23, 2021 6:42pm</div></td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BidHistory;

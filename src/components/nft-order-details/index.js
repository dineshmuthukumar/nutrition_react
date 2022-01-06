import React, { useState } from "react";
import dayjs from "dayjs";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Table } from "react-bootstrap";

import BidName from "./bid-name";
import userImg from "../../images/user_1.png";
import { currencyFormat } from "../../utils/common";
import { TableLoader } from "../nft-basic-details/content-loader";

import "./style.scss";

const NFTOrderHistory = () => {
  const { user } = useSelector((state) => state.user.data);

  return (
    <>
      <div className="orderDetails">
        <Table responsive="lg" className="history-table-expand mb-0">
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th className="text-center">Event</th>
              <th className="text-center">Bider</th>
              <th className="text-center">Price</th>
              <th className="text-center">Price Change</th>
              <th className="text-center">Date</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">{1}</td>
              <td className="text-center">Bid placed by</td>
              <td className="text-center">
                <BidName
                  imgUrl={userImg}
                  text={"@name"}
                  isTable
                  slug={"jdnjnsd"}
                />
              </td>
              <td className="text-center">
                <div className="usd-value">$56.00</div>
              </td>
              <td className="text-center text-success">0</td>
              <td className="text-center">
                <div className="date">
                  {dayjs(new Date()).format("MMM D, YYYY hh:mm A")}
                </div>
              </td>
              <td className="text-center">
                <button class="btn btn-dark text-center btn-lg orderBtn mt-2 rounded-pill">
                  View
                </button>
              </td>
            </tr>

            <tr>
              <td className="text-center text-secondary p-3" colSpan="7">
                You've reached the end of the list
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default NFTOrderHistory;

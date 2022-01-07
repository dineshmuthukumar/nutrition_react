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

const NFTOrderHistory = ({ nft, orderList = [] }) => {
  const { user } = useSelector((state) => state.user.data);

  return (
    <>
      <div className="orderDetails">
        <Table responsive="lg" className="history-table-expand mb-0">
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th className="text-center">NFT</th>
              <th className="text-center">Sale Type</th>
              <th className="text-center">Minimum Bid Price</th>
              <th className="text-center">Sale Price</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Status</th>
              {/* <th className="text-center">Date</th> */}
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((order, i) => (
              <tr>
                <td className="text-center">{i + 1}</td>
                <td className="text-center">{nft?.name}</td>
                <td className="text-center">
                  {(() => {
                    if (order?.is_bid & order?.is_buy) {
                      return "Bid & Buy";
                    } else if (order?.is_bid) {
                      return "Bid";
                    } else {
                      return "Buy";
                    }
                  })()}
                </td>
                <td className="text-center">
                  <div className="usd-value">
                    {currencyFormat(order?.minimum_bid, "USD")}
                  </div>
                </td>
                <td className="text-center">
                  {currencyFormat(order?.buy_amount, "USD")}
                </td>
                <td className="text-center">{order?.total_quantity}</td>
                <td
                  className={`text-center ${
                    order?.status === "onsale"
                      ? "text-success"
                      : order?.status === "cancelled"
                      ? "text-danger"
                      : "text-info"
                  }`}
                >
                  {order?.status}
                </td>

                {/* <td className="text-center">
                  <div className="date">
                    {dayjs(new Date()).format("MMM D, YYYY hh:mm A")}
                  </div>
                </td> */}
                <td className="text-center">
                  <button
                    class="btn btn-dark text-center btn-lg orderBtn mt-2 rounded-pill"
                    onClick={() => {
                      window.open(
                        `${process.env.REACT_APP_MARKETPLACE_URL}/order/details/${nft.slug}/${order.slug}`,
                        "_self"
                      );
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td className="text-center text-secondary p-3" colSpan="8">
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

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

const NFTOrderDetails = ({ nft, orderList = [] }) => {
  const { user } = useSelector((state) => state.user.data);
  const erc721 = nft?.nft_type === "erc721";

  return (
    <>
      <div className="orderDetails">
        <Table responsive="lg" className="history-table-expand mb-0">
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th className="text-center">NFT Type</th>
              <th className="text-center">Sale Type</th>
              {erc721 && <th className="text-center">Minimum Bid Price</th>}
              <th className="text-center">Sale Price</th>
              <th className="text-center">Availability</th>
              <th className="text-center">Order Views</th>
              <th className="text-center">Status</th>
              <th className="text-center">Order Placed On</th>
              <th className="text-center"></th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((order, i) => (
              <tr>
                <td className="text-center">{i + 1}</td>
                <td className="text-center">{erc721 ? "ERC721" : "ERC1155"}</td>
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
                {erc721 && (
                  <td className="text-center">
                    <div className="usd-value">
                      {order?.minimum_bid
                        ? currencyFormat(order?.minimum_bid, "USD")
                        : "-"}
                    </div>
                  </td>
                )}

                <td className="text-center">
                  {order?.buy_amount
                    ? currencyFormat(order?.buy_amount, "USD")
                    : "-"}
                </td>
                <td className="text-center">
                  {(() => {
                    if (erc721) {
                      return order?.available_quantity === 0
                        ? "1 of 1 (Sold Out)"
                        : " 1 of 1 (left)";
                    } else {
                      return order?.available_quantity === 0
                        ? `Sold Out`
                        : `${order?.available_quantity} / ${order?.total_quantity}`;
                    }
                  })()}
                </td>
                <td className="text-center">{order?.page_views}</td>
                <td
                  className={`text-center ${
                    order?.status === "onsale" || order?.status === "success"
                      ? "text-success"
                      : order?.status === "cancelled" ||
                        order?.status === "partial_cancelled" ||
                        order?.status === "blocked"
                      ? "text-danger"
                      : "text-info"
                  } status`}
                >
                  {order?.status}
                </td>

                <td className="text-center">
                  <div className="date">
                    {dayjs(order?.created_at).format("MMM D, YYYY hh:mm A")}
                  </div>
                </td>
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
              <td
                className="text-center text-secondary p-3"
                colSpan={erc721 ? "10" : "9"}
              >
                You've reached the end of the list
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default NFTOrderDetails;

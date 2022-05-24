import React from "react";
import dayjs from "dayjs";
//import { useParams } from "react-router";
//import { useSelector } from "react-redux";
//import { toast } from "react-toastify";
import { Table } from "react-bootstrap";

//import BidName from "./bid-name";
//import userImg from "../../images/user_1.jpg";
import { currencyFormat } from "../../utils/common";
//import { TableLoader } from "../nft-basic-details/content-loader";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import ToolTip from "../tooltip";

import "./style.scss";

const NFTOrderDetails = ({ nft, orderList = [] }) => {
  // const { user } = useSelector((state) => state.user.data);
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
              {erc721 && (
                <>
                  <th className="text-center">Minimum Bid Price</th>
                  <th className="text-center">Auction Starting Date</th>
                  <th className="text-center">
                    Auction Expiration Date{" "}
                    <ToolTip
                      icon={
                        <BsFillQuestionCircleFill
                          size={16}
                          className="check-icon"
                        />
                      }
                      content={
                        "Any bid placed in the last 10 minutes extends the auction by 10 minutes."
                      }
                      placement="top"
                    />
                  </th>
                </>
              )}
              <th className="text-center">Sale Price</th>
              <th className="text-center">Availability</th>
              {/* <th className="text-center">Order Views</th> */}
              <th className="text-center">Status</th>
              <th className="text-center">Order Placed On</th>
              {/* <th className="text-center"></th> */}
            </tr>
          </thead>
          <tbody>
            {orderList.map((order, i) => (
              <tr
                className={`click-ele ${
                  order?.status === "cancelled" || order?.status === "blocked"
                    ? "disabled-row"
                    : ""
                }`}
                key={`order-${order?.slug}`}
                onClick={() => {
                  window.open(
                    `${process.env.REACT_APP_MARKETPLACE_URL}/order/details/${nft.slug}/${order.slug}`,
                    "_self"
                  );
                }}
              >
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
                  <>
                    <td className="text-center">
                      <div className="usd-value">
                        {order?.minimum_bid
                          ? currencyFormat(order?.minimum_bid, "USD")
                          : "-"}
                      </div>
                    </td>
                    <td className="text-center">
                      {order?.timed_auction
                        ? dayjs(order?.auction_start_time).format(
                            "MMM D, YYYY hh:mm A"
                          )
                        : "-"}
                    </td>
                    <td className="text-center">
                      {order?.timed_auction
                        ? dayjs(order?.auction_end_time).format(
                            "MMM D, YYYY hh:mm A"
                          )
                        : "-"}
                    </td>
                  </>
                )}

                <td className="text-center">
                  {order?.buy_amount
                    ? currencyFormat(order?.buy_amount, "USD")
                    : "-"}
                </td>
                <td className="text-center">
                  {(() => {
                    if (erc721) {
                      if (order?.status === "cancelled") {
                        return "-";
                      } else {
                        return order?.available_quantity === 0
                          ? "1 of 1 (Sold Out)"
                          : " 1 of 1 (left)";
                      }
                    } else {
                      if (order?.status === "cancelled") {
                        return "-";
                      } else {
                        return order?.available_quantity === 0
                          ? `Sold Out`
                          : `${order?.available_quantity} / ${order?.total_quantity}`;
                      }
                    }
                  })()}
                </td>
                {/* <td className="text-center">{order?.page_views}</td> */}
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
                  {order?.status.replace("_", " ")}
                </td>

                <td className="text-center">
                  <div className="date">
                    {dayjs(order?.created_at).format("MMM D, YYYY hh:mm A")}
                  </div>
                </td>
                {/* <td className="text-center">
                  <button
                    className="btn btn-dark text-center btn-lg orderBtn mt-2 rounded-pill"
                    disabled={(() => {
                      if (
                        order?.status === "cancelled" ||
                        order?.status === "blocked"
                      ) {
                        return true;
                      } else {
                        return false;
                      }
                    })()}
                    onClick={() => {
                      window.open(
                        `${process.env.REACT_APP_MARKETPLACE_URL}/order/details/${nft.slug}/${order.slug}`,
                        "_self"
                      );
                    }}
                  >
                    View
                  </button>
                </td> */}
              </tr>
            ))}
            {/* <tr>
              <td
                className="text-center text-secondary p-3"
                colSpan={erc721 ? "9" : "8"}
              >
                You've reached the end of the list
              </td>
            </tr> */}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default NFTOrderDetails;

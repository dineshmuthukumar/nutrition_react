import React from "react";
import dayjs from "dayjs";
//import { useParams } from "react-router";
import { useSelector } from "react-redux";
//import { toast } from "react-toastify";
import { Table } from "react-bootstrap";
import { BsFillQuestionCircleFill } from "react-icons/bs";

import BidName from "./bid-name";
import ToolTip from "../tooltip";
import userImg from "../../images/user_1.jpg";
//import loaderGif from "../../images/loader.gif";
import polygon from "../../images/marketplace/polygon.svg";
import { currencyFormat } from "../../utils/common";
//import { TableLoader } from "../nft-basic-details/content-loader";

import "./style.scss";

const NFTPurchaseDetails = ({ nft, list = [] }) => {
  const { user } = useSelector((state) => state.user.data);
  //const erc721 = nft?.nft_type === "erc721";

  return (
    <>
      <div className="orderDetails">
        <Table responsive="lg" className="history-table-expand mb-0">
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th>Buyer</th>
              <th className="text-center">Purchase Type</th>
              <th className="text-center">Edition(s)</th>
              <th className="text-center">Price</th>
              <th className="text-center">Service Fee</th>
              <th className="text-center">Status</th>
              <th className="text-center">Purchase Date/Time</th>
              <th className="text-center">Txid</th>
            </tr>
          </thead>
          <tbody>
            {list.map((detail, i) => (
              <tr key={`purchase-${i}`}>
                <td className="text-center">{i + 1}</td>
                <td className="text-center">
                  <BidName
                    imgUrl={
                      !detail?.buyer?.private && detail?.buyer?.avatar_url
                        ? detail?.buyer?.avatar_url
                        : user?.slug === detail?.buyer?.slug &&
                          detail?.buyer?.avatar_url
                        ? detail?.buyer?.avatar_url
                        : userImg
                    }
                    text={detail?.buyer?.user_name}
                    isTable
                    slug={detail?.buyer?.slug}
                  />
                </td>
                <td className="text-center status">{detail?.sale_type}</td>
                <td className="text-center">{detail?.buy_quantity}</td>
                <td className="text-center">
                  {currencyFormat(detail?.buy_amount, "USD")}
                </td>
                <td className="text-center">
                  {/* {currencyFormat(detail?.buy_amount, "USD")} */}
                  {currencyFormat(detail?.fees, "USD")}
                </td>
                <td
                  className={`text-center ${
                    detail?.status === "transferred"
                      ? "text-success"
                      : detail?.status === "expired"
                      ? "text-danger"
                      : "text-info"
                  } status`}
                >
                  {detail?.status === "pending"
                    ? "Transaction Pending"
                    : detail?.status}{" "}
                  {detail?.status === "pending" && (
                    <ToolTip
                      icon={
                        <BsFillQuestionCircleFill
                          size={16}
                          color={"#000"}
                          className="ms-2 check-icon"
                        />
                      }
                      content={
                        "The NFT's transfer/transaction is in process on the blockchain. Visit again for latest sale-status."
                      }
                      placement="right"
                    />
                  )}
                </td>

                <td className="text-center">
                  <div className="date">
                    {dayjs(detail?.updated_at).format("MMM D, YYYY hh:mm A")}
                  </div>
                </td>
                <td className="text-center">
                  {detail?.txid ? (
                    <>
                      <a href={detail?.txid} target={"_blank"} rel="noreferrer">
                        <img src={polygon} alt="details" />
                      </a>
                    </>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))}
            {/* <tr>
              <td className="text-center text-secondary p-3" colSpan="9">
                You've reached the end of the list
              </td>
            </tr> */}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default NFTPurchaseDetails;

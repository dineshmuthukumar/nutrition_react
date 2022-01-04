import React, { useState } from "react";
import dayjs from "dayjs";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { Modal, Table } from "react-bootstrap";
import { IoIosRocket } from "react-icons/io";
import { BiX } from "react-icons/bi";

import OwnerCard from "./owner-card";
import OwnerName from "./owner-name";
import amitabh from "../../images/amitabh.png";
import userImg from "../../images/user_1.png";
import { TableLoader } from "../nft-basic-details/content-loader";
import { nftBuyHistory } from "../../api/methods";
import { currencyFormat } from "../../utils/common";

import "./style.scss";

const OwnerList = ({ nft, nftOwners = [], isAuctionEnded, totalCount }) => {
  const { slug } = useParams();
  const [modalShow, setModalShow] = useState(false);
  const [buyHistories, setBuyHistories] = useState({});
  const [buyHistoryList, setBuyHistoryList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="bid-history">
        <div className="owner-history-title-content">
          <div className="bid-history-title">List of Owners</div>
          <div className="bid-history-filter"></div>
        </div>

        {nftOwners.length > 0 && (
          <div className="bid-history-content">
            {nftOwners.map((owner, i) => (
              <OwnerCard
                key={`buy-owner${i}`}
                owner={owner}
                totalQuantity={nft.total_quantity}
              />
            ))}

            {totalCount <= nftOwners.length && <OwnerCard isEnd />}
          </div>
        )}
      </div>
    </>
  );
};

export default OwnerList;

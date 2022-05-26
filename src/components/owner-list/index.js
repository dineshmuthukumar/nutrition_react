import React, { useState } from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { Modal, Table } from "react-bootstrap";
import { BiX } from "react-icons/bi";
import { IoIosRocket } from "react-icons/io";
import ContentLoader from "react-content-loader";

import OwnerCard from "./owner-card";
import OwnerName from "./owner-name";
import TransactionCard from "../bid-history/transaction-card";
import images from "../../utils/images.json";
import { OwnersTableLoader } from "../nft-basic-details/content-loader";
import { nftOwnerApi } from "../../api/methods";

import "./style.scss";

const OwnerList = ({
  nft,
  nftOwners = [],
  totalCount,
  isLoading = false,
  orderSlug,
  transactionHistory = [],
  transactionLoader = false,
  transactionHasNext,
}) => {
  const { slug } = useParams();
  const [modalShow, setModalShow] = useState(false);
  const [owners, setOwners] = useState({});
  const [ownersList, setOwnersList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState("owner-list");

  const { user } = useSelector((state) => state.user.data);

  const fetchHistory = async (pageNo) => {
    try {
      let owners = await nftOwnerApi({ nft_slug: slug, page: pageNo });
      setOwnersList([...ownersList, ...owners.data.data.owners]);
      setOwners(owners.data.data);
    } catch (error) {
      console.log(error);
      toast.error(
        "The request could not be processed at this time. Please try again."
      );
    }
  };

  const fetchMoreHistory = () => {
    if (owners.next_page) {
      fetchHistory(page + 1);
      setPage(page + 1);
    }
  };

  const handleClick = async () => {
    setModalShow(true);
    try {
      setLoading(true);
      let owners = await nftOwnerApi({ nft_slug: slug, page: page });
      setOwnersList([...ownersList, ...owners.data.data.owners]);
      setOwners(owners.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(
        "The request could not be processed at this time. Please try again."
      );
    }
  };

  const handleClose = () => {
    setModalShow(false);
    setPage(1);
    setOwners({});
    setOwnersList([]);
  };

  return (
    <>
      <div className="bid-history listofHistory">
        <div className="owner-history-title-content">
          <div className="bid-history-title">
            <ul className="nav-btn-grp">
              <li>
                <span
                  className={`${key === "owner-list" ? "active" : ""}`}
                  onClick={() => setKey("owner-list")}
                >
                  {totalCount > 0
                    ? `List of Owners (${totalCount})`
                    : `List of Owners`}
                </span>
              </li>
              {transactionHistory.length > 0 && (
                <li>
                  <span
                    className={`${
                      key === "transaction-history" ? "active" : ""
                    }`}
                    onClick={() => setKey("transaction-history")}
                  >
                    Transaction History
                  </span>
                </li>
              )}
            </ul>
          </div>
          <div className="bid-history-filter"></div>
        </div>

        {(() => {
          if (key === "owner-list") {
            return !isLoading ? (
              <>
                {nftOwners.length > 0 ? (
                  <div className="bid-history-content">
                    {nftOwners.map((owner, i) => (
                      <OwnerCard
                        key={`buy-owner${i}`}
                        owner={owner}
                        totalQuantity={nft.total_quantity}
                      />
                    ))}

                    {totalCount <= nftOwners.length ? (
                      <>{/* <OwnerCard isEnd /> */}</>
                    ) : (
                      <div className="bid-histroy-card">
                        <div className="history-end-content">
                          <span role="button" onClick={handleClick}>
                            View More
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="bid-empty-content">
                    <div className="empty-top-container">
                      <div className="empty-top-content">
                        <IoIosRocket color="white" />
                        <div className="empty-text">No Owners Found!</div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <ListLoader />
            );
          } else if (key === "transaction-history") {
            return !transactionLoader ? (
              <>
                {transactionHistory.length > 0 && (
                  <div className="bid-history-content">
                    {transactionHistory.map((history, i) => (
                      <TransactionCard
                        key={`transaction-history${i}`}
                        nft={nft}
                        history={history}
                      />
                    ))}

                    {transactionHasNext && (
                      <div className="bid-histroy-card">
                        <div className="history-end-content">
                          <span role="button" onClick={handleClick}>
                            View More
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </>
            ) : (
              <ListLoader />
            );
          }
        })()}
      </div>

      <Modal size="xl" centered show={modalShow} className="history-modal">
        <Modal.Header className="bg-dark p-0">
          <Modal.Title className="flex-fill">
            <div className="modal-bid-history-title-content">
              <div className="modal-bid-history-title">
                List of Owners ({totalCount})
              </div>
              <div className="modal-bid-history-filter">
                <BiX
                  role="button"
                  style={{ color: "#fff" }}
                  size={25}
                  onClick={handleClose}
                />
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <OwnersTableLoader />
          ) : (
            <Table responsive="lg" className="history-table-expand mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>NFT Owned by</th>
                  <th className="text-center">Availability</th>
                  <th className="text-center">Owned Date</th>
                </tr>
              </thead>
              <tbody>
                {ownersList.map((owner, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>
                      <OwnerName
                        imgUrl={
                          !owner?.private && owner?.avatar_url
                            ? owner?.avatar_url
                            : user?.slug === owner?.slug && owner?.avatar_url
                            ? owner?.avatar_url
                            : images.userJPG
                        }
                        text={
                          !owner?.private && owner?.user_name
                            ? owner?.user_name
                            : user?.slug === owner?.slug
                            ? `@${user.first_name}${user.last_name}`
                            : owner?.user_name
                        }
                        isTable
                        slug={owner?.slug}
                        seller={true}
                      />
                    </td>
                    <td className="text-center">
                      <div className="usd-value">
                        {`${owner.sold_quantity} / ${nft.total_quantity}`}
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="date">
                        {dayjs(owner?.sold_at).format("MMM D, YYYY hh:mm A")}
                      </div>
                    </td>
                  </tr>
                ))}
                {owners.next_page && (
                  <tr>
                    <td className="text-center text-secondary p-3" colSpan="4">
                      <span role="button" onClick={fetchMoreHistory}>
                        Load More
                      </span>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

const ListLoader = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={700}
      height={160}
      viewBox="0 0 700 160"
      backgroundColor="#d9d9d9"
      foregroundColor="#ededed"
      {...props}
    >
      <rect x="50" y="6" rx="4" ry="4" width="630" height="38" />
      <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
      <rect x="50" y="55" rx="4" ry="4" width="630" height="38" />
      <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
      <rect x="50" y="104" rx="4" ry="4" width="630" height="38" />
      <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />
    </ContentLoader>
  );
};

export default OwnerList;

import React, { useState } from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { Modal, Table } from "react-bootstrap";
import { BiX } from "react-icons/bi";

import OwnerCard from "./owner-card";
import OwnerName from "./owner-name";
import userImg from "../../images/user_1.jpg";
import { OwnersTableLoader } from "../nft-basic-details/content-loader";
import { nftOwnerApi } from "../../api/methods";

import "./style.scss";

const OwnerList = ({ nft, nftOwners = [], totalCount }) => {
  const { slug } = useParams();
  const [modalShow, setModalShow] = useState(false);
  const [owners, setOwners] = useState({});
  const [ownersList, setOwnersList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => state.user.data);

  const fetchHistory = async (pageNo) => {
    try {
      let owners = await nftOwnerApi({ nft_slug: slug, page: pageNo });
      setOwnersList([...ownersList, ...owners.data.data.owners]);
      setOwners(owners.data.data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
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
      toast.error("Something went wrong");
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
        )}
      </div>

      <Modal size="xl" centered show={modalShow} className="history-modal">
        <Modal.Header className="bg-dark p-0">
          <Modal.Title className="flex-fill">
            <div className="modal-bid-history-title-content">
              <div className="modal-bid-history-title">List of Owners</div>
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
                            : userImg
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

export default OwnerList;

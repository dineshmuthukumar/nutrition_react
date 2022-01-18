import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  // sellerDetailApi,
  sellerFavedNFTSApi,
  sellerOwnedNFTsApi,
} from "../../api/methods";
import cardImage from "../../images/drops/nft_2.png";
// import userImage from "../../images/user_1.png";

import NFTCard from "../nft-card/index";
import "./style.scss";

const UserDetailsBlock = ({ setBanner }) => {
  const { slug } = useParams();
  const [key, setKey] = useState("owned");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [ownedList, setOwnedList] = useState([]);
  const [favedList, setFavedList] = useState([]);
  const [onSaleList, setOnSaleList] = useState([]);
  // const [sellerDetail, setSellerDetail] = useState({ users: [] });
  const [favedCount, setFavedCount] = useState(0);
  const [onSaleCount, setOnSaleCount] = useState(0);
  const [ownedCount, setOwnedCount] = useState(0);
  const [hasNext, setHasNext] = useState(false);

  const { user } = useSelector((state) => state.user.data);

  const getSellerOwnedNFTs = async (page) => {
    try {
      setLoading(true);
      const result = await sellerOwnedNFTsApi({ slug, page });
      setOwnedList(result.data.data.nfts);
      setOwnedCount(result.data.data.total_count);
      setHasNext(result.data.data.next_page);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getSellerFavedNFTs = async (page) => {
    try {
      setLoading(true);
      const result = await sellerFavedNFTSApi({ slug, page });
      setFavedList(result.data.data.nfts);
      setFavedCount(result.data.data.total_count);
      setHasNext(result.data.data.next_page);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // const getSellerDetail = async () => {
  //   try {
  //     setLoading(true);
  //     const result = await sellerDetailApi({ slug });
  //     setSellerDetail(result.data.data);
  //     setBanner(result.data.data.users[0]?.banner_url);

  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     // setLoading(false);
  //   }
  // };

  useEffect(() => {
    // getSellerDetail();
    getSellerOwnedNFTs(page);
    getSellerFavedNFTs(page);
  }, []);

  return (
    <>
      <section className="user-details-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="user-flexblock">
                {/* {sellerDetail && (
                  <article className="user-info-box">
                    <img
                      className="user-info-image"
                      src={
                        !sellerDetail?.users[0]?.private &&
                        sellerDetail?.users[0]?.avatar_url
                          ? sellerDetail?.users[0]?.avatar_url
                          : user?.slug === sellerDetail?.users[0]?.slug &&
                            sellerDetail?.users[0]?.avatar_url
                          ? sellerDetail?.users[0]?.avatar_url
                          : userImage
                      }
                    />
                    <h6 className="user-info-subname">
                      {sellerDetail?.users[0]?.user_name}
                    </h6>
                    <ul className="user-info-list">
                      <li>
                        <span className="key">Favorites</span>
                        <span className="value">
                          {sellerDetail.faved_count}
                        </span>
                      </li>
                      <li>
                        <span className="key">Owned</span>
                        <span className="value">
                          {sellerDetail.owned_count}
                        </span>
                      </li>
                    </ul>
                  </article>
                )} */}
                <div className="user-collection-box">
                  <div className="row">
                    <div className="col-sm-12">
                      {/* Place tab and filter here */}
                      <ul className="nav user-block-nav">
                        {/* <li className="nav-item">
                          <a
                            className={`nav-link ${
                              key === "onsale" ? "active" : ""
                            }`}
                            aria-current="page"
                            role="button"
                            onClick={() => setKey("onsale")}
                          >
                            On Sale ({onSaleCount})
                          </a>
                        </li> */}
                        <li className="nav-item">
                          <a
                            className={`nav-link ${
                              key === "owned" ? "active" : ""
                            }`}
                            aria-current="page"
                            role="button"
                            onClick={() => setKey("owned")}
                          >
                            Owned ({ownedCount})
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={`nav-link ${
                              key === "liked" ? "active" : ""
                            }`}
                            aria-current="page"
                            role="button"
                            onClick={() => setKey("liked")}
                          >
                            Favorites ({favedCount})
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    {(() => {
                      if (key === "owned") {
                        return ownedList.map((nft, i) => (
                          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            {/* <SellerNFTCard
                              key={`owned-${i}`}
                              nft={nft}
                              image={cardImage}
                            /> */}
                            <NFTCard
                              nft={nft}
                              key={`owned-${i}`}
                              image={cardImage}
                            />
                          </div>
                        ));
                      } else if (key === "liked") {
                        return favedList.map((nft, i) => (
                          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            {/* <SellerNFTCard
                              key={`liked-${i}`}
                              nft={nft}
                              image={cardImage}
                            /> */}
                            <NFTCard
                              nft={nft}
                              key={`liked-${i}`}
                              image={cardImage}
                            />
                          </div>
                        ));
                      } else {
                        return onSaleList.map((nft, i) => (
                          <div className="col-xl-4 col-lg-4 col-md- col-sm-6">
                            {/* <SellerNFTCard
                              key={`onsale-${i}`}
                              nft={nft}
                              image={cardImage}
                            /> */}
                            <NFTCard
                              nft={nft}
                              key={`onsale-${i}`}
                              image={cardImage}
                            />
                          </div>
                        ));
                      }
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDetailsBlock;

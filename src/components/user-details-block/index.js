import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { sellerFavedNFTSApi, sellerOwnedNFTsApi } from "../../api/methods";
import cardImage from "../../images/drops/nft_2.png";
import userImage from "../../images/amitabh.png";
import SellerNFTCard from "../seller-nft-card/index";
import "./style.scss";

const UserDetailsBlock = () => {
  const { slug } = useParams();
  const [key, setKey] = useState("owned");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [ownedList, setOwnedList] = useState([]);
  const [favedList, setFavedList] = useState([]);
  const [onSaleList, setOnSaleList] = useState([]);
  const [favedCount, setFavedCount] = useState(0);
  const [onSaleCount, setOnSaleCount] = useState(0);
  const [ownedCount, setOwnedCount] = useState(0);
  const [hasNext, setHasNext] = useState(false);

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

  useEffect(() => {
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
                <article className="user-info-box">
                  <img className="user-info-image" src={userImage} />
                  <h4 className="user-info-name">James</h4>
                  <h6 className="user-info-subname">@james</h6>
                  <ul className="user-info-list">
                    <li>
                      <span className="key">Favourites</span>
                      <span className="value">20</span>
                    </li>
                    <li>
                      <span className="key">Bought</span>
                      <span className="value">10</span>
                    </li>
                    <li>
                      <span className="key">Sold</span>
                      <span className="value">10</span>
                    </li>
                  </ul>
                </article>
                <div className="user-collection-box">
                  <div className="row">
                    <div className="col-sm-12">
                      {/* Place tab and filter here */}
                      <ul className="nav user-block-nav">
                        <li className="nav-item">
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
                        </li>
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
                            Liked ({favedCount})
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    {(() => {
                      if (key === "owned") {
                        return ownedList.map((nft, i) => (
                          <div class="col-xl-4 col-lg-4 col-md- col-sm-6">
                            <SellerNFTCard
                              key={`owned-${i}`}
                              nft={nft}
                              image={cardImage}
                            />
                          </div>
                        ));
                      } else if (key === "liked") {
                        return favedList.map((nft, i) => (
                          <div class="col-xl-4 col-lg-4 col-md- col-sm-6">
                            <SellerNFTCard
                              key={`owned-${i}`}
                              nft={nft}
                              image={cardImage}
                            />
                          </div>
                        ));
                      } else {
                        return onSaleList.map((nft, i) => (
                          <div class="col-xl-4 col-lg-4 col-md- col-sm-6">
                            <SellerNFTCard
                              key={`owned-${i}`}
                              nft={nft}
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

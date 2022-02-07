import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ContentLoader from "react-content-loader";
import { HiOutlineLockClosed } from "react-icons/hi";

import {
  sellerFavedNFTSApi,
  sellerOwnedNFTsApi,
  userOnsaleNFTsApi,
} from "../../api/methods";

import NFTCard from "../nft-card/index";
import "./style.scss";

const UserDetailsBlock = ({ userDetail }) => {
  const { slug } = useParams();
  const [key, setKey] = useState("owned");
  const [ownPage, setOwnPage] = useState(1);
  const [favPage, setFavPage] = useState(1);
  const [onsalePage, setOnsalePage] = useState(1);
  const [ownedLoading, setOwnedLoading] = useState(false);
  const [onsaleLoading, setOnsaleLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [favedLoadingMore, setFavedLoadingMore] = useState(false);
  const [onsaleLoadingMore, setOnsaleLoadingMore] = useState(false);
  const [ownedList, setOwnedList] = useState([]);
  const [favedList, setFavedList] = useState([]);
  const [onsaleList, setOnsaleList] = useState([]);

  const [favedCount, setFavedCount] = useState(0);

  const [ownedCount, setOwnedCount] = useState(0);
  const [onsaleCount, setOnsaleCount] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [hasNextFaved, setHasNextFaved] = useState(false);
  const [hasNextOnsale, setHasNextOnsale] = useState(false);

  const { user } = useSelector((state) => state.user.data);

  const getSellerOwnedNFTs = async (page) => {
    try {
      page === 1 && setOwnedLoading(true);
      setLoadingMore(true);
      const result = await sellerOwnedNFTsApi({ slug, page });
      setOwnedList([...ownedList, ...result.data.data.nfts]);
      setOwnedCount(result.data.data.total_count);
      setHasNext(result.data.data.next_page);
      page === 1 && setOwnedLoading(false);
      setLoadingMore(false);
    } catch (error) {
      console.log(error);
      setOwnedLoading(false);
    }
  };

  const getSellerFavedNFTs = async (page) => {
    try {
      page === 1 && setLoading(true);
      setFavedLoadingMore(true);
      const result = await sellerFavedNFTSApi({ slug, page });
      setFavedList([...favedList, ...result.data.data.nfts]);
      setFavedCount(result.data.data.total_count);
      setHasNextFaved(result.data.data.next_page);
      page === 1 && setLoading(false);
      setFavedLoadingMore(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getUserOnsaleNFTs = async (page) => {
    try {
      page === 1 && setOnsaleLoading(true);
      setOnsaleLoadingMore(true);
      const result = await userOnsaleNFTsApi({ slug, page });
      setOnsaleList([...onsaleList, ...result.data.data.nfts]);
      setOnsaleCount(result.data.data.total_count);
      setHasNextOnsale(result.data.data.next_page);
      page === 1 && setOnsaleLoading(false);
      setOnsaleLoadingMore(false);
    } catch (error) {
      // console.log(error);
      setOnsaleLoading(false);
    }
  };

  useEffect(() => {
    getSellerOwnedNFTs(ownPage);
    getSellerFavedNFTs(favPage);
    getUserOnsaleNFTs(onsalePage);
  }, []);

  const fetchMoreOwnedNFTs = () => {
    if (hasNext) {
      getSellerOwnedNFTs(ownPage + 1);
      setOwnPage(ownPage + 1);
    }
  };

  const fetchMoreFavedNFTs = () => {
    if (hasNextFaved) {
      getSellerFavedNFTs(favPage + 1);
      setFavPage(favPage + 1);
    }
  };

  const fetchMoreOnsaleNFTs = () => {
    if (hasNextOnsale) {
      getUserOnsaleNFTs(onsalePage + 1);
      setOnsalePage(onsalePage + 1);
    }
  };

  return (
    <>
      <section className="user-details-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="user-flexblock">
                <div className="user-collection-box">
                  <div className="row">
                    <div className="col-sm-12">
                      {/* Place tab and filter here */}
                      <ul className="nav user-block-nav">
                        <li className="nav-item">
                          <span
                            className={`nav-link ${
                              key === "owned" ? "active" : ""
                            }`}
                            aria-current="page"
                            role="button"
                            onClick={() => setKey("owned")}
                          >
                            Owned ({ownedCount})
                          </span>
                        </li>
                        <li className="nav-item">
                          <span
                            className={`nav-link ${
                              key === "liked" ? "active" : ""
                            }`}
                            aria-current="page"
                            role="button"
                            onClick={() => setKey("liked")}
                          >
                            Favorites ({favedCount})
                          </span>
                        </li>
                        <li className="nav-item">
                          <span
                            className={`nav-link ${
                              key === "liked" ? "active" : ""
                            }`}
                            aria-current="page"
                            role="button"
                            onClick={() => setKey("onsale")}
                          >
                            Onsale ({onsaleCount})
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    {(() => {
                      if (key === "owned") {
                        return !ownedLoading ? (
                          ownedList.length > 0 ? (
                            <>
                              {ownedList.map((nft, i) => (
                                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                  <NFTCard
                                    key={`owned-${i}`}
                                    nft={nft}
                                    ownedCard={true}
                                  />
                                </div>
                              ))}

                              {!ownedLoading && loadingMore && (
                                <NFTCardLoader />
                              )}

                              {hasNext && (
                                <div className="row mb-5">
                                  <div className="col-md-12 text-center">
                                    <button
                                      className="load_more"
                                      disabled={loadingMore}
                                      onClick={fetchMoreOwnedNFTs}
                                    >
                                      {loadingMore ? "Loading..." : "Load More"}
                                    </button>
                                  </div>
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="col-12 text-center">
                              <h3 className="my-3">No Owned NFTs Yet!</h3>
                            </div>
                          )
                        ) : (
                          <NFTCardLoader />
                        );
                      } else if (key === "liked") {
                        return !loading ? (
                          favedList.length > 0 ? (
                            <>
                              {favedList.map((nft, i) => (
                                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                  <NFTCard key={`liked-${i}`} nft={nft} />
                                </div>
                              ))}

                              {!loading && favedLoadingMore && (
                                <NFTCardLoader />
                              )}

                              {hasNextFaved && (
                                <div className="row mb-5">
                                  <div className="col-md-12 text-center">
                                    <button
                                      className="load_more"
                                      disabled={favedLoadingMore}
                                      onClick={fetchMoreFavedNFTs}
                                    >
                                      {favedLoadingMore
                                        ? "Loading..."
                                        : "Load More"}
                                    </button>
                                  </div>
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="col-12 text-center">
                              <h3 className="my-3">No Favorites Yet!</h3>
                            </div>
                          )
                        ) : (
                          <NFTCardLoader />
                        );
                      } else if (key === "onsale") {
                        return !onsaleLoading ? (
                          onsaleList.length > 0 ? (
                            <>
                              {onsaleList.map((nft, i) => (
                                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                  <NFTCard
                                    key={`onsale-${i}`}
                                    nft={nft}
                                    onsale
                                  />
                                </div>
                              ))}

                              {!onsaleLoading && onsaleLoadingMore && (
                                <NFTCardLoader />
                              )}

                              {hasNextOnsale && (
                                <div className="row mb-5">
                                  <div className="col-md-12 text-center">
                                    <button
                                      className="load_more"
                                      disabled={onsaleLoadingMore}
                                      onClick={fetchMoreOnsaleNFTs}
                                    >
                                      {onsaleLoadingMore
                                        ? "Loading..."
                                        : "Load More"}
                                    </button>
                                  </div>
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="col-12 text-center">
                              <h3 className="my-3">No Orders Yet!</h3>
                            </div>
                          )
                        ) : (
                          <NFTCardLoader />
                        );
                      }
                    })()}
                  </div>
                </div>
              </div>
            </div>
            {/* )} */}
          </div>
        </div>
      </section>
    </>
  );
};

const NFTCardLoader = (props) => (
  <ContentLoader
    viewBox="0 0 900 300"
    width={"100%"}
    height={"100%"}
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    className="mt-1"
    {...props}
  >
    <rect x="0" y="5" rx="2" ry="2" width="218" height="280" />
    <rect x="228" y="5" rx="2" ry="2" width="218" height="280" />
    <rect x="456" y="5" rx="2" ry="2" width="218" height="280" />
    <rect x="684" y="5" rx="2" ry="2" width="218" height="280" />
  </ContentLoader>
);

export default UserDetailsBlock;

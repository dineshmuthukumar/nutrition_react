import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ContentLoader from "react-content-loader";

import { sellerFavedNFTSApi, sellerOwnedNFTsApi } from "../../api/methods";

import NFTCard from "../nft-card/index";
import "./style.scss";

const UserDetailsBlock = () => {
  const { slug } = useParams();
  const [key, setKey] = useState("owned");
  const [page, setPage] = useState(1);
  const [ownedLoading, setOwnedLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [favedLoadingMore, setFavedLoadingMore] = useState(false);
  const [ownedList, setOwnedList] = useState([]);
  const [favedList, setFavedList] = useState([]);

  const [favedCount, setFavedCount] = useState(0);

  const [ownedCount, setOwnedCount] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [hasNextFaved, setHasNextFaved] = useState(false);

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

  useEffect(() => {
    getSellerOwnedNFTs(page);
    getSellerFavedNFTs(page);
  }, []);

  const fetchMoreOwnedNFTs = () => {
    if (hasNext) {
      getSellerOwnedNFTs(page + 1);
      setPage(page + 1);
    }
  };

  const fetchMoreFavedNFTs = () => {
    if (hasNext) {
      getSellerFavedNFTs(page + 1);
      setPage(page + 1);
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
                          <a
                            href="#"
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
                            href="#"
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

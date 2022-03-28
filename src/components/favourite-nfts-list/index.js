/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import { userFavedNFTOrders } from "../../api/methods";

import NFTCard from "../nft-card";
import sample from "../../images/sampleNFT.jpg";

import "./style.scss";

const FavouriteNftsList = () => {
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    showAllNFTs(1);
  }, []);

  const showAllNFTs = async (page) => {
    try {
      page === 1 && setLoading(true);
      setLoadingMore(true);
      let response = await userFavedNFTOrders(page);
      console.log(response, "response");
      setList([...list, ...response.data.data.orders]);
      setHasNext(response.data.data.next_page);
      page === 1 && setLoading(false);
      setLoadingMore(false);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMore = () => {
    if (hasNext) {
      setPage(page + 1);
      showAllNFTs(page + 1);
      setPage(page + 1);
    }
  };

  return (
    <>
      <section className="explore-nft-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="sec-heading d-flex align-items-center mb-5 explore-heading">
                <div className="flex-heading">
                  <span className="title full-width-title">
                    ❤️ My Favorites On Sale
                  </span>
                </div>
              </div>

              {!loading ? (
                <div className="row">
                  {list.length > 0 ? (
                    list.map((nft, i) => (
                      <div
                        key={`list-nft-${i}`}
                        className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                      >
                        <NFTCard
                          nft={nft}
                          key={i}
                          image={sample}
                          favouriteNFTs
                        />
                      </div>
                    ))
                  ) : (
                    <div className="col-12 text-center mb-5">
                      <h3 className="my-3">No Records Found!</h3>
                    </div>
                  )}

                  {!loading && loadingMore && <NFTCardLoader />}

                  {hasNext && (
                    <div className="row mb-5">
                      <div className="col-md-12 text-center">
                        <button
                          className="load_more"
                          disabled={loadingMore}
                          onClick={fetchMore}
                        >
                          {loadingMore ? "Loading..." : "Load More"}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NFTCardLoader />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const NFTCardLoader = (props) => (
  <ContentLoader
    viewBox="0 50 900 300"
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

export default FavouriteNftsList;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import ContentLoader from "react-content-loader";

import ExploreTitle from "./explore-title";
import NFTCard from "../nft-card/index";
import cardImage from "../../images/drops/nft_2.png";

import "./style.scss";
import { nftCategoryListApi } from "../../api/methods";
import ExploreCard from "./explore-card";

const Explore = ({ categoryDetail }) => {
  const { slug } = useParams();

  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    nftList(page);
  }, []);

  const nftList = async (page) => {
    try {
      setLoading(true);
      let response = await nftCategoryListApi({
        slug: slug,
        page,
      });
      setList([...list, ...response.data.data.nfts]);
      setHasNext(response.data.data.next_page);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMore = () => {
    if (hasNext) {
      setLoadingMore(true);
      nftList(page + 1);
      setPage(page + 1);
      setLoadingMore(false);
    }
  };

  return (
    <>
      <section className="explore-drops">
        <div className="container-fluid">
          <div className="row mt-5 explore-title">
            <ExploreTitle
              title={categoryDetail.name}
              description={categoryDetail.description}
            />
          </div>
          <div className="row">
            <div className="about-user mt-5">
              <div className="row">
                <div className="col-md-12 ">
                  <div className="about-heading mb-4">
                    <div>
                      <h3 className="about-title">Showing ({list.length})</h3>
                    </div>
                    <div>
                      <ul className="nav user-nav">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="#"
                          >
                            {/* Filter By */}
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            {/* Sort By */}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gutters-20">
                {loading ? (
                  <NFTListLoader />
                ) : (
                  <>
                    {list.map((nft) => {
                      let label = "",
                        time,
                        isEnded = false,
                        isStarted = false,
                        bidBuyValue = 0;

                      if (
                        new Date(nft.auction_start_time) > new Date(nft.time)
                      ) {
                        label = "Starting in";
                        time = nft.auction_start_time;
                      } else if (
                        new Date(nft.auction_end_time) > new Date(nft.time)
                      ) {
                        label = "Ends in";
                        isStarted = true;

                        time = nft.auction_end_time;
                      } else {
                        time = nft.auction_end_time;
                        label = "Ended at";
                        isEnded = true;
                      }

                      if (nft.nft_type === "erc721") {
                        bidBuyValue = nft.minimum_bid;
                      } else {
                        bidBuyValue = nft.buy_amount;
                      }

                      return (
                        <ExploreCard
                          key={nft.slug}
                          slug={nft.slug}
                          nft={nft}
                          isStarted={isStarted}
                          isEnded={isEnded}
                          time={time}
                          label={label}
                          title={nft.name}
                          bidPrice={bidBuyValue}
                          desc={nft.description}
                          nftType={nft.nft_type}
                        />
                      );
                    })}
                  </>
                )}
              </div>
              {/* {hasMore && (
                <div className="row mb-5">
                  <div className="col-md-12 text-center">
                    <button
                      className="load_more"
                      disabled={loadingMore}
                      onClick={handleClick}
                    >
                      {loadingMore ? "Loading..." : "Load More"}
                    </button>
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const NFTListLoader = (props) => (
  <ContentLoader
    viewBox="0 0 900 400"
    width={"100%"}
    height={"100%"}
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    className="mt-3"
    {...props}
  >
    <rect x="12" y="5" rx="2" ry="2" width="280" height="300" />
    <rect x="308" y="5" rx="2" ry="2" width="280" height="300" />
    <rect x="600" y="5" rx="2" ry="2" width="280" height="300" />
  </ContentLoader>
);

export default Explore;

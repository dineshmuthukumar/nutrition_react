/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ContentLoader from "react-content-loader";

import ExploreCard from "./explore-card";
import ExploreTitle from "./explore-title";

import "./style.scss";

const Explore = ({ list = [], handleClick, hasMore, loading, loadingMore }) => {
  const { name } = useParams();
  const [explore, setExplore] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (name.includes("Madhushala")) {
      setExplore({
        title: "Madhushala NFTs",
        description: `Madhushala is a poetic confluence of romance and philosophy, penned by Amit-Ji's dad Shri. Harivansh Rai Bachchan!        `,
      });
    } else if (name.includes("Posters")) {
      setExplore({
        title: "Poster Autographing Moments",
        description: `Now you can own a video of Amitabh signing an original movie poster of his iconic movies, hand-painted by a few authentic artists whose work will amaze you in every way. The winner of these NFTs also gets a physical poster autographed by the Legend Amitabh Bachchan himself.`,
      });
    } else {
      setExplore({
        title: "BigB Punks and NFT Arts",
        description: `Let's admit it! Amitabh, in every avatar, has been a success! Be it the classic 'Angry Young Man', or the modern French-bearded Godfather with his signature 'DEVIYON aur SAJJANO', or the Twitter personality who numbers his Tweets, the BigB can never be off trends!`,
      });
    }
  }, [name]);

  return (
    <>
      <section className="explore-drops">
        <div className="container-fluid">
          <div className="row mt-5 explore-title">
            <ExploreTitle
              title={explore.title}
              description={explore.description}
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
                  <ActivityList />
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
                        time = nft.auction_end_time;
                        isStarted = true;
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
              {hasMore && (
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
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ActivityList = (props) => (
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

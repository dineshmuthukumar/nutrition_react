/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import ExploreCard from "./explore-card";
import ExploreTitle from "./explore-title";

import "./style.scss";

const Explore = ({ list = [], handleClick, hasMore }) => {
  const { name } = useParams();
  const [explore, setExplore] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (name.includes("Madhushala")) {
      setExplore({
        title: "Madhushala Collections",
        description: `BeyondLife.club brings you the philosophical undertones of Madhushala in
        Amitabh's baritone as an NFT!. Now you can own a recorded version of
        Madhushala, curated by Amitabh Bachchan himself.`,
      });
    } else if (name.includes("Posters")) {
      setExplore({
        title: "Autographed Posters",
        description: `Now you can own an original movie poster of India’s legendary icon, hand-painted by a few authentic artists whose work will amaze you in every way. The cult value of their masterpieces is a statement of ethnicity, authenticity, Indian cinema’s legacy, and beyond.`,
      });
    } else {
      setExplore({
        title: "Crypto Punks",
        description: `Let’s admit it! Amitabh, in every Avatar, has been a success! Be it the classic ‘Angry Young Man’, or the modern French-bearded Godfather with his signature ‘Devion or Sajjanon’, or the Twitter personality who numbers his Tweets, the Big B can never be off trends!`,
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
                            className="nav-link active px-5"
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
                {list.map((nft) => {
                  let label = "",
                    time,
                    isEnded = false,
                    isStarted = false,
                    bidBuyValue = 0;

                  if (new Date(nft.auction_start_time) > new Date(nft.time)) {
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
              </div>
              {hasMore && (
                <div className="row mb-5">
                  <div className="col-md-12 text-center">
                    <button className="load_more" onClick={handleClick}>
                      Load More
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

export default Explore;

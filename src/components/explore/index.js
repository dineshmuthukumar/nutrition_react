import React from "react";
import postOne from "../../images/post1.png";
import postTwo from "../../images/post2.png";
import postThree from "../../images/post3.png";
import ExploreCard from "./explore-card";
import ExploreCardTwo from "./explore-card-two";
import "./style.scss";

const Explore = ({ list = [], handleClick, hasMore }) => {
  return (
    <>
      <section className="explore-drops">
        <div className="container">
          <div className="row mt-5 explore-title">
            <div className="col-md-6">
              <h1>Madhushala Collections</h1>
              <p>
                BeyondLife.club brings you the philosophical undertones of
                Madhushala in Amitabh’s baritone as an NFT!. Now you can own a
                recorded version of Madhushala, curated by Amitabh Bachchan
                himself.
              </p>
            </div>
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
                    // <ExploreCard
                    //   slug={nft.slug}
                    //   nft={nft}
                    //   isStarted={isStarted}
                    //   isEnded={isEnded}
                    //   time={time}
                    //   label={label}
                    //   title={nft.name}
                    //   bidPrice={bidBuyValue}
                    //   desc={nft.description}
                    //   nftType={nft.nft_type}
                    // />
                    <ExploreCardTwo
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

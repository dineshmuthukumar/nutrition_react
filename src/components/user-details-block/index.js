import React from "react";
import "./style.scss";

import NFTCard from "../nft-card";

import cardImage from "../../images/drops/nft_2.png";
import userImage from "../../images/amitabh.png";

const UserDetailsBlock = () => {
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
                            className={`nav-link active`}
                            aria-current="page"
                            role="button"
                          >
                            On Sale (4)
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={`nav-link`}
                            aria-current="page"
                            role="button"
                          >
                            Owned (3)
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={`nav-link`}
                            aria-current="page"
                            role="button"
                          >
                            Liked (3)
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div class="col-xl-4 col-lg-4 col-md- col-sm-6">
                      <NFTCard image={cardImage} />
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md- col-sm-6">
                      <NFTCard image={cardImage} />
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md- col-sm-6">
                      <NFTCard image={cardImage} />
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md- col-sm-6">
                      <NFTCard image={cardImage} />
                    </div>
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

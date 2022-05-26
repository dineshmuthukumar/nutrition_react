import React from "react";
import { useHistory } from "react-router";
import images from "../../utils/images.json";
import "./style.scss";

const CollectionList = () => {
  const history = useHistory();
  return (
    <>
      <section className="collection-list-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="section-heading">
                <span className="main-title">NFT Collections</span>{" "}
              </h2>
              <h2 className="section-heading">
                <span className="sub-title">CHECK IT OUT</span>
              </h2>
              <p className="collection-para-desc">
                The Jump.trade NFT marketplace enables you to buy Cricket NFTs
                belonging to 2 categories - the Meta Cricket League NFTs and the
                Meta Cricket League Signed Bat NFTs. The marketplace will also
                feature many more sports NFTs in the future.
              </p>

              <article className="collection-list">
                <div
                  className="collection-box"
                  onClick={() =>
                    history.push(
                      "/nft-marketplace/cricket-player-nfts/3WAoJq4KtGY72QdN"
                    )
                  }
                >
                  <img
                    src={images.collectionOneGIF}
                    className="collection-img"
                    alt="Sports NFT Marketplace"
                  />
                  <h4
                    style={{
                      textShadow: "3px 3px #093824",
                      textTransform: "uppercase",
                    }}
                  >
                    Meta Cricket League Players
                  </h4>
                </div>
                <div
                  className="collection-box"
                  onClick={() =>
                    history.push(
                      "/nft-marketplace/cricket-bat-nfts/5LpmjlAwtGEqK3rO"
                    )
                  }
                >
                  <img
                    src={images.collectionTwoGIF}
                    className="collection-img"
                    alt="Sports NFT Marketplace"
                  />
                  <h4
                    style={{
                      textShadow: "3px 3px #093824",
                      textTransform: "uppercase",
                    }}
                  >
                    Meta Cricket League Signed Bat
                  </h4>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionList;

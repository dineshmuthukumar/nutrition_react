import React from "react";
import ContentLoader from "react-content-loader";
import { useHistory } from "react-router-dom";
import NFTMore from "../nft-more/index";

import "./style.scss";

const FavouriteNFTs = ({ list = [], loading = false }) => {
  const history = useHistory();

  return (
    <>
      <section className="favorite-collection-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="sec-heading fav-flex-box">
                <span className="title full-width-title">
                  ❤️ My Favorites<span> On Sale</span>
                </span>
                <span
                  className="viewallBtnliveaction"
                  onClick={() => history.push("/nfts/favorites")}
                >
                  View all
                </span>
              </div>

              {!loading ? (
                <div className="row">
                  {list.length > 0 ? (
                    <NFTMore nftList={list} hideTitle favouriteNFT />
                  ) : (
                    <div className="col-12 text-center">
                      <h3 className="my-3">
                        You'll Soon See A Favourite NFTs!
                      </h3>
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

export default FavouriteNFTs;

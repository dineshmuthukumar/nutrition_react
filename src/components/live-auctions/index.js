import React, { useEffect, useState } from "react";
import NFTCard from "../nft-card";
import { toast } from "react-toastify";
import ContentLoader from "react-content-loader";
import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import cardImage from "../../images/drops/nft_2.png";
import { liveAuctionNFTsApi } from "../../api/methods";
import NFTMore from "../nft-more/index";
import { useHistory } from "react-router-dom";

import "./style.scss";

const LiveAuctions = () => {
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);

  useEffect(() => {
    liveAuctionNFTList(page);
  }, []);

  const liveAuctionNFTList = async (page) => {
    try {
      setLoading(true);
      let response = await liveAuctionNFTsApi(page);

      setList([...list, ...response.data.data.nfts]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error(
        "The request could not be processed at this time. Please try again."
      );
    }
  };

  return (
    <>
      <section className="hot-collection-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="sec-heading live-flex-box">
                <span className="title">Live Auctions</span>
                <span
                  className="viewallBtnliveaction"
                  onClick={() => history.push("/nfts/live-auction")}
                >
                  View all
                </span>
              </div>

              {!loading ? (
                <div className="row">
                  {list.length > 0 ? (
                    <NFTMore nftList={list} hideTitle />
                  ) : (
                    <div className="col-12 text-center">
                      <h3 className="my-3">
                        You'll Soon See A Live Auction NFTs!
                      </h3>
                    </div>
                  )}

                  {/* {list.length > 0
                    ? list.map((nft, i) => (
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                          <NFTCard nft={nft} key={i} image={cardImage} />
                        </div>
                      ))
                    : "No Records Found!"} */}
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

export default LiveAuctions;

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import ContentLoader from "react-content-loader";
import { topTradesApi } from "../../api/methods";
import NFTMore from "../nft-more/index";
import "./style.scss";

const RecentlySoldNFT = () => {
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    topTradesList(page);
  }, []);

  const topTradesList = async (page) => {
    try {
      setLoading(true);
      let response = await topTradesApi({ page });
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
              <h1 className="sec-heading flex-box">
                Recently Sold
                <span
                  className="viewallBtn"
                  onClick={() => history.push("/nfts/recently-sold")}
                >
                  View all
                </span>
              </h1>

              {!loading ? (
                <div className="row">
                  {list.length > 0 ? (
                    <NFTMore nftList={list} hideTitle recentSold />
                  ) : (
                    <div className="col-12 text-center">
                      <h3 className="my-3">No Records Found!</h3>
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

export default RecentlySoldNFT;

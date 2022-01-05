import React, { useEffect, useState } from "react";
import NFTCard from "../nft-card";
import { nftShowAllApi } from "../../api/methods";
import cardImage from "../../images/drops/nft_2.png";
import ContentLoader from "react-content-loader";
import "./style.scss";

const ShowAll = () => {
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    showAllNFTs(page);
  }, []);

  const showAllNFTs = async (page) => {
    try {
      page === 1 && setLoading(true);
      setLoadingMore(true);
      let response = await nftShowAllApi({ page });
      setList([...list, ...response.data.data.nfts]);
      setHasNext(response.data.data.next_page);
      page === 1 && setLoading(false);
      setLoadingMore(false);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMore = () => {
    if (hasNext) {
      showAllNFTs(page + 1);
      setPage(page + 1);
    }
  };
  return (
    <>
      <section className="showall-nft-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="sec-heading">
                <span>
                  {!loading ? `Showing All (${list.length})` : <ShowCount />}
                </span>
              </h1>
              {!loading ? (
                <div className="row">
                  {list.length > 0
                    ? list.map((nft, i) => (
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                          <NFTCard nft={nft} key={i} image={cardImage} />
                        </div>
                      ))
                    : "No Data Found!"}

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
    viewBox="0 50 900 400"
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

const ShowCount = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={50}
    viewBox="0 0 300 50"
    backgroundColor="#d9d9d9"
    foregroundColor="#ededed"
    {...props}
  >
    <rect x="0" y="6" rx="0" ry="0" width="343" height="38" />
  </ContentLoader>
);

export default ShowAll;

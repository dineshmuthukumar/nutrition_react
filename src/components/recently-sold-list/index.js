/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import { useHistory, useParams } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { nftRecentlySoldApi } from "../../api/methods";
import NFTCard from "../nft-card";
import images from "../../utils/images.json";
import "./style.scss";
import useQuery from "../../hook/useQuery";
import { BiCaretDown } from "react-icons/bi";
import { useWindowSize } from "../../utils/useWindowSize";
import RecentSoldLoader from "../../utils/recentSoldCardLoader";

const RecentlySoldList = () => {
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const query = useQuery();
  const { slug } = useParams();

  const [filter, setFilter] = useState({
    sort: [
      {
        name: "Recently Sold",
        value: "recently_sold",
        checked: true,
      },
      {
        name: "Price - High to Low",
        value: "price_desc",
        checked: false,
      },
      {
        name: "Price - Low to High",
        value: "price_asc",
        checked: false,
      },
    ],
  });

  useEffect(() => {
    const sort_filters = query.get("sort")
      ? query.get("sort")
      : "recently_sold";

    const info = { ...filter };

    info.sort = filter.sort.map((obj) => ({
      ...obj,
      checked: sort_filters ? sort_filters === obj.value : false,
    }));
    showAllFilteredNFTs(1, sort_filters);
    setPage(1);
    setFilter(info);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, query]);

  const showAllNFTs = async (page, sort = "recently_sold") => {
    try {
      page === 1 && setLoading(true);
      setLoadingMore(true);
      let response = await nftRecentlySoldApi(page, sort);
      setList([...list, ...response.data.data.nfts]);
      setHasNext(response.data.data.next_page);
      page === 1 && setLoading(false);
      setLoadingMore(false);
    } catch (err) {
      console.log(err);
    }
  };

  const showAllFilteredNFTs = async (page, sort = "recently_sold") => {
    try {
      page === 1 && setLoading(true);
      setLoadingMore(true);
      let response = await nftRecentlySoldApi(page, sort);
      setList(response.data.data.nfts);
      setHasNext(response.data.data.next_page);
      page === 1 && setLoading(false);
      setLoadingMore(false);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMore = () => {
    if (hasNext) {
      const sort_filters = query.get("sort")
        ? query.get("sort")
        : "recently_sold";

      showAllNFTs(page + 1, sort_filters);
      setPage(page + 1);
    }
  };

  const ShowAllSort = React.forwardRef(({ onClick }, ref) => (
    <div
      className="filter-drop-sort-btn"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {filter.sort.find((obj) => obj.checked === true)?.name
        ? `Sort By: ${filter.sort.find((obj) => obj.checked === true).name}`
        : "Sort By"}
      <BiCaretDown className="mb-1" />
    </div>
  ));

  const handleSortNFT = (input) => {
    const sort_exist = input.value;

    let query_string = "";

    if (sort_exist) {
      query_string += query_string
        ? `&sort=${sort_exist}`
        : `sort=${sort_exist}`;
    }

    history.push(`/nft-marketplace/sale-history?${query_string}`);
  };

  return (
    <>
      <section className="explore-nft-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="sec-heading d-flex align-items-center mb-5  explore-heading">
                <div class="col-md-8">
                  <h1 className="me-4 text-nowrap">RECENTLY SOLD</h1>
                  <p className="sub-heading-p">
                    Take a look at some of the super-cool cricket NFTs you
                    missed out on buying. But no worries you can still head to
                    the listed NFTs section and buy your favorite cricket NFT.
                    There is no time for waiting anymore go get it now!
                  </p>
                </div>

                <span className="d-flex justify-content-end mt-2 w-100 filter-blocks">
                  <div className="filt-flex-box">
                    <Dropdown>
                      <Dropdown.Toggle
                        align="start"
                        drop="start"
                        as={ShowAllSort}
                      ></Dropdown.Toggle>

                      <Dropdown.Menu align="start">
                        {filter.sort.map((obj, i) => (
                          <Dropdown.Item
                            key={`nft${i}`}
                            as="button"
                            onClick={() => handleSortNFT(obj)}
                          >
                            <FaCheckCircle
                              color={obj.checked ? "green" : "#ccc"}
                              className="mb-1 me-2"
                              size={17}
                            />{" "}
                            {obj.name}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </span>
              </div>

              {!loading ? (
                <div className="row">
                  {list.length > 0 ? (
                    list.map((nft, i) => (
                      <div
                        key={`list-nft-${i}`}
                        className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                      >
                        <NFTCard
                          nft={nft}
                          key={i}
                          image={images.sample}
                          recentSold
                        />
                      </div>
                    ))
                  ) : (
                    <div className="col-12 text-center mb-5">
                      <h3 className="my-3">No Records Found!</h3>
                    </div>
                  )}

                  {!loading && loadingMore && <RecentSoldLoader />}

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
                <RecentSoldLoader />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};



export default RecentlySoldList;

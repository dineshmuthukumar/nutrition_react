/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import { useHistory, useParams } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { liveAuctionNFTsApi } from "../../api/methods";
import { FormControl } from "react-bootstrap";

import NFTCard from "../nft-card";
import sample from "../../images/sampleNFT.jpg";
import "./style.scss";
import useQuery from "../../hook/useQuery";
import { BiCaretDown } from "react-icons/bi";

const LiveAuctionsList = () => {
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
        name: "Auction Ending Soon",
        value: "auction_ending_soon",
        checked: true,
      },
      {
        name: "Auction Starting Soon",
        value: "auction_starting_soon",
        checked: false,
      },
    ],
  });

  useEffect(() => {
    const sort_filters = query.get("sort")
      ? query.get("sort")
      : "auction_ending_soon";

    const info = { ...filter };

    info.sort = filter.sort.map((obj) => ({
      ...obj,
      checked: sort_filters ? sort_filters === obj.value : false,
    }));
    showAllFilteredNFTs(1, sort_filters);
    setPage(1);
    setFilter(info);
  }, [slug, query]);

  const showAllNFTs = async (page, sort = "auction_ending_soon") => {
    try {
      page === 1 && setLoading(true);
      setLoadingMore(true);
      console.log(page, "page");
      let response = await liveAuctionNFTsApi(page, sort);
      setList([...list, ...response.data.data.nfts]);
      setHasNext(response.data.data.next_page);
      page === 1 && setLoading(false);
      setLoadingMore(false);
    } catch (err) {
      console.log(err);
    }
  };

  const showAllFilteredNFTs = async (page, sort = "auction_ending_soon") => {
    try {
      page === 1 && setLoading(true);
      setLoadingMore(true);

      console.log(page, "page");

      let response = await liveAuctionNFTsApi(page, sort);
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
        : "auction_ending_soon";

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

  const [priceRangeFilter, setPriceRangeFilter] = useState({
    from: "",
    to: "",
  });

  const PriceDropdown = React.forwardRef(({ onClick }, ref) => (
    <div
      className="filter-drop-btn"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      Price Range <BiCaretDown />
    </div>
  ));
  const PriceMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      const [priceRange, setPriceRange] = useState({
        from: "",
        to: "",
      });

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <div className="d-flex">
            <span className="category-search-block me-1">
              <FormControl
                autoFocus
                className="category-search"
                placeholder="From"
                onChange={(e) => {
                  setPriceRange({ ...priceRange, from: e.target.value });
                }}
                value={priceRange.from}
              />
            </span>
            <span className="category-search-block">
              <FormControl
                autoFocus
                className="category-search"
                placeholder="To"
                onChange={(e) => {
                  setPriceRange({ ...priceRange, to: e.target.value });
                }}
                value={priceRange.to}
              />
            </span>
          </div>
          {/* <hr className="mt-2 mb-1 bot-border-hr" /> */}
          <div className="prifilter-btn">
            <button
              type="button"
              class="justify-content-center border dropdown-item"
              onClick={(e) => {
                setPriceRange({ from: "", to: "" });
              }}
            >
              Clear
            </button>
            <button
              type="button"
              class="justify-content-center border dropdown-item apply-btn"
              onClick={(e) => {
                setPriceRangeFilter({ ...priceRange });
              }}
            >
              Apply
            </button>
            {React.Children.toArray(children).filter((child) => child)}
          </div>
        </div>
      );
    }
  );

  const handleSortNFT = (input) => {
    const sort_exist = input.value;

    let query_string = "";

    if (sort_exist) {
      query_string += query_string
        ? `&sort=${sort_exist}`
        : `sort=${sort_exist}`;
    }

    history.push(`/nfts/live-auction?${query_string}`);
  };

  const reloadNFTList = async () => {
    try {
      let response = await liveAuctionNFTsApi({ page });
      setList(response.data.data.nfts);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="explore-nft-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="sec-heading d-flex align-items-center mb-5 explore-heading">
                <span className="me-4 text-nowrap">Live Auction</span>
                <span className="d-flex justify-content-end mt-2 w-100 filter-blocks">
                  <div className="filt-flex-box">
                    <Dropdown>
                      <Dropdown.Toggle
                        align="start"
                        drop="start"
                        as={PriceDropdown}
                      ></Dropdown.Toggle>

                      <Dropdown.Menu align="start" as={PriceMenu}>
                        {/* <Dropdown.Item
                          as="button"
                          className="justify-content-center border me-2"
                          // onClick={() => handleCategoryCheck(obj)}
                        >
                          Cancel
                        </Dropdown.Item> */}
                        {/* <Dropdown.Item
                          as="button"
                          className="justify-content-center border bg-light"
                          // onClick={() => handleCategoryCheck(obj)}
                        >
                          Apply
                        </Dropdown.Item> */}
                      </Dropdown.Menu>
                    </Dropdown>

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
                          image={sample}
                          liveAuction
                          reloadNFTList={reloadNFTList}
                        />
                      </div>
                    ))
                  ) : (
                    <div className="col-12 text-center mb-5">
                      <h3 className="my-3">No Records Found!</h3>
                    </div>
                  )}

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

export default LiveAuctionsList;

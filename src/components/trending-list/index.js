/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import { useHistory, useParams } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { trendingNFTsApi } from "../../api/methods";
import { FormControl } from "react-bootstrap";

import NFTCard from "../nft-card";
import sample from "../../images/sampleNFT.jpg";
import "./style.scss";
import useQuery from "../../hook/useQuery";
import { BiCaretDown } from "react-icons/bi";
import { validateCurrency } from "../../utils/common";

const TrendingList = () => {
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
        name: "Bid Count - High to Low",
        value: "bid_count_desc",
        checked: true,
      },
      {
        name: "Bid Count - Low to High",
        value: "bid_count",
        checked: false,
      },
      {
        name: "Bid Price - High to Low",
        value: "price_desc",
        checked: false,
      },
      {
        name: "Bid Price - Low to High",
        value: "price",
        checked: false,
      },
      {
        name: "Auction Ending Soon",
        value: "auction_ending_soon",
        checked: false,
      },
    ],
  });

  useEffect(() => {
    const sort_filters = query.get("sort")
      ? query.get("sort")
      : "bid_count_desc";
    const price_range = {
      from: query.get("minPrice"),
      to: query.get("maxPrice"),
    };

    const info = { ...filter };

    info.sort = filter.sort.map((obj) => ({
      ...obj,
      checked: sort_filters ? sort_filters === obj.value : false,
    }));
    setPage(1);
    setFilter(info);
    if (price_range.from || price_range.to) {
      setPriceRangeFilter(price_range);
    }
  }, [slug, query]);

  useEffect(() => {
    const sort_filters = query.get("sort")
      ? query.get("sort")
      : "bid_count_desc";

    const price_range = {
      from: query.get("minPrice"),
      to: query.get("maxPrice"),
      from: query.get("minPrice") ? query.get("minPrice") : "",
      to: query.get("maxPrice") ? query.get("maxPrice") : "",
    };

    showAllFilteredNFTs(1, sort_filters, price_range);
  }, [query]);

  const showAllNFTs = async (page, sort = "bid_count_desc", price_range) => {
    try {
      let filter = {
        price_range,
      };
      page === 1 && setLoading(true);
      setLoadingMore(true);
      let response = await trendingNFTsApi(page, sort, filter);
      setList([...list, ...response.data.data.nfts]);
      setHasNext(response.data.data.next_page);
      page === 1 && setLoading(false);
      setLoadingMore(false);
    } catch (err) {
      console.log(err);
    }
  };

  const showAllFilteredNFTs = async (
    page,
    sort = "bid_count_desc",
    price_range
  ) => {
    try {
      let filter = {
        price_range,
      };
      page === 1 && setLoading(true);
      setLoadingMore(true);

      let response = await trendingNFTsApi(page, sort, filter);
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
        : "bid_count_desc";
      const price_range = {
        from: query.get("minPrice"),
        to: query.get("maxPrice"),
        from: query.get("minPrice") ? query.get("minPrice") : "",
        to: query.get("maxPrice") ? query.get("maxPrice") : "",
      };

      setPage(page + 1);
      showAllNFTs(page + 1, sort_filters, price_range);
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

  const PriceDropdown = React.forwardRef(({ onClick }, ref) => (
    <div
      className="filter-drop-btn"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {priceRangeFilter.from && priceRangeFilter.to
        ? `Price Range $${priceRangeFilter.from} - $${priceRangeFilter.to}`
        : priceRangeFilter.from
        ? `Min $${priceRangeFilter.from}`
        : priceRangeFilter.to
        ? `Max $${priceRangeFilter.to}`
        : "Price Range"}
      <BiCaretDown />
    </div>
  ));

  const [priceRangeFilter, setPriceRangeFilter] = useState({
    from: "",
    to: "",
  });

  const PriceMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      const [priceRange, setPriceRange] = useState({
        from: query.get("minPrice") ? query.get("minPrice") : "",
        to: query.get("maxPrice") ? query.get("maxPrice") : "",
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
                placeholder="Min"
                type="number"
                onChange={(e) => {
                  if (e.target.value && e.target.value.length <= 9) {
                    if (validateCurrency(e.target.value)) {
                      setPriceRange({ ...priceRange, from: e.target.value });
                    }
                  } else {
                    setPriceRange({ ...priceRange, from: "" });
                  }
                }}
                value={priceRange.from}
              />
            </span>
            <span className="category-search-block">
              <FormControl
                className="category-search"
                placeholder="Max"
                type="number"
                onChange={(e) => {
                  if (e.target.value && e.target.value.length <= 9) {
                    if (validateCurrency(e.target.value)) {
                      setPriceRange({ ...priceRange, to: e.target.value });
                    }
                  } else {
                    setPriceRange({ ...priceRange, to: "" });
                  }
                }}
                value={priceRange.to}
              />
            </span>
          </div>
          {/* <hr className="mt-2 mb-1 bot-border-hr" /> */}
          <div className="prifilter-btn">
            <button
              type="button"
              className="justify-content-center border dropdown-item"
              onClick={(e) => handlePriceRange(priceRange, true)}
            >
              Clear
            </button>
            <button
              type="button"
              className="justify-content-center border dropdown-item apply-btn"
              disabled={(() => {
                if (
                  parseInt(priceRange.from) < 0 ||
                  parseInt(priceRange.to) < 0
                ) {
                  return true;
                } else if (
                  parseInt(priceRange.from) > parseInt(priceRange.to)
                ) {
                  return true;
                } else {
                  return false;
                }
              })()}
              onClick={(e) => handlePriceRange(priceRange)}
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
    const price_range = {
      from: query.get("minPrice") ? query.get("minPrice") : "",
      to: query.get("maxPrice") ? query.get("maxPrice") : "",
    };
    let query_string = "";

    if (sort_exist) {
      query_string += query_string
        ? `&sort=${sort_exist}`
        : `sort=${sort_exist}`;
    }
    if (price_range.from || price_range.to) {
      query_string += query_string
        ? `&minPrice=${price_range.from}&maxPrice=${price_range.to}`
        : `&minPrice=${price_range.from}&maxPrice=${price_range.to}`;
    }

    history.push(`/nfts/trending?${query_string}`);
  };
  const handlePriceRange = (priceRange, remove = false) => {
    setPriceRangeFilter({ ...priceRange });

    const sort_exist = query.get("sort");

    const price_range = remove ? { from: null, to: null } : priceRange;

    let query_string = "";

    if (sort_exist) {
      query_string += query_string
        ? `&sort=${sort_exist}`
        : `sort=${sort_exist}`;
    }

    if (price_range.from || price_range.to) {
      query_string += query_string
        ? `&minPrice=${price_range.from}&maxPrice=${price_range.to}`
        : `&minPrice=${price_range.from}&maxPrice=${price_range.to}`;
    }

    if (remove) {
      setPriceRangeFilter(price_range);
    }
    if (query_string) {
      history.push(`/nfts/trending?${query_string}`);
    } else {
      history.push("/nfts/trending");
    }
  };

  const reloadNFTList = async () => {
    try {
      let response = await trendingNFTsApi({ page });
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
              <div className="sec-heading d-flex align-items-center mb-5 liveauction-detail-heading">
                <div className="flex-heading">
                  <span className="text-nowrap me-4">TRENDING NFTs</span>
                  {/* <div className="d-flex flex-wrap filter-box">
                    <span className="d-flex justify-content-end w-100 filter-blocks">
                      
                    </span>
                  </div> */}
                </div>
                <span className="d-flex justify-content-end w-100 liveauction-detail-filter-blocks">
                  <div className="d-flex flex-wrap liveauction-detail-filter-box">
                    {/* <Dropdown className="price-range">
                      <Dropdown.Toggle
                        align="start"
                        drop="down"
                        as={PriceDropdown}
                      ></Dropdown.Toggle>

                      <Dropdown.Menu
                        align="start"
                        as={PriceMenu}
                      ></Dropdown.Menu>
                    </Dropdown> */}
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

export default TrendingList;

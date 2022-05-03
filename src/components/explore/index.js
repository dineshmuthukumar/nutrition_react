/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import ContentLoader from "react-content-loader";
import { FaCheckCircle, FaFilter } from "react-icons/fa";

import NFTCard from "../nft-card";
import QuickView from "../quick-view";
import { nftCategoryListApi } from "../../api/methods";
import ExploreTitle from "./explore-title";
import sample from "../../images/sampleNFT.jpg";
import { BiCaretDown, BiX, BiSearch, BiCheck } from "react-icons/bi";

import Details from "../../pages/details";
import OrderDetails from "../../pages/order-details";

import "./style.scss";
import { IoIosArrowDown } from "react-icons/io";
import { VscClose } from "react-icons/vsc";

const Explore = ({ categoryDetail, slug, clientUrl = "" }) => {
  const history = useHistory();

  const match = useRouteMatch();
  // const { slug } = useParams();
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [toggle, setToggle] = useState(true);

  const [popDetails, setPopDetails] = useState({
    show: false,
    children: null,
  });

  const query = useQueryStringConverter(
    match.params.search ? match.params.search : ""
  );

  const [search, setSearch] = useState(
    query.get("search") ? query.get("search") : ""
  );

  const [filter, setFilter] = useState({
    sale: [
      {
        name: "Bid",
        value: "bid",
        checked: false,
      },
      {
        name: "Buy",
        value: "buy",
        checked: false,
      },
    ],
    nft: [
      {
        name: "Single",
        value: "erc721",
        checked: false,
      },
      {
        name: "Multiple",
        value: "erc1155",
        checked: false,
      },
    ],
    sort: [
      {
        name: "Recently Listed",
        value: "recently_listed",
        checked: true,
      },
      {
        name: "Price - High to Low",
        value: "price_desc",
        checked: false,
      },
      {
        name: "Price - Low to High",
        value: "price",
        checked: false,
      },
      {
        name: "Relevance",
        value: "relevance",
        checked: false,
      },
    ],

    nftCategory: [
      {
        name: "Batsman",
        value: "Batsman",
        checked: false,
      },
      {
        name: "Bowler",
        value: "Bowler",
        checked: false,
      },
      {
        name: "Bat",
        value: "Bat",
        checked: false,
      },
    ],
    nftCollection: [
      {
        name: "Rare",
        value: "RARE",
        checked: false,
      },
      {
        name: "Rookie",
        value: "ROOKIE",
        checked: false,
      },
      {
        name: "Epic",
        value: "EPIC",
        checked: false,
      },
      {
        name: "Legend",
        value: "LEGEND",
        checked: false,
      },
      {
        name: "Super Rare",
        value: "SUPER RARE",
        checked: false,
      },
      {
        name: "Ultra Rare",
        value: "ULTRA RARE",
        checked: false,
      },
      {
        name: "Immortal",
        value: "IMMORTAL",
        checked: false,
      },
    ],

    showSale: true,
    showNFT: true,
    showNFTCategory: true,
    showNFTCollection: true,
    showNFTRange: true,
  });

  useEffect(() => {
    const sale_filters = query.get("sale") ? query.get("sale").split(",") : [];
    const nft_filters = query.get("nft") ? query.get("nft").split(",") : [];
    const sort_filters = query.get("sort")
      ? query.get("sort")
      : "recently_listed";
    const nft_category = query.get("nft-category")
      ? query.get("nft-category").split(",")
      : [];
    const nft_collection = query.get("nft-collection")
      ? query.get("nft-collection").split(",")
      : [];

    const info = { ...filter };

    info.sale = filter.sale.map((obj) => ({
      ...obj,
      checked: sale_filters.includes(obj.value),
    }));
    info.nft = filter.nft.map((obj) => ({
      ...obj,
      checked: nft_filters.includes(obj.value),
    }));
    info.sort = filter.sort.map((obj) => ({
      ...obj,
      checked: sort_filters ? sort_filters === obj.value : false,
    }));
    info.nftCategory = filter.nftCategory.map((obj) => ({
      ...obj,
      checked: nft_category.includes(obj.value),
    }));
    info.nftCollection = filter.nftCollection.map((obj) => ({
      ...obj,
      checked: nft_collection.includes(obj.value),
    }));

    setFilter(info);
    setPage(1);
  }, [query]);

  useEffect(() => {
    if (clientUrl) {
      if (match.path === `/${clientUrl}/:search?/details/:slug`) {
        setPopDetails({ ...popDetails, show: true, children: <Details /> });
      } else if (
        match.path === `/${clientUrl}/:search?/order/details/:slug/:orderSlug`
      ) {
        setPopDetails({
          ...popDetails,
          show: true,
          children: <OrderDetails />,
        });
      } else {
        setPopDetails({ ...popDetails, show: false, children: null });
      }
    } else {
      if (match.path === "/explore/category/:cSlug/:search?/details/:slug") {
        setPopDetails({ ...popDetails, show: true, children: <Details /> });
      } else if (
        match.path ===
        "/explore/category/:cSlug/:search?/order/details/:slug/:orderSlug"
      ) {
        setPopDetails({
          ...popDetails,
          show: true,
          children: <OrderDetails />,
        });
      } else {
        setPopDetails({ ...popDetails, show: false, children: null });
      }
    }
  }, [match.path]);

  useEffect(() => {
    const sale_filters = query.get("sale") ? query.get("sale").split(",") : [];
    const nft_filters = query.get("nft") ? query.get("nft").split(",") : [];
    const sort_filters = query.get("sort")
      ? query.get("sort")
      : "recently_listed";
    const nft_category = query.get("nft-category")
      ? query.get("nft-category").split(",")
      : [];
    const nft_collection = query.get("nft-collection")
      ? query.get("nft-collection").split(",")
      : [];

    const search_filter = query.get("search");

    showAllFilteredNFTs(
      1,
      nft_filters,
      sale_filters,
      sort_filters,
      search_filter,
      nft_category,
      nft_collection
    );
  }, [slug, query]);

  const showAllNFTs = async (
    page,
    type,
    saleType,
    sort = "recently_listed",
    searchText,
    nft_category,
    nft_collection
  ) => {
    try {
      page === 1 && setLoading(true);
      setLoadingMore(true);
      let response = {};
      if (slug) {
        response = await nftCategoryListApi({
          slug,
          page,
          filter: {
            type: type,
            sale_type: saleType,
            keyword: searchText,
            nft_category,
            nft_collection,
          },
          sort: sort === "relevance" ? null : sort,
        });
      }
      setList([...list, ...response?.data?.data?.nfts]);
      setHasNext(response?.data?.data?.next_page);
      page === 1 && setLoading(false);
      setLoadingMore(false);
    } catch (err) {
      console.log(err);
    }
  };

  const showAllFilteredNFTs = async (
    page,
    type,
    saleType,
    sort = "recently_listed",
    searchText,
    nft_category,
    nft_collection
  ) => {
    try {
      page === 1 && setLoading(true);
      setLoadingMore(true);
      let response = {};
      if (slug) {
        response = await nftCategoryListApi({
          slug,
          page,
          filter: {
            type: type,
            sale_type: saleType,
            keyword: searchText,
            nft_category,
            nft_collection,
          },
          sort: sort === "relevance" ? null : sort,
        });
      }
      setList(response?.data?.data?.nfts);
      setHasNext(response?.data?.data?.next_page);
      page === 1 && setLoading(false);
      setLoadingMore(false);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMore = () => {
    if (hasNext) {
      const sale_filters = query.get("sale")
        ? query.get("sale").split(",")
        : [];
      const nft_filters = query.get("nft") ? query.get("nft").split(",") : [];
      const sort_filters = query.get("sort")
        ? query.get("sort")
        : "recently_listed";
      const search_filters = query.get("search");
      const nft_category = query.get("nft-category")
        ? query.get("nft-category").split(",")
        : [];

      const nft_collection = query.get("nft-collection")
        ? query.get("nft-collection").split(",")
        : [];

      showAllNFTs(
        page + 1,
        nft_filters,
        sale_filters,
        sort_filters,
        search_filters,
        nft_category,
        nft_collection
      );
      setPage(page + 1);
    }
  };

  const SaleTypeDropdown = React.forwardRef(({ onClick }, ref) => (
    <div
      className="filter-drop-btn"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      Sale Type <BiCaretDown />
    </div>
  ));

  const NFTTypeDropdown = React.forwardRef(({ onClick }, ref) => (
    <div
      className="filter-drop-btn"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      NFT Type <BiCaretDown />
    </div>
  ));

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
      <BiCaretDown />
    </div>
  ));

  const handleSaleCheck = (input) => {
    let sale_exist = query.get("sale") ? query.get("sale").split(",") : [];
    const nft_exist = query.get("nft") ? query.get("nft").split(",") : [];
    const sort_exist = query.get("sort");
    const search_exist = query.get("search")
      ? query.get("search").replace("#", "%23")
      : "";
    let nft_category = query.get("nft-category")
      ? query.get("nft-category").split(",")
      : [];

    let nft_collection = query.get("nft-collection")
      ? query.get("nft-collection").split(",")
      : [];

    if (sale_exist.includes(input.value)) {
      sale_exist = sale_exist.filter((obj) => obj !== input.value);
    } else {
      sale_exist.push(input.value);
    }

    let query_string = "";

    if (sale_exist.length > 0) {
      query_string += query_string
        ? `&sale=${sale_exist}`
        : `sale=${sale_exist}`;
    }

    if (nft_exist.length > 0) {
      query_string += query_string ? `&nft=${nft_exist}` : `nft=${nft_exist}`;
    }

    if (nft_category.length > 0) {
      query_string += query_string
        ? `&nft-category=${nft_category}`
        : `nft-category=${nft_category}`;
    }

    if (nft_collection.length > 0) {
      query_string += query_string
        ? `&nft-collection=${nft_collection}`
        : `nft-collection=${nft_collection}`;
    }

    if (sort_exist) {
      query_string += query_string
        ? `&sort=${sort_exist}`
        : `sort=${sort_exist}`;
    }

    if (search_exist) {
      query_string += query_string
        ? `&search=${search_exist}`
        : `search=${search_exist}`;
    }

    if (query_string) {
      // history.push(
      //   `/explore/category/${slug}/${encodeURIComponent(query_string)}`
      // );
      history.push(`/explore/category/${slug}/${query_string}`);
    } else {
      history.push(`/explore/category/${slug}`);
    }
  };

  const handleNFTCheck = (input) => {
    const sale_exist = query.get("sale") ? query.get("sale").split(",") : [];
    let nft_exist = query.get("nft") ? query.get("nft").split(",") : [];
    const sort_exist = query.get("sort");
    const search_exist = query.get("search")
      ? query.get("search").replace("#", "%23")
      : "";

    let nft_category = query.get("nft-category")
      ? query.get("nft-category").split(",")
      : [];

    let nft_collection = query.get("nft-collection")
      ? query.get("nft-collection").split(",")
      : [];

    if (nft_exist.includes(input.value)) {
      nft_exist = nft_exist.filter((obj) => obj !== input.value);
    } else {
      nft_exist.push(input.value);
    }

    let query_string = "";

    if (sale_exist.length > 0) {
      query_string += query_string
        ? `&sale=${sale_exist}`
        : `sale=${sale_exist}`;
    }

    if (nft_exist.length > 0) {
      query_string += query_string ? `&nft=${nft_exist}` : `nft=${nft_exist}`;
    }

    if (nft_category.length > 0) {
      query_string += query_string
        ? `&nft-category=${nft_category}`
        : `nft-category=${nft_category}`;
    }

    if (nft_collection.length > 0) {
      query_string += query_string
        ? `&nft-collection=${nft_collection}`
        : `nft-collection=${nft_collection}`;
    }

    if (sort_exist) {
      query_string += query_string
        ? `&sort=${sort_exist}`
        : `sort=${sort_exist}`;
    }

    if (search_exist) {
      query_string += query_string
        ? `&search=${search_exist}`
        : `search=${search_exist}`;
    }

    if (query_string) {
      // history.push(
      //   `/explore/category/${slug}/${encodeURIComponent(query_string)}`
      // );
      history.push(`/explore/category/${slug}/${query_string}`);
    } else {
      history.push(`/explore/category/${slug}`);
    }
  };

  const handleSortNFT = (input) => {
    const sale_exist = query.get("sale") ? query.get("sale").split(",") : [];
    const nft_exist = query.get("nft") ? query.get("nft").split(",") : [];
    const sort_exist = input.value;
    const search_exist = query.get("search")
      ? query.get("search").replace("#", "%23")
      : "";
    let nft_category = query.get("nft-category")
      ? query.get("nft-category").split(",")
      : [];

    let nft_collection = query.get("nft-collection")
      ? query.get("nft-collection").split(",")
      : [];

    let query_string = "";

    if (sale_exist.length > 0) {
      query_string += query_string
        ? `&sale=${sale_exist}`
        : `sale=${sale_exist}`;
    }

    if (nft_exist.length > 0) {
      query_string += query_string ? `&nft=${nft_exist}` : `nft=${nft_exist}`;
    }

    if (nft_category.length > 0) {
      query_string += query_string
        ? `&nft-category=${nft_category}`
        : `nft-category=${nft_category}`;
    }

    if (nft_collection.length > 0) {
      query_string += query_string
        ? `&nft-collection=${nft_collection}`
        : `nft-collection=${nft_collection}`;
    }

    if (sort_exist) {
      query_string += query_string
        ? `&sort=${sort_exist}`
        : `sort=${sort_exist}`;
    }

    if (search_exist) {
      query_string += query_string
        ? `&search=${search_exist}`
        : `search=${search_exist}`;
    }

    if (query_string) {
      // history.push(
      //   `/explore/category/${slug}/${encodeURIComponent(query_string)}`
      // );
      history.push(`/explore/category/${slug}/${query_string}`);
    } else {
      history.push(`/explore/category/${slug}`);
    }
  };

  const handleTextSearch = () => {
    const sale_exist = query.get("sale") ? query.get("sale").split(",") : [];
    const nft_exist = query.get("nft") ? query.get("nft").split(",") : [];
    const sort_exist = query.get("sort");
    const search_exist = search.replace("#", "%23");
    let nft_category = query.get("nft-category")
      ? query.get("nft-category").split(",")
      : [];
    let nft_collection = query.get("nft-collection")
      ? query.get("nft-collection").split(",")
      : [];

    let query_string = "";

    if (sale_exist.length > 0) {
      query_string += query_string
        ? `&sale=${sale_exist}`
        : `sale=${sale_exist}`;
    }

    if (nft_exist.length > 0) {
      query_string += query_string ? `&nft=${nft_exist}` : `nft=${nft_exist}`;
    }

    if (nft_category.length > 0) {
      query_string += query_string
        ? `&nft-category=${nft_category}`
        : `nft-category=${nft_category}`;
    }

    if (nft_collection.length > 0) {
      query_string += query_string
        ? `&nft-collection=${nft_collection}`
        : `nft-collection=${nft_collection}`;
    }

    if (sort_exist) {
      query_string += query_string
        ? `&sort=${sort_exist}`
        : `sort=${sort_exist}`;
    }

    if (search_exist) {
      query_string += query_string
        ? `&search=${search_exist}`
        : `search=${search_exist}`;
    }

    if (query_string) {
      // history.push(
      //   `/explore/category/${slug}/${encodeURIComponent(query_string)}`
      // );
      history.push(`/explore/category/${slug}/${query_string}`);
    } else {
      history.push(`/explore/category/${slug}`);
    }
  };

  const handleNFTCategoryCheck = (input) => {
    const sale_exist = query.get("sale") ? query.get("sale").split(",") : [];
    let nft_exist = query.get("nft") ? query.get("nft").split(",") : [];
    const sort_exist = query.get("sort");
    const search_exist = query.get("search")
      ? query.get("search").replace("#", "%23")
      : "";
    let nft_category = query.get("nft-category")
      ? query.get("nft-category").split(",")
      : [];
    let nft_collection = query.get("nft-collection")
      ? query.get("nft-collection").split(",")
      : [];

    if (nft_category.includes(input.value)) {
      nft_category = nft_category.filter((obj) => obj !== input.value);
    } else {
      nft_category.push(input.value);
    }

    let query_string = "";

    if (sale_exist.length > 0) {
      query_string += query_string
        ? `&sale=${sale_exist}`
        : `sale=${sale_exist}`;
    }

    if (nft_exist.length > 0) {
      query_string += query_string ? `&nft=${nft_exist}` : `nft=${nft_exist}`;
    }

    if (nft_category.length > 0) {
      query_string += query_string
        ? `&nft-category=${nft_category}`
        : `nft-category=${nft_category}`;
    }

    if (nft_collection.length > 0) {
      query_string += query_string
        ? `&nft-collection=${nft_collection}`
        : `nft-collection=${nft_collection}`;
    }

    if (sort_exist) {
      query_string += query_string
        ? `&sort=${sort_exist}`
        : `sort=${sort_exist}`;
    }

    if (search_exist) {
      query_string += query_string
        ? `&search=${search_exist}`
        : `search=${search_exist}`;
    }

    if (query_string) {
      history.push(`/explore/category/${slug}/${query_string}`);
    } else {
      history.push(`/explore/category/${slug}`);
    }
  };

  const handleNFTCollectionCheck = (input) => {
    const sale_exist = query.get("sale") ? query.get("sale").split(",") : [];
    let nft_exist = query.get("nft") ? query.get("nft").split(",") : [];
    const sort_exist = query.get("sort");
    const search_exist = query.get("search")
      ? query.get("search").replace("#", "%23")
      : "";
    let nft_category = query.get("nft-category")
      ? query.get("nft-category").split(",")
      : [];
    let nft_collection = query.get("nft-collection")
      ? query.get("nft-collection").split(",")
      : [];

    if (nft_collection.includes(input.value)) {
      nft_collection = nft_collection.filter((obj) => obj !== input.value);
    } else {
      nft_collection.push(input.value);
    }

    let query_string = "";

    if (sale_exist.length > 0) {
      query_string += query_string
        ? `&sale=${sale_exist}`
        : `sale=${sale_exist}`;
    }

    if (nft_exist.length > 0) {
      query_string += query_string ? `&nft=${nft_exist}` : `nft=${nft_exist}`;
    }

    if (nft_category.length > 0) {
      query_string += query_string
        ? `&nft-category=${nft_category}`
        : `nft-category=${nft_category}`;
    }

    if (nft_collection.length > 0) {
      query_string += query_string
        ? `&nft-collection=${nft_collection}`
        : `nft-collection=${nft_collection}`;
    }

    if (sort_exist) {
      query_string += query_string
        ? `&sort=${sort_exist}`
        : `sort=${sort_exist}`;
    }

    if (search_exist) {
      query_string += query_string
        ? `&search=${search_exist}`
        : `search=${search_exist}`;
    }

    if (query_string) {
      history.push(`/explore/category/${slug}/${query_string}`);
    } else {
      history.push(`/explore/category/${slug}`);
    }
  };

  const handleKeyPressEvent = (event) => {
    if (event.key === "Enter") {
      handleTextSearch();
    }
  };

  return (
    <>
      <QuickView
        show={popDetails.show}
        onHide={() => history.goBack()}
        children={popDetails.children}
      />
      <section className="explore-nft-section">
        <article className="explorer-detail">
          <div className="container-fluid">
            <div className="row explore-title">
              <ExploreTitle
                title={categoryDetail.name}
                description={categoryDetail.description}
              />
            </div>
          </div>
        </article>
        <article className="explorer-nft-list">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="sec-heading d-flex align-items-center mb-2 explore-heading">
                  <span className="me-4 mt-2 text-nowrap sec-title">
                    LISTED NFTs
                    <span
                      onClick={() => setToggle(!toggle)}
                      className="filter-open-btn"
                    >
                      <FaFilter /> Filter
                    </span>
                  </span>
                  <span className="d-flex justify-content-between mt-2 w-100 filter-blocks">
                    <div className="d-flex flex-wrap filter-box">
                      {/* <Dropdown>
                        <Dropdown.Toggle
                          align="start"
                          drop="start"
                          as={SaleTypeDropdown}
                        ></Dropdown.Toggle>

                        <Dropdown.Menu align="start">
                          {filter.sale.map((obj, i) => (
                            <Dropdown.Item
                              key={`sale${i}`}
                              as="button"
                              onClick={() => handleSaleCheck(obj)}
                            >
                              <FaCheckCircle
                                color={obj.checked ? "green" : "#ccc"}
                                className="mb-1 me-2"
                                size={17}
                              />
                              {obj.name}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown>
                        <Dropdown.Toggle
                          align="start"
                          drop="start"
                          as={NFTTypeDropdown}
                        ></Dropdown.Toggle>

                        <Dropdown.Menu align="start">
                          {filter.nft.map((obj, i) => (
                            <Dropdown.Item
                              key={`nft${i}`}
                              as="button"
                              onClick={() => handleNFTCheck(obj)}
                            >
                              <FaCheckCircle
                                color={obj.checked ? "green" : "#ccc"}
                                className="mb-1 me-2"
                                size={17}
                              />
                              {obj.name}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown> */}
                    </div>
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
                  <div className="filt-flex-search">
                    <input
                      type="text"
                      className="search-box-add"
                      value={search}
                      onKeyPress={handleKeyPressEvent}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search here"
                    />{" "}
                    <span
                      role="button"
                      className="search-button"
                      onClick={handleTextSearch}
                    >
                      <BiSearch size={15} />
                    </span>
                  </div>
                </div>

                {/* <div className="mt-4 mb-4 d-flex flex-wrap">
                  {filter.sale
                    .filter((xx) => xx.checked === true)
                    .map((obj, i) => (
                      <div
                        key={`filter-pill${i}`}
                        className="filter-pill-button"
                      >
                        <div className="first">{obj.name}</div>
                        <div className="last">
                          <BiX
                            role="button"
                            size={20}
                            onClick={() => handleSaleCheck(obj)}
                          />
                        </div>
                      </div>
                    ))}

                  {filter.nft
                    .filter((xx) => xx.checked === true)
                    .map((obj, i) => (
                      <div
                        key={`filter-pill${i}`}
                        className="filter-pill-button"
                      >
                        <div className="first">{obj.name}</div>
                        <div className="last">
                          <BiX
                            role="button"
                            size={20}
                            onClick={() => handleNFTCheck(obj)}
                          />
                        </div>
                      </div>
                    ))}
                </div> */}
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <section className="explorer-nft-group">
                  <aside className={`filter-block ${toggle && "open-aside"}`}>
                    <span
                      onClick={() => setToggle(!toggle)}
                      className="filter-close-btn"
                    >
                      <VscClose />
                    </span>
                    <div className="heading-box">
                      <h4>Filters</h4>
                      <span
                        className={`clear-btn ${
                          match.params.search ? "" : "disabled"
                        }`}
                        onClick={() =>
                          history.push(`/explore/category/${slug}`)
                        }
                      >
                        Clear all
                      </span>
                    </div>
                    <div className="filter-list-items">
                      <h4 className="header">
                        Role{" "}
                        <IoIosArrowDown
                          role={"button"}
                          onClick={() =>
                            setFilter({
                              ...filter,
                              showNFTCategory: !filter.showNFTCategory,
                            })
                          }
                        />
                      </h4>
                      {filter.showNFTCategory && (
                        <ul>
                          {filter.nftCategory.map((obj, i) => (
                            <li key={`nft-category-${i}`}>
                              <label
                                htmlFor={`${obj.name}`}
                                className="checkbox"
                              >
                                <input
                                  id={`${obj.name}`}
                                  name="checkbox-group"
                                  type="checkbox"
                                  checked={obj.checked}
                                  onChange={() => handleNFTCategoryCheck(obj)}
                                />
                                <span className="checkbox__mark">
                                  <BiCheck />
                                </span>

                                <span className="checkbox__info">
                                  <span className="title">{obj.name}</span>
                                </span>
                              </label>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="filter-list-items">
                      <h4 className="header">
                        Category{" "}
                        <IoIosArrowDown
                          role={"button"}
                          onClick={() =>
                            setFilter({
                              ...filter,
                              showNFTCollection: !filter.showNFTCollection,
                            })
                          }
                        />
                      </h4>
                      {filter.showNFTCollection && (
                        <ul>
                          {filter.nftCollection.map((obj, i) => (
                            <li key={`collection-${i}`}>
                              <label
                                htmlFor={`${obj.name}`}
                                className="checkbox"
                              >
                                <input
                                  id={`${obj.name}`}
                                  name="checkbox-group"
                                  type="checkbox"
                                  checked={obj.checked}
                                  onChange={() => handleNFTCollectionCheck(obj)}
                                />
                                <span className="checkbox__mark">
                                  <BiCheck />
                                </span>

                                <span className="checkbox__info">
                                  <span className="title">{obj.name}</span>
                                </span>
                              </label>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="filter-list-items">
                      <h4 className="header">
                        Sale Type{" "}
                        <IoIosArrowDown
                          role={"button"}
                          onClick={() =>
                            setFilter({
                              ...filter,
                              showSale: !filter.showSale,
                            })
                          }
                        />
                      </h4>
                      {filter.showSale && (
                        <ul>
                          {filter.sale.map((obj, i) => (
                            <li key={`sale-type-${i}`}>
                              <label
                                htmlFor={`${obj.name}`}
                                className="checkbox"
                              >
                                <input
                                  id={`${obj.name}`}
                                  name="checkbox-group"
                                  type="checkbox"
                                  checked={obj.checked}
                                  onChange={() => handleSaleCheck(obj)}
                                />
                                <span className="checkbox__mark">
                                  <BiCheck />
                                </span>

                                <span className="checkbox__info">
                                  <span className="title">{obj.name}</span>
                                </span>
                              </label>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="filter-list-items">
                      <h4 className="header">
                        NFT Type{" "}
                        <IoIosArrowDown
                          role={"button"}
                          onClick={() =>
                            setFilter({
                              ...filter,
                              showNFT: !filter.showNFT,
                            })
                          }
                        />
                      </h4>
                      {filter.showNFT && (
                        <ul>
                          {filter.nft.map((obj, i) => (
                            <li key={`nft-type-${i}`}>
                              <label
                                htmlFor={`${obj.name}`}
                                className="checkbox"
                              >
                                <input
                                  id={`${obj.name}`}
                                  name="checkbox-group"
                                  type="checkbox"
                                  checked={obj.checked}
                                  onChange={() => handleNFTCheck(obj)}
                                />
                                <span className="checkbox__mark">
                                  <BiCheck />
                                </span>

                                <span className="checkbox__info">
                                  <span className="title">{obj.name}</span>
                                </span>
                              </label>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </aside>

                  <article className="nft-list">
                    {!loading ? (
                      <div className="row">
                        {list && list.length > 0 ? (
                          list.map((nft, i) => (
                            <div
                              key={`list-nft-${i}`}
                              className="col-xl-4 col-lg-6 col-sm-6"
                            >
                              <NFTCard
                                nft={nft}
                                key={i}
                                image={sample}
                                isExplore
                                exploreSlug={slug}
                                clientUrl={clientUrl}
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
                  </article>
                </section>
              </div>
            </div>
          </div>
        </article>
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

const useQueryStringConverter = (search) => {
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

export default Explore;

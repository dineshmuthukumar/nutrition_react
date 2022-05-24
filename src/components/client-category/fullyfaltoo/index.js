import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import Image from "react-bootstrap/Image";
import { useRouteMatch, useHistory } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

import Footer from "../../footer";
import Header from "../../header";
import NFTCard from "../../nft-card";
import Details from "../../../pages/details";
import OrderDetails from "../../../pages/order-details";
import QuickView from "../../quick-view";
import { nftCategoriesApi, nftCategoryListApi } from "../../../api/methods";
import { BiCaretDown, BiX } from "react-icons/bi";
import { useParams } from "react-router";

import ffLogo from "./img/logo2.png";
import royalrumblers from "./img/royal-rumblers.mp4";
import bakra from "./img/bakra.jpg";
import manyme from "./img/manyme.jpg";
import wings from "./img/wings.png";
import rangu from "./img/rangu.jpg";

import "./style.scss";
import { FaCheckCircle } from "react-icons/fa";

const FullyFaltoo = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const parent_slug = process.env.REACT_APP_FF_SLUG;
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [NFTList, setNFTList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [NFTLoading, setNFTLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [categoryName, setCategoryName] = useState("Popular Collection NFT");
  const [categorySlug, setCategorySlug] = useState("");
  const { slug } = useParams();
  console.log(slug, "slug");
  const [popDetails, setPopDetails] = useState({
    show: false,
    children: null,
  });
  const query = useQueryStringConverter(
    match.params.search ? match.params.search : ""
  );
  const [filter, setFilter] = useState({
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
    status: [
      {
        name: "Timed Auction",
        value: "timed_auction",
        checked: false,
      },
      {
        name: "Listed for sale",
        value: "onsale",
        checked: false,
      },
      {
        name: "Not on sale",
        value: "not_on_sale",
        checked: false,
      },
    ],
  });

  const [categories, setCategories] = useState({
    static_url: [
      {
        name: "Royal Rare Rumblers",
        type: "video",
        url: royalrumblers,
        checked: true,
      },
      {
        name: "Bakra urf G.O.A.T",
        type: "image",
        url: bakra,
        checked: false,
      },
      {
        name: "Many Me FTWs",
        type: "image",
        url: manyme,
        checked: false,
      },
      {
        name: "Winging it like Wingnesh",
        type: "image",
        url: wings,
        checked: false,
      },
      {
        name: "Rangu the Champ",
        type: "image",
        url: rangu,
        checked: false,
      },
    ],
  });

  const open_start_date = "Mar 25, 2022 12:30:00";

  const [open_time, set_open_time] = useState();
  const [launch, set_launch] = useState(false);

  const timeFunction = (check = false) => {
    var offset = new Date().getTimezoneOffset();

    var open_start_date_utc = new Date(open_start_date);
    open_start_date_utc.setMinutes(open_start_date_utc.getMinutes() - offset);

    var s_time = new Date();

    if (check) s_time.setSeconds(s_time.getSeconds() + 2);

    if (new Date(open_start_date_utc) < s_time) {
      set_launch(true);
    } else {
      set_open_time(open_start_date_utc);
    }
  };

  useEffect(() => {
    timeFunction(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheck = () => {
    timeFunction(true);
  };

  useEffect(() => {
    categoriesList(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (list.length > 0) {
      history.push(`/fully-faltoo-NFT/${list?.[0].slug}`);
      fetchNFTList(1, list?.[0].slug);
      setCategoryName(list?.[0].name);
      setCategorySlug(list?.[0].slug);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  useEffect(() => {
    if (match.path === "/fully-faltoo-NFT/details/:slug") {
      setPopDetails({ ...popDetails, show: true, children: <Details /> });
    } else if (
      match.path === "/fully-faltoo-NFT/order/details/:slug/:orderSlug"
    ) {
      setPopDetails({ ...popDetails, show: true, children: <OrderDetails /> });
    } else {
      setPopDetails({ ...popDetails, show: false, children: null });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.path]);

  useEffect(() => {
    const sale_filters = query.get("sale") ? query.get("sale").split(",") : [];

    const sort_filters = query.get("sort")
      ? query.get("sort")
      : "recently_listed";

    const sale_status = query.get("status");

    const info = { ...filter };
    info.sale = filter.sale.map((obj) => ({
      ...obj,
      checked: sale_filters.includes(obj.value),
    }));
    info.sort = filter.sort.map((obj) => ({
      ...obj,
      checked: sort_filters ? sort_filters === obj.value : false,
    }));
    info.status = filter.status.map((obj) => ({
      ...obj,
      checked: sale_status ? sale_status === obj.value : false,
    }));

    setFilter(info);
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    const sale_filters = query.get("sale") ? query.get("sale").split(",") : [];
    const sort_filters = query.get("sort")
      ? query.get("sort")
      : "recently_listed";
    const sale_status = query.get("status");

    fetchNFTList(1, slug, sale_filters, sort_filters, sale_status);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.search]);

  const categoriesList = async (page) => {
    try {
      setLoading(true);
      let response = await nftCategoriesApi({
        page,
        parent_slug,
      });
      setList(response.data.data.categories);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // const fetchNFTList = async (
  //   page,
  //   saleType,
  //   sort = "recently_listed"
  // ) => {
  //   try {
  //     let filter = {
  //       sale_type: saleType,
  //     };
  //     setLoading(true);
  //     let response = await nftCategoriesApi({
  //       page,
  //       parent_slug,
  //       filter,
  //       sort: sort === "recently_listed" ? null : sort,
  //     });
  //     setList(response.data.data.categories);
  //     setLoading(false);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const fetchNFTList = async (
    page,
    slug,
    saleType,
    sort = "recently_listed",
    sale_status
  ) => {
    try {
      let filter = {
        sale_type: saleType,
        sale_kind: sale_status,
      };
      page === 1 && setNFTLoading(true);
      setLoadingMore(true);
      let response = await nftCategoryListApi({
        slug,
        page,
        filter,
        sort,
      });
      setNFTList(response.data.data.nfts);
      setHasNext(response.data.data.next_page);
      page === 1 && setNFTLoading(false);
      setLoadingMore(false);
    } catch (err) {
      console.log(err);
    }
  };

  // const fetchNFTList = async (page, slug, sort = "recently_listed") => {
  //   try {
  //     page === 1 && setLoading(true);
  //     setLoadingMore(true);

  //     let response = await nftCategoryListApi(page, sort);
  //     setList(response.data.data.nfts);
  //     setHasNext(response.data.data.next_page);
  //     page === 1 && setLoading(false);
  //     setLoadingMore(false);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const fetchMoreNFTList = async (
    page,
    slug,
    saleType,
    sort = "recently_listed",
    sale_status
  ) => {
    try {
      let filter = {
        sale_type: saleType,
        sale_kind: sale_status,
      };
      page === 1 && setNFTLoading(true);
      setLoadingMore(true);
      let response = await nftCategoryListApi({
        slug,
        page,
        filter,
        sort,
      });
      setNFTList([...NFTList, ...response.data.data.nfts]);
      setHasNext(response.data.data.next_page);
      page === 1 && setNFTLoading(false);
      setLoadingMore(false);
    } catch (err) {
      console.log(err);
    }
  };

  // const fetchMore = () => {
  //   if (hasNext) {
  //     fetchMoreNFTList(page + 1, categorySlug);
  //     setPage(page + 1);
  //   }
  // };

  const fetchMore = () => {
    if (hasNext) {
      const sale_filters = query.get("sale")
        ? query.get("sale").split(",")
        : [];
      const sort_filters = query.get("sort")
        ? query.get("sort")
        : "recently_listed";
      const sale_status = query.get("status");

      fetchNFTList(page + 1, slug, sale_filters, sort_filters, sale_status);
      fetchMoreNFTList(page + 1, slug, sale_filters, sort_filters, sale_status);
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
  const SaleStatus = React.forwardRef(({ onClick }, ref) => (
    <div
      className="filter-drop-btn"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      Sale Status
      <BiCaretDown />
    </div>
  ));

  const handleSortNFT = (input) => {
    console.log(input, "input");
    const sale_exist = query.get("sale") ? query.get("sale").split(",") : [];
    const sort_exist = input.value;
    const sale_status = query.get("status");

    let query_string = "";
    if (sale_exist.length > 0) {
      query_string += query_string
        ? `&sale=${sale_exist}`
        : `sale=${sale_exist}`;
    }

    if (sort_exist) {
      query_string += query_string
        ? `&sort=${sort_exist}`
        : `sort=${sort_exist}`;
    }

    if (sale_status) {
      query_string += query_string
        ? `&status=${sale_status}`
        : `status=${sale_status}`;
    }

    if (query_string) {
      history.push(`/fully-faltoo-NFT/${slug}/${query_string}`);
    } else {
      history.push(`/fully-faltoo-NFT/${slug}`);
    }
  };

  const handleSaleCheck = (input) => {
    let sale_exist = query.get("sale") ? query.get("sale").split(",") : [];
    let sort_exist = query.get("sort");
    const sale_status = query.get("status");

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

    if (sort_exist) {
      query_string += query_string
        ? `&sort=${sort_exist}`
        : `sort=${sort_exist}`;
    }

    if (sale_status) {
      query_string += query_string
        ? `&status=${sale_status}`
        : `status=${sale_status}`;
    }

    if (query_string) {
      history.push(`/fully-faltoo-NFT/${slug}/${query_string}`);
    } else {
      history.push(`/fully-faltoo-NFT/${slug}`);
    }
  };

  const handleSaleStatusNFT = (input, remove = false) => {
    const sale_exist = query.get("sale") ? query.get("sale").split(",") : [];
    const sort_exist = query.get("sort");
    const sale_status = remove ? null : input.value;

    let query_string = "";

    if (sale_exist.length > 0) {
      query_string += query_string
        ? `&sale=${sale_exist}`
        : `sale=${sale_exist}`;
    }

    if (sort_exist) {
      query_string += query_string
        ? `&sort=${sort_exist}`
        : `sort=${sort_exist}`;
    }

    if (sale_status) {
      query_string += query_string
        ? `&status=${sale_status}`
        : `status=${sale_status}`;
    }

    if (query_string) {
      history.push(`/fully-faltoo-NFT/${slug}/${query_string}`);
    } else {
      history.push(`/fully-faltoo-NFT/${slug}`);
    }
  };

  const handleCategoryClick = (category) => {
    const name = category?.name;
    const info = { ...categories };
    info.static_url = categories.static_url.map((obj) => ({
      ...obj,
      checked: name.includes(obj.name),
    }));
    const data = list.find((obj) => obj.name === name);
    setCategoryName(name);
    setCategories(info);
    setCategorySlug(data?.slug);
    setPage(1);
    fetchNFTList(1, data?.slug);
    history.push(`/fully-faltoo-NFT/${data?.slug}`);
  };

  return (
    <>
      <QuickView
        show={popDetails.show}
        onHide={() => history.goBack()}
        children={popDetails.children}
      />
      <Header />
      <section className="client-category">
        <div className="container-fluid">
          <div className="row">
            <div className="ft-logo">
              <Image
                src={ffLogo}
                role={"button"}
                onClick={() =>
                  window.open(process.env.REACT_APP_FF_WEBSITE_URL, "_blank")
                }
              />{" "}
            </div>
          </div>
          <div className="row mt-3 d-flex justify-content-between align-items-center explore-title">
            <div className="col-md-6">
              <h1>FullyFaltoo Collectible NFTs</h1>
              <p>
                This is the best bundle of pop culture immersion you can get
                your hands on. It's the Limited Edition 90s nostalgia and GenZ
                memorabilia. A cautionary word of advice for crypto-bros with
                eyes on this enviable collection to adorn your digital
                mantlepiece - word is, there are many Indie Jones' and Jack
                Sparrows out scouring for it.
              </p>
            </div>
            <div className="col-md-6">
              <div className="countdown-wrapper">
                <ul id="countdown">
                  {!launch && open_time && (
                    <>
                      <Counter
                        time={open_time}
                        handleEndEvent={handleCheck}
                        timeClass="ctime"
                        intervalClass="cinterval"
                        intervalGapClass="me-3"
                      />
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="category_list">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="card_title">
                <h2>Popular Collections</h2>
                <p></p>
              </div>
            </div>
          </div>
          {/* <span className="d-flex justify-content-between mt-2 w-100 filter-blocks">
            <div className="filt-flex-box">
              <Dropdown>
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
          <span className="d-flex justify-content-between mt-2 w-100 filter-blocks">
            <div className="filt-flex-box"></div>
          </span> */}

          {categories.static_url.length > 0 && (
            <div className="row mt-5 justify-content-center">
              {categories.static_url.map((category, i) => (
                <div
                  key={`cat-ff-${i}`}
                  className="mb-3 col-lg-2 col-4"
                  onClick={() => handleCategoryClick(category)}
                  role={"button"}
                >
                  <div
                    className={`category_card ${
                      category.checked ? "active" : ""
                    }`}
                  >
                    {(() => {
                      if (category.type === "video") {
                        return (
                          <>
                            <video
                              style={{ width: "100%" }}
                              loop
                              muted
                              autoPlay
                              playsInline
                              src={category.url}
                            ></video>
                          </>
                        );
                      } else {
                        return (
                          <>
                            <img src={category.url} alt="categoryUrl" />
                          </>
                        );
                      }
                    })()}
                    <h1
                      className={`${category.type === "video" ? "mtm-6" : ""}`}
                    >
                      {category.name}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="row">
            <div className="col-sm-12">
              <div className="sec-heading d-flex align-items-center mb-2 explore-heading">
                <span className="me-4 mt-2 text-nowrap">{categoryName}</span>
              </div>
              <div className="d-flex justify-content-between mt-3 w-100 showall-filter-blocks">
                <div className="d-flex flex-wrap filter-box">
                  <Dropdown>
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
                      as={SaleStatus}
                    ></Dropdown.Toggle>

                    <Dropdown.Menu align="start">
                      {filter.status.map((obj, i) => (
                        <Dropdown.Item
                          key={`nft${i}`}
                          as="button"
                          onClick={() => handleSaleStatusNFT(obj)}
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

                <div className="filt-flex-box filter-blocks">
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
              </div>

              <div className="mt-2 mb-4 d-flex flex-wrap">
                {filter.sale
                  .filter((xx) => xx.checked === true)
                  .map((obj, i) => (
                    <div key={`filter-pill${i}`} className="filter-pill-button">
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
                {filter.status
                  .filter((xx) => xx.checked === true)
                  .map((obj, i) => (
                    <div key={`filter-pill${i}`} className="filter-pill-button">
                      <div className="first">{obj.name}</div>
                      <div className="last">
                        <BiX
                          role="button"
                          size={20}
                          onClick={() => handleSaleStatusNFT(obj, true)}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {!NFTLoading ? (
            <div className="row mt-2">
              {NFTList.length > 0 ? (
                NFTList.map((nft, i) => (
                  <div
                    key={`NFTList-nft-${i}`}
                    className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  >
                    <NFTCard nft={nft} key={i} textColor={"#fff"} isFaltoo />
                  </div>
                ))
              ) : (
                <div className="col-12 text-center">
                  <h3 className="my-3">No Records Found!</h3>
                </div>
              )}

              {!NFTLoading && loadingMore && <NFTCardLoader />}

              {hasNext && (
                <div className="row mb-3">
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
      </section>

      <Footer />
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

const Counter = ({
  time,
  cTime,
  timeClass = "",
  intervalClass = "",
  intervalGapClass = "",
  handleEndEvent = () => {},
}) => {
  const calculateTimeLeft = (input, cInput) => {
    var offset = new Date().getTimezoneOffset();
    var input_utc = new Date(input);
    input_utc.setMinutes(input_utc.getMinutes() - offset);

    let difference;
    if (cInput) {
      var cInput_utc = new Date(cInput);
      cInput_utc.setMinutes(cInput_utc.getMinutes() - offset);

      difference = +new Date(input_utc) - +new Date(cInput_utc);
    } else {
      var cInput_utc_1 = new Date();
      cInput_utc_1.setMinutes(cInput_utc_1.getMinutes() - offset);

      difference = +new Date(input_utc) - +new Date(cInput_utc_1);
    }

    var cInput_utc_2 = new Date();
    cInput_utc_2.setMinutes(cInput_utc_2.getMinutes() - offset);

    difference = +new Date(input_utc) - +new Date(cInput_utc_2);

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0.1,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(time, cTime));

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(time, cTime));
      const { days, hours, minutes, seconds } = calculateTimeLeft(time, cTime);
      if (!days && !hours && !minutes && seconds <= 0.1) {
        handleEndEvent();
      }
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    // if (!timeLeft[interval]) {
    //   return;
    // }

    let custom_interval = "";
    switch (interval) {
      case "days":
        custom_interval = "days";
        break;
      case "hours":
        custom_interval = "hours";
        break;
      case "minutes":
        custom_interval = "minutes";
        break;
      case "seconds":
        custom_interval = "seconds";
        break;
      default:
        custom_interval = "";
        break;
    }
    const x = Math.floor(Math.random() * 100 + 1);

    timerComponents.push(
      <li key={`${custom_interval}${x}`}>
        <span className={custom_interval}>
          {/* {timeLeft[interval] === 0.1 ? 0 : timeLeft[interval]} */}
          {timeLeft[interval] >= 10
            ? timeLeft[interval]
            : `0${timeLeft[interval]}`}
        </span>
        <p>{custom_interval}</p>
      </li>
    );
  });

  return (
    <>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className={`counter-time ${timeClass}`}>
          0
          <span
            className={`counter-interval interval-gap ${intervalClass} ${intervalGapClass}`}
          >
            s
          </span>
        </span>
      )}
    </>
  );
};

export default FullyFaltoo;

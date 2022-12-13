import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Navbar, Nav, Dropdown, Container } from "react-bootstrap";
import { BiBell, BiHelpCircle } from "react-icons/bi";
import { useTranslation } from "react-multi-lang";
import { useSelector, useDispatch, connect } from "react-redux";
import { FaDiscord } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import images from "../../utils/images.json";


import {
  user_logout_thunk,
  cart_off_thunk,
  cart_on_thunk,
} from "../../redux/thunk/user_thunk";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineArrowRight,
} from "react-icons/ai";
import {
  accountDetail,
  cartCheckout,
  cartDetail,
} from "../../api/actioncable-methods";

import { currencyFormat } from "../../utils/common";
import { user_wallet_update_action } from "../../redux/actions/user_action";
import {
  getCategoryApi,
  getNotificationApi,
  getsubCategoryListApi,
  getProductDetailsApi,
  cmsPages,
} from "../../api/base-methods";
import { readNotificationApi } from "./../../api/base-methods";
import {
  checkout_event_thunk,
  get_cart_list_thunk,
  remove_from_cart_thunk,
} from "../../redux/thunk/user_cart_thunk";

import NotificationICon from "../../images/notification.png";
import UserIcon from "../../images/user.png";

// import Cart from "../cart";
import AppHelmet from "../helmet";

import Logo from "../../images/new-images/demos/demo-food2/liven-logo.png";

import One from "../../images/new-images/demos/demo-food2/products/1.jpg";
import Two from "../../images/new-images/demos/demo-food2/products/2.jpg";

import "./style.scss";

const Header = ({
  hideOptions = false,
  hideSign = false,
  started = false,
  bgImage = false,
  ...props
}) => {
  const t = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const { user, cart } = useSelector((state) => state);
  // console.log(user, "user");

  const history = useHistory();

  const [notiLoading, setNotiLoading] = useState(false);
  const [npage, setNPage] = useState(1);
  const [notification, setNotification] = useState();
  const [notiRead, setNotiRead] = useState(true);
  const [mobileMenuActive, setMobileMenuActive] = useState(true);

  //const [ribbon, setRibbon] = useState(true);
  const [cartPop, setCartPop] = useState(false);
  const [checkoutDevice, setCheckoutDevice] = useState(false);
  const [sidebar, setSideBar] = useState(false);

  const [categoryDetails, setCategoryDetails] = useState({});
  const [categoryActive, setCategoryActive] = useState(false);
  const [subCategoryList, setSubCategoryList] = useState({});
  const [pageActive, setPageActive] = useState(false);
  const [bestSellerDetails, setBestSellerDetails] = useState({});
  const [footerDetails, setFooterDetails] = useState({});

  const slug = user.data?.user ? user.data?.user?.slug : null;
  const userCart = cart?.data ? cart?.data : null;
  let totalAmount = 0;
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.querySelector(".sticky-content");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("fixed")
      : header.classList.remove("fixed");
  };

  const openModal = () => {
    document.body.className = "mmenu-active";
    // console.log("open");
    setSideBar(true);
  };
  const hideModal = (event) => {
    document.body.className = "";
    setSideBar(false);
  };
  const getFooterDetails = async () => {
    const result = await cmsPages();
    setFooterDetails(result?.data?.responseData?.pages);
  };

  useEffect(() => {
    if (user?.login) {
      // accountDetail(slug, (data) => {
      //   dispatch(user_wallet_update_action(data));
      // });
      //handleGetNotification(npage);
      dispatch(get_cart_list_thunk());
      // cartDetail(slug, (data) => {
      //   dispatch(get_cart_list_thunk());
      // });
      // cartCheckout(slug, (data) => {
      //   dispatch(checkout_event_thunk(data?.event === "start" ? true : false));
      // });
      // if (location.hash === "#cart") {
      //   history.push("/");
      //   setCartPop(true);
      // }
    }
    // if (user?.data?.user) {
    //   if(!user?.data?.user?.name){
    //   window.open(
    //     `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/profile?forceUpdate=true`,
    //     "_self"
    //   );
    //   }
    // }
    // if (user?.data?.user) {
    //   if (!user?.data?.user?.first_name && !user?.data?.user?.last_name) {
    //     window.open(
    //       `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/profile?forceUpdate=true`,
    //       "_self"
    //     );
    //   }
    // }
    getCategoryDetails();
    handleGetNotification();
    getsubCategoryList();
    getFooterDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getsubCategoryList = async () => {
    try {
      setNotiLoading(true);
      const result = await getsubCategoryListApi();

      setSubCategoryList(result?.data?.responseData?.subCategories);
    } catch (error) {
      setNotiLoading(false);

      console.log(
        "🚀 ~ file: index.js ~ line 49 ~ handleGetNotification ~ error",
        error
      );
    }
  };

  const getCategoryDetails = async () => {
    try {
      setNotiLoading(true);
      const result = await getCategoryApi();

      setCategoryDetails(result?.data?.responseData?.categories);
      setBestSellerDetails(result?.data?.responseData?.beastProducts);
    } catch (error) {
      setNotiLoading(false);

      console.log(
        "🚀 ~ file: index.js ~ line 49 ~ handleGetNotification ~ error",
        error
      );
    }
  };
  // const handleChangeLang = () => {
  //   const u_lang = lang === "en" ? "hi" : "en";
  //   setLanguage(u_lang);
  //   dispatch(change_lang_action(u_lang));
  // };

  const handlelogout = () => {
    dispatch(user_logout_thunk());
  };

  const handleGetNotification = async () => {
    try {
      setNotiLoading(true);
      //const result = await getNotificationApi();
      setNotiLoading(false);
      // if (input === 1) {
      //setNotification(result.data.data);
      // if (result.data.data.total > 0) {
      //   setNotiRead(result.data.data.notifications_read);
      // }
      // } else {
      //   setNotification({
      //     ...notification,
      //     notifications: [
      //       ...notification.notifications,
      //       ...result.data.data.notifications,
      //     ],
      //     next_page: result.data.data.next_page,
      //   });
      // }
    } catch (error) {
      setNotiLoading(false);

      console.log(
        "🚀 ~ file: index.js ~ line 49 ~ handleGetNotification ~ error",
        error
      );
    }
  };

  const readNotification = async () => {
    try {
      if (notiRead) await readNotificationApi();
    } catch (error) {
      console.log(
        "🚀 ~ file: index.js ~ line 61 ~ readNotification ~ error",
        error
      );
    }
  };

  const UserToggleComponent = React.forwardRef(({ onClick }, ref) => (
    <UserComponent
      user={user}
      sref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    />
  ));

  const NotificationToggleComponent = React.forwardRef(({ onClick }, ref) => {
    return (
      <div
        className={`${notification ? "theme-color rounded-circle" : ""}`}
        ref={ref}
        role="button"
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
          setNotiRead(true);
        }}
      >
        <img src={NotificationICon} height={25} width={25} alt="Nofity-Bell" />

        {!notiRead && (
          <>
            <span className="nofi-color"> </span>
          </>
        )}
      </div>
    );
  });

  const DropToggle = React.forwardRef(({ onClick }, ref) => {
    return (
      <Nav.Link
        id="drop_outer"
        role={"button"}
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        Drops
      </Nav.Link>
    );
  });

  const NotiCard = ({ data }) => {
    const handleNotiClick = () => {
      if (data.reason === "deposit") {
        window.open(
          `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/wallet`,
          "_self"
        );
      }
    };

    return (
      <div className="noti-message" role="button" onClick={handleNotiClick}>
        {(() => {
          if (data.activity_type === "deposit") {
            return <img src={images.deposit} alt="notification icon" />;
          } else if (data.activity_type === "bid") {
            if (data.reason === "bid_lock") {
              return <img src={images.bid} alt="notification icon" />;
            } else if (
              data.reason === "bid_expired" ||
              data.reason === "bid_closed"
            ) {
              return <img src={images.outbid} alt="notification icon" />;
            } else if (data.reason === "bid_outdated") {
              return <img src={images.outbid} alt="notification icon" />;
            } else if (data.reason === "bid_cancelled") {
              return <img src={images.outbid} alt="notification icon" />;
            } else if (data.reason === "bid_success") {
              return <img src={images.bid} alt="notification icon" />;
            } else if (data.reason === "bid_received") {
              return <img src={images.outbid} alt="notification icon" />;
            }
          } else if (data.activity_type === "buy") {
            if (data.payment_type === "debit") {
              return <img src={images.buy} alt="notification icon" />;
            } else {
              return <img src={images.buy} alt="notification icon" />;
            }
          } else if (data.activity_type === "withdraw") {
            if (data.reason === "withdraw_requested") {
              return <img src={images.withdrawMoney} alt="notification icon" />;
            } else if (data.reason === "withdraw_cancelled") {
              return <img src={images.withdrawMoney} alt="notification icon" />;
            } else if (data.reason === "withdraw_success") {
              return <img src={images.withdrawMoney} alt="notification icon" />;
            }
          } else {
            return "";
          }
        })()}

        <div className="noti-message-content">
          {(() => {
            if (data.activity_type === "deposit") {
              return (
                <>
                  <div className="title">Deposit Successful</div>
                  <div className="desc text-secondary">
                    Your payment of{" "}
                    {currencyFormat(Math.round(data.amount), "USD")} was
                    successfully processed to your wallet! Happy NFT buying.
                  </div>
                  <div className="noti-time">
                    {dayjs(data.created_at).format("DD MMM YYYY hh:mma")}
                  </div>
                </>
              );
            } else if (data.activity_type === "bid") {
              return (
                <>
                  {(() => {
                    if (data.reason === "bid_lock") {
                      return (
                        <>
                          <div className="title">Bid Locked</div>
                          <div className="desc text-secondary">
                            <>
                              Your bid of{" "}
                              <b>
                                {currencyFormat(Math.round(data.amount), "USD")}
                              </b>{" "}
                              is locked for{" "}
                              <b>
                                {data.celebrity_name}
                                's {data.nft_name}
                              </b>{" "}
                              from <b>{data.buyer_name}</b>{" "}
                            </>
                          </div>
                          <div className="noti-time">
                            {dayjs(data.created_at).format(
                              "DD MMM YYYY hh:mma"
                            )}
                          </div>
                        </>
                      );
                    } else if (
                      data.reason === "bid_expired" ||
                      data.reason === "bid_closed"
                    ) {
                      return (
                        <>
                          <div className="title">Bid Expired</div>
                          <div className="desc text-secondary">
                            <>
                              Your bid{" "}
                              <b>
                                {currencyFormat(Math.round(data.amount), "USD")}
                              </b>{" "}
                              was expired for{" "}
                              <b>
                                {data.celebrity_name}
                                's {data.nft_name}
                              </b>{" "}
                              from <b>{data.buyer_name}</b>
                            </>
                          </div>
                          <div className="noti-time">
                            {dayjs(data.created_at).format(
                              "DD MMM YYYY hh:mma"
                            )}
                          </div>
                        </>
                      );
                    } else if (data.reason === "bid_outdated") {
                      return (
                        <>
                          <div className="title">Bid Outdated</div>
                          <div className="desc text-secondary">
                            <>
                              Your bid{" "}
                              <b>
                                {currencyFormat(Math.round(data.amount), "USD")}
                              </b>{" "}
                              was outdated for{" "}
                              <b>
                                {data.celebrity_name}
                                's {data.nft_name}
                              </b>{" "}
                              from <b>{data.buyer_name}</b>
                            </>
                          </div>
                          <div className="noti-time">
                            {dayjs(data.created_at).format(
                              "DD MMM YYYY hh:mma"
                            )}
                          </div>
                        </>
                      );
                    } else if (data.reason === "bid_cancelled") {
                      return (
                        <>
                          <div className="title">Bid Cancelled</div>
                          <div className="desc text-secondary">
                            <>
                              Your bid{" "}
                              <b>
                                {currencyFormat(Math.round(data.amount), "USD")}
                              </b>{" "}
                              was cancelled for{" "}
                              <b>
                                {data.celebrity_name}
                                's {data.nft_name}
                              </b>{" "}
                              by <b>{data.seller_name}</b>
                            </>
                          </div>
                          <div className="noti-time">
                            {dayjs(data.created_at).format(
                              "DD MMM YYYY hh:mma"
                            )}
                          </div>
                        </>
                      );
                    } else if (data.reason === "bid_success") {
                      return (
                        <>
                          {data.payment_type === "debit" ? (
                            <>
                              <div className="title">Bid Successfull</div>
                              <div className="desc text-secondary">
                                <>
                                  Your bid{" "}
                                  <b>
                                    {" "}
                                    {currencyFormat(
                                      Math.round(data.amount),
                                      "USD"
                                    )}
                                  </b>{" "}
                                  was successful for{" "}
                                  <b>
                                    {" "}
                                    {data.celebrity_name}
                                    's {data.nft_name}
                                  </b>{" "}
                                  from <b>{data.buyer_name}</b>
                                </>
                              </div>
                              <div className="noti-time">
                                {dayjs(data.created_at).format(
                                  "DD MMM YYYY hh:mma"
                                )}
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="title">Bid Successfull</div>
                              <div className="desc text-secondary">
                                <>
                                  Your{" "}
                                  <b>
                                    {data.celebrity_name}
                                    's {data.nft_name}
                                  </b>{" "}
                                  was sold for{" "}
                                  <b>
                                    {currencyFormat(
                                      Math.round(data.amount),
                                      "USD"
                                    )}
                                  </b>{" "}
                                  to <b>{data.buyer_name}</b>
                                </>
                              </div>
                              <div className="noti-time">
                                {dayjs(data.created_at).format(
                                  "DD MMM YYYY hh:mma"
                                )}
                              </div>
                            </>
                          )}
                        </>
                      );
                    } else if (data.reason === "bid_received") {
                      return (
                        <>
                          <div className="title">Bid Received</div>
                          <div className="desc text-secondary">
                            <>
                              You received{" "}
                              <b>
                                {" "}
                                {currencyFormat(Math.round(data.amount), "USD")}
                              </b>{" "}
                              bid for{" "}
                              <b>
                                {data.celebrity_name}
                                's {data.nft_name}
                              </b>{" "}
                              from <b>{data.buyer_name}</b>
                            </>
                          </div>
                          <div className="noti-time">
                            {dayjs(data.created_at).format(
                              "DD MMM YYYY hh:mma"
                            )}
                          </div>
                        </>
                      );
                    }
                  })()}
                </>
              );
            } else if (data.activity_type === "buy") {
              return (
                <>
                  {data.payment_type === "debit" ? (
                    <>
                      <div className="title">You Bought</div>
                      <div className="desc text-secondary">
                        <>
                          You bought{" "}
                          <b>
                            {data.celebrity_name}
                            's NFT{" "}
                          </b>
                          from <b>{data.seller_name}</b> for{" "}
                          <b>
                            {" "}
                            {currencyFormat(Math.round(data.amount), "USD")}
                          </b>
                        </>
                      </div>
                      <div className="noti-time">
                        {dayjs(data.created_at).format("DD MMM YYYY hh:mma")}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="title">You Sold</div>
                      <div className="desc text-secondary">
                        <>
                          You sold <b>{data.celebrity_name}'s NFT</b> to{" "}
                          <b>{data.buyer_name}</b> for{" "}
                          <b>
                            {" "}
                            {currencyFormat(Math.round(data.amount), "USD")}
                          </b>
                        </>
                      </div>
                      <div className="noti-time">
                        {dayjs(data.created_at).format("DD MMM YYYY hh:mma")}
                      </div>
                    </>
                  )}
                </>
              );
            } else if (data.activity_type === "withdraw") {
              return (
                <>
                  <div className="title">Withdraw</div>
                  <div className="desc text-secondary">
                    <>
                      {(() => {
                        if (data.reason === "withdraw_requested") {
                          return (
                            <>
                              {" "}
                              You <b>requested a withdraw</b> of{" "}
                              <b>
                                {currencyFormat(Math.round(data.amount), "USD")}
                              </b>{" "}
                            </>
                          );
                        } else if (data.reason === "withdraw_cancelled") {
                          return (
                            <>
                              You <b>cancelled a withdraw request</b> of{" "}
                              <b>
                                {currencyFormat(Math.round(data.amount), "USD")}
                              </b>
                            </>
                          );
                        } else if (data.reason === "withdraw_success") {
                          return (
                            <>
                              You <b>withdraw request</b> of{" "}
                              <b>
                                {currencyFormat(Math.round(data.amount), "USD")}
                              </b>{" "}
                              was <b>successful</b>
                            </>
                          );
                        }
                      })()}
                    </>
                  </div>
                  <div className="noti-time">
                    {dayjs(data.created_at).format("DD MMM YYYY hh:mma")}
                  </div>
                </>
              );
            }
          })()}
        </div>
      </div>
    );
  };
  const DropdownMenuItem = (subCategoriesId) => {
    ///console.log(subCategoriesId, "subCategoriesId");
    if (subCategoryList?.length) {
      var filterData = subCategoryList?.filter(
        (x) => x?.categoryId?._id === subCategoriesId
      );
      if (filterData?.length) {
        return (
          <ul>
            {filterData?.map((subCategoriesDetail) => {
              return (
                <li>
                  <Link to={`/category/${subCategoriesDetail?._id}`}>
                    {subCategoriesDetail?.subCategoryName}
                  </Link>
                </li>
              );
            })}
          </ul>
        );
      } else {
        return "";
      }
      return "";
    }
  };
  const IsDropdownMenuItem = (subCategoriesId) => {
    let filterData = "";
    if (subCategoryList?.length) {
      filterData = subCategoryList?.filter(
        (x) => x?.categoryId?._id === subCategoriesId
      );
      /// console.log(filterData);
      if (filterData.length) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };

  const getProductDetail = async (prodID) => {
    // try {
    //   setNotiLoading(true);
    const result = await getProductDetailsApi(prodID);
    //console.log(result.data.responseData.product);
    return result.data.responseData.product;
    // } catch (error) {
    //   setNotiLoading(false);

    //   console.log(
    //     "🚀 ~ file: index.js ~ line 49 ~ getProductDetail ~ error",
    //     error
    //   );
    //}
  };
  const showHideUpdateRow = () => {
    console.log("cart in off");
    dispatch(cart_off_thunk());
  };

  return (
    <>
      {/* <AppHelmet
        title={props?.title}
        image={props?.image}
        description={props?.description}
        width={props?.width}
        height={props?.height}
        canonical={props?.canonical}
      /> */}

      <div className="header">
        {/* <div className="header-top">
          <div className="container header_top_center">
            <div className="row">
              <div className="col-sm-12">
                <div className="header-center">
                  <div className="welcome-msg">
                    <Nav.Link
                      className="help"
                      onClick={() => history.push("/")}
                    >
                      <i className="d-icon-info"></i>LIMITED PERIOD OFFER |
                      Additional 10% OFF SITEWIDE. Use code INSIDEOUT at
                      checkout to avail!
                    </Nav.Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="sticky-content-wrapper">
          <div className="header-middle sticky-header fix-top sticky-content">
            <div className="container">
              <div className="header-left">
                <Nav.Link
                  className="mobile-menu-toggle"
                  onClick={() => openModal()}
                >
                  <i className="d-icon-bars2"></i>
                </Nav.Link>

                <Nav.Link className="logo" onClick={() => history.push("/")}>
                  <img src={Logo} alt="logo" width="75" height="43" />
                </Nav.Link>
              </div>
              <div className="header-center">
                <nav className="main-nav ml-0 mr-0 ls-normal">
                  <ul className="menu">
                    <li className="active submenu">
                      <Nav.Link
                        className="submenu"
                        onClick={() => history.push("/")}
                      >
                        Shop
                        <AiOutlineArrowDown />
                      </Nav.Link>
                      <div className="megamenu">
                        <div className="row">
                          <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <h4 className="menu-title">Categories</h4>
                            <ul>
                              {(() => {
                                if (categoryDetails?.length > 0) {
                                  return (
                                    <>
                                      {categoryDetails?.map(
                                        (CategoriesDetail) => {
                                          return (
                                            <li
                                              className={`${
                                                IsDropdownMenuItem(
                                                  CategoriesDetail?._id
                                                )
                                                  ? ""
                                                  : ""
                                              }`}
                                            >
                                              <a className="d-flex justify-content-between">
                                                {CategoriesDetail.name}{" "}
                                                {IsDropdownMenuItem(
                                                  CategoriesDetail?._id
                                                ) ? (
                                                  <AiOutlineArrowRight />
                                                ) : (
                                                  ""
                                                )}
                                              </a>

                                              {DropdownMenuItem(
                                                CategoriesDetail?._id
                                              )}
                                            </li>
                                          );
                                        }
                                      )}
                                    </>
                                  );
                                } else {
                                  return <li>No Categories Found</li>;
                                }
                              })()}

                              <li>
                                <Link
                                  onClick={() => history.push("/products/list")}
                                >
                                  Shop All
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <h4 className="menu-title">Best Sellers</h4>
                            <ul>
                              {(() => {
                                if (bestSellerDetails?.length > 0) {
                                  return (
                                    <>
                                      {bestSellerDetails?.map(
                                        (bestSellerDetailsData) => {
                                          return (
                                            <li>
                                              <Link
                                                to={`/product/${bestSellerDetailsData._id}`}
                                              >
                                                {bestSellerDetailsData.name}
                                              </Link>
                                            </li>
                                          );
                                        }
                                      )}
                                    </>
                                  );
                                } else {
                                  return <li>No Best Sellers Found</li>;
                                }
                              })()}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="submenu">
                      <Nav.Link
                        className="submenu"
                        onClick={() => history.push("/")}
                      >
                        Invent
                        <AiOutlineArrowDown />
                      </Nav.Link>
                      <div className="megamenu">
                        <div className="row">
                          <div className="col-6 col-sm-6 col-md-6">
                            {/* <h4 className="menu-title">Sports Nutrition</h4> */}
                            <ul>
                              {/* <li className="">
                                {" "}
                                <Link to="/">Explore More</Link> */}
                              {footerDetails?.length > 0 &&
                                footerDetails?.map((obj, index) => {
                                  if (obj.url == "exploreLiven") {
                                    return (
                                      <li>
                                        <Link to={`/cms/${obj?.url}`}>
                                          {obj?.title}
                                        </Link>
                                      </li>
                                    );
                                  }
                                })}
                              {footerDetails?.length > 0 &&
                                footerDetails?.map((obj, index) => {
                                  if (obj.url == "livenDominance") {
                                    return (
                                      <li>
                                        <Link to={`/cms/${obj?.url}`}>
                                          {obj?.title}
                                        </Link>
                                      </li>
                                    );
                                  }
                                })}
                              {/* </li> */}
                              {/* <li className="">
                                {" "}
                                <Link to="/">Liven Dominance</Link>
                              </li> */}

                              {(() => {
                                if (subCategoryList?.length > 0) {
                                  return (
                                    <>
                                      {subCategoryList?.map(
                                        (CategoriesDetail) => {
                                          return (
                                            <li className="">
                                              {/* <Link
                                                to={`/category/${CategoriesDetail?._id}`}
                                              > */}
                                              <Nav.Link
                                                onClick={() =>
                                                  history.push(
                                                    `/category/${CategoriesDetail?._id}`
                                                  )
                                                }
                                              >
                                                {
                                                  CategoriesDetail?.subCategoryName
                                                }
                                                {/* </Link> */}
                                              </Nav.Link>
                                            </li>
                                          );
                                        }
                                      )}
                                    </>
                                  );
                                } else {
                                  return <li>No Categories Found</li>;
                                }
                              })()}
                              {/* <li className="submenu">
                                {" "}
                                <Link to="/category">Explore More</Link>
                                <ul>
                                  <li>
                                    <Link to="">Demo1</Link>
                                  </li>
                                  <li>
                                    <Link to="">Demo2</Link>
                                  </li>
                                  <li>
                                    <Link to="">Demo3</Link>
                                  </li>
                                  <li>
                                    <Link to="">Demo4</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="submenu">
                                {" "}
                                <Link to="/category">Liven Dominance</Link>
                                <ul>
                                  <li>
                                    <Link to="">Demo1</Link>
                                  </li>
                                  <li>
                                    <Link to="">Demo2</Link>
                                  </li>
                                  <li>
                                    <Link to="">Demo3</Link>
                                  </li>
                                  <li>
                                    <Link to="">Demo4</Link>
                                  </li>
                                </ul>
                              </li> */}
                              {/* <li>
                                {" "}
                                <Link to="/category">Gut</Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/category">Weight</Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/category">Detox</Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/category">Beauty</Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/category">Essentials</Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/category">Energy</Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/category">Eye</Link>
                              </li> */}
                            </ul>
                          </div>
                          {/* <div className="col-6 col-sm-6 col-md-6">
                            <h4 className="menu-title">Kids Nutrition</h4>
                            <ul>
                              <li>
                                {" "}
                                <Link to="/category">Throat</Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/category">Skin</Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/category">Skin</Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/category">Bone and Joints</Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/category">Heart</Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/category">Cognition</Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/category">Liver</Link>
                              </li>
                              <li>
                                {" "}
                                <Link to="/category">
                                  Fertility and Pregnancy
                                </Link>
                              </li>
                            </ul>
                          </div> */}
                        </div>
                      </div>
                    </li>

                    {/* <li className="submenu">
                      <Nav.Link onClick={() => history.push("/")}>
                        Discover
                      </Nav.Link>
                      <ul>
                        <li>
                          <a href="">Our Story</a>
                        </li>
                        <li>
                          <a href="">Traceable Ingredients</a>
                        </li>
                        <li>
                          <a href="">Science of Wellbeing</a>
                        </li>
                        <li>
                          <a href="">Wishlist</a>
                        </li>
                        <li>
                          <a href="">Wellbeing Promise</a>
                        </li>
                        <li>
                          <a href="">Honesty Inside Out</a>
                        </li>
                        <li>
                          {" "}
                          <Link to="/blog">Blogs</Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/contact">Contact Us</Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      {footerDetails?.length > 0 &&
                        footerDetails?.map((obj, index) => {
                          if (obj.url == "aboutus") {
                            return (
                              <Link to={`/cms/${obj?.url}`}>{obj?.title}</Link>
                            );
                          }
                        })}
                    </li>
                    <li>
                      <Nav.Link onClick={() => history.push("/blog")}>
                        Blog
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link onClick={() => history.push("/cms/Consult")}>
                        Consult
                      </Nav.Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-right">
                <div className="header-search hs-simple">
                  <form action="#" className="input-wrapper">
                    <input
                      type="text"
                      className="form-control"
                      name="search"
                      placeholder="Search..."
                      required
                    />
                    <button className="btn btn-search" type="submit">
                      <i className="d-icon-search"></i>
                    </button>
                  </form>
                </div>
                {/* <a className="nav-link nav-link-with-img border-rounded login-link d-xs-show" href="ajax/login.html" data-toggle="login-modal" */}
                {/* title="login"> */}
                {user?.login ? (
                  <>
                    <Dropdown
                      autoClose={["inside", "outside"]}
                      onToggle={(e) => {
                        if (e) {
                          //readNotification();
                          setNotiRead(false);
                        }
                      }}
                    >
                      <Dropdown.Toggle
                        align="start"
                        drop="start"
                        as={NotificationToggleComponent}
                      ></Dropdown.Toggle>

                      <Dropdown.Menu align="end" className="noti-container">
                        <div className="noti-header">
                          <BiBell size={25} color={"var(--black)"} />{" "}
                          Notifications
                        </div>
                        <div className="noti-content">
                          {/* <div className="sub-header">Today</div> */}

                          {notification?.notifications.length > 0 ? (
                            <>
                              {notification?.notifications.map((o, i) => (
                                <Dropdown.Item key={`noti-item${i}`}>
                                  <NotiCard key={`noti${i}`} data={o} />
                                </Dropdown.Item>
                              ))}

                              {notiLoading && (
                                <div className="noti-load-more text-secondary">
                                  Loading...
                                </div>
                              )}

                              {notification?.next_page ? (
                                <div
                                  className="noti-load-more text-secondary"
                                  role="button"
                                  onClick={() => {
                                    setNPage(npage + 1);
                                    handleGetNotification(npage + 1);
                                  }}
                                >
                                  See More
                                </div>
                              ) : (
                                <div className="noti-load-more text-secondary">
                                  You have reached the end
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="noti-load-more text-secondary no-notify">
                              No notifications found
                            </div>
                          )}
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown autoClose="outside" className="mx-0">
                      <Dropdown.Toggle
                        align="start"
                        drop="start"
                        as={UserToggleComponent}
                      ></Dropdown.Toggle>

                      <Dropdown.Menu align="end">
                        <Dropdown.Item
                          as="button"
                          onClick={() =>
                            window.open(
                              `${process.env.REACT_APP_URL}/accounts?defaultkey=second`,
                              "_self"
                            )
                          }
                        >
                          My Profile
                        </Dropdown.Item>
                        <Dropdown.Item
                          as="button"
                          onClick={() =>
                            window.open(
                              `${process.env.REACT_APP_URL}/accounts?defaultkey=first`,
                              "_self"
                            )
                          }
                        >
                          My Order
                        </Dropdown.Item>

                        <Dropdown.Divider />
                        <Dropdown.Item
                          as="button"
                          onClick={() => dispatch(user_logout_thunk())}
                        >
                          Sign Out
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>{" "}
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="nav-link nav-link-with-img border-rounded login-link d-xs-show"
                    >
                      <h3 className="img-cat-title mb-0">Login/Signup</h3>
                      {/* </a> */}
                    </Link>
                  </>
                )}

                <div className="dropdown cart-dropdown type2 mr-2">
                  <a href="#" className="cart-toggle link">
                    <i className="d-icon-bag mb-1">
                      {cart?.data?.cart?.length > 0 ? (
                        <span className="cart-count bg-dark">
                          {cart?.data?.cart?.length}
                        </span>
                      ) : (
                        ""
                      )}
                    </i>
                  </a>

                  <div
                    className={`dropdown-box ${
                      user?.cartlist ? "cartListOn" : ""
                    }`}
                    onMouseOut={showHideUpdateRow}
                  >
                    <div className="products scrollable">
                      {cart?.data?.cartProductDetails?.length > 0 &&
                        cart?.data?.cartProductDetails?.map(
                          (item, productcartkey) => {
                            totalAmount =
                              totalAmount + item?.qty * item?.saleAmount;
                            return (
                              <div
                                className="product product-cart"
                                key={productcartkey}
                              >
                                <figure className="product-media">
                                  <a href="#">
                                    <img
                                      // src={"http://54.177.7.240" + item?.photos}
                                      src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${item?.photos[0]}`}
                                      alt="product"
                                      width="80"
                                      height="auto"
                                    />
                                  </a>
                                  <button
                                    className="btn btn-link btn-close"
                                    onClick={() =>
                                      dispatch(
                                        remove_from_cart_thunk(item?._id)
                                      )
                                    }
                                  >
                                    {/* <i className="fas fa-times"></i> */}
                                    <span className="sr-only">Close</span>
                                  </button>
                                </figure>
                                <div className="product-detail">
                                  <a href="#" className="product-name">
                                    {item?.name}
                                  </a>
                                  <div className="price-box">
                                    <span className="product-price">
                                      {item?.qty}
                                      {" X "}{" "}
                                      {currencyFormat(item?.saleAmount, "INR")}{" "}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      {/* {getCartList()} */}
                      {/* <div className="product product-cart">
                        <figure className="product-media">
                          <a href="#">
                            <img
                              src={One}
                              alt="product"
                              width="80"
                              height="90"
                            />
                          </a>
                          <button className="btn btn-link btn-close">
                            <i className="fas fa-times"></i>
                            <span className="sr-only">Close</span>
                          </button>
                        </figure>
                        <div className="product-detail">
                          <a href="#" className="product-name">
                            Paprika
                          </a>
                          <div className="price-box">
                            <span className="product-quantity">1</span>
                            <span className="product-price">$21.00</span>
                          </div>
                        </div>
                      </div>

                      <div className="product product-cart">
                        <figure className="product-media">
                          <a href="#">
                            <img
                              src={Two}
                              alt="product"
                              width="80"
                              height="90"
                            />
                          </a>
                          <button className="btn btn-link btn-close">
                            <i className="fas fa-times"></i>
                            <span className="sr-only">Close</span>
                          </button>
                        </figure>
                        <div className="product-detail">
                          <a href="#" className="product-name">
                            Vegetable
                          </a>
                          <div className="price-box">
                            <span className="product-quantity">1</span>
                            <span className="product-price">$118.00</span>
                          </div>
                        </div>
                      </div> */}
                    </div>

                    <div className="cart-total">
                      <label>Subtotal:</label>
                      <span className="price">
                        {currencyFormat(totalAmount, "INR")}
                      </span>
                    </div>

                    <div className="cart-action">
                      <Link className="btn btn-underline btn-link" to="/cart">
                        View Cart
                      </Link>

                      <Link to="/checkout">
                        <span>Go To Checkout</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`mobile-menu-wrapper ${mobileMenuActive ? "active" : ""}`}
      >
        <div className="mobile-menu-overlay"></div>

        <a className="mobile-menu-close" onClick={() => hideModal()}>
          <i className="d-icon-times"></i>
        </a>

        <div className="mobile-menu-container scrollable">
          <div action="demo-food2-product.html#" className="input-wrapper">
            <input
              type="text"
              className="form-control"
              name="search"
              autoComplete="off"
              placeholder="Search your keyword..."
              required
            />
            <button className="btn btn-search" type="submit">
              <i className="d-icon-search"></i>
            </button>
          </div>

          <ul className="mobile-menu mmenu-anim">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a className="d-flex justify-content-between">
                Categories{" "}
                {categoryActive ? (
                  <AiOutlineArrowDown
                    onClick={() => setCategoryActive(false)}
                  />
                ) : (
                  <AiOutlineArrowUp onClick={() => setCategoryActive(true)} />
                )}
              </a>

              <ul
                className={`${categoryActive ? "catergory-page-active" : ""}`}
              >
                {(() => {
                  if (categoryDetails?.length > 0) {
                    return (
                      <>
                        {categoryDetails?.map((CategoriesDetail) => {
                          return (
                            <li
                              className={`${
                                IsDropdownMenuItem(CategoriesDetail?._id)
                                  ? "submenu"
                                  : ""
                              }`}
                            >
                              <a>{CategoriesDetail?.name}</a>
                              <AiOutlineArrowDown />
                              {DropdownMenuItem(CategoriesDetail?._id)}{" "}
                            </li>
                          );
                        })}
                      </>
                    );
                  } else {
                    return <li>No Categories Found</li>;
                  }
                })()}
              </ul>
            </li>
            <li>
              <a href="demo-food2-product.html">Products</a>
              <ul>
                <li>
                  <a href="demo-food2-product.html#">Product Pages</a>
                  <ul>
                    <li>
                      <a href="product-simple.html">Simple Product</a>
                    </li>
                    <li>
                      <a href="product-featured.html">Featured &amp; On Sale</a>
                    </li>
                    <li>
                      <a href="product.html">Variable Product</a>
                    </li>
                    <li>
                      <a href="product-variable-swatch.html">
                        Variation Swatch Product
                      </a>
                    </li>
                    <li>
                      <a href="product-grouped.html">Grouped Product </a>
                    </li>
                    <li>
                      <a href="product-external.html">External Product</a>
                    </li>
                    <li>
                      <a href="product-in-stock.html">In Stock Product</a>
                    </li>
                    <li>
                      <a href="product-out-stock.html">Out of Stock Product</a>
                    </li>
                    <li>
                      <a href="product-upsell.html">Upsell Products</a>
                    </li>
                    <li>
                      <a href="product-cross-sell.html">Cross Sell Products</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="demo-food2-product.html#">Product Layouts</a>
                  <ul>
                    <li>
                      <a href="product-vertical.html">Vertical Thumb</a>
                    </li>
                    <li>
                      <a href="product-horizontal.html">Horizontal Thumb</a>
                    </li>
                    <li>
                      <a href="product-gallery.html">Gallery Type</a>
                    </li>
                    <li>
                      <a href="product-grid.html">Grid Images</a>
                    </li>
                    <li>
                      <a href="product-masonry.html">Masonry Images</a>
                    </li>
                    <li>
                      <a href="product-sticky.html">Sticky Info</a>
                    </li>
                    <li>
                      <a href="product-sticky-both.html">Left & Right Sticky</a>
                    </li>
                    <li>
                      <a href="product-left-sidebar.html">With Left Sidebar</a>
                    </li>
                    <li>
                      <a href="product-right-sidebar.html">
                        With Right Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="product-full.html">Full Width Layout </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="demo-food2-product.html#">Product Features</a>
                  <ul>
                    <li>
                      <a href="product-sale.html">Sale Countdown</a>
                    </li>
                    <li>
                      <a href="product-hurryup.html">Hurry Up Notification </a>
                    </li>
                    <li>
                      <a href="product-attribute-guide.html">
                        Attribute Guide{" "}
                      </a>
                    </li>
                    <li>
                      <a href="product-sticky-cart.html">Add Cart Sticky</a>
                    </li>
                    <li>
                      <a href="product-thumbnail-label.html">
                        Labels on Thumbnail
                      </a>
                    </li>
                    <li>
                      <a href="product-more-description.html">
                        More Description Tabs
                      </a>
                    </li>
                    <li>
                      <a href="product-accordion-data.html">
                        Data In Accordion
                      </a>
                    </li>
                    <li>
                      <a href="product-tabinside.html">Data Inside</a>
                    </li>
                    <li>
                      <a href="product-video.html">Video Thumbnail </a>
                    </li>
                    <li>
                      <a href="product-360-degree.html">
                        360 Degree Thumbnail{" "}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <div className="d-flex justify-content-between">
                Pages{" "}
                {pageActive ? (
                  <AiOutlineArrowDown onClick={() => setPageActive(false)} />
                ) : (
                  <AiOutlineArrowUp onClick={() => setPageActive(true)} />
                )}
              </div>
              <ul className={`${pageActive ? "page-active" : ""}`}>
                <li>
                  <Link to="/abouts">About</Link>
                </li>
                <li>
                  <Link to="/cms/contactUs">Contact Us</Link>
                </li>
                {/* <li>
                  <Link to="/login">Login</Link>
                </li> */}
                {/* <li>
                  <a href="faq.html">FAQs</a>
                </li> */}
                {/* <li>
                  <a href="coming-soon.html">Coming Soon</a>
                </li> */}
              </ul>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
              {/* <ul>
                <li>
                  <a href="blog-classic.html">Classic</a>
                </li>
                <li>
                  <a href="blog-listing.html">Listing</a>
                </li>
                <li>
                  <a href="demo-food2-product.html#">Grid</a>
                  <ul>
                    <li>
                      <a href="blog-grid-2col.html">Grid 2 columns</a>
                    </li>
                    <li>
                      <a href="blog-grid-3col.html">Grid 3 columns</a>
                    </li>
                    <li>
                      <a href="blog-grid-4col.html">Grid 4 columns</a>
                    </li>
                    <li>
                      <a href="blog-grid-sidebar.html">Grid sidebar</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="demo-food2-product.html#">Masonry</a>
                  <ul>
                    <li>
                      <a href="blog-masonry-2col.html">Masonry 2 columns</a>
                    </li>
                    <li>
                      <a href="blog-masonry-3col.html">Masonry 3 columns</a>
                    </li>
                    <li>
                      <a href="blog-masonry-4col.html">Masonry 4 columns</a>
                    </li>
                    <li>
                      <a href="blog-masonry-sidebar.html">Masonry sidebar</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="demo-food2-product.html#">Mask</a>
                  <ul>
                    <li>
                      <a href="blog-mask-grid.html">Blog mask grid</a>
                    </li>
                    <li>
                      <a href="blog-mask-masonry.html">Blog mask masonry</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="post-single.html">Single Post</a>
                </li>
              </ul> */}
            </li>
            {/* <li>
              <a href="element.html">Elements</a>
              <ul>
                <li>
                  <a href="demo-food2-product.html#">Elements 1</a>
                  <ul>
                    <li>
                      <a href="element-accordions.html">Accordions</a>
                    </li>
                    <li>
                      <a href="element-alerts.html">Alert &amp; Notification</a>
                    </li>

                    <li>
                      <a href="element-banner-effect.html">Banner Effect</a>
                    </li>
                    <li>
                      <a href="element-banner.html">Banner</a>
                    </li>
                    <li>
                      <a href="element-blog-posts.html">Blog Posts</a>
                    </li>
                    <li>
                      <a href="element-breadcrumb.html">Breadcrumb</a>
                    </li>
                    <li>
                      <a href="element-buttons.html">Buttons</a>
                    </li>
                    <li>
                      <a href="element-cta.html">Call to Action</a>
                    </li>
                    <li>
                      <a href="element-countdown.html">Countdown</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="demo-food2-product.html#">Elements 2</a>
                  <ul>
                    <li>
                      <a href="element-counter.html">Counter </a>
                    </li>
                    <li>
                      <a href="element-creative-grid.html">Creative Grid</a>
                    </li>
                    <li>
                      <a href="element-animation.html">Entrance Effect</a>
                    </li>
                    <li>
                      <a href="element-floating.html">Floating</a>
                    </li>
                    <li>
                      <a href="element-hotspot.html">Hotspot</a>
                    </li>
                    <li>
                      <a href="element-icon-boxes.html">Icon Boxes</a>
                    </li>
                    <li>
                      <a href="element-icons.html">Icons</a>
                    </li>
                    <li>
                      <a href="element-image-box.html">Image box</a>
                    </li>
                    <li>
                      <a href="element-instagrams.html">Instagrams</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="demo-food2-product.html#">Elements 3</a>
                  <ul>
                    <li>
                      <a href="element-categories.html">Product Category</a>
                    </li>
                    <li>
                      <a href="element-products.html">Products</a>
                    </li>
                    <li>
                      <a href="element-product-banner.html">
                        Products + Banner
                      </a>
                    </li>
                    <li>
                      <a href="element-product-grid.html">Products + Grid</a>
                    </li>
                    <li>
                      <a href="element-product-single.html">Product Single</a>
                    </li>
                    <li>
                      <a href="element-product-tab.html">Products + Tab</a>
                    </li>
                    <li>
                      <a href="element-single-product.html">Single Product</a>
                    </li>
                    <li>
                      <a href="element-slider.html">Slider</a>
                    </li>
                    <li>
                      <a href="element-social-link.html">Social Icons </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="demo-food2-product.html#">Elements 4</a>
                  <ul>
                    <li>
                      <a href="element-subcategory.html">Subcategory</a>
                    </li>
                    <li>
                      <a href="element-svg-floating.html">Svg Floating</a>
                    </li>
                    <li>
                      <a href="element-tabs.html">Tabs</a>
                    </li>
                    <li>
                      <a href="element-testimonials.html">Testimonials</a>
                    </li>
                    <li>
                      <a href="element-titles.html">Title</a>
                    </li>
                    <li>
                      <a href="element-typography.html">Typography</a>
                    </li>
                    <li>
                      <a href="element-vendor.html">Vendor</a>
                    </li>
                    <li>
                      <a href="element-video.html">Video</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li> */}
          </ul>

          <ul className="mobile-menu mmenu-anim">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/cart">My Cart</Link>
            </li>
            {/* <li>
              <a href="wishlist.html">Wishlist</a>
            </li> */}
          </ul>
        </div>
      </div>

      {/* <Cart
          cartPop={cartPop}
          setCartPop={setCartPop}
          setCheckoutDevice={setCheckoutDevice}
        /> */}
    </>
  );
};

const UserComponent = ({ sref, user, onClick = () => {} }) => (
  <div className="header-user-details" onClick={onClick} ref={sref}>
    <img
      className="user-image"
      src={user?.data?.profilePhoto}
      width={35}
      height={35}
      alt="user-icon"
    />
    <div className="user-name">{user?.data?.name}</div>
  </div>
);

const HeaderMobileMenuIcon = React.forwardRef(({ onClick }, ref) => {
  return (
    <div
      className="menu-icon"
      ref={ref}
      role="button"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <CgMenuRight size={25} color={"white"} />
    </div>
  );
});

const HeaderMobileMenuCloseIcon = React.forwardRef(({ onClick }, ref) => {
  return (
    <div
      className="close-icon"
      ref={ref}
      role="button"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <VscChromeClose size={25} color={"white"} />
    </div>
  );
});

export default Header;

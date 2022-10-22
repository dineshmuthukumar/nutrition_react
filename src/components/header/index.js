import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Navbar, Nav, Dropdown, Container } from "react-bootstrap";
import { BiBell, BiHelpCircle } from "react-icons/bi";
import { useTranslation } from "react-multi-lang";
import { useSelector, useDispatch } from "react-redux";
import { FaDiscord } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import {  Link } from "react-router-dom";
import images from "../../utils/images.json";
import { user_logout_thunk } from "../../redux/thunk/user_thunk";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import {
  accountDetail,
  cartCheckout,
  cartDetail,
} from "../../api/actioncable-methods";

import { currencyFormat } from "../../utils/common";
import { user_wallet_update_action } from "../../redux/actions/user_action";
import { getCategoryApi, getNotificationApi } from "../../api/base-methods";
import { readNotificationApi } from "./../../api/base-methods";
import {
  checkout_event_thunk,
  get_cart_list_thunk,
} from "../../redux/thunk/user_cart_thunk";

// import Cart from "../cart";
import AppHelmet from "../helmet";

import Logo from "../../images/new-images/demos/demo-food2/liven-logo.png";

import One from "../../images/new-images/demos/demo-food2/products/1.jpg";
import Two from "../../images/new-images/demos/demo-food2/products/2.jpg";

import "./style.scss";
import Category from "../../pages/category";

// import "./style.scss";
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
  const [pageActive, setPageActive] = useState(false);

  const slug = user.data?.user ? user.data?.user?.slug : null;
  const userCart = cart?.data ? cart?.data : null;
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
    console.log("open");
    setSideBar(true);
  };
  const hideModal = (event) => {
    document.body.className = "";
    setSideBar(false);
  };

  useEffect(() => {
    if (slug) {
      accountDetail(slug, (data) => {
        dispatch(user_wallet_update_action(data));
      });
      handleGetNotification(npage);
      dispatch(get_cart_list_thunk());
      cartDetail(slug, (data) => {
        dispatch(get_cart_list_thunk());
      });
      cartCheckout(slug, (data) => {
        dispatch(checkout_event_thunk(data?.event === "start" ? true : false));
      });
      if (location.hash === "#cart") {
        history.push("/");
        setCartPop(true);
      }
    }
    // if (user?.data?.user) {
    //   if(!user?.data?.user?.name){
    //   window.open(
    //     `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/profile?forceUpdate=true`,
    //     "_self"
    //   );
    //   }
    // }
    if (user?.data?.user) {
      if (!user?.data?.user?.first_name && !user?.data?.user?.last_name) {
        window.open(
          `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/profile?forceUpdate=true`,
          "_self"
        );
      }
    }
    getCategoryDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCategoryDetails = async () => {
    try {
      setNotiLoading(true);
      const result = await getCategoryApi();
      //console.log(result?.data?.responseData?.categories);
      setCategoryDetails(result?.data?.responseData?.categories);
      // setNotiLoading(false);
      // if (input === 1) {
      //   setNotification(result.data.data);
      //   if (result.data.data.total > 0) {
      //     setNotiRead(result.data.data.notifications_read);
      //   }
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
  // const handleChangeLang = () => {
  //   const u_lang = lang === "en" ? "hi" : "en";
  //   setLanguage(u_lang);
  //   dispatch(change_lang_action(u_lang));
  // };

  const handlelogout = () => {
    dispatch(user_logout_thunk());
  };

  const handleGetNotification = async (input) => {
    try {
      setNotiLoading(true);
      const result = await getNotificationApi(input);
      setNotiLoading(false);
      if (input === 1) {
        setNotification(result.data.data);
        if (result.data.data.total > 0) {
          setNotiRead(result.data.data.notifications_read);
        }
      } else {
        setNotification({
          ...notification,
          notifications: [
            ...notification.notifications,
            ...result.data.data.notifications,
          ],
          next_page: result.data.data.next_page,
        });
      }
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
      user={user.data.user}
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
        <img src={images.bellNotify} height={22} alt="Nofity-Bell" />

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
        <div className="header-top">
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
        </div>

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
                      </Nav.Link>
                      <div className="megamenu">
                        <div className="row">
                          <div className="col-3 col-sm-3 col-md-3 col-lg-3">
                            <h4 className="menu-title">Categories</h4>
                            <ul>
                              {(() => {
                                if (categoryDetails?.length > 0) {
                                  return (
                                    <>
                                      {categoryDetails?.map(
                                        (CategoriesDetail) => {
                                          return (
                                            <li>
                                              <Link
                                                to={`/category/${CategoriesDetail._id}`}
                                              >
                                                {CategoriesDetail.name}
                                              </Link>
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
                                <Link onClick={() => history.push("/category")}>
                                  Shop All
                                </Link>
                              </li>
                            </ul>
                          </div>
                          {/* <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                          <h4 className="menu-title">Top Sellers</h4>
                          <ul>
                            <li>
                              {" "}
                              <Link to="/category">Essential Vitamins</Link>
                            </li>
                            <li>
                              {" "}
                              <Link to="/category">Daily Immunity Combo</Link>
                            </li>
                            <li>
                              {" "}
                              <Link to="/category">Deep Sleep Pack</Link>
                            </li>
                            <li>
                              {" "}
                              <Link to="/category">Happy Gut Combo</Link>
                            </li>
                            <li>
                              {" "}
                              <Link to="/category">
                                Women’s Performance Pack
                              </Link>
                            </li>

                            <li>
                              {" "}
                              <Link to="/category">
                                Beauty Sleep &amp; Healthy Hair Pack
                              </Link>
                            </li>
                            <li>
                              {" "}
                              <Link to="/category">Stress Relief Combo</Link>
                            </li>
                            <li>
                              {" "}
                              <Link to="/category">Beauty Pack</Link>
                            </li>
                            <li>
                              {" "}
                              <Link to="/category">Performance Pack</Link>
                            </li>
                            <li>
                              {" "}
                              <Link to="/category">Hair Care Kit</Link>
                            </li>
                          </ul>
                        </div> */}
                        </div>
                      </div>
                    </li>

                    {/* <li className="submenu">
                    <Nav.Link
                      className="submenu"
                      onClick={() => history.push("/")}
                    >
                      Health Goals
                    </Nav.Link>
                    <div className="megamenu">
                      <div className="row">
                        <div className="col-6 col-sm-6 col-md-6">
                          <h4 className="menu-title">Sports Nutrition</h4>
                          <ul>
                            <li>
                              {" "}
                              <Link to="/category">Immunity</Link>
                            </li>
                            <li>
                              {" "}
                              <Link to="/category">Sleep</Link>
                            </li>
                            <li>
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
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6">
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
                        </div>
                      </div>
                    </div>
                  </li> */}

                    <li className="submenu">
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
                    </li>

                    <li>
                      <Nav.Link onClick={() => history.push("/")}>
                        Consult
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link onClick={() => history.push("/about")}>
                        About Us
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link onClick={() => history.push("/blog")}>
                        Blogs
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
                  <div
                    className="nav-link nav-link-with-img border-rounded login-link d-xs-show"
                    onClick={() => handlelogout()}
                  >
                    <h3 className="img-cat-title mb-0">Logout</h3>
                    {/* </a> */}
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="nav-link nav-link-with-img border-rounded login-link d-xs-show"
                  >
                    <h3 className="img-cat-title mb-0">Login/Signup</h3>
                    {/* </a> */}
                  </Link>
                )}

                <div className="dropdown cart-dropdown type2 mr-2">
                  <a href="#" className="cart-toggle link">
                    <i className="d-icon-bag mb-1">
                      <span className="cart-count bg-dark">1</span>
                    </i>
                  </a>

                  <div className="dropdown-box">
                    <div className="products scrollable">
                      <div className="product product-cart">
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
                      </div>
                    </div>

                    <div className="cart-total">
                      <label>Subtotal:</label>
                      <span className="price">$139.00</span>
                    </div>

                    <div className="cart-action">
                      <Link className="btn btn-underline btn-link" to="/cart">
                        View Cart
                      </Link>
                      <a href="#" className="btn btn-dark">
                        <span>Go To Checkout</span>
                      </a>
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
              autocomplete="off"
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
              <Link to="/category" className="d-flex justify-content-between">
                Categories{" "}
                {categoryActive ? (
                  <AiOutlineArrowDown
                    onClick={() => setCategoryActive(false)}
                  />
                ) : (
                  <AiOutlineArrowUp onClick={() => setCategoryActive(true)} />
                )}
              </Link>

              <ul
                className={`${categoryActive ? "catergory-page-active" : ""}`}
              >
                {(() => {
                  if (categoryDetails?.length > 0) {
                    return (
                      <>
                        {categoryDetails?.map((CategoriesDetail) => {
                          return (
                            <li>
                              <Link to={`/category/${CategoriesDetail._id}`}>
                                {CategoriesDetail.name}
                              </Link>
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
              <Link className="d-flex justify-content-between">
                Pages{" "}
                {pageActive ? (
                  <AiOutlineArrowDown onClick={() => setPageActive(false)} />
                ) : (
                  <AiOutlineArrowUp onClick={() => setPageActive(true)} />
                )}
              </Link>
              <ul className={`${pageActive ? "page-active" : ""}`}>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
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
      src={user.avatar_url ? user.avatar_url : images.userJPG}
      alt="user-icon"
    />
    <div className="user-name">
      {currencyFormat(user?.balance, user?.currency_name)}
    </div>
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

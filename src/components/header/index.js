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
import {
  accountDetail,
  cartCheckout,
  cartDetail,
} from "../../api/actioncable-methods";
import { currencyFormat } from "../../utils/common";
import { user_wallet_update_action } from "../../redux/actions/user_action";
import { getNotificationApi } from "../../api/base-methods";
import { readNotificationApi } from "./../../api/base-methods";
import {
  checkout_event_thunk,
  get_cart_list_thunk,
} from "../../redux/thunk/user_cart_thunk";

// import Cart from "../cart";
import AppHelmet from "../helmet";


import Logo from "../../images/new-images/demos/demo-food2/liven-logo.png"

import One from "../../images/new-images/demos/demo-food2/products/1.jpg"
import Two from "../../images/new-images/demos/demo-food2/products/2.jpg"


import "./style.scss";

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

  //const [ribbon, setRibbon] = useState(true);
  const [cartPop, setCartPop] = useState(false);
  const [checkoutDevice, setCheckoutDevice] = useState(false);

  const slug = user.data?.user ? user.data?.user?.slug : null;
  const userCart = cart?.data ? cart?.data : null;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleChangeLang = () => {
  //   const u_lang = lang === "en" ? "hi" : "en";
  //   setLanguage(u_lang);
  //   dispatch(change_lang_action(u_lang));
  // };

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
                                      <i className="d-icon-info"></i>LIMITED PERIOD OFFER | Additional 10% OFF SITEWIDE. Use code INSIDEOUT at checkout to avail!
                                    </Nav.Link>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div className="header-middle sticky-header fix-top sticky-content sticky-top">
                    <div className="container">
                        <div className="header-left">
                            <Nav.Link
                            className="mobile-menu-toggle"
                              onClick={() => history.push("/")}
                            >
                               <i className="d-icon-bars2"></i>
                            </Nav.Link>

                            <Nav.Link
                            className="logo"
                              onClick={() => history.push("/")}
                            >
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
                                                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                                    <h4 className="menu-title">Categories</h4>
                                                    <ul>
                                                        <li>
                                                        <Link href="/category"
                                                            to="/category"
                                                          >
                                                          Superfood Plant Protein
                                                        </Link>
                                                        </li>
                                                        <li>
                                                          <Link
                                                            to="/category"
                                                          >
                                                          Collagen
                                                        </Link></li>
                                                        <li><Link
                                                            to="/category"
                                                          >
                                                          Slow
                                                        </Link></li>
                                                        <li>
                                                          <Link
                                                            to="/category"
                                                          >
                                                          Disney Frozen Melts
                                                        </Link>
                                                        </li>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Marvel Melts
                                                        </Link></li>
                                                        <li>  <Link
                                                            to="/category"
                                                          >
                                                          Melts
                                                        </Link></li>
                                                        <li>
                                                        <Nav.Link
                                                            onClick={() => history.push("/category")}
                                                          >
                                                          Effervescent
                                                        </Nav.Link>
                                                        </li>
                                                        <li> <Nav.Link
                                                            onClick={() => history.push("/category")}
                                                          >
                                                          Apple Cider Vinegar
                                                        </Nav.Link> </li>
                                                        <li> <Nav.Link
                                                            onClick={() => history.push("/category")}
                                                          >
                                                          Gifting
                                                        </Nav.Link></li>
                                                        <li> <Link
                                                            onClick={() => history.push("/category")}
                                                          >
                                                          Shop All
                                                        </Link></li>
                                                    </ul>
                                                </div>
                                                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                                    <h4 className="menu-title">Top Sellers</h4>
                                                    <ul>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Essential Vitamins</Link></li>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Daily Immunity Combo</Link></li>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Deep Sleep Pack</Link></li>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Happy Gut Combo</Link></li>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Women’s Performance Pack</Link></li>

                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Beauty Sleep &amp; Healthy Hair Pack</Link></li>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Stress Relief Combo</Link></li>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Beauty Pack</Link></li>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Performance Pack</Link></li>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Hair Care Kit</Link></li>
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
                                         Health Goals
                                        </Nav.Link>
                                        <div className="megamenu">
                                            <div className="row">
                                                <div className="col-6 col-sm-6 col-md-6">
                                                    <h4 className="menu-title">Sports Nutrition</h4>
                                                    <ul>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Immunity</Link></li>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Sleep</Link></li>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Gut</Link></li>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Weight</Link></li>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Detox</Link></li>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Beauty</Link></li>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Essentials</Link></li>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Energy</Link></li>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Eye</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="col-6 col-sm-6 col-md-6">
                                                    <h4 className="menu-title">Kids Nutrition</h4>
                                                    <ul>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Throat</Link></li>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Skin</Link></li>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Skin</Link></li>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Bone and Joints</Link></li>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Heart</Link></li>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Cognition</Link></li>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Liver</Link></li>
                                                        <li> <Link
                                                            to="/category"
                                                          >
                                                          Fertility and Pregnancy</Link></li>
                                                    </ul>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </li>
                                   
                                    <li className="submenu">
                                        
                                        <Nav.Link
                                       
                                          onClick={() => history.push("/")}
                                        >
                                         Discover
                                        </Nav.Link>
                                        <ul>
                                            <li><a href="">Our Story</a></li>
                                            <li><a href="">Traceable Ingredients</a></li>
                                            <li><a href="">Science of Wellbeing</a></li>
                                            <li><a href="">Wishlist</a></li>
                                            <li><a href="">Wellbeing Promise</a></li>
                                            <li><a href="">Honesty Inside Out</a></li>
                                            <li> <Link
                                                            to="/blog"
                                                          >Blogs</Link></li>
                                            <li> <Link
                                                           to ="/contact"
                                                          >Contact Us</Link></li>
                                        </ul>
                                    </li>
                                    
                                    <li >
                                       <Nav.Link
                                      
                                          onClick={() => history.push("/")}
                                        >
                                         Consult
                                        </Nav.Link>

                                      </li>
                                    <li >
                                        <Nav.Link
                                           
                                              onClick={() => history.push("/about")}
                                            >
                                         About Us
                                        </Nav.Link>
                                    
                                    </li>
                                    <li >

                                    <Nav.Link
                                        
                                        onClick={() => history.push("/blog")}
                                      >
                                    Blogs
                                    </Nav.Link>

                                    </li>
                                    
                                </ul>
                            </nav>
                            
                        </div>
                        <div className="header-right">
                        
                          
                            <div className="header-search hs-simple">
                                <form action="#" className="input-wrapper">
                                    <input type="text" className="form-control" name="search"  placeholder="Search..." required />
                                    <button className="btn btn-search" type="submit">
                                        <i className="d-icon-search"></i>
                                    </button>
                                </form>
                            </div>
                            {/* <a className="nav-link nav-link-with-img border-rounded login-link d-xs-show" href="ajax/login.html" data-toggle="login-modal" */}
                            {/* title="login"> */}
                            <Link to="/login" className="nav-link nav-link-with-img border-rounded login-link d-xs-show">
                                <h3 className="img-cat-title mb-0">
                                    Login/Signup
                                </h3>
                            {/* </a> */}
                            </Link>

                           

                            <div className="dropdown cart-dropdown type2 mr-2">
                                <a href="#" className="cart-toggle link">
                                    <i className="d-icon-bag mb-1"><span className="cart-count bg-dark">1</span></i>
                                </a>
                                
                                <div className="dropdown-box">
                                    <div className="products scrollable">
                                        <div className="product product-cart">
                                            <figure className="product-media">
                                                <a href="#">
                                                    <img src={One} alt="product" width="80" height="90" />
                                                </a>
                                                <button className="btn btn-link btn-close"><i className="fas fa-times"></i><span className="sr-only">Close</span></button>
                                            </figure>
                                            <div className="product-detail">
                                                <a href="#" className="product-name">Paprika</a>
                                                <div className="price-box">
                                                    <span className="product-quantity">1</span>
                                                    <span className="product-price">$21.00</span>
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <div className="product product-cart">
                                            <figure className="product-media">
                                                <a href="#">
                                                    <img src={Two} alt="product" width="80" height="90" />
                                                </a>
                                                <button className="btn btn-link btn-close"><i className="fas fa-times"></i><span className="sr-only">Close</span></button>
                                            </figure>
                                            <div className="product-detail">
                                                <a href="#" className="product-name">Vegetable</a>
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
                                        
                                        <Link className="btn btn-underline btn-link" to="/cart">View Cart</Link>
                                        <a href="#" className="btn btn-dark"><span>Go To Checkout</span></a>
                                    </div>
                                  
                                </div>
                                
                            </div>
                        </div>
                    </div>
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

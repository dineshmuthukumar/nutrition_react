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

import Cart from "../cart";
import AppHelmet from "../helmet";

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
      <AppHelmet
        title={props?.title}
        image={props?.image}
        description={props?.description}
      />
      <Navbar
        bg="dark"
        expand="md"
        variant="dark"
        sticky="top"
        className={bgImage ? "bgImageHeader" : "transparent"}
      >
        <Container fluid>
          <Navbar.Brand
            onClick={() =>
              window.open(process.env.REACT_APP_WEBSITE_URL, "_self")
            }
            role="button"
            className="head-title"
          >
            {/* BeyondLife.club */}
            <img
              src={images.jumpTradeLogo}
              alt="jumpTradeLogo"
              className="logoImage"
            />
            {/* <div
              className="sub-head-title header-powereby "
              role="button"
              onClick={() =>
                window.open(process.env.REACT_APP_GUARDIAN_URL, "_self")
              }
            >
              Powered by GuardianLink
            </div> */}
          </Navbar.Brand>
          {!hideOptions && (
            <>
              <Nav className="d-flex me-0 ms-auto">
                <Nav.Link
                  id="drop_outer"
                  onClick={() => history.push("/nft-marketplace")}
                >
                  Explore
                </Nav.Link>
                {/* <Nav.Link id="drop_outer" href={process.env.REACT_APP_DROP_URL}>
                  Drop
                </Nav.Link> */}
                <Dropdown autoClose={["inside", "outside"]} className="me-0">
                  <Dropdown.Toggle
                    align="start"
                    drop="start"
                    as={DropToggle}
                  ></Dropdown.Toggle>

                  <Dropdown.Menu align="end">
                    <Dropdown.Item
                      as="button"
                      onClick={() =>
                        window.open(
                          `${process.env.REACT_APP_MCL_URL}`,
                          "_blank"
                        )
                      }
                    >
                      Meta Cricket League NFTs
                    </Dropdown.Item>
                    <Dropdown.Item
                      as="button"
                      onClick={() =>
                        window.open(
                          `${process.env.REACT_APP_CHELSEA_URL}`,
                          "_blank"
                        )
                      }
                    >
                      Football Memorabilia NFTs
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link id="drop_outer" role="button">
                  {" "}
                  <span className="beta-container">
                    <span className="beta-tag">Coming soon</span>MCL Game{" "}
                  </span>{" "}
                </Nav.Link>
                <Nav.Link
                  id="drop_outer"
                  role="button"
                  onClick={() =>
                    window.open(process.env.REACT_APP_MARKETPLACE_URL, "_self")
                  }
                >
                  <span className="beta-container">
                    <span className="beta-tag">Beta</span>
                    Marketplace
                  </span>
                </Nav.Link>
                <Nav.Link
                  id="drop_outer"
                  role="button"
                  onClick={() =>
                    window.open(
                      `${process.env.REACT_APP_MARKETPLACE_URL}/blog`,
                      "_self"
                    )
                  }
                >
                  Blog
                </Nav.Link>
                {!hideSign && (
                  <>
                    {user.login ? (
                      <>
                        <Nav.Link href="#home" className="help_ic">
                          <BiHelpCircle
                            size={25}
                            role="button"
                            onClick={() =>
                              window.open(
                                process.env.REACT_APP_HELP_URL,
                                "_blank"
                              )
                            }
                          />
                        </Nav.Link>
                        <Dropdown
                          autoClose={["inside", "outside"]}
                          onToggle={(e) => {
                            if (e) {
                              readNotification();
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
                              <BiBell size={25} color={"white"} /> Notifications
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
                        {slug && (
                          <Nav.Link
                            href=""
                            className="cart_ic position-relative"
                            onClick={() => {
                              if (userCart?.checkout && !checkoutDevice) {
                                toast.error(
                                  "Order is being processed. Can't access cart!",
                                  {
                                    autoClose: 2000,
                                  }
                                );
                              } else {
                                setCartPop(!cartPop);
                              }
                            }}
                          >
                            <img
                              src={images.cartIconSVG}
                              height={20}
                              alt="CartIcon"
                            />
                            {parseInt(userCart?.total_count) > 0 && (
                              <span className="badge cart-count rounded-pill bg-danger position-absolute">
                                {userCart?.total_count}
                              </span>
                            )}
                          </Nav.Link>
                        )}
                        <Dropdown autoClose="outside" className="mx-0">
                          <Dropdown.Toggle
                            align="start"
                            drop="start"
                            as={UserToggleComponent}
                          ></Dropdown.Toggle>

                          <Dropdown.Menu align="end">
                            <UserComponent user={user.data.user} />
                            <Dropdown.Item
                              id="drop_inner"
                              href="/"
                              target="_self"
                            >
                              Drops
                            </Dropdown.Item>
                            <Dropdown.Item
                              as="button"
                              onClick={() =>
                                window.open(
                                  `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/profile`,
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
                                  `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/mynft`,
                                  "_self"
                                )
                              }
                            >
                              My NFTs
                            </Dropdown.Item>
                            <Dropdown.Item
                              as="button"
                              onClick={() =>
                                window.open(
                                  `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/wallet`,
                                  "_self"
                                )
                              }
                            >
                              My GuardianLink Wallet
                            </Dropdown.Item>
                            <Dropdown.Item
                              as="button"
                              onClick={() =>
                                window.open(
                                  `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/pre-orders`,
                                  "_self"
                                )
                              }
                            >
                              Pre Book
                            </Dropdown.Item>
                            <Dropdown.Item
                              as="button"
                              onClick={() =>
                                window.open(
                                  `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/my-orders`,
                                  "_self"
                                )
                              }
                            >
                              My Orders
                            </Dropdown.Item>
                            <Dropdown.Item
                              as="button"
                              onClick={() =>
                                window.open(
                                  `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/bid-activity`,
                                  "_self"
                                )
                              }
                            >
                              My Bids
                            </Dropdown.Item>
                            {/* <Dropdown.Item
                              as="button"
                              onClick={() =>
                                window.open(
                                  `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/claim`,
                                  "_self"
                                )
                              }
                            >
                              Claim NFTs
                            </Dropdown.Item> */}
                            <Dropdown.Item
                              as="button"
                              onClick={() =>
                                window.open(
                                  `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/user-activity`,
                                  "_self"
                                )
                              }
                            >
                              My Activity
                            </Dropdown.Item>{" "}
                            <Dropdown.Item
                              as="button"
                              onClick={() =>
                                window.open(
                                  `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/settings`,
                                  "_self"
                                )
                              }
                            >
                              Settings
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item
                              as="button"
                              onClick={() =>
                                window.open(
                                  process.env.REACT_APP_HELP_URL,
                                  "_blank"
                                )
                              }
                            >
                              Help Center
                            </Dropdown.Item>
                            {/* <Dropdown.Divider />
                          <Dropdown.Item as="button">
                            <div className="d-flex justify-content-between">
                              <div>Moon Mode</div>

                              <div>
                                <ToggleButton
                                  value={value || false}
                                  onToggle={(value) => {
                                    setValue(!value);
                                  }}
                                />
                              </div>
                            </div>
                          </Dropdown.Item> */}
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
                        <>
                          <Nav.Link
                            className="theme-btn"
                            href={`${process.env.REACT_APP_ACCOUNTS_URL}/signin?redirect=${window.location.href}`}
                            target="_self"
                          >
                            <span> {t("signin")}</span>
                          </Nav.Link>
                          <Nav.Link
                            className="theme-btn"
                            href={`${process.env.REACT_APP_ACCOUNTS_URL}/signup`}
                            target="_self"
                          >
                            <span>{t("signup")}</span>
                          </Nav.Link>
                        </>
                      </>
                    )}
                  </>
                )}
                <Nav.Link
                  className="discord_ic"
                  href={`https://discord.com/invite/JRWmNb38GW`}
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <FaDiscord size={25} />
                  {/* <span>Join Our Discord</span> */}
                </Nav.Link>
              </Nav>
              <Dropdown
                autoClose={["inside", "outside"]}
                onToggle={(e) => {
                  if (e) {
                    readNotification();
                    setNotiRead(false);
                  }
                }}
              >
                <Dropdown.Toggle
                  align="start"
                  drop="start"
                  as={HeaderMobileMenuIcon}
                ></Dropdown.Toggle>

                <Dropdown.Menu align="end" className="side-menu">
                  <Dropdown.Item
                    drop="start"
                    as={HeaderMobileMenuCloseIcon}
                  ></Dropdown.Item>
                  {/* <Dropdown.Item href="/">Drops</Dropdown.Item> */}
                  {/* <Dropdown.Item href="/creator-application">
                    Creator
                  </Dropdown.Item> */}

                  <Dropdown.Item
                    onClick={() => history.push("/nft-marketplace")}
                  >
                    Explore
                  </Dropdown.Item>
                  {/* <Dropdown.Item href={process.env.REACT_APP_DROP_URL}>
                    Drop
                  </Dropdown.Item> */}
                  <Dropdown autoClose={["inside", "outside"]} className="me-0">
                    <Dropdown.Toggle
                      align="start"
                      drop="start"
                      as={DropToggle}
                    ></Dropdown.Toggle>

                    <Dropdown.Menu align="end">
                      <Dropdown.Item
                        as="button"
                        onClick={() =>
                          window.open(
                            `${process.env.REACT_APP_MCL_URL}`,
                            "_blank"
                          )
                        }
                      >
                        Meta Cricket League NFTs
                      </Dropdown.Item>
                      <Dropdown.Item
                        as="button"
                        onClick={() =>
                          window.open(
                            `${process.env.REACT_APP_CHELSEA_URL}`,
                            "_blank"
                          )
                        }
                      >
                        Football Memorabilia NFTs
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown.Item href="#">
                    {" "}
                    <span className="beta-container">
                      <span className="beta-tag">Coming soon</span> MCL Game{" "}
                    </span>{" "}
                  </Dropdown.Item>

                  <Dropdown.Item href="/">
                    <span className="beta-container">
                      <span className="beta-tag">Beta</span>
                      Marketplace
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item href="/blog">Blog</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          )}
        </Container>
      </Navbar>

      <Cart
        cartPop={cartPop}
        setCartPop={setCartPop}
        setCheckoutDevice={setCheckoutDevice}
      />
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

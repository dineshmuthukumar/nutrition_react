import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Navbar, Nav, Dropdown, Container } from "react-bootstrap";
import { BiBell, BiHelpCircle } from "react-icons/bi";
import { useTranslation } from "react-multi-lang";
import { useSelector, useDispatch } from "react-redux";
import { FaDiscord } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";

import depositIcon from "../../images/deposit.svg";
import bidIcon from "../../images/bid.svg";
import buyIcon from "../../images/buy.svg";
import outbidIcon from "../../images/outbid.svg";
import userImg from "../../images/user_1.png";
import { user_logout_thunk } from "../../redux/thunk/user_thunk";
import { accountDetail } from "../../api/actioncable-methods";
import { currencyFormat } from "../../utils/common";
import { user_wallet_update_action } from "../../redux/actions/user_action";
import { getNotificationApi } from "../../api/base-methods";
import { readNotificationApi } from "./../../api/base-methods";

import "./style.scss";

const Header = ({ hideOptions = false, hideSign = false, started = false }) => {
  const t = useTranslation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [notiLoading, setNotiLoading] = useState(false);
  const [npage, setNPage] = useState(1);
  const [notification, setNotification] = useState();
  const [notiRead, setNotiRead] = useState(true);

  const [ribbon, setRibbon] = useState(true);

  const { user } = state;
  const slug = user.data?.user ? user.data?.user?.slug : null;

  useEffect(() => {
    if (slug) {
      accountDetail(slug, (data) => {
        dispatch(user_wallet_update_action(data));
      });
      handleGetNotification(npage);
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
      user={state.user.data.user}
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
        <BiBell size={25} color={"white"} />

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
          switch (data.reason) {
            case "deposit":
              return <img src={depositIcon} alt="notification icon" />;

            case "buy_success":
              return <img src={buyIcon} alt="notification icon" />;

            case "bid_success":
              return <img src={bidIcon} alt="notification icon" />;

            case "bid_expired":
              return <img src={outbidIcon} alt="notification icon" />;

            default:
              return "";
          }
        })()}

        <div className="noti-message-content">
          {(() => {
            switch (data.reason) {
              case "deposit":
                return (
                  <>
                    <div className="title">Deposit Successful</div>
                    <div className="desc text-secondary">
                      Your payment of{" "}
                      {currencyFormat(
                        data.amount,
                        user.data.user.currency_name
                      )}{" "}
                      was successfully processed to your wallet! Happy NFT
                      buying.
                    </div>
                    <div className="noti-time">
                      {dayjs(data.created_at).format("DD MMM YYYY hh:mma")}
                    </div>
                  </>
                );

              case "buy_success":
                return (
                  <>
                    <div className="title">
                      {data.nft_name} - Your NFT is Yours!
                    </div>
                    <div className="desc text-secondary">
                      Congratulations! You've successfully purchased your NFT.
                      Check it out in your collections.
                    </div>
                    <div className="noti-time">
                      {dayjs(data.created_at).format("DD MMM YYYY hh:mma")}
                    </div>
                  </>
                );

              case "bid_success":
                return (
                  <>
                    <div className="title">
                      {data.nft_name} - Your Bid Has Been Placed!
                    </div>
                    <div className="desc text-secondary">
                      Congratulations. Your bid has been successfully placed.
                      All the best for winning the auction.
                    </div>
                    <div className="noti-time">
                      {dayjs(data.created_at).format("DD MMM YYYY hh:mma")}
                    </div>
                  </>
                );

              case "bid_expired":
                return (
                  <>
                    <div className="title">
                      {data.nft_name} - You've been outbid!
                    </div>
                    <div className="desc text-secondary">
                      You're no longer the highest bidder. You can, however
                      still place a higher bid, and win the auction!
                    </div>
                    <div className="noti-time">
                      {dayjs(data.created_at).format("DD MMM YYYY hh:mma")}
                    </div>
                  </>
                );

              default:
                return "";
            }
          })()}
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar bg="dark" expand="md" variant="dark">
        <Container fluid>
          <Navbar.Brand
            onClick={() =>
              window.open(process.env.REACT_APP_WEBSITE_URL, "_self")
            }
            role="button"
            className="head-title"
          >
            BeyondLife.club
            <div
              className="sub-head-title header-powereby "
              role="button"
              onClick={() =>
                window.open(process.env.REACT_APP_GUARDIAN_URL, "_self")
              }
            >
              Powered by GuardianLink
            </div>
          </Navbar.Brand>
          {!hideOptions && (
            <>
              <Nav className="d-flex me-0 ms-auto">
                {/* <Nav.Link id="drop_outer" href="/">
                  Explore
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
                          `${process.env.REACT_APP_CHAKRA_URL}`,
                          "_blank"
                        )
                      }
                    >
                      Chakra The Invincible NFTs
                    </Dropdown.Item>
                    <Dropdown.Item
                      as="button"
                      onClick={() =>
                        window.open(
                          `${process.env.REACT_APP_AMITABH_URL}`,
                          "_blank"
                        )
                      }
                    >
                      BigB Punks NFTs
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link id="drop_outer" href="/">
                  Marketplace
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
                                    <Dropdown.Item>
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
                        <Dropdown autoClose="outside">
                          <Dropdown.Toggle
                            align="start"
                            drop="start"
                            as={UserToggleComponent}
                          ></Dropdown.Toggle>

                          <Dropdown.Menu align="end">
                            <UserComponent user={state.user.data.user} />
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
                              Wallet
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
                              Outbid NFTs
                            </Dropdown.Item>
                            <Dropdown.Item
                              as="button"
                              onClick={() =>
                                window.open(
                                  `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/claim`,
                                  "_self"
                                )
                              }
                            >
                              Claim NFTs
                            </Dropdown.Item>
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
                            href={`${process.env.REACT_APP_ACCOUNTS_URL}/signin?redirect=${window.location.href}`}
                            target="_self"
                          >
                            {t("signin")}
                          </Nav.Link>
                          <Nav.Link
                            href={`${process.env.REACT_APP_ACCOUNTS_URL}/signup`}
                            target="_self"
                          >
                            {t("signup")}
                          </Nav.Link>
                        </>
                      </>
                    )}
                  </>
                )}
                <Nav.Link
                  className="discord_ic"
                  href={`https://discord.com/invite/87s8ReJ5FA`}
                  target="_blank"
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
                  <Dropdown.Item href="/">Explore</Dropdown.Item>
                  <Dropdown.Item href="/">Drops</Dropdown.Item>
                  <Dropdown.Item href="/">Marketplace</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          )}
        </Container>
      </Navbar>
    </>
  );
};

const UserComponent = ({ sref, user, onClick = () => {} }) => (
  <div className="header-user-details" onClick={onClick} ref={sref}>
    <img
      className="user-image"
      src={user.avatar_url ? user.avatar_url : userImg}
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

import React, { useEffect, useState } from "react";
import { Navbar, Nav, Dropdown, Container } from "react-bootstrap";
import { BiBell, BiHelpCircle } from "react-icons/bi";
import { useTranslation, setLanguage } from "react-multi-lang";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { FaDiscord } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

import { change_lang_action } from "./../../redux/actions/lang_action";
import {
  user_load_by_token_thunk,
  user_logout_thunk,
} from "../../redux/thunk/user_thunk";
import { accountDetail } from "../../api/actioncable-methods";
import { getCookies } from "../../utils/cookies";
import { currencyFormat } from "../../utils/common";

import userImg from "../../images/user_1.png";
import "./style.scss";
import { user_wallet_update_action } from "../../redux/actions/user_action";

const Header = ({ hideOptions = false, hideSign = false }) => {
  const t = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [notification, setNotification] = useState(false);
  const [ribbon, setRibbon] = useState(true);

  const { user, lang } = state;
  const slug = user.data.user ? user.data.user.slug : null;

  useEffect(() => {
    if (slug) {
      accountDetail(slug, (data) => {
        dispatch(user_wallet_update_action(data));
      });
    }
  }, []);

  const handleChangeLang = () => {
    const u_lang = lang === "en" ? "hi" : "en";
    setLanguage(u_lang);
    dispatch(change_lang_action(u_lang));
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
        className={`p-2 ${notification ? "theme-color rounded-circle" : ""}`}
        ref={ref}
        role="button"
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        <BiBell size={25} color={notification ? "black" : "white"} />
      </div>
    );
  });

  return (
    <>
      {ribbon && (
        <div className="top_bar">
          <div className="alert_box">
            <div className="alert_info">
              <p>
                <a
                  href={
                    slug
                      ? `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/wallet#web`
                      : `${process.env.REACT_APP_ACCOUNTS_URL}/signup`
                  }
                >
                  The Amitabh NFT Drops Are Soon Going Live! Get Ready To Access
                  The Drops By Adding Balance To Your Wallet!
                </a>
              </p>
            </div>
            <div className="alert_close">
              <span id="al_close" onClick={() => setRibbon(false)}>
                {/* <FaTimes /> */}
                <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e" />
              </span>
            </div>
          </div>
        </div>
      )}
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
                        {/* <Dropdown
                        autoClose="outside"
                        onToggle={(e) => setNotification(e)}
                      >
                        <Dropdown.Toggle
                          align="start"
                          drop="start"
                          as={NotificationToggleComponent}
                        ></Dropdown.Toggle>

                        <Dropdown.Menu align="end" className="noti-container">
                          <div className="noti-header">Notifications</div>
                          <div className="noti-content">
                            <div className="sub-header">Today</div>

                            {[
                              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                              1, 1, 1, 3,
                            ].map((o) => (
                              <div className="noti-message">
                                <img src="https://picsum.photos/100/100" />
                                <div className="noti-message-content">
                                  <div className="title">Lorem Ipsum</div>
                                  <div className="desc text-secondary">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                  </div>
                                </div>
                              </div>
                            ))}

                            <div
                              className="noti-load-more text-secondary"
                              role="button" >
                              See More
                            </div>
                          </div>
                        </Dropdown.Menu>
                      </Dropdown> */}
                        <Dropdown autoClose="outside">
                          <Dropdown.Toggle
                            align="start"
                            drop="start"
                            as={UserToggleComponent}
                          ></Dropdown.Toggle>

                          <Dropdown.Menu align="end">
                            <UserComponent user={state.user.data.user} />
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
                                  `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/bid-activity`,
                                  "_self"
                                )
                              }
                            >
                              Bid Activity
                            </Dropdown.Item>
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
                  target="_self"
                >
                  <FaDiscord size={25} />
                  <span>Join Our Discord</span>
                </Nav.Link>
              </Nav>
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
      src={user.avatar ? user.avatar : userImg}
      alt="user-icon"
    />
    <div className="user-name">
      {currencyFormat(user?.balance, user?.currency_name)}
    </div>
  </div>
);
export default Header;

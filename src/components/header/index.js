import React, { useState } from "react";
import { Navbar, Nav, Dropdown, Container } from "react-bootstrap";
import { BiBell, BiCheck, BiHelpCircle } from "react-icons/bi";
import { useTranslation, setLanguage } from "react-multi-lang";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import ToggleButton from "react-toggle-button";

import { change_lang_action } from "./../../redux/actions/lang_action";
import { user_logout_thunk } from "../../redux/thunk/user_thunk";

import "./style.scss";

const Header = ({ hideOptions = false }) => {
  const t = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [value, setValue] = useState(false);

  const { user, lang } = state;

  const handleChangeLang = () => {
    const u_lang = lang === "en" ? "hi" : "en";
    setLanguage(u_lang);
    dispatch(change_lang_action(u_lang));
  };

  const CustomToggle = React.forwardRef(({ onClick }, ref) => (
    <UserComponent
      user={state.user.data.user}
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    />
  ));

  return (
    <>
      <Navbar bg="dark" expand="md" sticky="top" variant="dark">
        <Container fluid>
          <Navbar.Brand
            onClick={() => history.push("/")}
            role="button"
            className="head-title"
          >
            Beyondlife.club
            <div className="sub-head-title">Powered by GuardianLink</div>
          </Navbar.Brand>
          {!hideOptions && (
            <>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="d-flex me-auto ms-auto">
                  <Nav.Link href="#home">Menu Item</Nav.Link>
                  <Nav.Link href="#link">Menu Item</Nav.Link>
                  <Nav.Link href="#home">Menu Item</Nav.Link>
                  <Nav.Link href="#link">Menu Item</Nav.Link>
                </Nav>

                <Nav>
                  {/* <NavDropdown
                    title={state.lang === "en" ? "English" : "Hindi"}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item onClick={handleChangeLang}>
                      {state.lang === "en" ? "Hindi" : "English"}
                    </NavDropdown.Item>
                  </NavDropdown> */}

                  {user.login ? (
                    <>
                      <Nav.Link href="#home">
                        <BiHelpCircle size={25} />
                      </Nav.Link>
                      <Nav.Link href="#link">
                        <BiBell size={25} />
                      </Nav.Link>
                      <Dropdown autoClose="outside">
                        <Dropdown.Toggle
                          align="start"
                          drop="start"
                          as={CustomToggle}
                        ></Dropdown.Toggle>

                        <Dropdown.Menu align="end">
                          <Dropdown.Item
                            as="button"
                            onClick={() =>
                              window.open(
                                `${process.env.REACT_APP_BASE_URL}/accounts#home`,
                                "_self"
                              )
                            }
                          >
                            My Accounts
                          </Dropdown.Item>
                          <Dropdown.Item
                            as="button"
                            onClick={() =>
                              window.open(
                                `${process.env.REACT_APP_BASE_URL}/accounts#wallet`,
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
                                `${process.env.REACT_APP_BASE_URL}/accounts#activity`,
                                "_self"
                              )
                            }
                          >
                            Activity
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item
                            as="button"
                            onClick={() =>
                              window.open(
                                `${process.env.REACT_APP_BASE_URL}/accounts#settings`,
                                "_self"
                              )
                            }
                          >
                            Settings
                          </Dropdown.Item>
                          <Dropdown.Divider />
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
                      {/* <Button
                        variant="success"
                        className="me-md-2 mt-2 mb-2 mt-md-0 mb-md-0"
                        onClick={() =>
                          window.open(
                            `${process.env.REACT_APP_BASE_URL}/signin?redirect=${window.location.href}`,
                            "_self"
                          )
                        }
                      >
                        {t("signin")}
                      </Button>
                      <Button
                        onClick={() =>
                          window.open(
                            `${process.env.REACT_APP_BASE_URL}/signup`,
                            "_self"
                          )
                        }
                      ></Button> */}

                      <Nav.Link
                        href={`${process.env.REACT_APP_BASE_URL}/signin?redirect=${window.location.href}`}
                        target="_self"
                      >
                        {t("signin")}
                      </Nav.Link>
                      <Nav.Link
                        href={`${process.env.REACT_APP_BASE_URL}/signup`}
                        target="_self"
                      >
                        {t("signup")}
                      </Nav.Link>
                    </>
                  )}
                </Nav>
              </Navbar.Collapse>
            </>
          )}
        </Container>
      </Navbar>
    </>
  );
};

const UserComponent = ({ user, onClick = () => {} }) => (
  <div className="header-user-details" onClick={onClick}>
    <img
      className="user-image"
      src="https://picsum.photos/50/50"
      alt="user-icon"
    />
    <div className="user-name">
      {user.currency_symbol} {user.balance}
    </div>
  </div>
);
export default Header;

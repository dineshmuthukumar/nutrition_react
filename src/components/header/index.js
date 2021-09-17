import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Dropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useTranslation, setLanguage } from "react-multi-lang";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { change_lang_action } from "./../../redux/actions/lang_action";
import { user_logout_thunk } from "../../redux/thunk/user_thunk";

import "./style.scss";

const Header = ({ hideOptions = false }) => {
  const t = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

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
      <Navbar bg="white" expand="md" sticky="top" className="border-bottom">
        <Container>
          <Navbar.Brand onClick={() => history.push("/")} role="button">
            <img
              alt=""
              src="https://i.pinimg.com/236x/cf/38/92/cf3892a7bb2f0a83c263e7c1bf844002.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            AMITHAB NFT
          </Navbar.Brand>
          {!hideOptions && (
            <>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Form className="d-flex me-auto ms-auto">
                  {/* <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              /> */}

                  {/* <div>
                    <Online>Only shown when you're online</Online>
                    <Offline>Only shown offline (surprise!)</Offline>
                  </div> */}
                </Form>

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
                    <Dropdown>
                      <Dropdown.Toggle
                        align="start"
                        drop="start"
                        as={CustomToggle}
                      ></Dropdown.Toggle>

                      <Dropdown.Menu>
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
                          onClick={() => dispatch(user_logout_thunk())}
                        >
                          Sign Out
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : (
                    <>
                      <Button
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
                      >
                        {t("signup")}
                      </Button>
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
    <div className="user-name">{`${user.first_name} ${user.last_name}`}</div>
    <img
      className="user-image"
      src="https://cdn1.iconfinder.com/data/icons/essential-21/128/User-512.png"
      alt="user-icon"
    />
  </div>
);
export default Header;

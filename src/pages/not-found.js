import React from "react";

//import { BsExclamationCircle } from "react-icons/bs";
import { Navbar } from "react-bootstrap";
import jumpTradeLogo from "./../images/jump-trade-logo.svg";
import AppHelmet from "../components/helmet/index";

const NotFound = () => {
  return (
    <>
      <AppHelmet title="" description="" image="" hideCanonical />
      <section className="notfound-section">
        <div className="container">
          <div
            className="row align-items-center justify-content-center"
            style={{
              minHeight: "calc(100vh - 10rem)",
            }}
          >
            <center>
              <Navbar.Brand
                onClick={() =>
                  window.open(process.env.REACT_APP_WEBSITE_URL, "_blank")
                }
                role="button"
                className="not-found "
              >
                {/* Jump.trade
                <div
                  className="sub-not-found not-found-powereby "
                  role="button"
                  onClick={() =>
                    window.open(process.env.REACT_APP_GUARDIAN_URL, "_blank")
                  }
                >
                  Grow With Attitude
                </div> */}
                <img
                  src={jumpTradeLogo}
                  className="logo-img"
                  alt="JumpTradelogo"
                />
              </Navbar.Brand>
              <div className="notfound-text-block">
                <h1>404</h1>
                <h4>This page doesn't exist.</h4>
                <h5>
                  Go to Marketplace{" "}
                  <a
                    href={process.env.REACT_APP_MARKETPLACE_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Home
                  </a>{" "}
                  Page
                </h5>
              </div>
              {/* <br /> */}
              {/* <br /> */}
              {/* <table border="0" align="center" cellpadding="4">
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/common/kailey-kitty._CB485935150_.gif"
                        width="50"
                        height="45"
                      />
                    </td>
                    <td valign="middle" class="sans">
                      <b class="h1">Looking for something?</b>
                      <br />
                      We're sorry. The Web address you entered is not a
                      functioning page on our site.
                      <br />
                      <br />
                      <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/common/orange-arrow._CB485935542_.gif"
                        width="10"
                        height="9"
                      />
                      <b>
                        Go to Marketplace{" "}
                        <a
                          href={process.env.REACT_APP_MARKETPLACE_URL}
                          target="_blank"
                        >
                          Home
                        </a>{" "}
                        Page
                      </b>
                    </td>
                  </tr>
                </tbody>
              </table> */}
            </center>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;

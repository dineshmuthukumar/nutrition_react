import React from "react";

import { Navbar } from "react-bootstrap";
import images from "./../utils/images.json";
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
                <img
                  src={images.jumpTradeLogoSVG}
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
                    target="_self"
                    rel="noreferrer"
                  >
                    Home
                  </a>{" "}
                  Page
                </h5>
              </div>
            </center>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;

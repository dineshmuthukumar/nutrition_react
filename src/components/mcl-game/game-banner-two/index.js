import React from "react";
// import { Col, Row, Form, Button } from "react-bootstrap";
// import Toggle from "react-toggle";
// import { useHistory } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { FiMail, FiPhone } from "react-icons/fi";
import images from "../../../utils/images.json";

import device from "../../../images/device.png";
import "../style.scss";
const MclGameTwo = () => {
  return (
    <>
      <section className="whitepaper_sec py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="whitepaper_box p-4 text-center position-relative">
              <h2 className="display-1 text-uppercase fw-bold download_app">
                Meta Cricket League
              </h2>
              <h2 className="display-1 text-uppercase fw-bold marketplace_app">
                Whitepaper
              </h2>
              <p className="my-3 text-capitaliz text-white e h-meduim fs-4">
                <span>
                  Meta Cricket League is a Hit-to-Earn game that brings the
                  excitement of cricket to the metaverse. Read the whitepaper to
                  learn more about the game, its structure, and key details.
                </span>
              </p>
              <p className="fs-3 text-capitalize  theme-color">
                <strong>
                  <span>Learn about meta cricket league</span>
                </strong>
              </p>
              <a href="http://mcl-wp.jump.trade/" target="_blank">
                <button className="read_moree fs-5 fw-bold">
                  <span>Read Now</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="hr-line"></div>
      <section className="mcl-game-three pt-5 pb-0">
        <div className=" pt-5">
          <div className="row pt-5 pb-0">
            <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-end mb-4">
              <div className="p-lg-5 p-2">
                <h2 className="display-1 text-uppercase fw-bold download_app">
                  Download the
                </h2>
                <h2 className="display-1 text-uppercase fw-bold marketplace_app">
                  Marketplace app
                </h2>
                {/* <p className="fs-3 theme-color">
                  <strong>
                    <span>
                      Jump.trade - The NFT Marketplace To Trade Legendary
                      NFTs&nbsp;
                    </span>
                  </strong>
                </p>
                <p className="my-3 text-capitalize fs-4 ">
                  <span>
                    Jump.trade - The #1 NFT Marketplace to Buy the world's first
                    P2E cricket game Nfts. Buy NFT bats, players, and signed
                    legendary Nfts commemorating world cup final matches!
                  </span>
                </p> */}
                <div className="d-flex text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-start mt-5">
                  <a
                    className="me-4"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="https://play.google.com/store/apps/details?id=com.jump.trade"
                  >
                    <img src={images.playStore} alt="PlayStore Images" />
                  </a>
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="https://apps.apple.com/in/app/jump-trade/id1618739753"
                  >
                    <img src={images.appStore} alt="AppStore Images" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-0">
              <div className="p-0 mx-lg-0">
                <img
                  className=" img-fluid  w-100 fit-cover"
                  src={device}
                  alt="Device"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MclGameTwo;

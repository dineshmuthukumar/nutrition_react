import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import Toggle from "react-toggle";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiMail, FiPhone } from "react-icons/fi";
import images from "../../../utils/images.json";
import icon from "../../../images/icon.png";
import device from "../../../images/device.png";
import "../style.scss";
const MclGameTwo = () => {
  return (
    <>
      <section className="py-5 mcl-game-two">
        <div className="container-fluid py-4 py-xl-5">
          <div className="row mb-4 mb-lg-5">
            <div className="col-md- col-xl-8 text-center mx-auto">
              <h2 className="fw-bold div_title">META CRICKET LEAGUE</h2>
              <h2 className="fw-bold div_title div_stroke">GAME ON</h2>
            </div>
          </div>
          <div className="row row-cols-2 row-cols-md-3 mx-auto justify-content-center">
            <div className="os_list text-center">
              <img src={icon} />
            </div>
            {/* <div className="os_list text-center">dfdfg</div>
            <div className="os_list text-center">ghgh</div> */}
          </div>
          <div className="row  justify-content-center pt-5">
            <div className="col">
              <div className="title-div text-center">
                <h1 className="text-uppercase text-white">Coming Soon</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mcl-game-three pt-5 pb-0">
        <div className=" pt-5">
          <div className="row pt-5 pb-0">
            <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-end mb-4">
              <div className="p-lg-5 p-2">
                <h1 className="display-1 text-uppercase fw-bold download_app">
                  Download the
                </h1>
                <h1 className="display-1 text-uppercase fw-bold marketplace_app">
                  Marketplace app
                </h1>
                <p className="fs-3 theme-color">
                  <strong>
                    <span>
                      Jump.trade - The NFT Marketplace To Trade Legendary
                      NFTs&nbsp;
                    </span>
                  </strong>
                </p>
                <p className="my-3 text-capitalize fs-4">
                  <span>
                    Jump.trade - The #1 NFT Marketplace to Buy the world's first
                    P2E cricket game Nfts. Buy NFT bats, players, and signed
                    legendary Nfts commemorating world cup final matches!
                  </span>
                </p>
                <div className="d-flex justify-content-start mt-5">
                  <a
                    className="me-4"
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.jump.trade"
                  >
                    <img src={images.playStore} />
                  </a>
                  <a
                    target="_blank"
                    href="https://apps.apple.com/in/app/jump-trade/id1618739753"
                  >
                    <img src={images.appStore} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-0">
              <div className="p-0 mx-lg-0">
                <img
                  className=" img-fluid shadow w-100 fit-cover"
                  src={device}
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

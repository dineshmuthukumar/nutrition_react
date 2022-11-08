import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BiArrowBack, BiRightArrowAlt } from "react-icons/bi";

import { Button, Form } from "react-bootstrap";
import { HiOutlineArrowRight } from "react-icons/hi";
import {
  FaDiscord,
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import customer from "../../../images/new-images/subpages/customer.jpg";
import store from "../../../images/new-images/subpages/store.jpg";

import { CustomPageApi } from "../../../api/base-methods";

import "./style.scss";

const Aboutus = () => {
  const getCustomPage = async (page) => {
    const Abouts = await CustomPageApi(page);

    console.log(Abouts, "Abouts");
  };

  useEffect(() => {
    getCustomPage("about");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <section className="customer-section pb-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 abt-img">
              <figure>
                <img
                  src={customer}
                  alt="Happy Customer"
                  className="banner-radius abt-img"
                />
              </figure>
            </div>
            <div className="col-md-6 mb-4">
              <h3 className="section-title lh-1 font-weight-bold">About Us</h3>
              <p className="section-desc text-grey">
                Already millions of people are very satisfied by thi.
                <br />
                s page builder and the number is growing more and more.
                Technolog
                <br />
                developing, requirements are increasing. Riode has brought.
                Already millions of people are very satisfied by thi.
                <br />
                s page builder and the number is growing more and more.
                Technolog
                <br />
                developing, requirements are increasing. Riode has brought.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="store-section pb-10 ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-first mb-4">
              <h3 className="section-title lh-1 font-weight-bold">
                Our Vission & Our Mission
              </h3>
              <p className="section-desc text-grey">
                Already millions of people are very satisfied by thi.
                <br />
                s page builder and the number is growing more and more.
                Technolog
                <br />
                developing, requirements are increasing. Riode has brought.
                Already millions of people are very satisfied by thi.
                <br />
                s page builder and the number is growing more and more.
                Technolog
                <br />
                developing, requirements are increasing. Riode has brought.
              </p>
            </div>
            <div className="col-md-6 mb-4 text-center">
              <figure>
                <img
                  src={store}
                  alt="Our Store"
                  className="banner-radius abt-img"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;

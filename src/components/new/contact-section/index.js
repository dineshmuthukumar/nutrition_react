import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";

import { useHistory } from "react-router-dom";
//import Image from "react-bootstrap/Image";
import { BiArrowBack,BiRightArrowAlt } from "react-icons/bi";

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

import "./style.scss";

const ContactSection = () => {

  return (<>

        <section className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 ls-m mb-4">
                        <div className="grey-section d-flex align-items-center h-100">
                            <div>
                                <h4 className="mb-2 text-capitalize">Headquarters</h4>
                                <p>1600 Amphitheatre Parkway<br />New York WC1 1BA</p>

                                <h4 className="mb-2 text-capitalize">Phone Number</h4>
                                <p>
                                    <a href="tel:#">1.800.458.56</a><br />
                                    <a href="tel:#">1.800.458.56</a>
                                </p>

                                <h4 className="mb-2 text-capitalize">Support</h4>
                                <p className="mb-4">
                                    <a href="#">support@your-domain.com</a><br/>
                                    <a href="#">help@your-domain.com</a><br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-6 d-flex align-items-center mb-4">
                        <div className="w-100">
                            <form className="pl-lg-2" action="#">
                                <h4 className="ls-m font-weight-bold">Let’s Connect</h4>
                                <p>Your email address will not be published. Required fields are
                                    marked *</p>
                                <div className="row mb-2">
                                    <div className="col-12 mb-4">
                                        <textarea className="form-control" rows="4" cols="50" required placeholder="Comment*"></textarea>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <input className="form_contact form-control" type="text" placeholder="Name *" required />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <input className="form_contact form-control" type="email" placeholder="Email *" required />
                                    </div>
                                </div>
                                <button className="btn-product btn-cart wid_200">Post Comment<i className="d-icon-arrow-right"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </>
  );
};

export default ContactSection;

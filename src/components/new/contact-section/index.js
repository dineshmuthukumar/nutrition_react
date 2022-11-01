import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { useHistory } from "react-router-dom";
//import Image from "react-bootstrap/Image";
import { BiArrowBack,BiRightArrowAlt } from "react-icons/bi";
import { Button, Form } from "react-bootstrap";
import { HiOutlineArrowRight } from "react-icons/hi";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {FaDiscord,FaInstagram,FaTwitter,FaTelegramPlane,FaYoutube,} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from 'react-router-dom';

import customer from "../../../images/new-images/subpages/customer.jpg";
import store from "../../../images/new-images/subpages/store.jpg";

import "./style.scss";

const ContactSection = () => {

  return (
    <>
      <section className="contact-section">
        <Container>
          <Row>
            <div className="col-lg-3 col-md-4 col-sm-6 ls-m mb-4">
              <div className="grey-section d-flex align-items-center h-100">
                <div>
                  <h4 className="mb-2 text-capitalize">Headquarters</h4>
                  <p>
                    1600 Amphitheatre Parkway
                    <br />
                    New York WC1 1BA
                  </p>
                  <h4 className="mb-2 text-capitalize">Phone Number</h4>
                  <p>
                    <Link to="" slassName="btn btn-link">
                      1.800.458.56
                    </Link>
                    <br />
                    <Link to="" className="btn btn-link">
                      1.800.458.56
                    </Link>
                  </p>
                  <h4 className="mb-2 text-capitalize">Support</h4>
                  <p className="mb-4">
                    <Link to="" className="btn btn-link">
                      support@your-domain.com
                    </Link>
                    <br />
                    <Link to="" className="btn btn-link">
                      help@your-domain.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-6 d-flex align-items-center mb-4">
              <div className="w-100 offset-sm-1">
                <Row>
                  <Col>
                    <h2 className="ls-m font-weight-bold">Let’s Connect</h2>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                  </Col>
                </Row>
                <div class="change_pass">
                  <Row>
                    <Col sm={3}>
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Name</Form.Label>
                          <Form.Control type="text" placeholder="name" />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col sm={3}>
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Mobile Number</Form.Label>
                          <Form.Control
                            type="tel"
                            placeholder="Mobile Number"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col sm={3}>
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Email Address"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={9}>
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Comments</Form.Label>
                          <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                      <button
                        type="submit"
                        class="btn-product btn-cart wid_200"
                      >
                        Contact Us
                      </button>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactSection;

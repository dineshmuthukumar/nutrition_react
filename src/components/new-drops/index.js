import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import { HiOutlineArrowRight } from "react-icons/hi";
import {
  FaTelegramPlane,
  FaDiscord,
  FaInstagram,
  FaMediumM,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

import one from "../../images/drops/one.png";
import two from "../../images/drops/two.png";
import three from "../../images/drops/three.png";
import four from "../../images/drops/amitab2.png";

import { Button, Form } from "react-bootstrap";
import DropCard from "./drop-card";
import "./style.scss";

const NewDrops = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="new_drop_wrapper">
        <section className="sw_ab_1">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-9 col-xs-11 order-2 order-lg-1">
                <div className="drop-title mb-0">
                  <h2 className="drop-title__heading mb-4">
                    Amitabh Bachchan NFT Collections going live soon{" "}
                  </h2>
                  <p className="drop-title__description mb-4">
                    Imagine owning an NFT that holds Amitji’s significance,
                    history, the value of exceptional existence, and beyond. We
                    bring a series of Amitabh Bachchan’s exclusive NFT
                    collection, curated by the legend himself. Right from the
                    time, Amitabh Bachchan.{" "}
                  </p>
                  <div class="learnMore">
                    <a href="#">Join the waitlist</a>

                    {/* <button type="button" onClick={()=> setModal(true)}>Join the waitlist</button>  */}
                  </div>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-6 col-lg-5 col-md-9 col-xs-10 order-1 order-lg-2">
                <div className="content-img content-img--l4-1">
                  <Image
                    src={four}
                    rounded
                  />{" "}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="scroll-drops my-4">
                {" "}
                <a href="#drop_1">Scroll for all Drops</a>{" "}
              </div>
            </div>
          </div>
        </section>
        <section className="sw_3" id="ab_3">
          <div className="">
            <div className="navigation-tab">
              <div className="app-showcase">
                <Navbar className="kd-feature-tabs">
                  <div className="nav nav-tabs sticky-tabs">
                    <Link to="#drop_1" className="nav-label">
                      {" "}
                      Collection 1:  <span>Madhushala</span>{" "}
                    </Link>
                    <Link className="nav-label">
                      {" "}
                      Collection 2:  <span>Posters</span>{" "}
                    </Link>
                    <Link className="nav-label">
                      {" "}
                      Collection 3: <span> Cryptopunks</span>{" "}
                    </Link>
                  </div>
                </Navbar>
              </div>
            </div>
          </div>
        </section>
        <section className="drops_list">
          <DropCard img={three} />
          <DropCard img={two} />
          <DropCard img={one} />
        </section>
        <section className="drop-newsletter">
          <div className="container">
            <div className="row">
              <h1>
                Are you the one going to make it big in India?
                <span>Own an NFT.</span>
              </h1>{" "}
            </div>
            <Form id="nft_form">
              <Form.Group className="formGroup mb-3" controlId="formBasicEmail">
                <Form.Control
                  className="nft_form_email"
                  type="email"
                  name="Nemail"
                  placeholder="name@example.com"
                />
                <p className="nft_email_error"></p>
                <Button className="nft_form" type="submit">
                  <HiOutlineArrowRight />{" "}
                </Button>
              </Form.Group>
            </Form>
          </div>
        </section>
        <div id="footer">
          <div id="fmenu1">
            <div class="submenu">
              <div>
                {" "}
                <a href="index.php">
                  <h1>BeyondLife.club</h1>
                </a>
                <p>A world without an end</p>
              </div>
              <div id="socialMedia">
                <ul class="social-icon-two">
                  <li>
                    <a href="#">
                      <FaDiscord />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTelegramPlane />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaMediumM />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="submenu">
              <ul>
                <li>
                  <a href="about.php">About: The world beyond end</a>
                </li>
                <li>
                  <a href="philosophy.php">Philosophy of BeyondLife.club</a>
                </li>
                <li>
                  <a href="nft.php">What is an NFT? </a>
                </li>
                <li>
                  <a href="terms-and-condition.php">Terms of service</a>
                </li>
              </ul>
            </div>
            <div class="submenu">
              <Form id="nft_form">
                <Form.Label>Get the latest NFT updates</Form.Label>
                <Form.Group
                  className="formGroup mb-3"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    className="nft_form_email"
                    type="email"
                    name="Nemail"
                    placeholder="name@example.com"
                  />
                  <p className="nft_email_error"></p>
                  <Button className="nft_form" type="submit">
                    <HiOutlineArrowRight />{" "}
                  </Button>
                </Form.Group>
              </Form>
            </div>
          </div>
          <div id="fmenu2">
            <div class="submenu">
              <div>© BeyondLife.club.</div>
              <div>
                <a href="#">Terms and conditions</a>
              </div>
              <div>
                <a href="#">Privacy</a>
              </div>
            </div>
            <div class="submenu">
              <a target="_blank" href="https://www.guardianlink.io">
                <Image
                  src="https://cdn.beyondlife.club/media/logo_horizondal.png"
                  alt="alt"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Modal show={modal} centered>
        <Modal.Body>
          <p>Modal body text goes here.</p>

          <button type="button" onClick={() => setModal(false)}>
            close
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewDrops;

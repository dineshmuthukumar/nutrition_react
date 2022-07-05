import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//import Image from "react-bootstrap/Image";
import { BiLoaderAlt } from "react-icons/bi";
import { Button, Form } from "react-bootstrap";
import { HiOutlineArrowRight } from "react-icons/hi";
import {
  FaDiscord,
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import "./style.scss";
import { validateEmail } from "../../utils/common";
import { subscribeApi } from "../../api/base-methods";
import images from "../../utils/images.json";

const Footer = () => {
  const [email, setEmail] = useState();
  const [vEmail, setVEmail] = useState();
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleSendNewsLetter = async () => {
    if (validateEmail(email)) {
      setVEmail(null);

      try {
        setLoading(true);
        console.log("object", "sfsfsf");

        const formData = new FormData();
        formData.append("Nemail", email);

        const result = await subscribeApi(formData);

        if (result.data.status) {
          setVEmail(
            "We will buzz you with important updates. Thank you for being a part of Jump.trade #jump.trade #nft"
          );
        } else {
          setVEmail(
            "We got it again!, We are excited to have you as part of our NFT club. Details have been noted already. We will buzz you with important updates. See you soon!"
          );
        }

        setEmail("");
        setLoading(false);
      } catch (error) {
        setLoading(false);

        console.log(
          "🚀 ~ file: index.js ~ line 46 ~ handleSendNewsLetter ~ error",
          error
        );
      }
    } else {
      setVEmail("Please provide a valid email");
    }
  };
  return (
    <>
      <div id="footer">
        <div id="fmenu1">
          <div className="submenu first-box">
            <a target="_self" href="/">
              <img
                src={images.jumpTradeLogo}
                className="footer-logo"
                alt="JumptradeLogo"
              />
            </a>
            <p className="footer-brand-info">
              Jump.trade is one of the world's largest NFT marketplace where you
              can buy &amp; trade a lot of top digital collectibles including
              MCL cricket game NFTs and other sports NFTs.
            </p>
            {/* <div className="menu-list">
              <a target="_self" href="/about-us">
                About US
              </a> */}
            {/* <ul>
                <li>
                  <a
                    target="_self"
                    href="https://www.beyondlife.club/philosophy.php"
                  >
                    Philosophy of BeyondLife.club
                  </a>
                </li>
                <li>
                  <a target="_self" href="https://www.beyondlife.club/nft.php">
                    What is an NFT?
                  </a>
                </li>
                <li>
                  <a target="_self" href="https://www.beyondlife.club/faq.php">
                    FAQ
                  </a>
                </li>
              </ul> */}
            {/* </div> */}

            <Form
              id="nft_form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendNewsLetter();
                return false;
              }}
            >
              <Form.Label>
                Get the Latest Updates on Jump.trade NFT Marketplace
              </Form.Label>
              <Form.Group className="formGroup mb-3" controlId="formBasicEmail">
                <Form.Control
                  className="nft_form_email"
                  type="email"
                  name="Nemail"
                  placeholder="name@example.com"
                  disabled={loading}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="nft_email_error">{vEmail}</p>
                <Button
                  className="nft_form"
                  type="button"
                  disabled={loading}
                  onClick={handleSendNewsLetter}
                >
                  {loading ? (
                    <BiLoaderAlt className="fa fa-spin" />
                  ) : (
                    <HiOutlineArrowRight />
                  )}
                </Button>
              </Form.Group>
            </Form>
          </div>
          <div className="submenu second-box">
            <div className="downloads-section mb-5">
              <h2 className="app-download">Download App</h2>
              <div className="d-flex pt-3 downloads_btns mb-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.jump.trade"
                  className="me-4"
                  target="_blank"
                  rel="nofollow noopoener noreferrer"
                >
                  <img src={images.playStore} alt="PlayStore" />
                </a>
                <a
                  href="https://apps.apple.com/in/app/jump-trade/id1618739753"
                  className=""
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <img src={images.appStore} alt="AppStore" />
                </a>
              </div>
            </div>
            <div className="top-block">
              <h3>BECOME A PART OF THE COMMUNITY</h3>
              <h4>BEGIN A CONVERSATION</h4>
              <ul className="linkList">
                <li>
                  {/* eslint-disable-next-line */}
                  <a
                    href="https://discord.com/invite/JRWmNb38GW"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <FaDiscord /> @Discord
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@guardianlink.io"
                    rel="nofollow noopener noreferrer"
                    className=""
                  >
                    support@guardianlink.io
                  </a>
                </li>
              </ul>
            </div>
            <div id="socialMedia">
              <h3>FOLLOW US</h3>
              <ul className="social-icon-two">
                <li>
                  {/* eslint-disable-next-line */}
                  <a
                    href="https://discord.com/invite/JRWmNb38GW"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <FaDiscord />
                  </a>
                </li>
                <li>
                  {/* eslint-disable-next-line */}
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="https://t.me/jumptradenft"
                  >
                    <FaTelegramPlane />
                  </a>
                </li>
                <li>
                  {/* eslint-disable-next-line */}
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="https://twitter.com/Jumptradenft"
                  >
                    <FaTwitter />
                  </a>
                </li>
                {/* <li>
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="https://www.facebook.com/BeyondLifeClub-109895114746109"
                  >
                    <FaFacebookF />
                  </a>
                </li> */}
                <li>
                  {/* eslint-disable-next-line */}
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="https://www.instagram.com/jumptradenft/"
                  >
                    <FaInstagram />
                  </a>
                </li>
                {/* <li>
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="https://beyondlife-club.medium.com/"
                  >
                    <FaMediumM />
                  </a>
                </li> */}
                <li>
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="https://www.youtube.com/channel/UCBjyJeYnDeml1aE6URwUfdA"
                  >
                    <FaYoutube />
                  </a>
                </li>
              </ul>
              {/* <h4>
                <a
                  href="https://cdn.guardianlink.io/product-hotspot/files/media-kit.zip"
                  target="_self"
                  rel="nofollow noopener noreferrer"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <FaCloudDownloadAlt /> download media kit
                </a>
              </h4> */}
            </div>
          </div>
          {/* <div className="submenu">
            
          </div> */}
        </div>
      </div>
      <div className="bottom-bar py-4">
        <div className="bottom-container d-flex justify-content-center align-items-center">
          <div className="copyrights me-3">
            © All rights reserved |{" "}
            {/* <a href="https://guardianlink.io/">A GuardianLink Brand</a>,   */}
            {/* Appstars Applications Pvt. Ltd., India &  */}
            Guardian Blockchain Labs Pte. Ltd., Singapore.
          </div>
          <div className="vr"></div>

          <div className="bottom-links">
            <span
              className="ms-3 me-3 "
              onClick={() => history.push("/about-us")}
            >
              About Us
            </span>
            <div className="vr"></div>
            <span
              className="ms-3 me-3 "
              onClick={() => history.push("/terms-and-conditions")}
            >
              Terms & Conditions
            </span>
            <div className="vr"></div>
            <span
              className="ms-3 me-3"
              onClick={() => history.push("/privacy-policy")}
            >
              Privacy Policy
            </span>
            <div className="vr"></div>
            <span className="ms-3 me-3" onClick={() => history.push("/faq")}>
              FAQs
            </span>
            <div className="vr"></div>
            <span
              className="ms-3"
              // onClick={() => history.push("/https://www.guardianlink.io/contact-us")}
              onClick={() =>
                window.open(process.env.REACT_APP_GUARDIAN_CONTACT_US, "_blank")
              }
            >
              Contact Us
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { BiLoaderAlt } from "react-icons/bi";
import { Button, Form } from "react-bootstrap";
import { HiOutlineArrowRight } from "react-icons/hi";
import {
  FaTelegramPlane,
  FaDiscord,
  FaInstagram,
  FaMediumM,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./style.scss";
import { validateEmail } from "../../utils/common";
import { subscribeApi } from "../../api/base-methods";
import guardianLinkLogo from "../../images/guardianlink.svg";
import jumpTradeLogo from "../../images/jump-trade-logo.svg";

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
              <img src={jumpTradeLogo} className="footer-logo" />
            </a>
            <p className="footer-brand-info">
              Jump.trade is one of the world’s largest NFT marketplace where you
              can buy &amp; trade a lot of top digital collectibles including
              MCL cricket game NFTs and other sports NFTs.
            </p>
            {/* <div className="menu-list">
              <a target="_self" href="https://www.beyondlife.club/about.php">
                About US
              </a>
              <ul>
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
              </ul>
            </div> */}

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
            <div className="top-block">
              <h3>BECOME A PART OF THE COMMUNITY</h3>
              <h4>BEGIN A CONVERSATION</h4>
              <ul className="linkList">
                <li>
                  <a
                    href="https://discord.com/invite/JRWmNb38GW"
                    target="_blank"
                    rel="nofollow"
                  >
                    <FaDiscord /> @Discord
                  </a>
                </li>
                <li>
                  <a href="mailto:support@guardianlink.io" className="">
                    support@guardianlink.io
                  </a>
                </li>
              </ul>
            </div>
            <div id="socialMedia">
              <h3>FOLLOW US</h3>
              <ul className="social-icon-two">
                <li>
                  <a
                    href="https://discord.com/invite/JRWmNb38GW"
                    target="_blank"
                    rel="nofollow"
                  >
                    <FaDiscord />
                  </a>
                </li>
                {/* <li>
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="https://t.me/Beyondlifeclub"
                  >
                    <FaTelegramPlane />
                  </a>
                </li> */}
                <li>
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="https://twitter.com/Jumptradenft"
                  >
                    <FaTwitter />
                  </a>
                </li>
                {/* <li>
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="https://www.facebook.com/BeyondLifeClub-109895114746109"
                  >
                    <FaFacebookF />
                  </a>
                </li> */}
                <li>
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="https://www.instagram.com/jumptradenft/"
                  >
                    <FaInstagram />
                  </a>
                </li>
                {/* <li>
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="https://beyondlife-club.medium.com/"
                  >
                    <FaMediumM />
                  </a>
                </li> */}
                {/* <li>
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="https://www.youtube.com/channel/UCgfA98XT-yUi8YSIjT8omUA"
                  >
                    <FaYoutube />
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          {/* <div className="submenu">
            
          </div> */}
        </div>
      </div>
      <div className="bottom-bar py-4">
        <div className="bottom-container d-flex justify-content-center align-items-center">
          <div className="copyrights me-3">
            © Jump.trade |{" "}
            <a href="https://guardianlink.io/">A GuardianLink Brand</a>, All
            Rights Reserved.
          </div>
          <div className="bottom-links">
            <span
              className="me-3"
              onClick={() => history.push("/terms-and-conditions")}
            >
              Terms & Conditions
            </span>
            <div class="vr"></div>
            <span
              className="ms-3"
              onClick={() => history.push("/privacy-policy")}
            >
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

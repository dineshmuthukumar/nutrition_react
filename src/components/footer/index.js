import React, { useState } from "react";
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
import { sendEmailNewletter } from "../../api/axios-newsletter";
import guardianLinkLogo from "../../images/guardianlink.svg";

const Footer = () => {
  const [email, setEmail] = useState();
  const [vEmail, setVEmail] = useState();
  const [loading, setLoading] = useState(false);

  const handleSendNewsLetter = async () => {
    if (validateEmail(email)) {
      setVEmail(null);

      try {
        setLoading(true);

        const formData = new FormData();
        formData.append("Nemail", email);

        const result = await sendEmailNewletter(formData);

        if (result.data.status) {
          setVEmail(
            "We will buzz you when the NFT Drop is ready to launch. Thank you for being a part of BeyondLife.club #beyondLife.club #nft"
          );
        } else {
          setVEmail(
            "We got it again!, We are excited to have you as part of our NFT club. Details have been noted already. So, worry not! We will return to you once we are all set with the NFT drops. See you soon!"
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
          <div className="submenu">
            <div>
              <a target="_self" href="https://www.beyondlife.club">
                <h1>BeyondLife.club</h1>
              </a>
              <p>A world without an end</p>
              <div className="support_mail">
                <p className="mb-0">Need a Help?</p>
                <p>
                  <a
                    href="mailto:support@beyondlife.club"
                    className="text-white"
                  >
                    support@beyondlife.club
                  </a>
                </p>
              </div>
            </div>
            <div id="socialMedia">
              <ul className="social-icon-two">
                <li>
                  <a
                    href="https://discord.com/invite/87s8ReJ5FA"
                    target="_blank"
                    rel="nofollow"
                  >
                    <FaDiscord />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="https://t.me/Beyondlifeclub"
                  >
                    <FaTelegramPlane />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="https://twitter.com/beyondlifeclub"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="https://www.facebook.com/BeyondLifeClub-109895114746109"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="https://www.instagram.com/beyondlife.clubofficial"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="https://beyondlife-club.medium.com/"
                  >
                    <FaMediumM />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="https://www.youtube.com/channel/UCgfA98XT-yUi8YSIjT8omUA"
                  >
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="submenu">
            <ul>
              <li>
                <a target="_self" href="https://www.beyondlife.club/about.php">
                  About: The world beyond end
                </a>
              </li>
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
          </div>
          <div className="submenu">
            <Form
              id="nft_form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendNewsLetter();
                return false;
              }}
            >
              <Form.Label>Get the latest NFT updates</Form.Label>
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
        </div>
        <div id="fmenu2">
          <div className="submenu">
            <div className="copyright">
              ©All rights reserved. Rhiti Entertainment Pte. Ltd. Singapore &
              <a target="_self" href="https://www.beyondlife.club">
                BeyondLife LLC.
              </a>
              <span>
                <a href="https://www.beyondlife.club/terms.php">
                  Terms & Conditions
                </a>
                <span className="seperator">|</span>
              </span>
              <span>
                <a href="https://www.beyondlife.club/privacy-policy.php">
                  Privacy Policy
                </a>
              </span>
            </div>
          </div>
          <div className="submenu">
            <a target="_self" href="https://www.guardianlink.io">
              <Image src={guardianLinkLogo} alt="alt" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

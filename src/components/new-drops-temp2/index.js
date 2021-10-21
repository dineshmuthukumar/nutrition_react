import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import axios from "axios";
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
import five from "../../images/drops/drops_1.jpg";
import six from "../../images/drops/drops_2.jpg";

import { Button, Form } from "react-bootstrap";
import DropCard from "./drop-card";
import "./style.scss";
import { validateEmail } from "./../../utils/common";
import { toast } from "react-toastify";
import { BiLoader, BiLoaderAlt } from "react-icons/bi";

const NewDropsTemp2 = ({ categories }) => {
  const r_one = useRef(null);
  const r_two = useRef(null);
  const r_three = useRef(null);
  const r_four = useRef(null);
  const r_email = useRef(null);

  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState();
  const [email2, setEmail2] = useState();
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [vEmail, setVEmail] = useState();
  const [vEmail2, setVEmail2] = useState();

  const sendEmailNewletter = (input) =>
    axios.post(process.env.REACT_APP_NEWSLETTER_API, {
      Nemail: input,
    });

  const handleSendNewsLetter = async () => {
    if (validateEmail(email)) {
      setVEmail(null);
      try {
        setLoading(true);
        await sendEmailNewletter(email);
        setLoading(false);
        setEmail(null);
        setVEmail(
          "We will buzz you when the NFT Drop is ready to launch. Thank you for being a part of Beyondlife.club #beyondlife.club #nft"
        );
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

  const handleSendNewsLetter2 = async () => {
    if (validateEmail(email2)) {
      setVEmail2(null);

      try {
        setLoading2(true);
        await sendEmailNewletter(email2);
        setEmail2(null);
        setVEmail2(
          "We will buzz you when the NFT Drop is ready to launch. Thank you for being a part of Beyondlife.club #beyondlife.club #nft"
        );
        setLoading2(false);
      } catch (error) {
        setLoading2(false);

        console.log(
          "🚀 ~ file: index.js ~ line 46 ~ handleSendNewsLetter ~ error",
          error
        );
      }
    } else {
      setVEmail2("Please provide a valid email");
    }
  };

  const exe_scroll_one = () => r_one.current.scrollIntoView();
  const exe_scroll_two = () => r_two.current.scrollIntoView();
  const exe_scroll_four = () => r_four.current.scrollIntoView();
  const exe_scroll_three = () => r_three.current.scrollIntoView();
  const exe_scroll_email = () => r_email.current.scrollIntoView();

  return (
    <>
      <div className="new_drop_wrapper">
        <section className="sw_ab_1">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-12 order-2 order-lg-1">
                <div className="drop-title mb-0">
                  <h2 className="drop-title__heading mb-4">
                    2Here's Your Chance To Own Exclusive Amitabh Bachchan's NFT
                    Collections
                  </h2>
                  <p className="drop-title__description mb-4">
                    Imagine owning an NFT that holds Amit-ji's significance,
                    history, the value of exceptional existence, and beyond. We
                    bring a series of Amitabh Bachchan's exclusive NFT
                    collection, curated by the legend himself. Right from the
                    time, Amitabh Bachchan.
                  </p>
                  <div className="learnMore">
                    <Link
                      className="nav-label"
                      to="#"
                      onClick={exe_scroll_email}
                    >
                      Join The Waitlist
                    </Link>

                    {/* <button type="button" onClick={()=> setModal(true)}>Place Your Bid Right Now!</button>  */}
                  </div>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-6 col-lg-5 col-md-12 order-1 order-lg-2">
                <div className="content-img content-img--l4-1">
                  <Image src={five} rounded />
                </div>
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
                    <Link
                      to="#drop_1"
                      className="nav-label"
                      onClick={exe_scroll_one}
                    >
                      Collection 1:
                      <span className="main_title"> Madhushala</span>
                      <span className="sub_title">
                        Big B's Dad's Poetry in Amitabh's Voice!!
                      </span>
                    </Link>
                    <Link
                      to="#posters"
                      onClick={exe_scroll_two}
                      className="nav-label"
                    >
                      Collection 2:
                      <span className="main_title"> Mystery NFTs</span>
                      <span className="sub_title">
                        Your Ticket To Surprise Amitabh NFTs
                      </span>
                    </Link>
                    <Link
                      className="nav-label"
                      to="#"
                      onClick={exe_scroll_three}
                    >
                      Collection 3:
                      <span className="main_title">Posters</span>
                      <span className="sub_title">
                        Hand-Painted & Autographed AB Posters
                      </span>
                    </Link>
                    <Link
                      className="nav-label"
                      to="#"
                      onClick={exe_scroll_four}
                    >
                      Collection 4:
                      <span className="main_title">Big-B Punks & Art</span>
                      <span className="sub_title">
                        Amitabh's Artistic Illustrations & Punk-Style Arts
                      </span>
                    </Link>
                  </div>
                </Navbar>
              </div>
            </div>
          </div>
        </section>
        {categories.length > 0 && (
          <section className="drops_list">
            <section className="dropCard-Section" ref={r_one}>
              <DropCard
                id="madhushala"
                img={six}
                cardTitle="Madhushala NFTs"
                smallTitle="Amalgamation Of Knowledge, Fulfilment of duties, and Expectations"
                cardDesc="BeyondLife.club brings you the philosophical undertones of Madhushala in Amitabh’s baritone as an NFT!. Now you can own a recorded version of Madhushala, curated by Amitabh Bachchan himself. 
By owning this one-of-a-kind NFT, you are owning segments of Indian history, a livelihood full of extraordinary scenarios, a guide for betterment, a betterment for a lifetime.  "
                dropTitle="About Collection"
                dropDescOne="Mr. Harivansh Rai Bachchan (1907–2003), father of Mr. Amitabh Bachchan, wrote Madhushala that depicts the wisdom of Madhu-temple of Mind (Madhushala), karma, imbibement of knowledge, fulfillment of duties, and expectations of an individual from the society into beautiful verses. 
"
                dropDescTwo="Madhushala’s Rhyme, Rhythm, and Flavour is still fresh in Amitabh’s mind. He believed and witnessed the miracles that the purest form of art brings in society. However, the love and the respect Mr.Bachchan holds in his heart that compelled him to recite, sing, and translate stories of Madhushala from time to time. This enthralling audio NFT of Madhushala has one version in Hindi, and one in English! "
                auctionTitle="Auction starting in"
                auctionTime="2021-10-22T14:25:00.000Z"
                editionTitle="Edition of"
                editionType="2/2"
                additional="Addtional Perk"
                additionalDesc="The highest bidders in the two categories, in addition to the NFTs, will also get to avail a meet-and-greet session with the Big B - A memory that any Amitabh will hold on to more dearly than the NFT itself!"
                slug={categories[0].slug}
                catName={categories[0].name}
                scroll={exe_scroll_email}
              />
            </section>
            <section className="dropCard-Section" ref={r_two}>
              <DropCard
                Id={"posters"}
                img={two}
                cardTitle="Mystery NFT"
                smallTitle="Your chance to win unbelievable Amitabh NFTs!"
                cardDesc="Here’s an opportunity for you to get a mysterious Amitabh Bachchan NFT! Nobody knows what it is gonna be until you open it. Ready to take the chance? "
                dropTitle="About Collection"
                dropDescOne="We present you the Mystery NFT, an exclusive and surprise offering. You can purchase these Mystery NFTs and see what surprise they hold for you inside! For all you know, it could be a rare Amitabh art NFT… or even a vintage Amitabh poster NFT or an exclusive Big B Punk, some of them even worth ₹50,00,000!"
                dropDescTwo="What’s more exciting is that there’s no auction involved… and you can be assured that there’s one NFT waiting for you! Hurry Up! Claim Your Mystery NFT for Amitabh Now!"
                auctionTitle="Auction starting in"
                auctionTime="2021-10-22T14:25:00.000Z"
                editionTitle="Limited Edition"
                editionType="10/24"
                additional="Addtional Perk"
                additionalDesc="What More Do You Get: You can, just like any other NFT, sell your prized possessions in marketplaces and trade them like any other NFT that you buy! "
                slug={categories[1].slug}
                catName={categories[1].name}
                scroll={exe_scroll_email}
              />
            </section>
            <section className="dropCard-Section" ref={r_three}>
              <DropCard
                Id={"posters"}
                img={two}
                cardTitle="Autographed Physical Posters"
                smallTitle="Exclusive & Classic Amitabh Bachchan Posters in Digital"
                cardDesc="Now you can own an original movie poster of India’s legendary icon, hand-painted by a few authentic artists whose work will amaze you in every way. The cult value of their masterpieces is a statement of ethnicity, authenticity, Indian cinema’s legacy, and beyond."
                dropTitle="About Collection"
                dropDescOne="Hand-painted movie posters, as any classic cinema aficionado might have known, served as heralds for The Shahenshah of Bollywood’s movies. Carrying the savage retro flavor in their artistic expression, these posters are masterpieces in their own right! Posters of Amitabh’s classics depict the era of Celluloid Renaissance in Indian Cinema."
                dropDescTwo="Movie posters from the era where India witnessed its “Angry young man”, dominating the Indian cinema. Amitabh Bachchan’s career itself should be a storyline that will potentially be a superhit worldwide."
                auctionTitle="Auction starting in"
                auctionTime="2021-10-22T14:25:00.000Z"
                editionTitle="Limited Edition"
                editionType="10/24"
                additional="Addtional Perk"
                additionalDesc="10 randomly chosen purchasers of these poster NFTs will get signed and personalized letters from Amitabh himself! How cool is it for you to show off to your friends and folks that you have been called by name by the Big B! "
                slug={categories[1].slug}
                catName={categories[1].name}
                scroll={exe_scroll_email}
              />
            </section>
            <section className="dropCard-Section" ref={r_four}>
              <DropCard
                img={one}
                cardTitle="Big-B Punks and Illustrations"
                smallTitle="A Collection of Signature Crypto-Style Amitabh Miniatures"
                cardDesc="Let’s admit it! Amitabh, in every Avatar, has been a success! Be it the classic ‘Angry Young Man’, or the modern French-bearded Godfather with his signature ‘Devion or Sajjanon’, or the Twitter personality who numbers his Tweets, the Big B can never be off trends!"
                dropTitle="About Collection"
                dropDescOne="Since Amitabh has just stepped into the NFT realm, and going with the proven trend in the NFT space, we bring you exclusive Amitabh Bachchan crypto punks! These crypto punks preserve the essence of Amitabh Bachchan using certain attributes.
"
                dropDescTwo="These ‘Amitabh Punks' have their signature headgear, neck-gear, hairstyle, eyewear, facial hair, and a few more, creating a repository of unique, meticulously crafted, and curated cryptopunk versions of Amitabh.
"
                auctionTitle="Auction starting in"
                auctionTime="2021-10-22T14:25:00.000Z"
                editionTitle="Edition"
                editionType="10000"
                slug={categories[2].slug}
                catName={categories[2].name}
                scroll={exe_scroll_email}
              />
            </section>
          </section>
        )}

        <section className="drop-newsletter" id="drop_newsletter" ref={r_email}>
          <div className="container">
            <div className="row">
              <h1>
                Be Notified About India’s First Rare-Art NFT Featuring Amitabh
                Bachchan!
              </h1>
            </div>
            <Form
              id="nft_form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendNewsLetter();
                return false;
              }}
            >
              <Form.Group className="formGroup mb-3" controlId="formBasicEmail">
                <Form.Control
                  className="nft_form_email"
                  type="email"
                  disabled={loading}
                  name="Nemail"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="nft_email_error">{vEmail}</p>
                <Button
                  className="nft_form"
                  disabled={loading}
                  type="button"
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
        </section>
        <div id="footer">
          <div id="fmenu1">
            <div className="submenu">
              <div>
                <a href="index.php">
                  <h1>BeyondLife.club</h1>
                </a>
                <p>A world without an end</p>
              </div>
              <div id="socialMedia">
                <ul className="social-icon-two">
                  <li>
                    <a href="https://discord.com/invite/87s8ReJ5FA">
                      <FaDiscord />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://t.me/Beyondlifeclub">
                      <FaTelegramPlane />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://twitter.com/beyondlifeclub"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/BeyondLifeClub-109895114746109"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/beyondlife.club/"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://medium.com/@BeyondLife.Club"
                    >
                      <FaMediumM />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="submenu">
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://www.beyondlife.club/about.php"
                  >
                    About: The world beyond end
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.beyondlife.club/philosophy.php"
                  >
                    Philosophy of BeyondLife.club
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.beyondlife.club/nft.php">
                    What is an NFT?
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.beyondlife.club/terms-and-condition.php"
                  >
                    Terms of service
                  </a>
                </li>
              </ul>
            </div>
            <div className="submenu">
              <Form
                id="nft_form"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendNewsLetter2();
                  return false;
                }}
              >
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
                    disabled={loading2}
                    value={email2}
                    onChange={(e) => setEmail2(e.target.value)}
                  />
                  <p className="nft_email_error">{vEmail2}</p>
                  <Button
                    className="nft_form"
                    type="button"
                    disabled={loading2}
                    onClick={handleSendNewsLetter2}
                  >
                    {loading2 ? (
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
              <div>© BeyondLife.club.</div>
              {/* <div>
                <a
                  target="_blank"
                  href="https://www.beyondlife.club/terms-and-condition.php"
                >
                  Terms and conditions
                </a>
              </div> */}
              {/* <div>
                <a href="#">Privacy</a>
              </div> */}
            </div>
            <div className="submenu">
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

export default NewDropsTemp2;

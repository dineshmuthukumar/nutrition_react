import React, { useState, useRef } from "react";
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
import five from "../../images/drops/drops_1.jpg";
import six from "../../images/drops/drops_2.jpg";

import { Button, Form } from "react-bootstrap";
import DropCard from "./drop-card";
import "./style.scss";

const NewDrops = ({ categories }) => {
  const r_one = useRef(null);
  const r_two = useRef(null);
  const r_three = useRef(null);

  const [modal, setModal] = useState(false);

  const exe_scroll_one = () => r_one.current.scrollIntoView();
  const exe_scroll_two = () => r_two.current.scrollIntoView();
  const exe_scroll_three = () => r_three.current.scrollIntoView();

  return (
    <>
      <div className="new_drop_wrapper">
        <section className="sw_ab_1">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-9 col-11 order-2 order-lg-1">
                <div className="drop-title mb-0">
                  <h2 className="drop-title__heading mb-4">
                    Here's Your Chance To Own Exclusive Amitabh Bachchan's NFT
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
                    <a href="">Place Your Bid Right Now!</a>

                    {/* <button type="button" onClick={()=> setModal(true)}>Place Your Bid Right Now!</button>  */}
                  </div>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-6 col-lg-5 col-md-9 col-10 order-1 order-lg-2">
                <div className="content-img content-img--l4-1">
                  <Image src={five} rounded />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="scroll-drops my-4">
                <a href="#drop_1">Scroll for all Drops</a>
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
                        Exquisite Poetry of Amitabh's Dad Harivansh Rai Bachchan
                        Rendered In Amitabh's Distinct Baritone!
                      </span>
                    </Link>
                    <Link
                      to="#posters"
                      onClick={exe_scroll_two}
                      className="nav-label"
                    >
                      Collection 2: <span className="main_title"> Posters</span>
                      <span className="sub_title">
                        Original Hand-Painted Rare Posters of Amitabh's
                        Blockbusters... With His Signature!
                      </span>
                    </Link>
                    <Link
                      className="nav-label"
                      to="#"
                      onClick={exe_scroll_three}
                    >
                      Collection 3:
                      <span className="main_title">Amitabh CryptoPunks</span>
                      <span className="sub_title">
                        Distinct And Unique Minimal Miniatures That Are
                        Unmistakably Amitabh In Every Way!
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
                dropDescTwo="Madhushala’s Rhyme, Rhythm, and Flavour is still fresh in Amitabh’s mind. He believed and witnessed the miracles that the purest form of art brings in society. However, the love and the respect Mr.Bachchan holds in his heart that compelled him to recite, sing, and translate stories of Madhushala from time to time. "
                auctionTitle="Auction starting in"
                auctionTime="2021-10-22T14:25:00.000Z"
                editionTitle="Edition of"
                editionType="2/2"
                additional="Addtional Perk"
                additionalDesc="The highest bidders in the two categories, in addition to the NFTs, will also get to avail a meet-and-greet session with the Big B - A memory that any Amitabh will hold on to more dearly than the NFT itself!"
                slug={categories[0].slug}
                catName={categories[0].name}
              />
            </section>
            <section className="dropCard-Section" ref={r_two}>
              <DropCard
                Id={"posters"}
                img={two}
                cardTitle="Autographed Posters"
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
              />
            </section>
            <section className="dropCard-Section" ref={r_three}>
              <DropCard
                img={one}
                cardTitle="Crypto Punks"
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
              />
            </section>
          </section>
        )}

        <section className="drop-newsletter" id="drop_newsletter">
          <div className="container">
            <div className="row">
              <h1>
                Are you the one going to make it big in India?
                <span>Own an NFT.</span>
              </h1>
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
                  <HiOutlineArrowRight />
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
                    <HiOutlineArrowRight />
                  </Button>
                </Form.Group>
              </Form>
            </div>
          </div>
          <div id="fmenu2">
            <div className="submenu">
              <div>© BeyondLife.club.</div>
              <div>
                <a
                  target="_blank"
                  href="https://www.beyondlife.club/terms-and-condition.php"
                >
                  Terms and conditions
                </a>
              </div>
              <div>
                <a href="#">Privacy</a>
              </div>
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

export default NewDrops;

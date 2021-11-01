import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import { BiLoaderAlt } from "react-icons/bi";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
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

import one from "../../images/drops/crypto_punk.jpg";
import two from "../../images/drops/two.png";
import four from "../../images/drops/nft_2.png";
import eight from "../../images/drops/nft_1.jpg";
import drops_banner from "../../images/drops/drops_banner.png";

import DropCard from "./drop-card";
import { sendEmailNewletter } from "../../api/axios-newsletter";
import { validateEmail } from "./../../utils/common";
import "../new-drops-temp/style.scss";

const NewDropsTemp2 = ({
  categories,
  setStarted,
  started,
  ended,
  setEnded,
}) => {
  const { user } = useSelector((state) => state.user.data);
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
  const [active, setActive] = useState();

  const [loot_start, set_loot_start] = useState(false);

  const date = "Nov 01, 2021 06:30:00";

  const loot_date = "Nov 01, 2021 11:30:00";

  const [atime, setAtime] = useState(date);
  const [ltime, setLtime] = useState(loot_date);

  const end_date = "Nov 04, 2021 06:30:00";

  useEffect(() => {
    var offset = new Date().getTimezoneOffset();
    var date_utc = new Date(date);
    date_utc.setMinutes(date_utc.getMinutes() - offset);

    var loot_date_utc = new Date(loot_date);
    loot_date_utc.setMinutes(loot_date_utc.getMinutes() - offset);

    var end_date_utc = new Date(end_date);
    end_date_utc.setMinutes(end_date_utc.getMinutes() - offset);

    // setAtime(date_utc);

    if (new Date(date_utc) < new Date()) {
      setAtime(end_date_utc);
      setStarted(true);
    } else {
      setAtime(date_utc);
    }

    if (new Date(end_date_utc) < new Date()) {
      setEnded(true);
    }

    if (new Date(loot_date_utc) < new Date()) {
      set_loot_start(true);
    } else {
      setLtime(loot_date_utc);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheck = () => {
    var offset = new Date().getTimezoneOffset();
    var date_utc = new Date(date);
    date_utc.setMinutes(date_utc.getMinutes() - offset);

    var loot_date_utc = new Date(loot_date);
    loot_date_utc.setMinutes(loot_date_utc.getMinutes() - offset);

    var end_date_utc = new Date(end_date);
    end_date_utc.setMinutes(end_date_utc.getMinutes() - offset);

    var t = new Date();
    t.setSeconds(t.getSeconds() + 2);

    if (new Date(date_utc) < t) {
      setAtime(end_date_utc);
      setStarted(true);
    } else {
      setAtime(date_utc);
    }

    if (new Date(end_date_utc) < t) {
      setEnded(true);
    }

    if (new Date(loot_date_utc) < t) {
      set_loot_start(true);
    } else {
      setLtime(loot_date_utc);
    }
  };

  // const sendEmailNewletter = (input) => {
  //   axios.post(process.env.REACT_APP_NEWSLETTER_API, formData)
  // };
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
        setLoading(false);
        setEmail("");
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

        const formData = new FormData();
        formData.append("Nemail", email2);

        const result = await sendEmailNewletter(formData);

        if (result.data.status) {
          setVEmail2(
            "We will buzz you when the NFT Drop is ready to launch. Thank you for being a part of BeyondLife.club #beyondLife.club #nft"
          );
        } else {
          setVEmail2(
            "We got it again!, We are excited to have you as part of our NFT club. Details have been noted already. So, worry not! We will return to you once we are all set with the NFT drops. See you soon!"
          );
        }

        setEmail2("");
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

  const exe_scroll_one = () => {
    r_one.current.scrollIntoView();
    setActive("one");
  };
  const exe_scroll_two = () => {
    r_two.current.scrollIntoView();
    setActive("two");
  };
  const exe_scroll_four = () => {
    r_four.current.scrollIntoView();
    setActive("four");
  };
  const exe_scroll_three = () => {
    r_three.current.scrollIntoView();
    setActive("three");
  };
  const exe_scroll_email = () => {
    r_email.current.scrollIntoView();
  };

  const DropTwoDescTwo = () => {
    return (
      <>
        <p>
          Open the Loot Box and you have chances of finding one of the
          following:
        </p>
        <ul>
          <li>
            An original vintage <b>poster NFT</b> autographed by Amitabh worth
            over <b>INR 10 Lakhs!</b>
          </li>
          <li>
            Unique <b>BigB Punk</b> worth over <b>INR 10000!</b>
          </li>
          <li>
            Signature <b>Pastel Art</b> NFT worth about <b>INR 5000!</b>
          </li>
        </ul>
        <p>
          All these posters and NFTs are limited edition, and you will be one of
          the exclusive fans of Amitabh to own these! Every NFT has something
          worth trading.
        </p>
      </>
    );
  };

  return (
    <>
      <div className="new_drop_wrapper">
        <section className="sw_ab_1">
          <img className="dr_baner" src={drops_banner} alt="" />
          <div className="banner_content">
            <div className="drop-title mb-0">
              <h2 className="drop-title__heading mb-4">
                Amitabh Bachchan's Exclusive NFT Collections -{" "}
                {started ? "Are Live Now" : "Make Them Yours"}!
              </h2>
              <p className="drop-title__description mb-4">
                Imagine owning an NFT that holds AmitJi's significance, history,
                the value of exceptional existence, and beyond. We bring a
                series of Amitabh Bachchan's exclusive NFT collections curated
                by the legend himself.
              </p>
              <div className="learnMore">
                {started ? (
                  <>
                    {user?.slug ? (
                      <Link
                        className="nav-label"
                        to="#"
                        onClick={exe_scroll_one}
                      >
                        Explore Now
                      </Link>
                    ) : (
                      <Link
                        className="nav-label"
                        to="#"
                        onClick={() =>
                          window.open(
                            `${process.env.REACT_APP_ACCOUNTS_URL}/signup`,
                            "_self"
                          )
                        }
                      >
                        Register Now
                      </Link>
                    )}
                  </>
                ) : (
                  <>
                    {!user?.slug && (
                      <Link
                        className="nav-label"
                        to="#"
                        onClick={exe_scroll_email}
                      >
                        Join The Waitlist
                      </Link>
                    )}
                  </>
                )}

                <Link
                  className="nav-label"
                  to="#"
                  onClick={() => {
                    if (user?.slug) {
                      window.open(
                        `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/wallet#web`,
                        "_self"
                      );
                    } else {
                      window.open(
                        `${process.env.REACT_APP_ACCOUNTS_URL}/signup`,
                        "_self"
                      );
                    }
                  }}
                >
                  Fund Your Wallet
                </Link>

                {/* <button type="button" onClick={()=> setModal(true)}>Place Your Bid Right Now!</button>  */}
              </div>
            </div>
          </div>
          <div onClick={exe_scroll_one} className="scroll"></div>
        </section>
        <section className="sw_3" id="ab_3">
          <div className="">
            <div className="navigation-tab">
              <div className="app-showcase">
                <Navbar className="kd-feature-tabs">
                  <div className="nav nav-tabs sticky-tabs">
                    <Link
                      to="#"
                      className={`nav-label ${
                        active === "one" ? "active" : ""
                      }`}
                      onClick={exe_scroll_one}
                    >
                      Collection 1:
                      <span className="main_title">Madhushala - Poetry</span>
                      <span className="sub_title">
                        BigB's Dad's Poetry in Amitabh's Voice!!
                      </span>
                    </Link>
                    <Link
                      to="#"
                      onClick={exe_scroll_two}
                      className={`nav-label ${
                        active === "two" ? "active" : ""
                      }`}
                    >
                      Collection 2:
                      <span className="main_title">Win With Thex Loot Box</span>
                      <span className="sub_title">
                        Your Ticket To Surprise Amitabh NFTs
                      </span>
                    </Link>
                    <Link
                      className={`nav-label ${
                        active === "three" ? "active" : ""
                      }`}
                      to="#"
                      onClick={exe_scroll_three}
                    >
                      Collection 3:
                      <span className="main_title">Iconic Vintage Posters</span>
                      <span className="sub_title">
                        Hand-Painted & Autographed AB Posters
                      </span>
                    </Link>
                    <Link
                      className={`nav-label ${
                        active === "four" ? "active" : ""
                      }`}
                      to="#"
                      onClick={exe_scroll_four}
                    >
                      Collection 4:
                      <span className="main_title">BigB Punks & NFT Art</span>
                      <span className="sub_title">
                        Smart Contract-Generated Pastel NFT Art of AB
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
                img={four}
                price="$30,000"
                priceTitle="Minimum Bid Price"
                started={started}
                endDate={end_date}
                isEnded={ended}
                setCheck={handleCheck}
                cardTitle="Madhushala NFTs"
                smallTitle="Amalgamation of Knowledge, Fulfilment of Duties, and Expectations!"
                cardDesc="BeyondLife.club brings you the philosophical undertones of Madhushala in Amitabh's baritone as an NFT! Now you can own a recorded version of Madhushala, curated by Amitabh Bachchan himself. By owning this one-of-a-kind NFT, you're owning a segment of this legend's history in his own voice, and an 86-year-old iconic and epoch-making metaphorical Hindi poetry!"
                dropTitle="About Collection"
                dropDescOne="Mr. Harivansh Rai Bachchan (1907–2003), father of Mr. Amitabh Bachchan, wrote Madhushala that depicts the wisdom of Madhu - the Temple of Mind (Madhushala), karma, imbibement of knowledge, fulfilment of duties, and expectations of an individual from the society into beautiful verses."
                dropDescTwo="Madhushala's Rhyme, Rhythm, and Flavour is still fresh in Amitabh's mind. He believed and witnessed the miracles that this purest form of art brings to society. The love and the respect he holds for Mr.Bachchan in his heart compelled him to recite, sing, and translate stories of Madhushala from time to time. This unique and enthralling audio NFT of Madhushala has one version in Hindi, and one in English!"
                dropDescThree="The Madhushala NFT is a super-premium NFT presented to you by BeyondLife.club. You will be the one among the two sole owners of the exclusive NFTs - the rendition of Mr. Harivansh's refined poetry in Amitabh's rustic baritone!!"
                auctionTitle={
                  !started
                    ? "Auction starting in"
                    : ended
                    ? "Auction ended on"
                    : "Auction ending in"
                }
                auctionTime={atime}
                editionTitle="Edition of"
                editionType="2/2"
                additional="Additional Perk"
                additionalDesc="The highest bidders in the two categories, in addition to the NFTs, will also get to avail a meet-and-greet session with the BigB - A memory that anyone will hold on to more dearly than the NFT itself!"
                slug={categories[0].slug}
                catName={categories[0].name}
                type={categories[0].type}
                enabled={categories[0].enabled}
                scroll={exe_scroll_email}
              />
            </section>
            <section className="dropCard-Section mistry_nft" ref={r_two}>
              <DropCard
                Id={"posters"}
                started={loot_start}
                endDate={end_date}
                isEnded={ended}
                img={eight}
                price="$10"
                priceTitle="Buy Price"
                setCheck={handleCheck}
                isBuy
                cardTitle="Win The LOOT BOX"
                smallTitle="Signed Vintage Posters | NFT Art | BigB Punks"
                cardDesc="Would you miss out on the chance to own some of the most prized representations of Amitabh's legacy? Explore the NFT Loot Box to win yours!"
                dropTitle="About Collection"
                dropDescOne="Don't miss out on the chance to become a proud owner of Amitabh's NFT  art pieces, BigB Punks, and rare vintage posters! All you need to do is explore the NFT Loot Box and see what you've won for yourself! The Loot Box could make you one of the proudest owners of some of the most unique Amitabh Bachchan NFTs! "
                dropDescTwo={<DropTwoDescTwo />}
                dropDescThree="The best part about the Loot Box is that all these can be yours even without entering an auction… and with an assurance that you will get at least one prized NFT art or poster for you to be proud of! Hurry up! Purchase the Loot Box now!"
                auctionTitle={loot_start ? "Drops Open Until" : "Drops Open In"}
                auctionTime={ltime}
                editionTitle="Items"
                editionType="5000"
                additional="What You Get"
                additionalDesc="You not only have the pride of possessing some of the most unique Amitabh NFTs! Just like any other NFT, you can sell your prized possessions in marketplaces and trade them! "
                slug={categories[1].slug}
                catName={categories[1].name}
                type={categories[1].type}
                enabled={categories[1].enabled}
                scroll={exe_scroll_email}
              />
            </section>
            <section className="dropCard-Section" ref={r_three}>
              <DropCard
                Id={"posters"}
                started={started}
                endDate={end_date}
                isEnded={ended}
                img={two}
                price="$9,500"
                priceTitle="Minimum Bid Price"
                setCheck={handleCheck}
                cardTitle="Autographed Physical Posters"
                smallTitle="Vintage Original Rare Posters with Digital NFT Certificate of Authenticity"
                cardDesc="Now you can own a video of Amitabh signing an original movie poster of his iconic movies, hand-painted by a few authentic artists whose work will amaze you in every way. The cult value of their masterpieces is a statement of ethnicity, authenticity, Indian cinema's legacy, and beyond."
                dropTitle="About Collection"
                dropDescOne="Hand-painted movie posters, as any classic cinema aficionado would know, served as heralds for The Shahenshah of Bollywood movies. Carrying the savage retro flavor in their artistic expression, these posters are masterpieces in their own right! Posters of Amitabh's classics depict the era of Celluloid Renaissance in Indian Cinema."
                dropDescTwo="Movie posters from the era when India witnessed its “Angry Young Man” dominate Indian cinema. This Amitabh Bachchan's golden era  was so epic that it could itself be a storyline that will potentially be a superhit worldwide."
                dropDescThree="Our NFTs will feature the Legend BigB signing these rare and origianal posters in a video. In addition to that video, you will also receive the autographed physical copy of the vintage poster of some of Amitabh's iconic movies! These prized videos are bound to be evergreen, and they could now be yours!"
                auctionTitle={
                  !started
                    ? "Auction starting in"
                    : ended
                    ? "Auction ended on"
                    : "Auction ending in"
                }
                auctionTime={atime}
                editionTitle="Limited Edition"
                editionType="7/7"
                additional="What You Get"
                additionalDesc="Having your ownership over both the video of Amitabh signing the poster, and the autographed authentic physical poster itself makes you one among seven-in-seven billion people on the planet who has these prized posters of exceptional value!"
                slug={categories[2].slug}
                catName={categories[2].name}
                type={categories[2].type}
                enabled={categories[2].enabled}
                scroll={exe_scroll_email}
              />
            </section>
            <section className="dropCard-Section" ref={r_four}>
              <DropCard
                started={started}
                img={one}
                endDate={end_date}
                isEnded={ended}
                price="$200"
                priceTitle="Minimum Bid Price"
                setCheck={handleCheck}
                cardTitle="BigB Punks and NFT Arts"
                smallTitle="A Collection of Signature Crypto-Style Amitabh Miniatures"
                cardDesc="Let's admit it! Amitabh, in every avatar, has been a success! Be it the classic ‘Angry Young Man', or the modern French-bearded Godfather with his signature 'DEVIYON aur SAJJANO', or the Twitter personality who numbers his Tweets, the BigB can never be off trends!"
                dropTitle="About Collection"
                dropDescOne="Since Amitabh has just stepped into the NFT realm, and going with the proven trends in the NFT space, we bring you exclusive Amitabh Bachchan BigB Punks and exclusive Smart Contract-Generated Pastel NFT Art! These Punks and NFT artworks preserve the essence of Amitabh Bachchan using certain attributes."
                dropDescTwo="These BigB Punks have their signature headgear, neck-gear, hairstyle, eyewear, facial hair, and a few more, creating a repository of unique, meticulously crafted, and curated art-versions of Amitabh. The NFT art has been exclusively hand-drawn."
                dropDescThree="Every Pastel Art and every BigB Punk collection is a collectible in its own right, and there will be just a total of 6 of these! You could be the owner of one of the most celebrated forms of art in the crypto space!"
                auctionTitle={
                  !started
                    ? "Auction starting in"
                    : ended
                    ? "Auction ended on"
                    : "Auction ending in"
                }
                auctionTime={atime}
                editionTitle="Edition"
                editionType="6/6"
                additional="What You Get"
                additionalDesc="These BigB Punks and NFT art pieces represent the craze for collectibles in the crypto world! An NFT featuring a legendary and globally recognized superstar is bound to be a thing of pride to possess... in addition to high possibilities of fetching good deals in the secondary market!"
                slug={categories[3].slug}
                catName={categories[3].name}
                enabled={categories[3].enabled}
                type={categories[3].type}
                scroll={exe_scroll_email}
              />
            </section>
          </section>
        )}

        <section className="drop-newsletter" id="drop_newsletter" ref={r_email}>
          <div className="container">
            <div className="row">
              {started ? (
                <h1>
                  <span class="big_text">India's First Rare-Art NFT</span>{" "}
                  <br />
                  Featuring Amitabh Bachchan
                </h1>
              ) : (
                <>
                  <h1>
                    Be Notified About India's First Rare-Art NFT Featuring{" "}
                    <br /> Amitabh Bachchan!
                  </h1>
                  <h2>Be Notified</h2>
                </>
              )}
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
              <p className="nft_email_error">{vEmail}</p>
            </Form>
          </div>
        </section>
        <div id="footer">
          <div id="fmenu1">
            <div className="submenu">
              <div>
                <a target="_self" href="https://www.beyondlife.club">
                  <h1>BeyondLife.club</h1>
                </a>
                <p>A world without an end</p>
                <div class="support_mail">
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
                      rel="noreferrer"
                    >
                      <FaDiscord />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://t.me/Beyondlifeclub"
                    >
                      <FaTelegramPlane />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/beyondlifeclub"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/BeyondLifeClub-109895114746109"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.instagram.com/beyondlife.clubofficial"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://medium.com/@BeyondLife.Club"
                    >
                      <FaMediumM />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
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
                  <a
                    target="_self"
                    href="https://www.beyondlife.club/about.php"
                  >
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
              {/* <div>
                <a
                  target="_self"
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
              <a target="_self" href="https://www.guardianlink.io">
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

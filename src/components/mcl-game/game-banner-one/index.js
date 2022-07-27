import React, { useRef, useState, useEffect } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
// import Toggle from "react-toggle";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { FiMail, FiPhone } from "react-icons/fi";
import banners from "../../../images/banner-img.png";
import mail from "../../../images/mail.png";
import call from "../../../images/call.png";
import { validateEmail, validatePhone } from "../../../utils/common";
import icon from "../../../images/icon.png";

import downloadapk from "../../../images/download-apk.png";
import downloadBg from "../../../images/download-bg.jpg";
import downloadInfo from "../../../images/download-info.jpg";
// import InputText from "../../input-text";
import firstSlideWeb from "../../../images/jump-trade/hero-banner/First_Banner_BG--only_Web.jpeg";
import firstSlideMobile from "../../../images/download_mobile.jpg";
// import { useQuery } from "../../../hook/url-params";

import "../style.scss";
// import images from "../../../utils/images.json";
import useQuery from "../../../hook/useQuery";
import NFTCounter from "../../nft-counter";

import android from "../../../images/mcl-game-launcher/android.png";
import ios from "../../../images/mcl-game-launcher/ios-win.png";
import player from "../../../images/mcl-game-launcher/player.png";

const MclGameOne = ({ hideSign = false, ...props }) => {
  let query = useQuery();
  const r_one = query.get("download");
  const { innerWidth } = window;
  const { hash } = useLocation();

  useEffect(() => {
    const ref = document.getElementById(r_one);
    ref && ref.scrollIntoView();
  }, [hash]);

  // const location = useLocation();
  //const query = useQuery(location.search);
  // const redirect = query.get("redirect");
  // const email = query.get("email");
  // const phone = query.get("phone");
  // const [toggle, setToggle] = useState(false);
  const { user, cart } = useSelector((state) => state);
  const [type, setType] = useState("email");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [vEmail, setVEmail] = useState();
  const [subcribe, setSubcribe] = useState({
    email: "",
    phone: "+91",
  });
  const [currentSubcribe, setcurrentSubcribe] = useState("email");

  const [validation, setValidation] = useState({
    email: false,
    valid_email: false,
    phone: false,
    valid_phone: false,
  });

  const toggleType = (input) => {
    setType(input);
    setcurrentSubcribe(input);
    //console.log(type);
  };

  const game_launch_start_date = "July 22 2022 14:00:00";

  const [game_launch_time, set_gamelauch_timer] = useState();
  const [end_time, set_end_time] = useState(false);

  const timeFunction = (check = false) => {
    var offset = new Date().getTimezoneOffset();

    var game_launch_start_date_utc = new Date(game_launch_start_date);
    game_launch_start_date_utc.setMinutes(
      game_launch_start_date_utc.getMinutes() - offset
    );

    var s_time = new Date();

    if (check) s_time.setSeconds(s_time.getSeconds() + 2);

    if (new Date(game_launch_start_date_utc) < s_time) {
      set_end_time(true);
      // dispatch(market_live_thunk());
    } else {
      set_end_time(false);
      set_gamelauch_timer(game_launch_start_date_utc);
      // dispatch(market_live_off_thunk());
    }
  };

  useEffect(() => {
    timeFunction(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTimer = () => {
    set_end_time(true);
  };

  // useEffect(() => {
  //   // console.log(subcribe.phone);
  //   if (!subcribe.phone) {
  //     setSubcribe({ ...subcribe, phone: "+91" });
  //   }
  //   //Runs on the first render
  //   //And any time any dependency value changes
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [subcribe.phone]);

  const handleSubcribe = () => {
    setError(null);
    setVEmail("");
    if (checkValidation()) {
      setVEmail(null);

      try {
        setLoading(true);

        // const result = await sendEmailNewletter(email2);

        // if (result.data.status) {
        setVEmail(
          "You're now on our waitlist! Keep an eye on your inbox for the latest updates on a Jump.Trade!"
        );
        // } else {
        //   setVEmail2(
        //     "Nobody loves NFTs like you do as your email id is already on our waitlist! We'll keep you posted on this Minnal NFT drop schedule."
        //   );
        // }

        setSubcribe({ email: "", phone: "" });
        setLoading(false);
      } catch (error) {
        setLoading(false);

        console.log(
          "🚀 ~ file: index.js ~ line 46 ~ handleSendNewsLetter ~ error",
          error
        );
      }
    }
  };

  const checkValidation = () => {
    let c_validation = { ...validation };

    if (type === "email") {
      if (!subcribe.email) {
        c_validation = { ...c_validation, email: true };
      } else {
        if (validateEmail(subcribe.email)) {
          c_validation = { ...c_validation, valid_email: false };
        } else {
          c_validation = { ...c_validation, valid_email: true };
        }
      }
      setValidation(c_validation);
      if (!c_validation.email) {
        if (validateEmail(subcribe.email)) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      if (!subcribe.phone) {
        c_validation = { ...c_validation, phone: true };
      } else {
        if (validatePhone(subcribe.phone)) {
          c_validation = { ...c_validation, valid_phone: false };
        } else {
          c_validation = { ...c_validation, valid_phone: true };
        }
      }
      setValidation(c_validation);
      if (!c_validation.phone) {
        if (validatePhone(subcribe.phone)) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  };

  const handleChangeEvent = (e) => {
    setError(null);
    setVEmail("");
    setSubcribe({ ...subcribe, [e.target.name]: e.target.value.trim() });
    console.log(e.target.value);
    if (e.target.value) {
      setValidation({ ...validation, [e.target.name]: false });
    } else {
      setValidation({ ...validation, [e.target.name]: true });
    }
  };

  const handleKeyPressEvent = (event) => {
    if (event.key === "Enter") {
      handleSubcribe();
    }
  };
  // console.log("test");

  return (
    <>
      <section className="game-banner">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="p-lg-5 p-2">
                <h2 className="display-4 mcl-title">Meta Cricket League</h2>
                <h2 className="display-4 mobile_app">Mobile App</h2>
                <p className="fs-5 text-white game-desc">
                  The Meta Cricket League brings you the vibrance, energy, &
                  awesomeness of cricket in the meta-realm. Play your NFT
                  cricket game, win matches, climb up the leaderboard and earn
                  unbelievable rewards for your time and efforts!
                </p>

                {/* {end_time ? (
                  <a href="https://dl.jump.trade/mcl.apk">
                    <img src={downloadapk} className="downloadbutton" />
                  </a>
                ) : (
                  game_launch_time && (
                    <div>
                      <img src={downloadapk} className="downloadbutton" />
                      <div className="launch down-btn">
                        <div className="pos-top d-flex align-items-center fs-6">
                          <p className="me-3 mb-0">Game Launch :</p>
                          <NFTCounter
                            time={game_launch_time}
                            timeClass="counter-time"
                            handleEndEvent={handleTimer}
                            // className=" ms-2"
                          />
                        </div>
                      </div>
                    </div>
                  )
                )} */}

                {/* <Form
                  className="gameplay-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <Row className="align-items-center">
                    <Col xs="auto">
                      {type === "email" ? (
                        <div className="text_fields">
                          <Form.Control
                            className="mb-2 theme-input email-field"
                            id="inlineFormInput"
                            type="type"
                            name="email"
                            required={validation.email}
                            placeholder=" Enter Email ID "
                            onChange={handleChangeEvent}
                            onKeyPress={handleKeyPressEvent}
                            value={subcribe.email}
                            disabled={loading}
                          />
                        </div>
                      ) : (
                        <div className="text_fields">
                          <Form.Control
                            className="mb-code-input"
                            placeholder="+91"
                            readOnly={true}
                          />
                          <Form.Control
                            className="mb-2 theme-input"
                            id="inlineFormInput"
                            type="number"
                            name="phone"
                            placeholder="Enter Mobile Number"
                            required={validation.phone}
                            onChange={handleChangeEvent}
                            onKeyPress={handleKeyPressEvent}
                            disabled={loading}
                            pattern="[0-9]*"
                          />
                        </div>
                      )}

                      {type === "email"
                        ? validation.valid_email && (
                            <p className="error_text">
                              Please enter a valid email address
                            </p>
                          )
                        : validation.valid_phone && (
                            <p className="error_text">
                              Please enter a valid phone number
                            </p>
                          )}
                    </Col>

                    <Col xs="auto">
                      <div
                        class="btn-group switch-btn"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          className={`btn btn1 ${
                            currentSubcribe === "email" ? "active" : ""
                          }`}
                          onClick={() => toggleType("email")}
                        >
                          <img src={mail} alt="Mail" />
                        </button>
                        <button
                          type="button"
                          className={`btn btn2 ${
                            currentSubcribe === "phone" ? "active" : ""
                          }`}
                          onClick={() => toggleType("phone")}
                        >
                          <img src={call} alt="Call" width="25px" />
                        </button>
                      </div>
                    </Col>
                  </Row>
                  <Col xs="auto">
                    <Button
                      type="submit"
                      className="submit-btn mt-4"
                      onClick={handleSubcribe}
                      disabled={loading}
                    >
                      <span>Get APP Link</span>
                    </Button>
                  </Col>
                  {error && <p className="error_text text-center">{error}</p>}

                  <p className="nft_email_error">{vEmail}</p>
                </Form> */}
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="player-image">
                <img className="img-fluid w-100" src={banners} alt="Banners" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 mcl-game-two ">
        <div className="container-fluid py-4 py-xl-5">
          <div className="row mb-4 mb-lg-5">
            <div className="col-md- col-xl-8 text-center mx-auto">
              <h2 className="fw-bold div_title">META CRICKET LEAGUE</h2>
              <h2 className="fw-bold div_title div_stroke">GAME ON</h2>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row row-cols-2 row-cols-md-3 mx-auto justify-content-center">
            {/* <div className="col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12 mx-auto">
      <div className="os_list text-center">
        <img src={icon} alt="Icon" />
      </div>
    </div> */}
            <div className="col-lg-6 offset-lg-3 col-lg-8 offset-lg-3 col-sm-10 offset-sm-1 col-12 mx-auto mcl-app-download">
              <div className="d-flex flex-lg-row  flex-sm-column flex-column align-items-center justify-content-between download-games">
                <div className="d-flex flex-column align-items-center justify-content-between">
                  <div className="android-icon">
                    <img src={android} />
                  </div>
                  <a href={process.env.REACT_APP_MCL_GAME_LINK} target="_blank">
                    <button className="read_moree fs-5 fw-bold">
                      <span>Download MCL Game</span>
                    </button>
                  </a>
                  <div className="app-launch-timer mt-3">
                    {/* <NFTCounter
              time={game_launch_time}
              timeClass="counter-time"
              handleEndEvent={handleTimer}
              // className=" ms-2"
            /> */}
                  </div>
                </div>
                <div className="vr"></div>
                <div className="d-flex flex-column align-items-center justify-content-between">
                  <div className="android-icon">
                    <img src={ios} />
                  </div>

                  <div className="app-launch-timer">
                    <h2 className="text-uppercase coming_soon ">
                      Invitation only
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="hr-line"></div>

      {/* <section className="whitepaper_sec py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="whitepaper_box p-4 text-center position-relative">
              <h1 className="display-1 text-uppercase fw-bold download_app">
                Meta Cricket League
              </h1>
              <h1 className="display-1 text-uppercase fw-bold marketplace_app">
                Whitepaper
              </h1>
              <p className="my-3 text-capitaliz text-white e h-meduim fs-4">
                <span>
                  Meta Cricket League is a Hit-to-Earn game that brings the
                  excitement of cricket to the metaverse. Read the whitepaper to
                  learn more about the game, its structure, and key details.
                </span>
              </p>
              <p className="fs-3 text-capitalize  theme-color">
                <strong>
                  <span>Learn about meta cricket league</span>
                </strong>
              </p>
              <a href="http://mcl-wp.jump.trade/">
                <button className="read_moree fs-5 fw-bold">
                  <span>Read Now</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default MclGameOne;

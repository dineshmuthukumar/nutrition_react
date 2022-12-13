import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
//import Image from "react-bootstrap/Image";
import { BiLoaderAlt } from "react-icons/bi";
import { Button, Container, Form } from "react-bootstrap";
import { HiOutlineArrowRight } from "react-icons/hi";
import {FaDiscord,FaInstagram,FaTwitter,FaTelegramPlane,FaYoutube, FaFacebook,} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import "./style.scss";
import { validateEmail } from "../../utils/common";
import { subscribeApi } from "../../api/base-methods";
import images from "../../utils/images.json";
import livenlogofooter from "../../images/new-images/demos/demo-food2/liven-logo-footer.png";
import { getCategoryApi, cmsPages, settingsApi } from "../../api/base-methods";

const Footer = () => {
  const [email, setEmail] = useState();
  const [vEmail, setVEmail] = useState();
  const [loading, setLoading] = useState(false);
  const [categoryDetails, setCategoryDetails] = useState({});
  const [footerDetails, setFooterDetails] = useState({});
  const [settingsDetails, setSettingsDetails] = useState({});
  const [notiLoading, setNotiLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    getCategoryDetails();
    getcmsPages();
    getSettings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getcmsPages = async () => {
    try {
      setNotiLoading(true);
      const result = await cmsPages();
      setFooterDetails(result?.data?.responseData?.pages);
    } catch (error) {
      setNotiLoading(false);

      console.log(
        "🚀 ~ file: index.js ~ line 49 ~ handleGetNotification ~ error",
        error
      );
    }
  };
  const getSettings = async () => {
    try {
      // setNotiLoading(true);
      const result = await settingsApi();
      setSettingsDetails(result?.data?.responseData);
      //setSettingsDetails(result?.data?.responseData?.pages);
    } catch (error) {
      //setNotiLoading(false);

      console.log(
        "🚀 ~ file: index.js ~ line 49 ~ handleGetNotification ~ error",
        error
      );
    }
  };
  // const getCmspageurl = async (name) => {
  //   const responseData =
  //     footerDetails?.length > 0 &&
  //     footerDetails?.map((obj) => {
  //       if (obj.url == name) {
  //         return obj;
  //       }
  //     });

  //   console.log(responseData, "obj");
  // };
  const getCategoryDetails = async () => {
    try {
      setNotiLoading(true);
      const result = await getCategoryApi();

      setCategoryDetails(result?.data?.responseData?.categories);
    } catch (error) {
      setNotiLoading(false);

      console.log(
        "🚀 ~ file: index.js ~ line 49 ~ handleGetNotification ~ error",
        error
      );
    }
  };

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

  const [show, setShow] = useState(false);

  // Toast Message Start
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  // Toast Message End

  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-middle">
            <div className="row foot_white_logo">
              <div className="col-sm-12 text-center">
                <Link to="" className="logo-footer">
                  <img
                    src={livenlogofooter}
                    alt="logo-footer"
                    width="100"
                    height="auto"
                  />
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <h4 className="widget-title">Liven Science</h4>
                <p>
                  No: 8,Thennanathoppe street,Paruthipattu<br></br> Chennai,
                  Tamil Nadu,India - 600071.
                </p>
                <div className="d-flex-footer">
                  <p>
                    <i className="fa fa-phone" aria-hidden="true"></i> +91 7871
                    988 988
                  </p>
                  <span className="mail_footer">
                    <a href="">
                      <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                      support@livenscience.com
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="widget widget-newsletter form-wrapper">
                  <div className="newsletter-info">
                    <h4 className="widget-title">
                      For Exclusive Information <br />& Offers
                    </h4>
                  </div>
                  <form
                    action="#"
                    className="input-wrapper input-wrapper-inline"
                  >
                    <input
                      type="email"
                      className="form-control pl-4"
                      name="email"
                      id="email"
                      placeholder="Email address here..."
                      required
                    />
                    <button
                      className="btn btn-primary btn-rounded btn-md ls-m ml-2"
                      type="submit"
                    >
                      subscribe <i className="d-icon-arrow-right"></i>
                    </button>
                  </form>
                </div>
                <div className="row border-top col-md-10">
                  <div className="col-sm-12 text-center">
                    <div className="social-links links">
                      {settingsDetails?.socialLink &&
                        Object.keys(settingsDetails?.socialLink).length > 0 &&
                        Object.keys(settingsDetails?.socialLink).map(
                          (tudata, tuindex) => (
                            <a
                              href={settingsDetails?.socialLink[tudata].url}
                              className="social-link social-facebook fab fa-facebook-f"
                              title={settingsDetails?.socialLink[tudata].name}
                            >
                              <img
                                src={
                                  settingsDetails?.socialLink[tudata].picture
                                }
                              />
                            </a>
                          )
                        )}

                      {/* <a
                        href="#"
                        className="social-link social-facebook fab fa-facebook-f"
                        title="Social Link"
                      ></a>
                      <a
                        href="#"
                        className="social-link social-twitter fab fa-twitter"
                        title="Social Link"
                      ></a>
                      <a
                        href="#"
                        className="social-link social-instagram fab fa-instagram"
                        title="Social Link"
                      ></a>
                      <a
                        href="#"
                        className="social-link social-youtube fab fa-youtube"
                        title="Social Link"
                      ></a> */}
                      {/* <FaFacebook color="royalblue" size={96} /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-10 new_bottom_footer_link">
              <div className="col-sm-4 flex-center">
                <div className="widget widget-contact">
                  <h4 className="widget-title">Know Us</h4>
                  <ul className="widget-body">
                    {footerDetails?.length > 0 &&
                      footerDetails?.map((obj, index) => {
                        if (obj.url == "who_we_are") {
                          return (
                            <li>
                              <Link to={`/cms/${obj?.url}`}>{obj?.title}</Link>
                            </li>
                          );
                        }
                      })}
                    {footerDetails?.length > 0 &&
                      footerDetails?.map((obj, index) => {
                        if (obj.url == "source") {
                          return (
                            <li>
                              <Link to={`/cms/${obj?.url}`}>{obj?.title}</Link>
                            </li>
                          );
                        }
                      })}
                    {footerDetails?.length > 0 &&
                      footerDetails?.map((obj, index) => {
                        if (obj.url == "promise") {
                          return (
                            <li>
                              <Link to={`/cms/${obj?.url}`}>{obj?.title}</Link>
                            </li>
                          );
                        }
                      })}
                    {footerDetails?.length > 0 &&
                      footerDetails?.map((obj, index) => {
                        if (obj.url == "risk") {
                          return (
                            <li>
                              <Link to={`/cms/${obj?.url}`}>{obj?.title}</Link>
                            </li>
                          );
                        }
                      })}
                    {footerDetails?.length > 0 &&
                      footerDetails?.map((obj, index) => {
                        if (obj.url == "reward") {
                          return (
                            <li>
                              <Link to={`/cms/${obj?.url}`}>{obj?.title}</Link>
                            </li>
                          );
                        }
                      })}
                    {/* <li>
                      <Link to="" className="btn btn-link">
                        Who We Are
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="btn btn-link">
                        Where we source?
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="btn btn-link">
                        Our Promise
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="btn btn-link">
                        Risk-Free trial
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link to="" className="btn btn-link">
                        Rewards
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 flex-center">
                <div className="widget widget-contact">
                  <h4 className="widget-title">Ours Products</h4>
                  <ul className="widget-body">
                    {(() => {
                      if (categoryDetails?.length > 0) {
                        return (
                          <>
                            {categoryDetails?.map((CategoriesDetail) => {
                              return (
                                <li>
                                  <Link
                                    to={`/products/list/${CategoriesDetail._id}`}
                                  >
                                    {CategoriesDetail.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </>
                        );
                      } else {
                        return <li>No Categories Found</li>;
                      }
                    })()}
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 flex-center">
                <div className="widget widget-contact">
                  <h4 className="widget-title">Explore More</h4>
                  <ul className="widget-body">
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    {footerDetails?.length > 0 &&
                      footerDetails?.map((obj, index) => {
                        if (obj.url == "Consult") {
                          return (
                            <li>
                              <Link to={`/cms/${obj?.url}`}>{obj?.title}</Link>
                            </li>
                          );
                        }
                      })}
                    {footerDetails?.length > 0 &&
                      footerDetails?.map((obj, index) => {
                        if (obj.url == "testimonial") {
                          return (
                            <li>
                              <Link to={`/cms/${obj?.url}`}>{obj?.title}</Link>
                            </li>
                          );
                        }
                      })}
                    {footerDetails?.length > 0 &&
                      footerDetails?.map((obj, index) => {
                        if (obj.url == "privacy") {
                          return (
                            <li>
                              <Link to={`/cms/${obj?.url}`}>{obj?.title}</Link>
                            </li>
                          );
                        }
                      })}
                    {footerDetails?.length > 0 &&
                      footerDetails?.map((obj, index) => {
                        if (obj.url == "terms") {
                          return (
                            <li>
                              <Link to={`/cms/${obj?.url}`}>{obj?.title}</Link>
                            </li>
                          );
                        }
                      })}
                    {footerDetails?.length > 0 &&
                      footerDetails?.map((obj, index) => {
                        if (obj.url == "refund") {
                          return (
                            <li>
                              <Link to={`/cms/${obj?.url}`}>{obj?.title}</Link>
                            </li>
                          );
                        }
                      })}
                    {footerDetails?.length > 0 &&
                      footerDetails?.map((obj, index) => {
                        if (obj.url == "disclaimer") {
                          return (
                            <li>
                              <Link to={`/cms/${obj?.url}`}>{obj?.title}</Link>
                            </li>
                          );
                        }
                      })}
                    {footerDetails?.length > 0 &&
                      footerDetails?.map((obj, index) => {
                        if (obj.url == "contactUs") {
                          return (
                            <li>
                              <Link to={`/cms/${obj?.url}`}>{obj?.title}</Link>
                            </li>
                          );
                        }
                      })}
                  </ul>
                </div>
              </div>

              {/* <div className="col-sm-3 flex-center">
                <div className="widget widget-contact">
                  <h4 className="widget-title">Explore More</h4>
                  <ul className="widget-body">
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
          <div className="footer-bottom">
            <Row>
              <Col>
                <div className="footer-center">
                  <p className="copyright">Copyright &copy; 2022. Nutrition</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};;;;;;;

export default Footer;

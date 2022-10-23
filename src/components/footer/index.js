import React, { useState, useEffect } from "react";
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
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import "./style.scss";
import { validateEmail } from "../../utils/common";
import { subscribeApi } from "../../api/base-methods";
import images from "../../utils/images.json";
import livenlogofooter from "../../images/new-images/demos/demo-food2/liven-logo-footer.png";
import { getCategoryApi } from "../../api/base-methods";
const Footer = () => {
  const [email, setEmail] = useState();
  const [vEmail, setVEmail] = useState();
  const [loading, setLoading] = useState(false);
  const [categoryDetails, setCategoryDetails] = useState({});
  const [notiLoading, setNotiLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    getCategoryDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-middle">
            <div className="row foot_white_logo">
              <div className="col-sm-12 text-center">
                <a href="#" className="logo-footer">
                  <img
                    src={livenlogofooter}
                    alt="logo-footer"
                    width="100"
                    height="auto"
                  />
                </a>
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
                  <div className="col-sm-5 text-center">
                    <div className="social-links links">
                      <a
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
                      ></a>
                    </div>
                  </div>
                  <div className="col-sm-2 text-center mobile_d_none">
                    {/* <hr style={{"height: 15px; width: 30px; padding: 0px; transform: rotate(90deg);"}} /> */}
                  </div>
                  {/* <div className="col-sm-5 text-center">
                    <div className="foot_mail">
                      <p>+91 7506865522</p>
                    </div>
                  </div> */}
                </div>
                {/* <div className="row col-md-10 pt-3">
                  <div className="col-sm-12 text-center">
                    <p className="m-0">sales@vantage-nutrition.com</p>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="row pt-20" style={{ display: "none" }}>
              <div className="col-sm-3">
                <div className="widget widget-contact">
                  <h4 className="widget-title">Know Us</h4>
                  <ul className="widget-body">
                    <li>
                      <a href="#">Who We Are</a>
                    </li>
                    <li>
                      <a href="#">Where we source?</a>
                    </li>
                    <li>
                      <a href="#">our promise</a>
                    </li>
                    <li>
                      <a href="#">Risk-Free trial</a>
                    </li>
                    <li>
                      <a href="#">Rewards</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="widget widget-contact">
                  <h4 className="widget-title">Our products</h4>
                  <ul className="widget-body">
                    <li>
                      <a href="#">Vantage 360°</a>
                    </li>
                    <li>
                      <a href="#">Liquid Filled Hard Capsules</a>
                    </li>
                    <li>
                      <a href="#">Off-the-Shelf Formulations</a>
                    </li>
                    <li>
                      <a href="#">Pellets</a>
                    </li>
                    <li>
                      <a href="#">Ingredient Processing</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="widget widget-contact">
                  <h4 className="widget-title">INFORMATION</h4>
                  <ul className="widget-body">
                    <li>
                      <a href="#">ACG Capsules</a>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <a href="#">Manufacturing</a>
                    </li>
                    <li>
                      <a href="privacy.html">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="widget widget-contact">
                  <h4 className="widget-title">GET IN TOUCH</h4>
                  <ul className="widget-body">
                    <li>
                      <a href="#">+91 7506865522</a>
                    </li>
                    <li>
                      <a href="#">sales@vantage-nutrition.com</a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="social-links links">
                      <a
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
                        className="social-link social-pinterest fab fa-pinterest"
                        title="Social Link"
                      ></a>
                      <a
                        href="#"
                        className="social-link social-instagram fab fa-instagram"
                        title="Social Link"
                      ></a>
                      <a
                        href="#"
                        className="social-link social-linkedin fab fa-linkedin"
                        title="Social Link"
                      ></a>
                      <a
                        href="#"
                        className="social-link social-youtube fab fa-youtube"
                        title="Social Link"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-10 new_bottom_footer_link">
              <div className="col-sm-3 flex-center">
                <div className="widget widget-contact">
                  <h4 className="widget-title">Know Us</h4>
                  <ul className="widget-body">
                    <li>
                      <a href="#">Who We Are</a>
                    </li>
                    <li>
                      <a href="#">Where we source?</a>
                    </li>
                    <li>
                      <a href="#">our promise</a>
                    </li>
                    <li>
                      <a href="#">Risk-Free trial</a>
                    </li>
                    <li>
                      <a href="#">Rewards</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3 flex-center">
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
                                    to={`/category/${CategoriesDetail._id}`}
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
              <div className="col-sm-3 flex-center">
                <div className="widget widget-contact">
                  <h4 className="widget-title">Explore More</h4>
                  <ul className="widget-body">
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/">Consult</Link>
                    </li>
                    <li>
                      <Link to="/">Testimonials</Link>
                    </li>
                    <li>
                      <Link to="/privacy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/terms">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link to="/">Return & Refund</Link>
                    </li>
                    <li>
                      <Link to="/">Disclaimers</Link>
                    </li>
                    <li>
                      <Link to="/">Contact US</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row pt-2" style={{ display: "none" }}>
              <div className="col-sm-2 col-contact col-md-2 mb-4 mb-lg-0">
                <div className="widget widget-contact">
                  <h4 className="widget-title">Shop Health Products</h4>
                  <ul className="widget-body">
                    <li>
                      <a href="#">Superfood Plant Protein</a>
                    </li>
                    <li>
                      <a href="#">Slow Multivitamins</a>
                    </li>
                    <li>
                      <a href="#">Vitamins for Kids- Marvel</a>
                    </li>
                    <li>
                      <a href="#">Vitamins for Kids- Disney Frozen</a>
                    </li>
                    <li>
                      <a href="#">Effervescent Tablets</a>
                    </li>
                    <li>
                      <a href="#">Melts Multivitamin</a>
                    </li>
                    <li>
                      <a href="#">Marine Collagen</a>
                    </li>
                    <li>
                      <a href="#">Apple Cider Vinegar</a>
                    </li>
                    <li>
                      <a href="#">Gift of Health</a>
                    </li>
                    <li>
                      <a href="#">All Products</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2 col-contact col-md-2 mb-4 mb-lg-0">
                <div className="widget widget-contact">
                  <h4 className="widget-title">Shop Health Combos</h4>
                  <ul className="widget-body">
                    <li>
                      <a href="#">Essential Vitamins</a>
                    </li>
                    <li>
                      <a href="#">Daily Immunity Booster</a>
                    </li>
                    <li>
                      <a href="#">Deep Sleep Pack</a>
                    </li>
                    <li>
                      <a href="#">Happy Gut Combo</a>
                    </li>
                    <li>
                      <a href="#">Women’s Performance Pack</a>
                    </li>
                    <li>
                      <a href="#">Sleep &amp; Healthy Hair Pack</a>
                    </li>

                    <li>
                      <a href="#">Stress Relief</a>
                    </li>
                    <li>
                      <a href="#">Melts Beauty Pack</a>
                    </li>
                    <li>
                      <a href="#">
                        Energy &amp; Multivitamin - Performance Pack
                      </a>
                    </li>
                    <li>
                      <a href="#">Hair Care Kit</a>
                    </li>
                    <li>
                      <a href="#">Shop Top Sellers</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2 col-contact col-md-2 mb-4 mb-lg-0">
                <div className="widget widget-contact">
                  <h4 className="widget-title">Explore More</h4>
                  <ul className="widget-body">
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/">Consult</Link>
                    </li>
                    <li>
                      <Link to="/">Testimonials</Link>
                    </li>
                    <li>
                      <Link to="/privacy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/terms">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link to="/">Return & Refund</Link>
                    </li>
                    <li>
                      <Link to="/">Disclaimers</Link>
                    </li>
                    <li>
                      <Link to="/">Contact US</Link>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms and Conditions</a>
                    </li>
                    <li>
                      <a href="#">Orders &amp; Shipping</a>
                    </li>
                    <li>
                      <a href="#">Track your Order</a>
                    </li>
                    <li>
                      <a href="#">Refunds &amp; Cancellation</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="widget widget-newsletter form-wrapper">
                  <div className="newsletter-info">
                    <h4 className="widget-title">Nourish your inbox</h4>
                    <p>
                      Your wellbeing check with specially curated tips, recipes
                      and lifestyle support.
                    </p>
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
                      placeholder="Email Address ..."
                      required
                    />
                    <button
                      className="btn btn-primary btn-rounded btn-md ls-m ml-2"
                      type="submit"
                    >
                      <i className="d-icon-arrow-right"></i>
                    </button>
                  </form>
                </div>
                <div className="social-links links">
                  <a
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
                    className="social-link social-pinterest fab fa-pinterest"
                    title="Social Link"
                  ></a>
                  <a
                    href="#"
                    className="social-link social-instagram fab fa-instagram"
                    title="Social Link"
                  ></a>
                  <a
                    href="#"
                    className="social-link social-linkedin fab fa-linkedin"
                    title="Social Link"
                  ></a>
                  <a
                    href="#"
                    className="social-link social-youtube fab fa-youtube"
                    title="Social Link"
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-center">
              <p className="copyright">Copyright &copy; 2022. Nutrition</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

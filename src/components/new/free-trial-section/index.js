import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import {
  getProductDetailsApi,
  FreeProductApi,
  registerApi,
  LoginWithOtp,
} from "../../../api/base-methods";
import { add_to_cart_thunk } from "../../../redux/thunk/user_cart_thunk";
import { useDispatch, useSelector } from "react-redux";
import OwlCarousel from "react-owl-carousel";

import buy_now from "../../../images/new-images/demos/demo-food2/buy_now.png";
import payment_logo from "../../../images/new-images/demos/demo-food2/payment-logo.png";
import InputOTP from "../../input-otp";

import a_1 from "../../../images/new-images/demos/demo-food2/icons/icon/final/1-a.png";
import a_2 from "../../../images/new-images/demos/demo-food2/icons/icon/final/2-a.png";
import a_3 from "../../../images/new-images/demos/demo-food2/icons/icon/final/3-a.png";
import a_4 from "../../../images/new-images/demos/demo-food2/icons/icon/final/4-a.png";
import a_5 from "../../../images/new-images/demos/demo-food2/icons/icon/final/5-a.png";
import a_6 from "../../../images/new-images/demos/demo-food2/icons/icon/final/6-a.png";
import a_7 from "../../../images/new-images/demos/demo-food2/icons/icon/final/6-a.png";
import a_8 from "../../../images/new-images/demos/demo-food2/icons/icon/final/6-a.png";
import a_9 from "../../../images/new-images/demos/demo-food2/icons/icon/final/4-a.png";
import a_10 from "../../../images/new-images/demos/demo-food2/icons/icon/final/4-a.png";
import a_11 from "../../../images/new-images/demos/demo-food2/icons/icon/final/4-a.png";
import a_12 from "../../../images/new-images/demos/demo-food2/icons/icon/final/4-a.png";

import usage_img from "../../../images/new-images/demos/demo-food2/products/final/usage_img.jpg";
import claim_now from "../../../images/new-images/demos/demo-food2/claim_now.png";

import radius_1 from "../../../images/new-images/demos/demo-food2/banners/radius_1.png";
import radius_2 from "../../../images/new-images/demos/demo-food2/banners/radius_2.png";
import radius_3 from "../../../images/new-images/demos/demo-food2/banners/radius_3.png";
import radius_4 from "../../../images/new-images/demos/demo-food2/banners/radius_4.png";

import apple_feature from "../../../images/new-images/demos/demo-food2/products/final/apple_feature.png";
import why_choose from "../../../images/new-images/demos/demo-food2/products/why_choose.png";

import pro_banner_2 from "../../../images/new-images/demos/demo-food2/products/pro_banner_2.jpg";

import a from "../../../images/new-images/demos/demo-food2/products/a.png";
import b from "../../../images/new-images/demos/demo-food2/products/b.png";
import c from "../../../images/new-images/demos/demo-food2/products/c.png";
import d from "../../../images/new-images/demos/demo-food2/products/d.png";
import e from "../../../images/new-images/demos/demo-food2/products/e.png";
import f from "../../../images/new-images/demos/demo-food2/products/f.png";

import app_1 from "../../../images/new-images/demos/demo-food2/products/final/app_1.png";
import app_2 from "../../../images/new-images/demos/demo-food2/products/final/app_2.png";
import app_3 from "../../../images/new-images/demos/demo-food2/products/final/app_3.png";
import app_4 from "../../../images/new-images/demos/demo-food2/products/final/app_4.png";
import app_5 from "../../../images/new-images/demos/demo-food2/products/final/app_5.png";

import app_11 from "../../../images/new-images/demos/demo-food2/products/final/app_11.png";
import app_22 from "../../../images/new-images/demos/demo-food2/products/final/app_22.png";
import app_33 from "../../../images/new-images/demos/demo-food2/products/final/app_33.png";
import app_44 from "../../../images/new-images/demos/demo-food2/products/final/app_44.png";
import app_55 from "../../../images/new-images/demos/demo-food2/products/final/app_55.png";

import banner_1 from "../../../images/new-images/demos/demo-food2/slides/banner_1.jpg";

import {
  getCitiesApi,
  getStatesApi,
  UpdateProfileApi,
} from "../../../api/base-methods";

import "./style.scss";
import Accordion from "../../accordion";
import InputPhone from "../../input-phone";
import InputText from "../../input-text";
import Select from "react-select";
import {
  validateEmail,
  validateName,
  validateNameReplace,
  validInternationalPhone,
} from "../../../utils/common";
import { toast } from "react-toastify";
import { setCookies } from "../../../utils/cookies";
import { user_load_by_token_thunk } from "../../../redux/thunk/user_thunk";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";
import useWindowSize from "../../../utils/useWindowSize";
import "swiper/swiper-bundle.css";

import SwiperCore, { EffectFlip, Navigation, Pagination } from "swiper";

const Free_Trial_Section = ({ productData }) => {
  const { width } = useWindowSize();
  const history = useHistory();
  //console.log(productData?._id, "productData");
  const dispatch = useDispatch();
  const { user, cart } = useSelector((state) => state);
  const [stateList, setStateList] = useState({});
  const [cityList, setCityList] = useState({});
  const [validation, setValidation] = useState({
    first_name: false,
    valid_first_name: false,
    last_name: false,
    valid_last_name: false,
    country: false,
    valid_country: false,
    address: false,
    valid_address: false,
    zipcode: false,
    valid_zipcode: false,
    state: false,
    city: false,
    email: false,
    valid_email: false,
    phone_no: false,
    valid_phone_no: false,
  });
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    country: "",
    address: "",
    state: "",
    city: "",
    email: "",
    phone_no: "",
    zipCode: "",
    productId: "",
  });
  const [show, setShow] = useState(false);
  const [otp, setOTP] = useState(false);
  const [otpValue, setOTPValue] = useState("");
  const [error, setError] = useState();
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [navigate, setNavigate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [id, setId] = useState("");

  useEffect(async () => {
    getStatesList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (user?.login && status) {
      history.push("/checkout");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.login, status]);

  const swiperRef = useRef();
  const [update, setUpdate] = useState(0);

  const handleNavigation = useCallback((direction = "") => {
    setUpdate(Math.random());
    //console.log(direction, "direction");
    //if (!direction || !swiperRef.current) return;
    if (direction === "next") swiperRef.current.swiper.slideNext();
    else swiperRef.current.swiper.slidePrev();
  }, []);

  useEffect(() => {
    setUpdate(Math.random());
  }, [swiperRef?.current?.swiper]);

  const getStatesList = async () => {
    const StateListData = await getStatesApi();
    setStateList(StateListData?.data?.responseData?.states);
  };

  const handleChangeEvent = (e) => {
    if (e.target.value) {
      if (e.target.name === "name") {
        if (validateName(e.target.value)) {
          setData({
            ...data,
            [e.target.name]: validateNameReplace(e.target.value),
          });
          setValidation({ ...validation, [e.target.name]: false });
        }
      } else if (e.target.name === "email") {
        // if (validateEmail(e.target.value)) {
        setData({ ...data, [e.target.name]: e.target.value.trim() });
        setValidation({ ...validation, [e.target.name]: false });
        //} else {
        //setValidation({ ...validation, [e.target.name]: true });
        //}
      } else {
        setData({ ...data, [e.target.name]: e.target.value });
        setValidation({ ...validation, [e.target.name]: false });
      }
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
      setValidation({ ...validation, [e.target.name]: true });
    }
  };
  const CheckValidation = () => {
    let c_validation = { ...validation };

    if (!data.first_name) {
      c_validation = { ...c_validation, first_name: true };
    } else {
      if (validateName(data.first_name)) {
        c_validation = { ...c_validation, valid_first_name: false };
      } else {
        c_validation = { ...c_validation, valid_first_name: true };
      }
    }
    if (!data.last_name) {
      c_validation = { ...c_validation, last_name: true };
    } else {
      if (validateName(data.first_name)) {
        c_validation = { ...c_validation, valid_last_name: false };
      } else {
        c_validation = { ...c_validation, valid_last_name: true };
      }
    }

    if (!data.email) {
      c_validation = { ...c_validation, valid_email: true };
    } else {
      if (validateEmail(data.email)) {
        c_validation = { ...c_validation, valid_email: false };
      } else {
        c_validation = { ...c_validation, valid_email: true };
      }
    }

    if (!data.mobile) {
      c_validation = { ...c_validation, valid_phone_no: true };
    } else {
      if (validInternationalPhone(data.mobile, data.phone_code)) {
        c_validation = { ...c_validation, valid_phone_no: false };
      } else {
        c_validation = { ...c_validation, valid_phone_no: true };
      }
    }
    if (!data.address) {
      c_validation = { ...c_validation, valid_address: true };
    } else {
      c_validation = { ...c_validation, valid_address: false };
    }
    if (!data.zipcode) {
      c_validation = { ...c_validation, valid_zipcode: true };
    } else {
      c_validation = { ...c_validation, valid_zipcode: false };
    }

    if (!data.state) {
      c_validation = { ...c_validation, state: true };
    } else {
      c_validation = { ...c_validation, state: false };
    }

    if (!data.city) {
      c_validation = { ...c_validation, city: true };
    } else {
      c_validation = { ...c_validation, city: false };
    }

    setValidation(c_validation);
    if (
      !c_validation.first_name &&
      !c_validation.valid_first_name &&
      !c_validation.last_name &&
      !c_validation.valid_last_name &&
      !c_validation.phone_no &&
      !c_validation.valid_phone_no &&
      !c_validation.valid_email &&
      !c_validation.email &&
      !c_validation.valid_address &&
      !c_validation.valid_zipcode &&
      !c_validation.state &&
      !c_validation.city
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleForm = async () => {
    // console.log(addressValidation, "addressValidation");
    if (!user.login) {
      if (CheckValidation()) {
        setLoading(true);
        //console.log(data);
        //return false;

        //productDataDetails.name = productDataDetails?.first_name;
        // ProfileData.dob = dayjs(ProfileData.dob).format("DD-MM-YYYY");
        //console.log(ProfileData);

        try {
          let Newdata = {
            name: data?.first_name,
            email: data?.email,
            address: data?.address,
            mobile: data?.mobile,
            state: data?.state,
            city: data?.city,
            zipCode: data?.zipcode,
          };
          //console.log(data, "data");
          //return false;
          //const result = await registerApi(productDataDetails);
          const result = await registerApi(Newdata);

          if (result.data.statusCode === 200) {
            setLoading(false);
            setShow(true);
            setId(result?.data?.responseData?.user?._id);
            //dispatch(user_login_otp_action());
          }
        } catch (err) {
          //console.log(err);
          toast.error(err?.data?.message);
          setLoading(false);
        }
      }
    } else {
      if (
        cart?.data?.cartProductDetails &&
        Object.keys(cart?.data?.cartProductDetails)?.length > 0
      ) {
        let Data = cart?.data?.cartProductDetails?.find(
          (obj) => obj?.isFree == true
        );
        //if (!Data) {
        dispatch(
          add_to_cart_thunk(
            productData?._id,
            productData?.productType[0]?.type,
            productData?.saleAmount
          )
        );
        // } else {
        //   toast.info("Free product at a time when only one product is allowed");
        // }
      } else {
        dispatch(
          add_to_cart_thunk(
            productData?._id,
            productData?.productType[0]?.type,
            productData?.saleAmount
          )
        );
      }
      history.push("/cart");
    }
  };
  const handleVerifyOTP = async () => {
    setError(null);
    if (otpValue.length === 6) {
      try {
        setError("");
        setVerifyLoading(true);
        const result = await LoginWithOtp({
          id: id,
          otp: otpValue,
        });
        setCookies(result?.data?.responseData?.user?.token);
        setVerifyLoading(false);
        //setNavigate(true);
        dispatch(
          user_load_by_token_thunk(result?.data?.responseData?.user?.token)
        );
        dispatch(
          add_to_cart_thunk(
            productData?._id,
            productData?.productType[0]?.type,
            productData?.saleAmount,
            setStatus
          )
        );
        // console.log(user)
        // if (status) {
        //   history.push("/cart");
        // }
      } catch (error) {
        setVerifyLoading(false);
        setError(
          "It seems you have entered the wrong OTP. Please check the number(s) you have entered."
        );
        console.log(
          "🚀 ~ file: index.js ~ line 172 ~ handleVerifyOTP ~ error",
          error
        );
      }
    } else {
      setError("Please enter the full OTP received through your phone.");
    }
  };
  return (
    <>
      <section className="" id="trial_free_section">
        <div className="intro-slide1 banner banner-fixed">
          {productData?.bannerTitle && (
            <div class="bannerTitle">
              <h3>{productData?.bannerTitle}</h3>
            </div>
          )}

          {productData?.bannerDescription && (
            <div class="bannerDescription">
              <h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: productData?.bannerDescription,
                  }}
                ></div>
              </h4>
            </div>
          )}
          {productData?.photos && (
            <figure>
              <img
                //src={banner_1}
                src={`${
                  width > 767
                    ? productData?.photos[0]
                    : productData?.mobileImage
                }`}
                alt="intro-banner"
                width="1903"
                height="540"
                className="free_trial_banner"
              />
            </figure>
          )}
          <div className={`container ${user?.login ? "centered" : ""}`}>
            <div className="banner-content">
              <div className="col-lg-4 col-md-4">
                <div className="trial_form">
                  <div className="thumbnail center well well-small text-center">
                    <h5>TELL US WHERE TO SEND</h5>
                    <p>YOUR BOTTLE</p>
                    <form action="" method="post">
                      {!user?.login && (
                        <>
                          <div className="input-prepend mb-2">
                            <InputText
                              //title={"First Name"}
                              name="first_name"
                              placeholder="Enter First Name"
                              value={data.first_name}
                              //required={validation.first_name}
                              // onKeyPress={handleKeyPressEvent}
                              onChange={handleChangeEvent}
                            />
                            {validation.first_name && (
                              <p className="error_text">
                                Please enter a valid First name
                              </p>
                            )}
                          </div>
                          <div className="input-prepend mb-2">
                            <InputText
                              //title={"Last Name"}
                              name="last_name"
                              placeholder="Enter Last Name"
                              value={data.last_name}
                              //required={validation.last_name}
                              // onKeyPress={handleKeyPressEvent}
                              onChange={handleChangeEvent}
                            />
                            {validation.last_name && (
                              <p className="error_text">
                                Please enter a valid Last name
                              </p>
                            )}
                          </div>

                          <div className="input-prepend mb-2">
                            <InputText
                              //title={"Last Name"}
                              name="address"
                              placeholder="Enter Addres"
                              value={data.address}
                              //required={validation.address}
                              // onKeyPress={handleKeyPressEvent}
                              onChange={handleChangeEvent}
                              // style={{ height: "10vh" }}
                            />
                            {validation.valid_address && (
                              <p className="error_text">
                                Please enter a valid address
                              </p>
                            )}
                          </div>

                          <div className="input-prepend mb-2">
                            <InputText
                              //title={"Last Name"}
                              name="zipcode"
                              placeholder="Enter zipcode"
                              value={data.zipcode}
                              //required={validation.address}
                              // onKeyPress={handleKeyPressEvent}
                              onChange={handleChangeEvent}
                              // style={{ height: "16vh" }}
                            />
                            {validation.valid_zipcode && (
                              <p className="error_text">
                                Please enter a valid zipcode
                              </p>
                            )}
                          </div>

                          <div className="input-prepend mb-2">
                            <Select
                              options={
                                stateList?.length > 0 &&
                                stateList?.map((o) => ({
                                  label: o.name,
                                  value: o._id,
                                }))
                              }
                              value={{
                                label:
                                  stateList?.length > 0 &&
                                  stateList?.find((o) => o._id === data?.state)
                                    ?.name,
                                value: data?.state,
                              }}
                              label="Single select"
                              placeholder="Placeholder test"
                              styles={colorStyles}
                              onChange={async (Statedata) => {
                                if (Statedata?.value) {
                                  const CityListData = await getCitiesApi(
                                    Statedata?.value
                                  );
                                  setCityList(
                                    CityListData?.data?.responseData?.cities
                                  );
                                  setData({ ...data, state: Statedata?.value });
                                }
                              }}
                            />
                            {validation.state && (
                              <p className="error_text">Please select state</p>
                            )}
                          </div>
                          <div className="input-prepend mb-2">
                            <Select
                              options={
                                cityList?.length > 0 &&
                                cityList?.map((o) => ({
                                  label: o.name,
                                  value: o._id,
                                }))
                              }
                              value={{
                                label:
                                  cityList?.length > 0 &&
                                  cityList?.find((o) => o._id === data?.city)
                                    ?.name,
                                value: data?.city,
                              }}
                              onChange={async (Ciytdata) => {
                                setData({ ...data, city: Ciytdata?.value });
                                //console.log(data, "data");
                              }}
                              placeholder="Select City"
                            />
                            {/* <Form.Select
                          aria-label="Default select example"
                          name="city"
                          defaultValue={address?.city}
                          onChange={() => handleAddressChangeEvent}
                          value={address?.city}
                        >
                          <option>City</option>

                          {cityList?.length > 0 &&
                            cityList?.map((ListCity) => {
                              return (
                                <option value={ListCity?._id}>
                                  {ListCity?.name}
                                </option>
                              );
                            })}
                        </Form.Select> */}
                            {validation.city && (
                              <p className="error_text">Please select City</p>
                            )}
                          </div>

                          <div className="input-prepend mb-2">
                            <InputPhone
                              ///title={"Mobile"}
                              defaultCountry={"in"}
                              value={data.mobile}
                              //required={validation.phone_no}
                              //onEnterKeyPress={handleSignUp}
                              onChange={(e, c_code) => {
                                setData({
                                  ...data,
                                  mobile: e,
                                  phone_code:
                                    c_code?.countryCode?.toUpperCase(),
                                });
                                if (e) {
                                  setValidation({
                                    ...validation,
                                    phone_no: false,
                                  });
                                } else {
                                  setValidation({
                                    ...validation,
                                    phone_no: true,
                                  });
                                }
                              }}
                            />
                            {validation.valid_phone_no && (
                              <p className="error_text">
                                Please enter a valid mobile number
                              </p>
                            )}
                          </div>
                          <div className="input-prepend mb-2">
                            <InputText
                              //title={"Email"}
                              name="email"
                              placeholder="Enter Email"
                              value={data.email}
                              //required={validation.email}
                              //onKeyPress={handleKeyPressEvent}
                              onChange={handleChangeEvent}
                            />
                            {validation.valid_email && (
                              <p className="error_text">
                                Please enter a valid email address
                              </p>
                            )}
                          </div>
                        </>
                      )}
                      {loading ? (
                        "Loading"
                      ) : (
                        <div
                          className="input-prepend mb-4 mt-4"
                          onClick={() => handleForm()}
                        >
                          <img
                            src={buy_now}
                            className="trial_buy_now_btn heart"
                          />
                        </div>
                      )}
                      <div className="input-prepend mb-2 mt-2">
                        <img src={payment_logo} className="trial_logo_btn" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <section id="free_trial_section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="title title-center ls-s mb-8 dis_block">
                  Know About Our FREE TRIAL!
                </h2>
                <p className="text-center">
                  According to journal of Marketing Research published by
                  American Marketing Association.
                </p>
                <p className="text-center">
                  “The challenge of retaining customers acquired with free
                  trials”.
                </p>
                <p className="text-left">
                  There are people who refuse to buy online products due to
                  several reasons. One of it making them to hesitate is, being
                  skeptic about the quality and originality of the product.
                  Hence, we, Liven Science are the first to introduce exclusive
                  Free Trial Deal, that gives you a specific time duration to
                  experience the efficacy of the product that too for FREE.
                  Availing this trial, helps you to check whether the formula
                  delivers you the right results before you buy it. This offer
                  from us ensures our confidence in the formula which are highly
                  recommended by nutritionists for vital support. We Value our
                  Customers and their Satisfaction sincerely.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="element-section mt-9 mb-10">
          <div className="container">
            <h2 className="title title-center ls-s mb-8 dis_block">
              {productData?.addLivenBurnTitle}
            </h2>
            <div className="row elements justify-content-center mobile-view-block mobile_extra_block">
              {(() => {
                if (productData?.livenBurns?.length > 0) {
                  return (
                    <>
                      {productData?.livenBurns?.map((takelivenBurn) => {
                        return (
                          <div className="col-3 col-md-6 col-lg-2">
                            <a href="#" className="element-type">
                              <div className="element element-accordian dotted_border">
                                <img
                                  src={`${takelivenBurn?.image}`}
                                  className="whole_food_img"
                                />
                                <p>{takelivenBurn?.name}</p>
                              </div>
                            </a>
                          </div>
                        );
                      })}
                    </>
                  );
                }
              })()}

              <div className="" style={{ display: "none" }}>
                <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                  <a href="#" className="element-type">
                    <div className="element element-icon dotted_border">
                      <img src={a_7} className="whole_food_img" />
                      <p>Sulfites Free</p>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                  <a href="#" className="element-type">
                    <div className="element element-button dotted_border">
                      <img src={a_8} className="whole_food_img" />
                      <p>Gmo Free</p>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                  <a href="#" className="element-type">
                    <div className="element element-button dotted_border">
                      <img src={a_9} className="whole_food_img" />
                      <p>Egg Free</p>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                  <a href="#" className="element-type">
                    <div className="element element-button dotted_border">
                      <img src={a_10} className="whole_food_img" />
                      <p>Nitrates Free</p>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                  <a href="#" className="element-type">
                    <div className="element element-button dotted_border">
                      <img src={a_11} className="whole_food_img" />
                      <p>Nuts Free</p>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                  <a href="#" className="element-type">
                    <div className="element element-button dotted_border">
                      <img src={a_12} className="whole_food_img" />
                      <p>Dairy Free</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="element-section" id="why_choose_image">
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-7">
                <h2 className="description-title mb-4 font-weight-semi-bold ls-m">
                  {productData?.howToUseTitle}
                </h2>
                <div className="mb-8">
                  {/* <b>Pop</b>: Remove the Desiccant cap. product image here */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: productData?.howToUsedescription,
                    }}
                  ></div>
                  {/* <li>
                  <b>Drop</b>: Put 1 tab in a glass of water (250ml).
                </li>
                <li>
                  <b>Fizz</b>: Wait till it dissolves.
                </li>
                <li>
                  <b>Savour</b>: Drink it for tasting the delicious benefits of
                  Liven BURN with ACV.
                </li> */}
                </div>
              </div>
              <div className="col-md-5">
                <img
                  src={`${productData?.howToUseImage}`}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="input-prepend text-center mt-10">
            <a href="#trial_free_section" className="flex-gap">
              <img src={claim_now} className="wid_60 trial_enquery-btn" />
            </a>
          </div>
        </section>

        <section id="absolute_cart">
          <div className="container">
            <h2 className="title title-center ls-s mb-8 dis_block">
              {productData?.takeLivenBurnACVTitle}
            </h2>
            <br />
            <div className="row mt-10">
              {(() => {
                if (productData?.takeLivenBurn?.length > 0) {
                  return (
                    <>
                      {productData?.takeLivenBurn?.map(
                        (livenBurnshealingPoten) => {
                          return (
                            <div className="col-sm-3 pt-4 pb-10">
                              <div className="icon-box icon-inversed text-center bg-livenburnitem">
                                <span className="icon-box-icon">
                                  <img
                                    src={`${livenBurnshealingPoten?.image}`}
                                    alt="category"
                                  />
                                </span>
                                <div className="icon-box-content">
                                  <p>{livenBurnshealingPoten?.title}</p>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </>
                  );
                }
              })()}
            </div>
            {/* <div className="row pro_feature">
              <div className="col-sm-12">
                <img
                  src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${productData?.chooseLivenBurnImage}`}
                  className="acv_img"
                />
              </div>
            </div> */}

            <div className="row mt-5" style={{ display: "none" }}>
              <div className="col-sm-8">
                <div className="row">
                  <h2 className="description-title mb-4 font-weight-semi-bold ls-m">
                    What is the right time to consume?
                  </h2>
                  <div className="col-lg-6 col-12 text-center mt-md-0">
                    <div className="icon-box icon-box1 pt-0">
                      <div className="icon-box-icon mx-auto drop-shadow ml-lg-0">
                        <figure>
                          <img
                            src={radius_1}
                            alt="icon"
                            width="100"
                            height="auto"
                          />
                        </figure>
                      </div>
                      <div className="icon-box-content">
                        <p>20 minutes before meal</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 text-center mt-md-0">
                    <div className="icon-box icon-box1 pt-0">
                      <div className="icon-box-icon mx-auto drop-shadow ml-lg-0">
                        <figure>
                          <img
                            src={radius_2}
                            alt="icon"
                            width="100"
                            height="auto"
                          />
                        </figure>
                      </div>
                      <div className="icon-box-content">
                        <p>Follow Healthy diet and exercise</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-12 text-center mt-md-0">
                    <div className="icon-box icon-box1 pt-4">
                      <div className="icon-box-icon mx-auto drop-shadow ml-lg-0">
                        <figure>
                          <img
                            src={radius_3}
                            alt="icon"
                            width="100"
                            height="auto"
                          />
                        </figure>
                      </div>
                      <div className="icon-box-content">
                        <p>Consume up to 90-180 days</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 text-center mt-md-0">
                    <div className="icon-box icon-box1 pt-4">
                      <div className="icon-box-icon mx-auto drop-shadow ml-lg-0">
                        <figure>
                          <img
                            src={radius_4}
                            alt="icon"
                            width="100"
                            height="auto"
                          />
                        </figure>
                      </div>
                      <div className="icon-box-content">
                        <p>Supports both men and women</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <img src={pro_banner_2} />
              </div>
            </div>
          </div>
        </section>

        <section className="element-section" id="why_choose_image">
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-12">
                <h2 className="description-title mb-4 font-weight-semi-bold ls-m text-center">
                  {productData?.burnWorkTitle}
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: productData?.burnWorkdescription,
                  }}
                />
              </div>
            </div>
            <div className="row burn_works mb-3">
              {(() => {
                if (productData?.livenBurnWorkIcon?.length > 0) {
                  return (
                    <>
                      {productData?.livenBurnWorkIcon?.map(
                        (livenBurnWorkIcon) => {
                          return (
                            <div className="col-6 col-md-6 col-lg-6 burn_works">
                              <img
                                src={`${livenBurnWorkIcon?.image}`}
                                className="pro_des_icon2"
                              />
                              {livenBurnWorkIcon?.name}
                            </div>
                          );
                        }
                      )}
                    </>
                  );
                }
              })()}
            </div>
            <br></br>
            <div className="row mt-10 why_choose_dflex">
              <div className="col-md-8">
                <h2 className="description-title mb-4 font-weight-semi-bold ls-m">
                  {productData?.chooseLivenBurnTitle}
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: productData?.chooseLivenBurndescription,
                  }}
                ></div>
              </div>
              <div className="col-md-4 text-center">
                <img
                  src={`${productData?.chooseLivenBurnImage}`}
                  className="why_choose_img"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="arrivals-section" id="Potential_product">
          <h2 className="title title-center ls-s mb-8 mt-9 dis_block">
            Includes Healing Potential of:
          </h2>
          <div className="tab tab-nav-center">
            <div className="tab-content">
              <div className="tab-pane pt-4 active" id="fruits">
                {productData?.healingPotentials?.length > 0 && (
                  <Swiper
                    ref={swiperRef}
                    slidesPerView={4}
                    spaceBetween={4}
                    slidesPerGroup={4}
                    // loop={true}
                    // loopFillGroupWithBlank={true}
                    navigation={false}
                    modules={[Navigation]}
                    className="mySwiper11"
                    breakpoints={{
                      320: { slidesPerView: 1, spaceBetween: 1 },
                      480: { slidesPerView: 3, spaceBetween: 5 },
                      768: { slidesPerView: 4, spaceBetween: 5 },
                      1024: { slidesPerView: 4, spaceBetween: 5 },
                    }}
                  >
                    {(() => {
                      return (
                        <>
                          {productData?.healingPotentials?.map(
                            (healingPoten) => {
                              return (
                                <SwiperSlide>
                                  {" "}
                                  <div className="product-refdc text-center product-with-qty no_border">
                                    <figure className="product-media">
                                      <a href="javascript:void">
                                        <img
                                          //src={app_1}
                                          src={`${healingPoten?.image}`}
                                          alt="product"
                                          width="280"
                                          height="315"
                                          className="healing_image"
                                        />
                                        <div class="title-bottom-left">
                                          {healingPoten?.name}
                                        </div>
                                        <div class="description-bottom-left">
                                          {healingPoten?.description}
                                        </div>
                                        <img
                                          //src={app_11}
                                          // src={
                                          //   "http://54.177.7.240" +
                                          //   healingPoten?.image
                                          // }

                                          src={`${healingPoten?.layoutPhoto}`}
                                          className="healing_image-top"
                                          alt="product"
                                          style={{ width: "50% !important" }}
                                          width="280"
                                          height="315"
                                        />
                                      </a>
                                      <div className="product-action-vertical">
                                        <a
                                          href="#"
                                          className="btn-product-icon btn-wishlist"
                                          title="Add to wishlist"
                                        >
                                          <i className="d-icon-plus"></i>
                                        </a>
                                      </div>
                                    </figure>
                                  </div>
                                </SwiperSlide>
                              );
                            }
                          )}
                        </>
                      );
                    })()}
                  </Swiper>
                )}

                {/* <div className="input-prepend text-center mt-10">
                    <a href="#trial_free_section" className="flex-gap">
                      <img
                        src={claim_now}
                        className="wid_60 trial_enquery-btn"
                      />
                    </a>
                  </div> */}
              </div>

              <button
                className="swipper_back_arrow"
                onClick={() => handleNavigation("prev")}
                disabled={swiperRef?.current?.swiper?.isBeginning}
              >
                <img
                  src="https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/back-arrow.png"
                  width="40"
                  height="40"
                  alt="Arrow"
                />
              </button>
              <button
                className="swipper_front_arrow"
                onClick={() => handleNavigation("next")}
                disabled={swiperRef?.current?.swiper?.isEnd}
              >
                <img
                  src="https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/front-arrow.png"
                  width="40"
                  height="40"
                  alt="Arrow"
                />
              </button>
            </div>
          </div>
        </section>

        <section
          className="new_our_idea pt-2 pt-md-7 pt-10 pb-8"
          id="trial_faq"
        >
          <div className="container p-0">
            <h2 className="title-echo mb-1">
              <span>Clear Your Mind Now! Answers for Your Queries!</span>
            </h2>
            <br />
            <div className="row">
              <div className="col-sm-8">
                <div className="code-template">
                  <div className="accordion accordion-background accordion-icon accordion-boxed accordion-card-border accordion-plus accordion-gutter-sm code-content">
                    {(() => {
                      if (productData?.questions?.length > 0) {
                        return (
                          <>
                            {productData?.questions?.map((prodcontain) => {
                              //console.log(prodcontain, "prodcontain");
                              return <Accordion content={prodcontain} />;
                            })}
                          </>
                        );
                      }
                    })()}
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="span12">
                  <div className="thumbnail center well well-small text-center">
                    <h2>Newsletter</h2>
                    <p>Subscribe to our weekly Newsletter and stay tuned.</p>
                    <form action="" method="post">
                      <div className="input-prepend">
                        <input
                          type="text"
                          id=""
                          className="form-control"
                          name=""
                          placeholder="your@email.com"
                        />
                      </div>
                      <br />
                      <input
                        type="submit"
                        value="Subscribe Now!"
                        className="btn btn-large"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Login Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Row className="otp_flex">
              <Col>
                <h3>Enter the OTP</h3>{" "}
              </Col>
              <Col className="text-right">
                <div
                  className="cursor_pointer"
                  onClick={() => {
                    setShow(false);
                    setLoading(false);
                  }}
                >
                  <h4>Change</h4>
                </div>
              </Col>
            </Row>

            <div className="form-group free-trial-input-section">
              <InputOTP onChange={(e) => setOTPValue(e)} value={otpValue} />
            </div>
            <button
              type="button"
              className="btn btn-dark btn-block btn-rounded otp-submin-button-free"
              onClick={handleVerifyOTP}
              disabled={verifyLoading || navigate}
            >
              {navigate ? (
                "Verified Successfully, please wait..."
              ) : (
                <>{verifyLoading ? "Verifying..." : "Continue"}</>
              )}
            </button>
            {error && <p className="error_text text-center">{error}</p>}
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="primary" onClick={() => history.push("/accounts")}>
            Ok
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

const colorStyles = {
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "black",
    };
  },
};

export default Free_Trial_Section;

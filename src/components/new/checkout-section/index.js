import React, { useState, useEffect, useMemo } from "react";
import Modal from "react-bootstrap/Modal";
import OwlCarousel from "react-owl-carousel";
import { useHistory } from "react-router-dom";
//import Image from "react-bootstrap/Image";
import { BiArrowBack, BiRightArrowAlt } from "react-icons/bi";
import { Button, Form } from "react-bootstrap";
import { HiOutlineArrowRight } from "react-icons/hi";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {
  FaDiscord,
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

import customer from "../../../images/new-images/subpages/customer.jpg";
import store from "../../../images/new-images/subpages/store.jpg";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  get_cart_list_thunk,
  remove_from_cart_thunk,
} from "../../../redux/thunk/user_cart_thunk";
import "./style.scss";
import { currencyFormat, percentage } from "../../../utils/common";
import {
  getCheckoutApi,
  OrderSuccessApi,
  OrdersFailedApi,
  removeFromCartAllApi,
  getPromocodeListApi,
  applypromocodeApi,
  removepromocodeApi,
  cmsPages,
} from "../../../api/base-methods";
import { toast } from "react-toastify";
import { checkoutApi } from "../../../api/methods";

import {
  validateEmail,
  validateName,
  validateNameReplace,
} from "../../../utils/common";
import InputText from "../../input-text";
import InputPhone from "../../input-phone";
import dayjs from "dayjs";
import {
  getCitiesApi,
  getStatesApi,
  UpdateProfileApi,
} from "../../../api/base-methods";
import { MdRemoveCircle } from "react-icons/md";
// import { toast } from "react-toastify";

const CheckoutSection = ({ orderInfo, loading }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, cart } = useSelector((state) => state);
  const [show, setShow] = useState(false);
  const [couponShow, setCouponShow] = useState(false);

  const [showAddressSection, setShowAddressSection] = useState(false);

  const [stateList, setStateList] = useState({});
  const [cityList, setCityList] = useState({});
  const [promoCodeList, setPromoCodeList] = useState({});
  const [promoCodeDetails, setPromoCodeDetails] = useState({});

  const [promoCodeValue, setPromoCodeValue] = useState("");
  const [footerDetails, setFooterDetails] = useState({});

  const [profile, setProfile] = useState({
    name: user?.data?.name,
    email: user?.data?.email,
  });

  const [profileValidation, setProfileValidation] = useState({
    name: false,
    valid_name: false,
    email: false,
    valid_email: false,
  });

  const [address, setAddress] = useState({
    address: user?.data?.address,
    city: user?.data?.city?._id,
    state: user?.data?.state?._id,
    pincode: user?.data?.zipCode,
  });

  const [addressValidation, setAddressValidation] = useState({
    address: false,
    valid_address: false,
    city: false,
    valid_city: false,
    state: false,
    valid_state: false,
    pincode: false,
    valid_pincode: false,
  });

  const [promoCode, setPromoCode] = useState("");
  const [promoError, setPromoError] = useState("");
  const [isFreeProduct, setIsFreeProduct] = useState(false);

  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [totalPromoAmount, setTotalPromoAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const getcmsPages = async () => {
    try {
      const result = await cmsPages();
      setFooterDetails(result?.data?.responseData?.pages);
    } catch (error) {
      console.log(
        "🚀 ~ file: index.js ~ line 49 ~ handleGetNotification ~ error",
        error
      );
    }
  };

  // const { orderDetails, setOrderDetails } = useState("");
  // const { totalAmount, setTotalAmount } = useState(0);
  // const { currency, setCurrency } = useState("INR");

  // const checkDetails = async () => {
  //   let requestData = { cartId: cart?.data?.cardId };
  //   /// const CheckoutDetails = await getCheckoutApi(requestData);
  //   //   console.log(CheckoutDetails?.data?.responseData?.orderInfo?.amount);
  //   //   setTotalAmount(1000);
  //   //   setCurrency(CheckoutDetails?.data?.responseData?.orderInfo?.currency);
  // };
  const getPromocodeList = async () => {
    const response = await getPromocodeListApi();
    setPromoCodeList(response?.data?.responseData?.promocodes);

    // console.log(response?.data?.responseData?.promocodes, "response");
  };
  useEffect(async () => {
    dispatch(get_cart_list_thunk());
    getStatesList();
    setAddress({ ...address, state: user?.data?.state?._id });
    getCityUser();
    getPromocodeList();
    refreshData();
    getcmsPages();

    // console.log(response?.data?.responseData?.blogs?.docs, "response");
  }, []);

  useEffect(() => {
    refreshData();
  }, [cart]);

  const refreshData = () => {
    if (user?.login) {
      let Data = cart?.data?.cartProductDetails?.find(
        (obj) => obj?.isFree == true
      );
      if (Data) {
        setIsFreeProduct(true);
      }
      // cart?.data?.cartProductDetails.map(() =>
      //  )
      let TotalAmount = cart?.data?.cartProductDetails?.reduce(
        (n, { saleAmount, qty }) => n + saleAmount * qty,
        0
      );

      if (
        parseFloat(cart?.data?.cartSetting?.deliveryMinimumAmount) >=
          parseFloat(TotalAmount) ||
        Data
      ) {
        TotalAmount += cart?.data?.cartSetting?.deliveryCharge;
      }
      setTotalPromoAmount(TotalAmount);

      if (cart?.data?.promoDetails) {
        let discountAmount = 0;
        if (
          cart?.data?.promoDetails &&
          Object.keys(cart?.data?.promoDetails)?.length
        ) {
          if (cart?.data?.promoDetails?.promoType == "percentage") {
            discountAmount = percentage(
              cart?.data?.promoDetails?.percentage,
              TotalAmount
            );
          } else {
            discountAmount = cart?.data?.promoDetails?.discountAmount;
          }
        }
        // console.log(discountAmount, "discountAmount");
        TotalAmount -= parseFloat(discountAmount);
      }
      setTotalAmount(TotalAmount);
    }
    setPromoCodeDetails(cart?.data?.promoDetails);
  };

  const UpdateAddress = (e) => {
    e.preventDefault();
    toast.error("Please Updated the address in cart page or profile page");
    return false;
  };

  const getCityUser = async () => {
    if (user?.data?.state?._id) {
      const CityListData = await getCitiesApi(user?.data?.state?._id);
      setCityList(CityListData?.data?.responseData?.cities);
      setAddress({ ...address, city: user?.data?.city?._id });
    }
  };
  const getStatesList = async () => {
    const StateListData = await getStatesApi();
    setStateList(StateListData?.data?.responseData?.states);
  };

  const handleChangeEvent = (e) => {
    if (e.target.value) {
      if (e.target.name === "name") {
        if (validateName(e.target.value)) {
          setProfile({
            ...profile,
            [e.target.name]: validateNameReplace(e.target.value),
          });
          setProfileValidation({
            ...profileValidation,
            [e.target.name]: false,
          });
        }
      } else if (e.target.name === "email") {
        setProfile({ ...profile, [e.target.name]: e.target.value.trim() });
        setProfileValidation({ ...profileValidation, [e.target.name]: false });
      } else {
        setProfile({ ...profile, [e.target.name]: e.target.value });
        setProfileValidation({ ...profileValidation, [e.target.name]: false });
      }
    } else {
      setProfile({ ...profile, [e.target.name]: e.target.value });
      setProfileValidation({ ...profileValidation, [e.target.name]: true });
    }
  };

  const checkValidation = () => {
    let c_validation = { ...profileValidation };

    if (!profile.name) {
      c_validation = { ...c_validation, name: true };
    } else {
      if (validateName(profile.name)) {
        c_validation = { ...c_validation, valid_name: false };

        //setProfileValidation({ ...profileValidation, valid_name: false });
      } else {
        c_validation = { ...c_validation, valid_name: true };
        // setProfileValidation({ ...profileValidation, [e.target.name]: false });
      }
    }

    if (!profile.email) {
      c_validation = { ...c_validation, email: true };
    } else {
      if (validateEmail(profile.email)) {
        c_validation = { ...c_validation, valid_email: false };
        /// setProfileValidation({ ...profileValidation, valid_email: false });
      } else {
        c_validation = { ...c_validation, valid_email: true };
      }
    }
    setProfileValidation(c_validation);
    if (
      !c_validation.name &&
      !c_validation.valid_name &&
      !c_validation.email &&
      !c_validation.valid_email
    ) {
      return true;
    } else {
      return false;
    }
  };

  const getAddressStatus = () => {
    if (
      address?.address &&
      address?.state &&
      address?.city &&
      address?.pincode &&
      profile.name &&
      profile.email
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleAddressChangeEvent = (e) => {
    if (e.target.value) {
      if (e.target.name === "name") {
        if (validateName(e.target.value)) {
          setAddress({
            ...address,
            [e.target.name]: validateNameReplace(e.target.value),
          });
          setAddressValidation({
            ...addressValidation,
            [e.target.name]: false,
          });
        }
      } else if (e.target.name === "email") {
        setAddress({ ...address, [e.target.name]: e.target.value.trim() });
        setAddressValidation({ ...addressValidation, [e.target.name]: false });
      } else {
        setAddress({ ...address, [e.target.name]: e.target.value });
        setAddressValidation({ ...addressValidation, [e.target.name]: false });
      }
    } else {
      setAddress({ ...address, [e.target.name]: e.target.value });
      setAddressValidation({ ...addressValidation, [e.target.name]: true });
    }
  };

  const checkAddressValidation = () => {
    let c_validation = { ...addressValidation };

    //console.log(addressValidation, "addressValidation");
    if (!address?.address) {
      c_validation = { ...c_validation, address: true };
      // c_validation = { ...c_validation, valid_address: true };
    } else {
      c_validation = { ...c_validation, address: false };
    }

    if (!address?.state) {
      c_validation = { ...c_validation, state: true };
      // c_validation = { ...c_validation, valid_state: true };
    } else {
      c_validation = { ...c_validation, state: false };
    }

    if (!address?.city) {
      c_validation = { ...c_validation, city: true };
      // c_validation = { ...c_validation, valid_city: true };
    } else {
      c_validation = { ...c_validation, city: false };
    }

    if (!address?.pincode || address.pincode === undefined) {
      c_validation = { ...c_validation, pincode: true };
      //c_validation = { ...c_validation, valid_pincode: true };
    } else {
      c_validation = { ...c_validation, pincode: false };
      //c_validation = { ...c_validation, valid_pincode: false };
    }

    setAddressValidation(c_validation);
    if (
      !c_validation.address &&
      !c_validation.valid_address &&
      !c_validation.state &&
      !c_validation.valid_state &&
      !c_validation.city &&
      !c_validation.valid_city &&
      !c_validation.pincode
      //!c_validation.valid_pincode
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleProfileAddressForm = async () => {
    if (checkAddressValidation() && checkValidation()) {
      let ProfileData = { ...profile };

      ProfileData.id = user?.data?._id;
      ProfileData.zipCode = address.pincode;
      ProfileData.state = address.state;
      ProfileData.city = address.city;
      ProfileData.address = address.address;

      try {
        const result = await UpdateProfileApi(ProfileData);
        if (result.data.statusCode === 200) {
          toast.success("Profile Updated Sucessfully");
          setTimeout(function () {
            window.location.reload();
          }, 250);
        }
        //console.log(result, "result");
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleKeyPressEvent = (event) => {
    if (event.key === "Enter") {
      // handleSignUp();
    }
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const orderReset = async () => {
    try {
      const result = await removeFromCartAllApi();
    } catch (err) {
      toast.error(err?.data?.message);
    }
  };

  const open = async () => {
    // try {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    let CheckoutDetails = "";

    let SubId = "";
    try {
      setCheckoutLoading(true);
      let requestData = { cartId: cart?.data?.cardId };
      CheckoutDetails = await getCheckoutApi(requestData);
      // setOrderInfo(CheckoutDetails?.data?.responseData);
      // setLoading(false);
      if (CheckoutDetails?.data?.statusCode) setCheckoutLoading(false);
    } catch (err) {
      // setLoading(false);
      console.log(err);
      setCheckoutLoading(false);
    }

    // console.log(
    //   CheckoutDetails?.data?.responseData?.orderInfo,
    //   "CheckoutDetails"
    // );
    // return false;
    //   //console.log("cart?.data?", cart?.data);
    //   let requestData = { cartId: cart?.data?.cardId };
    //   const CheckoutDetails = await getCheckoutApi(requestData);
    //CheckoutDetails?.data?.responseData.orderInfo?.amount;
    // console.log(
    //   CheckoutDetails?.data?.responseData.orderInfo,
    //   "CheckoutDetails"
    // );
    // let discountAmount = 0;
    // if (promoCodeDetails && Object.keys(promoCodeDetails)?.length) {
    //   if (promoCodeDetails?.promoType == "percentage") {
    //     discountAmount = percentage(
    //       promoCodeDetails?.percentage,
    //       orderInfo?.orderInfo?.amount / 100
    //     );
    //   } else {
    //     discountAmount = promoCodeDetails?.discountAmount;
    //   }
    // }
    // let amount =
    //   parseFloat(orderInfo?.orderInfo?.amount) - parseFloat(discountAmount);

    console.log(
      CheckoutDetails?.data?.responseData?.orderInfo?.plan_id,
      "amount"
    );
    const options = {
      ...CheckoutDetails.data?.responseData?.orderInfo,
      //key: "rzp_test_2hFYTVjM8i6zhe",
      // plan_id: CheckoutDetails?.data?.responseData?.plan_id,
      // subscription_id: CheckoutDetails?.data?.responseData?.subscription_id,
      //currency: CheckoutDetails?.data?.responseData?.orderInfo?.currency
      // ? CheckoutDetails?.data?.responseData?.orderInfo?.currency
      // : "INR",
      ///amount: CheckoutDetails?.data?.responseData?.orderInfo?.amount / 100,
      // name: "LivenScience",
      // description: "Thankyou for your order",
      // image: "https://manuarora.in/logo.png",
      // // description: "Test Wallet Transaction",
      // // image: "http://localhost:1337/logo.png",
      //order_id: CheckoutDetails?.data?.responseData?.orderInfo?.plan_id,
      //entity: "subscription",

      handler: async function (response) {
        let subid = "";
        console.log(response, "response");
        let isSub = false;
        if (CheckoutDetails?.data?.responseData?.plan_id) {
          isSub = true;
          subid = CheckoutDetails?.data?.responseData?.subscription_id;
          //SubId = CheckoutDetails?.data?.responseData?.orderInfo?.id;
        }
        let RequestData;
        if (isSub) {
          RequestData = {
            ...response,
          };
        } else {
          RequestData = {
            ...response,
          };
        }
        try {
          const result = await OrderSuccessApi(RequestData);
          if (result.data.statusCode === 200) {
            toast.success("order sucessfully created");
            setShow(true);
            orderReset();
          }
        } catch (err) {
          toast.error(err?.data?.message);
        }

        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        name: user?.data?.name,
        email: user?.data?.email,
        contact: user?.data?.mobile,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on("payment.failed", async function (response) {
      try {
        const result = await OrdersFailedApi(response);
        //if (result?.data?.statusCode === 200) {
        //console.log(result?.data, "results");
        toast.error("Payment failed. Try again sometimes");
      } catch (err) {
        console.log(err, "erro");
        toast.error(err?.data?.message);
      }
      //}
      // console.log(response, "response");
      // console.log(response.error.code);
      // console.log(response.error.description);
      // console.log(response.error.source);
      // console.log(response.error.step);
      // console.log(response.error.reason);
      // console.log(response.error.metadata.order_id);
      // console.log(response.error.metadata.payment_id);
    });
    //      setTotalAmount(CheckoutDetails?.data?.responseData.orderInfo?.amount);
    //   setCurrency(CheckoutDetails?.data?.responseData.orderInfo?.currency);
    //   setOrderDetails(CheckoutDetails?.data?.responseData.orderInfo);
    // } catch (err) {}
  };
  const handleCopy = (copytext) => {
    // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(copytext);

    toast.success("Copy the promo code");
  };
  const applypromocode = async (e) => {
    e.preventDefault();
    if (promoCodeValue) {
      setPromoError(false);
    } else {
      setPromoError(true);
      return false;
    }
    // console.log(Object.keys(promoCodeDetails).length, "promoCodeDetails");
    //if (Object.keys(promoCodeDetails)?.length == 0) {
    //if (promoCodeList?.find((obj) => obj?.promo === promoCodeValue)) {
    try {
      var req = { promoCode: promoCodeValue };
      const result = await applypromocodeApi(req, cart?.data?.cardId);

      //console.log(result?.data?.responseData.promoDetails);
      if (result.data.statusCode === 200) {
        toast.success("Promocode Applied Sucessfully");
        setPromoCodeDetails(result?.data?.responseData.promoDetails);
        dispatch(get_cart_list_thunk());
        refreshData();
        setCouponShow(false);
        //checkoutDetails();
      }
      //console.log(result, "result");
    } catch (err) {
      toast.error(err?.data?.message);
    }
    // } else {
    //   toast.error("Invalid Promo Code ");
    // }
    // } else {
    //   toast.error("Promo Code already applied ");
    // }
  };

  const removePromoCode = async () => {
    // console.log(cart?.data, "cart?.data?");
    if (promoCodeDetails && Object.keys(promoCodeDetails)?.length) {
      try {
        const result = await removepromocodeApi(cart?.data?.cardId);

        // console.log(result?.data?.responseData.promoDetails);
        if (result.data.statusCode === 200) {
          toast.success("Promocode Removed Sucessfully");
          dispatch(get_cart_list_thunk());
          setPromoCodeDetails({});
          setCouponShow(false);
          refreshData();
          //checkoutDetails();
        }
        //console.log(result, "result");
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error("Invalid Promo Code ");
    }
  };

  return (
    <>
      <section className="checkout customer-section">
        <div className="step-by pr-4 pl-4">
          <h3 className="title title-simple title-step active">
            <a href="#">Checkout</a>
          </h3>
        </div>
        <div className="container mt-7 mb-2">
          <div className="row cms-page-content">
            <div className="col-lg-7 col-md-7 pr-lg-4">
              <div className="card_inner">
                {/* <div class="row pt-4">
                    <div class="col-sm-8">
                      <h1 class="">Billing Address</h1>
                      <hr></hr>
                    </div>
                    <div class="col-sm-4 text-right">
                      <img
                        src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png"
                        class="address_edit_icon"
                      ></img>
                    </div>
                  </div> */}

                {/* New Address Section Start */}
                {cart?.data?.cart.length > 0 && (
                  <>
                    <div className="row">
                      <div className="col-sm-12">
                        <h1 className="address_user">Shipping Address</h1>
                        <hr></hr>
                        <h1 className="address_user">User</h1>
                        <ul className="address_list">
                          <li>{user?.data?.address}</li>
                          <li>
                            <i className="fa fa-phone" aria-hidden="true"></i> +
                            {user?.data?.mobile}
                          </li>
                          <li>
                            <i
                              className="fa fa-envelope"
                              aria-hidden="true"></i>{" "}
                            {user?.data?.email}
                          </li>
                          <li>
                            <button
                              class="btn btn-dark btn-sm"
                              href="#"
                              onClick={() =>
                                setShowAddressSection(!showAddressSection)
                              }>
                              Changes
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div
                      className={`row ${
                        showAddressSection
                          ? "show-address-section"
                          : "hide-address-section"
                      }`}>
                      <div className="col-sm-12">
                        <h1 className="address_user">Edit Address</h1>
                        <hr></hr>
                        <Row>
                          <Col sm={4}>
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1">
                                {/* <Form.Label>Name</Form.Label> */}
                                {/* <Form.Control
                                type="text"
                                placeholder="Name"
                                value={user?.data?.name}
                              /> */}
                                <InputText
                                  title={"Name"}
                                  name="name"
                                  placeholder="Enter Name"
                                  value={profile.name}
                                  required={profileValidation.name}
                                  onKeyPress={handleKeyPressEvent}
                                  onChange={handleChangeEvent}
                                />
                                {profileValidation.valid_name && (
                                  <p className="error_text">
                                    Please enter a valid name
                                  </p>
                                )}
                              </Form.Group>
                            </Form>
                          </Col>
                          <Col sm={4}>
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1">
                                <InputText
                                  title={"Email"}
                                  name="email"
                                  placeholder="Enter Email"
                                  value={profile.email}
                                  required={profileValidation.email}
                                  onKeyPress={handleKeyPressEvent}
                                  onChange={handleChangeEvent}
                                />
                                {profileValidation.valid_email && (
                                  <p className="error_text">
                                    Please enter a valid email address
                                  </p>
                                )}
                              </Form.Group>
                            </Form>
                          </Col>
                          <Col sm={4}>
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1">
                                <InputPhone
                                  title={"Mobile"}
                                  defaultCountry={"+91"}
                                  value={user?.data?.mobile}
                                  disabled={true}

                                  // required={lvalidation.phone_no}
                                  //onChange={(e, c_code) => {
                                  // setLogin({
                                  //     ...login,
                                  //     mobile: e,
                                  //     phone_code: c_code?.countryCode?.toUpperCase(),
                                  // });
                                  // if (e) {
                                  //     setValidation({ ...lvalidation, phone_no: false });
                                  // } else {
                                  //     setValidation({ ...lvalidation, phone_no: true });
                                  // }
                                  // }}
                                />
                                {/* {lvalidation.valid_phone_no && (
                                <p className="error_text">
                                Please enter a valid mobile number
                                </p>
                            )} */}
                              </Form.Group>
                            </Form>
                          </Col>
                        </Row>

                        <Row>
                          <Col className="py-4">
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1 ">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                  as="textarea"
                                  name="address"
                                  value={address.address}
                                  rows={3}
                                  onChange={handleAddressChangeEvent}
                                />
                                {addressValidation.address && (
                                  <p className="error_text">
                                    Please Enter Address
                                  </p>
                                )}
                              </Form.Group>
                            </Form>
                          </Col>
                        </Row>

                        <Row>
                          <Col>
                            {" "}
                            <label className="mb-3 font-weight-bold">
                              State *
                            </label>
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
                                  stateList?.find(
                                    (o) => o._id === address?.state
                                  )?.name,
                                value: address?.state,
                              }}
                              onChange={async (data) => {
                                //if (data?.value) {

                                const CityListData = await getCitiesApi(
                                  data?.value
                                );
                                setCityList(
                                  CityListData?.data?.responseData?.cities
                                );
                                setAddress({ ...address, state: data?.value });
                                //}
                              }}
                            />
                            {addressValidation.state && (
                              <p className="error_text">Please select state</p>
                            )}
                          </Col>
                          <Col>
                            {" "}
                            <label className="mb-3 font-weight-bold">
                              City *
                            </label>
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
                                  cityList?.find((o) => o._id === address?.city)
                                    ?.name,
                                value: address?.city,
                              }}
                              onChange={async (data) => {
                                //if (data?.value) {

                                // const CityListData = await getCitiesApi(
                                //   data?.value
                                // );
                                // setCityList(
                                //   CityListData?.data?.responseData?.cities
                                // );
                                setAddress({ ...address, city: data?.value });
                                //}
                              }}
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
                            {addressValidation.city && (
                              <p className="error_text">Please select City</p>
                            )}
                          </Col>
                          <Col>
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1">
                                {/* <Form.Label>Pincode</Form.Label>
                              <Form.Control type="text" placeholder="name" /> */}
                                <InputText
                                  title={"Pincode"}
                                  type="number"
                                  name="pincode"
                                  placeholder="Enter Pin code"
                                  value={address?.pincode}
                                  required={addressValidation?.pincode}
                                  onChange={handleAddressChangeEvent}
                                />
                              </Form.Group>
                            </Form>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="py-4">
                            <button
                              className="btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4"
                              onClick={() => handleProfileAddressForm()}>
                              SAVE
                            </button>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <p className="high">
                      {" "}
                      {cart?.data?.cartSetting?.checkoutContent1}
                      {/* <span className="text-bold">Great Job! </span>
                      You're Taking First step towards a better you! */}
                    </p>
                    <p className="high checkout-timer">
                      {cart?.data?.cartSetting?.checkoutContent2}
                      {/* <div> */}
                      {minutes === 0 && seconds === 0 ? null : (
                        <>
                          {" "}
                          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                        </>
                      )}
                      {/* </div>{" "} */}
                    </p>
                    <p className="high">Act now before supplies run out </p>
                  </>
                )}
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <ul className="address_list">
                    <li>
                      <strong>
                        <i class="fa fa-truck" aria-hidden="true"></i> Expected
                        Date :{" "}
                        {dayjs(
                          new Date(
                            new Date().getTime() + 3 * 24 * 60 * 60 * 1000
                          )
                        ).format("DD MMM,YYYY")}
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <h1 className="address_user">Your Orders</h1>
                  <hr></hr>
                  {cart?.data?.cartProductDetails?.length > 0 ? (
                    <>
                      <table className="shop-table cart-table">
                        <thead>
                          <tr>
                            <th>
                              <span>Product</span>
                            </th>
                            <th>Name</th>
                            <th>
                              <span>Price</span>
                            </th>
                            <th>
                              <span>quantity</span>
                            </th>
                            <th>Subtotal</th>
                            <th>Remove</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart?.data?.cartProductDetails?.map(
                            (item, productkey) => {
                              return (
                                <tr key={productkey}>
                                  <td className="product-thumbnail">
                                    <figure>
                                      <Link to={`/product/${item?._id}`}>
                                        <img
                                          src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${item?.photos[0]}`}
                                          width="100"
                                          height="100"
                                          alt="product"
                                        />
                                      </Link>
                                    </figure>
                                  </td>
                                  <td className="product-name">
                                    <div className="product-name-section">
                                      <a href="product-simple.html">
                                        {item?.name}
                                      </a>
                                    </div>
                                  </td>
                                  <td className="product-subtotal">
                                    <span className="amount">
                                      {currencyFormat(item?.saleAmount, "INR")}
                                    </span>
                                  </td>
                                  <td className="product-quantity">
                                    <span className="amount">{item?.qty}</span>
                                  </td>
                                  <td className="product-price">
                                    <span className="amount">
                                      {currencyFormat(
                                        item?.qty * item?.saleAmount,
                                        "INR"
                                      )}
                                    </span>
                                  </td>
                                  <td className="product-close">
                                    <a
                                      //href="cart.html#"
                                      className="product-remove"
                                      title="Remove this product"
                                      onClick={() =>
                                        dispatch(
                                          remove_from_cart_thunk(
                                            item?.productId
                                          )
                                        )
                                      }>
                                      <MdRemoveCircle
                                        size={30}
                                        style={{ cursor: "pointer" }}
                                      />
                                    </a>
                                  </td>
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                      </table>
                      {isFreeProduct && (
                        <div className="pt-5">
                          <p className="p-2 border-header">
                            {cart?.data?.cartSetting?.checkoutContent3 ? (
                              cart?.data?.cartSetting?.checkoutContent3
                            ) : (
                              <>
                                After Your trial period has expired you will be
                                enrolled in our membership program for{" "}
                                {currencyFormat("000", "INR")} per month. You
                                can cancel anytime by calling +91 78719 88988
                              </>
                            )}
                          </p>
                        </div>
                      )}
                    </>
                  ) : (
                    "No Items Found"
                  )}
                </div>
              </div>

              {cart?.data?.cart?.length > 0 && (
                <>
                  <div className="row pt-4">
                    <div className="col-sm-12">
                      <h1 className="address_user">Payments Methods</h1>
                      <hr></hr>
                      <Form>
                        {["radio"].map((type) => (
                          <div key={`default-${type}`} className="mb-3">
                            <Form.Check
                              type={type}
                              id={`default-${type}`}
                              name="payment_method"
                              checked
                              label={`Razopay Secure (UPI, Cards,Wallets, Netbanking)`}
                            />
                            <Form.Check
                              type={type}
                              id={`default-${type}`}
                              name="payment_method"
                              label={`Cash on Delivery (COD)`}
                              disabled
                            />
                          </div>
                        ))}
                      </Form>
                    </div>
                  </div>
                </>
              )}

              {/* New Address Section End */}

              {/* <div class="row">
                    <div class="col-sm-4">
                      <p>Name</p>
                    </div>
                    <div class="col-sm-8">
                      <p>{user?.data?.name}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">
                      <p>Email</p>
                    </div>
                    <div class="col-sm-8">
                      <p>{user?.data?.email}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">
                      <p>Mobile Number</p>
                    </div>
                    <div class="col-sm-8">
                      <p>{user?.data?.mobile}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">
                      <p>Address</p>
                    </div>
                    <div class="col-sm-8">
                      <p>
                        {address?.address}
                        <br></br>
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">
                      <p>State</p>
                    </div>
                    <div class="col-sm-8">
                      <p>
                        {stateList?.length > 0 &&
                          stateList?.find((o) => o._id === address?.state)
                            ?.name}
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">
                      <p>City</p>
                    </div>
                    <div class="col-sm-8">
                      <p>
                        {cityList?.length > 0 &&
                          cityList?.find((o) => o._id === address?.city)?.name}
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">
                      <p>pincode</p>
                    </div>
                    <div class="col-sm-8">
                      <p>{address?.pincode ? address?.pincode : "-"}</p>
                    </div>
                  </div> */}
            </div>

            <div className="col-md-5 col-lg-5">
              {" "}
              {!loading ? (
                <div className="panel panel-danger pull-up">
                  <div className="panel-heading">
                    <h5 className="text-left">ORDER SUMMARY</h5>
                  </div>
                  <h5>Product</h5>
                  <ul className="list-group list-group-flush">
                    {cart?.data?.cartProductDetails?.length > 0
                      ? cart?.data?.cartProductDetails?.map(
                          (item, productkey) => {
                            return (
                              <li className="list-group-item" key={productkey}>
                                {item?.name} {"x"}
                                {item?.qty}
                                <span className="plan_right_section">
                                  {currencyFormat(
                                    item?.qty * item?.saleAmount,
                                    "INR"
                                  )}
                                </span>
                              </li>
                            );
                          }
                        )
                      : "No Items Found"}

                    {cart?.data?.cartProductDetails.length > 0 || isFreeProduct
                      ? parseFloat(
                          cart?.data?.cartSetting?.deliveryMinimumAmount
                        ) >= parseFloat(totalAmount) && (
                          <li className="list-group-item">
                            Delivery Charges{" "}
                            <span className="plan_right_section dicount_span">
                              {currencyFormat(
                                cart?.data?.cartSetting?.deliveryCharge,
                                "INR"
                              )}
                            </span>
                          </li>
                        )
                      : ""}
                    {promoCodeDetails &&
                      Object.keys(promoCodeDetails)?.length > 0 && (
                        <li className="list-group-item">
                          Promocode{" "}
                          {promoCodeDetails?.promoType == "percentage"
                            ? `(${promoCodeDetails?.percentage}%)`
                            : `(${currencyFormat(
                                promoCodeDetails?.discountAmount,
                                "INR"
                              )})`}
                          <span className="plan_right_section dicount_span">
                            -
                            {promoCodeDetails?.promoType == "percentage"
                              ? currencyFormat(
                                  percentage(
                                    promoCodeDetails?.percentage,
                                    totalPromoAmount
                                  ),
                                  "INR"
                                )
                              : currencyFormat(
                                  promoCodeDetails?.discountAmount,
                                  "INR"
                                )}
                            <CiCircleRemove
                              className="remove-icon"
                              width={50}
                              height={50}
                              onClick={() => removePromoCode()}
                            />
                          </span>
                        </li>
                      )}
                  </ul>
                  <div className="panel-footer">
                    <ul className="list-group list-group-flush">
                      {cart?.data?.cart.length > 0 && (
                        <li className="list-group-item">
                          <h5>
                            Total Amount
                            <span className="plan_right_section">
                              {currencyFormat(totalAmount, "INR")}
                            </span>
                          </h5>
                        </li>
                      )}
                    </ul>
                  </div>
                  <Form>
                    <div className="row">
                      {/* <div class="col-sm-8 mt-2">
                        <Form.Label>Apply Coupon</Form.Label>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control type="text" placeholder="name" />
                        </Form.Group>
                      </div> */}
                      {cart?.data?.cart.length > 0 && (
                        <div className="cart-actions-right">
                          <div
                            className="btn btn-dark btn-md btn-rounded btn-icon-left mt-4 mb-4"
                            onClick={() => {
                              setCouponShow(true);
                              setPromoError(false);
                              setPromoCodeValue("");
                            }}>
                            Apply Coupons
                          </div>
                        </div>
                      )}
                    </div>
                    {!loading ? (
                      <>
                        {(() => {
                          if (cart?.data?.cart?.length > 0) {
                            return (
                              <>
                                {user?.data?.address &&
                                user?.data?.state &&
                                user?.data?.city &&
                                user?.data?.zipCode &&
                                user?.data?.name ? (
                                  //user?.data?.email ?
                                  <Link // to="#"
                                    onClick={() => open()}
                                    disabled={checkoutLoading}
                                    className="btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4">
                                    {!checkoutLoading ? (
                                      <>
                                        Continue to pay{" "}
                                        <i className="d-icon-arrow-right"></i>
                                      </>
                                    ) : (
                                      "Loading..."
                                    )}
                                  </Link>
                                ) : (
                                  <Link
                                    // to="#"
                                    onClick={(e) => UpdateAddress(e)}
                                    className="btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4">
                                    Continue to pay{" "}
                                    <i className="d-icon-arrow-right"></i>
                                  </Link>
                                )}
                              </>
                            );
                          } else {
                            return (
                              <Link
                                to="/"
                                className="btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4">
                                Back
                              </Link>
                            );
                          }
                        })()}
                        {/* <a
                      class="btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4"
                      href="#"
                    >
                      Apply Coupons <i class="d-icon-heart"></i>
                    </a> */}
                      </>
                    ) : (
                      "Loading please wait"
                    )}
                  </Form>
                </div>
              ) : (
                "Loading please wait"
              )}
            </div>
            <div className="d-flex justify-content-around">
              {footerDetails?.length > 0 &&
                footerDetails?.map((obj, index) => {
                  if (obj.url == "privacy") {
                    return <Link to={`/cms/${obj?.url}`}>{obj?.title}</Link>;
                  }
                })}
              {footerDetails?.length > 0 &&
                footerDetails?.map((obj, index) => {
                  if (obj.url == "terms") {
                    return <Link to={`/cms/${obj?.url}`}>{obj?.title}</Link>;
                  }
                })}
              {footerDetails?.length > 0 &&
                footerDetails?.map((obj, index) => {
                  if (obj.url == "disclaimer") {
                    return <Link to={`/cms/${obj?.url}`}>{obj?.title}</Link>;
                  }
                })}
            </div>
          </div>

          {/*  Coupon Add Start*/}

          {/*  Coupon Add End*/}

          {/* Address Add Start */}
        </div>
      </section>

      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Order Placed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="sucss-cont">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/success-green-check-mark-icon.png"
              className="sucess_img"></img>
            <p>Thanks for you ordered product.</p>
          </div>
        </Modal.Body>
        <Modal.Footer className="mt-4 mb-4">
          <Button
            variant="primary"
            onClick={() => history.push("/accounts?defaultkey=first")}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={couponShow}
        onHide={() => {
          setCouponShow(!couponShow);
          setPromoError(false);
        }}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Apply Promocode</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="cart-card">
            <div className="row">
              <div className="col-sm-12 coupon_card">
                <h1 className="">Promocode</h1>
                <Form>
                  <div className="row">
                    <div className="col-sm-4">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1">
                        <Form.Control
                          type="text"
                          placeholder="name"
                          onChange={(e) => setPromoCodeValue(e?.target?.value)}
                        />

                        {promoError && (
                          <p className="error_text">Enter valid Promocode</p>
                        )}
                      </Form.Group>
                    </div>
                    <div className="col-sm-3">
                      <button
                        className="btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4"
                        onClick={(e) => applypromocode(e)}>
                        Apply Promocode <i className="d-icon-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </Form>

                <div className="row">
                  {(() => {
                    if (promoCodeList?.length > 0) {
                      return (
                        <>
                          {promoCodeList?.map((promocodes, fkey) => {
                            var today = new Date();

                            if (
                              promocodes?.status == "active" &&
                              new Date(
                                promocodes?.expiryDate
                              )?.toDateString() >= today.toISOString()
                            ) {
                              return (
                                <div className="col-sm-3">
                                  <div className="coupon-card">
                                    {promocodes?.promoType == "percentage" ? (
                                      <h3>
                                        {promocodes?.percentage}% flat offer
                                      </h3>
                                    ) : (
                                      <h3>
                                        {currencyFormat(
                                          promocodes?.discountAmount,
                                          "INR"
                                        )}{" "}
                                        flat offer
                                      </h3>
                                    )}
                                    <di className="coupon-row">
                                      <span id="cpnCode">
                                        {promocodes?.promo}
                                      </span>
                                      <span
                                        id="cpnBtn"
                                        onClick={() =>
                                          handleCopy(promocodes?.promo)
                                        }>
                                        Copy Code
                                      </span>
                                    </di>
                                    <p>
                                      Valid Till:
                                      {dayjs(promocodes?.expiryDate).format(
                                        "DD MMM,YYYY"
                                      )}{" "}
                                    </p>
                                    <div className="circle1"></div>
                                    <div className="circle2"></div>
                                  </div>
                                </div>
                              );
                            }
                          })}
                        </>
                      );
                    }
                  })()}
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="mt-4 mb-4">
          <Button
            variant="primary"
            onClick={() => {
              setCouponShow(false);
              setPromoError(false);
            }}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={() => history.push("/accounts")}>
            Ok
          </Button> */}
        </Modal.Footer>
      </Modal>

      {/* 27-Novermber Start*/}

      {/* <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="product_show_details_section">
            <div class="row">
              <div class="col-sm-6">
                  <div class="product_show_details"><img src="https://d-themes.com/html/riode/images/product/product-2-1-580x652.jpg" className=""></img></div>
              </div>
              <div class="col-sm-6 right_des_section">
                  <div class="pin-wrapper">
                    <div class="product-details sticky-sidebar">
                        <h1 class="product-name">Comfortable Brown Scarf</h1>                      
                        <div class="product-price">$47.34</div>
                        <p class="product-short-desc">Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.</p>
                        <div class="product-form product-qty">
                          <div class="product-form-group">
                            <button class="btn-product btn-cart text-normal ls-normal font-weight-semi-bold"><i class="d-icon-bag"></i>Add to
                              Cart</button>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="mt-4 mb-4">
          <Button variant="primary" onClick={() => history.push("/accounts")}>Ok</Button>
        </Modal.Footer>
      </Modal> */}

      {/* 27-Novermber End*/}
    </>
  );
};

export default CheckoutSection;

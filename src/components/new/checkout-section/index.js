import React, { useState, useEffect } from "react";
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
import { currencyFormat } from "../../../utils/common";
import {
  getCheckoutApi,
  OrderSuccessApi,
  OrdersFailedApi,
  removeFromCartAllApi,
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
// import { toast } from "react-toastify";

const CheckoutSection = ({ orderInfo, loading }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, cart } = useSelector((state) => state);
  const [show, setShow] = useState(false);

  const [stateList, setStateList] = useState({});
  const [cityList, setCityList] = useState({});

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
    pincode: user?.data?.pincode,
  });

  const [addressValidation, setAddressValidation] = useState({
    address: false,
    valid_address: false,
    city: false,
    valid_city: false,
    state: false,
    valid_state: false,
    pincode: true,
    valid_pincode: false,
  });

  // const { orderDetails, setOrderDetails } = useState("");
  // const { totalAmount, setTotalAmount } = useState(0);
  // const { currency, setCurrency } = useState("INR");

  const checkDetails = async () => {
    let requestData = { cartId: cart?.data?.cardId };
    /// const CheckoutDetails = await getCheckoutApi(requestData);
    //   console.log(CheckoutDetails?.data?.responseData?.orderInfo?.amount);
    //   setTotalAmount(1000);
    //   setCurrency(CheckoutDetails?.data?.responseData?.orderInfo?.currency);
  };
  useEffect(async () => {
    dispatch(get_cart_list_thunk());
    checkDetails();
    getStatesList();
    setAddress({ ...address, state: user?.data?.state?._id });

    getCityUser();
    // console.log(response?.data?.responseData?.blogs?.docs, "response");
  }, []);

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

    console.log(addressValidation, "addressValidation");
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
      c_validation = { ...c_validation, valid_pincode: true };
    } else {
      c_validation = { ...c_validation, pincode: false };
      c_validation = { ...c_validation, valid_pincode: false };
    }

    console.log(c_validation, "c_validation");

    setAddressValidation(c_validation);
    if (
      !c_validation.address &&
      !c_validation.valid_address &&
      !c_validation.state &&
      !c_validation.valid_state &&
      !c_validation.city &&
      !c_validation.valid_city &&
      !c_validation.pincode &&
      !c_validation.valid_pincode
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleProfileAddressForm = async () => {
    if (checkAddressValidation() && checkValidation()) {
      let ProfileData = { ...profile, ...address };

      ProfileData.id = user?.data?._id;

      try {
        const result = await UpdateProfileApi(ProfileData);
        if (result.data.statusCode === 200) {
          toast.success("Profile Updated Sucessfully");
        }
        console.log(result, "result");
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
    //   //console.log("cart?.data?", cart?.data);
    //   let requestData = { cartId: cart?.data?.cardId };
    //   const CheckoutDetails = await getCheckoutApi(requestData);
    //CheckoutDetails?.data?.responseData.orderInfo?.amount;
    // console.log(
    //   CheckoutDetails?.data?.responseData.orderInfo,
    //   "CheckoutDetails"
    // );
    const options = {
      key: "rzp_test_2hFYTVjM8i6zhe",
      currency: orderInfo?.orderInfo?.currency,
      amount: orderInfo?.orderInfo?.amount,
      name: "LivenScience",
      description: "Thankyou for your order",
      image: "https://manuarora.in/logo.png",
      // description: "Test Wallet Transaction",
      // image: "http://localhost:1337/logo.png",
      order_id: orderInfo?.orderInfo?.id,
      handler: async function (response) {
        console.log(response, "response");

        let RequestData = {
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        };
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
        console.log(result?.data, "results");
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

  return (
    <>
      <section className="checkout customer-section">
        <div className="step-by pr-4 pl-4">
          <h3 className="title title-simple title-step active">
            <a href="#">Checkout</a>
          </h3>
        </div>
        <div className="container mt-7 mb-2">
          <div className="row">
            <div className="col-lg-8 col-md-8 pr-lg-4">
              {cart?.data?.cart?.length > 0 ? (
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
                      {/* <th>
                        <span>quantity</span>
                      </th>
                      <th>Subtotal</th> */}
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart?.data?.cart?.map((item, productkey) => {
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
                              <a href="product-simple.html">{item?.name}</a>
                            </div>
                          </td>
                          <td className="product-subtotal">
                            <span className="amount">
                              {currencyFormat(item?.saleAmount, "INR")}
                            </span>
                          </td>
                          {/* <td className="product-quantity">
                            <div className="input-group">
                              <button className="quantity-minus d-icon-minus"></button>
                              <input
                                className="quantity form-control"
                                type="number"
                                min="1"
                                max="1000000"
                              />
                              <button className="quantity-plus d-icon-plus"></button>
                            </div>
                          </td>
                          <td className="product-price">
                            <span className="amount">$129.99</span>
                          </td> */}
                          <td className="product-close">
                            <a
                              //href="cart.html#"
                              className="product-remove"
                              title="Remove this product"
                              onClick={() =>
                                dispatch(remove_from_cart_thunk(item?._id))
                              }
                            >
                              <i className="fas fa-times"></i>
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                "No Items Found"
              )}
              {!loading ? (
                <>
                  <div className="cart-actions-right mb-6 pt-4">
                    {(() => {
                      if (cart?.data?.cart?.length > 0) {
                        return (
                          <>
                            {user?.data?.address &&
                            user?.data?.state &&
                            user?.data?.city &&
                            // user?.data?.pincode &&
                            user?.data?.name &&
                            user?.data?.email ? (
                              <Link // to="#"
                                onClick={() => open()}
                                className="btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4"
                              >
                                Continue to pay{" "}
                                <i className="d-icon-arrow-right"></i>
                              </Link>
                            ) : (
                              <Link
                                // to="#"
                                onClick={(e) => UpdateAddress(e)}
                                className="btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4"
                              >
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
                            className="btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4"
                          >
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
                  </div>
                </>
              ) : (
                "Loading please wait"
              )}
            </div>
            <div className="col-md-4">
              {" "}
              {!loading ? (
                <div className="panel panel-danger pull-up">
                  <div className="panel-heading">
                    <h5 className="text-left">YOUR ORDER</h5>
                  </div>
                  <h5>Product</h5>
                  <ul className="list-group list-group-flush">
                    {cart?.data?.cart.length > 0
                      ? cart?.data?.cart?.map((item, productkey) => {
                          return (
                            <li className="list-group-item" key={productkey}>
                              {item?.name} {"x 1"}
                              <span className="plan_right_section">
                                {currencyFormat(item?.saleAmount, "INR")}
                              </span>
                            </li>
                          );
                        })
                      : "No Items Found"}

                    {cart?.data?.cart.length > 0 && (
                      <li className="list-group-item">
                        Delivery Charges{" "}
                        <span className="plan_right_section dicount_span">
                          {currencyFormat(orderInfo?.deliveryCharge, "INR")}
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
                              {currencyFormat(
                                orderInfo?.orderInfo?.amount / 100,
                                "INR"
                              )}
                            </span>
                          </h5>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              ) : (
                "Loading please wait"
              )}
            </div>
          </div>

          {/*  Coupon Add Start*/}

          <div className="cart-card">
            <div class="row">
              <div class="col-sm-12 coupon_card">
                <h1 class="">Apply Coupons</h1>
                <Form>
                  <div class="row">
                    <div class="col-sm-4">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control type="text" placeholder="name" />
                      </Form.Group>
                    </div>
                    <div class="col-sm-3">
                      <button
                        class="btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4"
                        href="#"
                      >
                        Apply Coupons <i class="d-icon-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </Form>

                <div class="row">
                  <div class="col-sm-3">
                    <div class="coupon-card">
                      <h3>20% flat offer</h3>
                      <di class="coupon-row">
                        <span id="cpnCode">STEALDEAL20</span>
                        <span id="cpnBtn">Copy Code</span>
                      </di>
                      <p>Valid Till: 20Dec, 2021</p>
                      <div class="circle1"></div>
                      <div class="circle2"></div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="coupon-card">
                      <h3>20% flat offer</h3>
                      <di class="coupon-row">
                        <span id="cpnCode">STEALDEAL20</span>
                        <span id="cpnBtn">Copy Code</span>
                      </di>
                      <p>Valid Till: 20Dec, 2021</p>
                      <div class="circle1"></div>
                      <div class="circle2"></div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="coupon-card">
                      <h3>20% flat offer</h3>
                      <di class="coupon-row">
                        <span id="cpnCode">STEALDEAL20</span>
                        <span id="cpnBtn">Copy Code</span>
                      </di>
                      <p>Valid Till: 20Dec, 2021</p>
                      <div class="circle1"></div>
                      <div class="circle2"></div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="coupon-card">
                      <h3>20% flat offer</h3>
                      <di class="coupon-row">
                        <span id="cpnCode">STEALDEAL20</span>
                        <span id="cpnBtn">Copy Code</span>
                      </di>
                      <p>Valid Till: 20Dec, 2021</p>
                      <div class="circle1"></div>
                      <div class="circle2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  Coupon Add End*/}

          {/* Address Add Start */}

          <div className="cart-card">
            <div className="row">
              <div className="col-sm-6">
                <h1 class="">Billing Address</h1>
                <Row>
                  <Col sm={4}>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
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
                        controlId="exampleForm.ControlInput1"
                      >
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
                        controlId="exampleForm.ControlInput1"
                      >
                        <InputPhone
                          title={"Mobile"}
                          defaultCountry={"+91"}
                          value={user?.data?.mobile}

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
                        controlId="exampleForm.ControlTextarea1 "
                      >
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="address"
                          value={address.address}
                          rows={3}
                          onChange={handleAddressChangeEvent}
                        />
                        {addressValidation.address && (
                          <p className="error_text">Please Enter Address</p>
                        )}
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {" "}
                    <label className="mb-3 font-weight-bold">State *</label>
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
                          stateList?.find((o) => o._id === address?.state)
                            ?.name,
                        value: address?.state,
                      }}
                      onChange={async (data) => {
                        //if (data?.value) {

                        const CityListData = await getCitiesApi(data?.value);
                        setCityList(CityListData?.data?.responseData?.cities);
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
                    <label className="mb-3 font-weight-bold">City *</label>
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
                          cityList?.find((o) => o._id === address?.city)?.name,
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
                        controlId="exampleForm.ControlInput1"
                      >
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
                      // type="submit"
                      class="btn-product btn-cart wid_200"
                      onClick={() => handleProfileAddressForm()}
                    >
                      SAVE
                    </button>
                  </Col>
                </Row>
              </div>

              <div className="col-sm-6">
                <div class="card_inner">
                  <div class="row pt-4">
                    <div class="col-sm-6">
                      <h1 class="">Billing Address</h1>
                    </div>
                    <div class="col-sm-6 text-right">
                      <img
                        src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png"
                        class="address_edit_icon"
                      ></img>
                    </div>
                  </div>
                  <div class="row">
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Address Add End */}
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
              className="sucess_img"
            ></img>
            <p>Thanks for you ordered product.</p>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th class="wid_300">Product</th>
                  <th>Description</th>
                  <th>Qty</th>
                  <th>Gross Amount Discount</th>
                  <th>Taxable</th>
                  <th>Value</th>
                  <th>IGST Total</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Ns zone Heavy bass earphone with mic and volume control
                    buttons 3.5mm White 1 | aplearphone-we | Not eligible for
                    return | IMEI/SrNo:HS
                  </td>
                  <td>HSN: 8518 | IGST: 18%</td>
                  <td>1</td>
                  <td>60.00</td>
                  <td>-10.00</td>
                  <td>42.0</td>
                  <td>7.0</td>
                  <td>50.0</td>
                </tr>
                <tr>
                  <td>
                    Ns zone Heavy bass earphone with mic and volume control
                    buttons 3.5mm White 1 | aplearphone-we | Not eligible for
                    return | IMEI/SrNo:HS
                  </td>
                  <td>HSN: 8518 | IGST: 18%</td>
                  <td>1</td>
                  <td>60.00</td>
                  <td>-10.00</td>
                  <td>42.0</td>
                  <td>7.0</td>
                  <td>50.0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer className="mt-4 mb-4">
          <Button variant="primary" onClick={() => history.push("/accounts")}>
            Ok
          </Button>
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

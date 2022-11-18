import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { remove_from_cart_thunk } from "../../../redux/thunk/user_cart_thunk";
import "./style.scss";
import { currencyFormat } from "../../../utils/common";
import {
  getCheckoutApi,
  OrderSuccessApi,
  OrdersFailedApi,
} from "../../../api/base-methods";
import { toast } from "react-toastify";
import { checkoutApi } from "../../../api/methods";

const CheckoutSection = ({ orderInfo }) => {
  const dispatch = useDispatch();
  const { user, cart } = useSelector((state) => state);
  console.log(user?.data, "user");
  const { orderDetails, setOrderDetails } = useState("");
  const { totalAmount, setTotalAmount } = useState(0);
  const { currency, setCurrency } = useState("INR");

  const checkDetails = async () => {
    let requestData = { cartId: cart?.data?.cardId };
    const CheckoutDetails = await getCheckoutApi(requestData);
    //   console.log(CheckoutDetails?.data?.responseData?.orderInfo?.amount);
    //   setTotalAmount(1000);
    //   setCurrency(CheckoutDetails?.data?.responseData?.orderInfo?.currency);
  };
  useEffect(async () => {
    checkDetails();
    // console.log(response?.data?.responseData?.blogs?.docs, "response");
  }, []);

  const open = async () => {
    // try {
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
      description: "Test Wallet Transaction",
      image: "http://localhost:1337/logo.png",
      order_id: orderInfo?.orderInfo?.order,
      handler: async function (response) {
        console.log(response, "response");

        let RequestData = {
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        };

        const result = await OrderSuccessApi(RequestData);
        if (result.data.statusCode === 200) {
          toast.success("order sucessfully created");
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

    paymentObject.on("payment.failed", function (response) {
      console.log(response, "response");
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
    });
    //   setTotalAmount(CheckoutDetails?.data?.responseData.orderInfo?.amount);
    //   setCurrency(CheckoutDetails?.data?.responseData.orderInfo?.currency);
    //   setOrderDetails(CheckoutDetails?.data?.responseData.orderInfo);
    // } catch (err) {}
  };;

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  return (
    <>
      <section className="checkout customer-section">
        <div className="step-by pr-4 pl-4">
          <h3 className="title title-simple title-step active">
            <a href="#">Checkout</a>
          </h3>
        </div>
        <div className="container mt-7 mb-2">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-8 pr-lg-4">
              {cart?.data?.cart?.length > 0 ? (
                <table className="shop-table cart-table">
                  <thead>
                    <tr>
                      <th>
                        <span>Product</span>
                      </th>
                      <th>Description</th>
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

              <div className="cart-actions-right mb-6 pt-4">
                {(() => {
                  if (cart?.data?.cart?.length > 0) {
                    return (
                      <Link
                        // to="#"
                        onClick={() => open()}
                        className="btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4"
                      >
                        Continue Shopping <i className="d-icon-arrow-right"></i>
                      </Link>
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
              </div>
            </div>
            <div className="col-md-4">
              <div className="panel panel-danger pull-up">
                <div className="panel-heading">
                  <h5 className="text-left">YOUR ORDER</h5>
                </div>
                <h5>Product</h5>
                <ul className="list-group list-group-flush">
                  {cart?.data?.cart.length > 0
                    ? cart?.data?.cart?.map((item, productkey) => {
                        return (
                          <li className="list-group-item">
                            {item?.name}
                            <span className="plan_right_section">
                              {currencyFormat(item?.saleAmount, "INR")}
                            </span>
                          </li>
                        );
                      })
                    : "No Items Found"}

                  {/* <li className="list-group-item">
                    Fashionable Overnight Bag × 1{" "}
                    <span className="plan_right_section">$110.00</span>
                  </li>
                  <li className="list-group-item">
                    Fashionable Overnight Bag × 1{" "}
                    <span className="plan_right_section">$110.00</span>
                  </li> */}
                  {/* <li className="list-group-item">
                    Discount{" "}
                    <span className="plan_right_section dicount_span">
                      -$10
                    </span>
                  </li> */}
                  <li className="list-group-item">
                    Delivery Charges{" "}
                    <span className="plan_right_section dicount_span">
                      {currencyFormat(orderInfo?.deliveryCharge, "INR")}
                    </span>
                  </li>
                </ul>
                <div className="panel-footer">
                  <ul className="list-group list-group-flush">
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutSection;

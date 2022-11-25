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

const CheckoutSection = ({ orderInfo }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, cart } = useSelector((state) => state);
  const [show, setShow] = useState(false);

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
    // console.log(response?.data?.responseData?.blogs?.docs, "response");
  }, []);

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
                          <li className="list-group-item" key={productkey}>
                            {item?.name} {"x 1"}
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
                  {/* <li className="list-group-item">
                    Tax{" "}
                    <span className="plan_right_section dicount_span">
                      {currencyFormat(0, "INR")}
                    </span>
                  </li> */}
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
            </div>
          </div>
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
    </>
  );
};

export default CheckoutSection;

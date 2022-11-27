import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

import { Link, useHistory } from "react-router-dom";
//import Image from "react-bootstrap/Image";
import { BiArrowBack, BiRightArrowAlt } from "react-icons/bi";

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

import product18 from "../../../images/new-images/products/product18.jpg";
import product19 from "../../../images/new-images/products/product19.jpg";

import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getCookies } from "../../../utils/cookies";
import { currencyFormat } from "../../../utils/common";
import { remove_from_cart_thunk } from "../../../redux/thunk/user_cart_thunk";

const CartContent = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const { user, cart } = useSelector((state) => state);
  // console.log(cart?.data?.cart, "cart");

  useEffect(() => {
    //getProductDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   const getProductDetails = () => {
  //     if (cart?.data) {
  //       console.log(cart, "cart");
  //       cart?.data?.map(function (prodid) {
  //         // if (prodid) {
  //         let url =
  //           process.env.REACT_APP_BASE_URL + "/product/details?id=" + prodid;
  //         const auth_token = getCookies();
  //         const headers = {
  //           Authorization: auth_token,
  //         };
  //         axios.get(url, { headers }).then((res) => {
  //           setProduct([...product, res?.data?.responseData?.product]);
  //         });
  //       });
  //     }
  //   };
  return (
    <>
      <section className="customer-section">
        <div className="step-by pr-4 pl-4">
          <h3 className="title title-simple title-step active">
            <a href="#">Shopping Cart</a>
          </h3>
        </div>

        <div className="container mt-7 mb-2">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 pr-lg-4">
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
                              <a href="product-simple.html">
                                <img
                                  src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${item?.photos[0]}`}
                                  width="100"
                                  height="100"
                                  alt="product"
                                />
                              </a>
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
              <div className="cart-actions-left mb-6 pt-4">
                {(() => {
                  if (cart?.data?.cart?.length > 0) {
                    return (
                      <Link
                        to="/checkout"
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
                <a class="btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4" href="#">Apply Coupons <i class="d-icon-heart"></i></a>
              </div>
            </div>
          </div>

            <div className="cart-card">
              <div class="row">
                <div class="col-sm-12 coupon_card">
                <h1 class="">Apply Coupons</h1>
                  <Form>
                    <div class="row">
                      <div class="col-sm-4">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Control type="text" placeholder="name" />
                        </Form.Group>
                      </div>
                      <div class="col-sm-3">
                        <button class="btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4" href="#">Apply Coupons <i class="d-icon-arrow-right"></i></button>
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

            <div className="cart-card">
              <div className="row">
                <div className="col-sm-6">
                  <h1 class="">Billing Address</h1>
                <Form>
                  <div class="row">
                    <div class="col-sm-6">
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="name" />
                      </Form.Group>
                    </div>
                    <div class="col-sm-6">
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="name" />
                      </Form.Group>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="tel" placeholder="999999999" />
                      </Form.Group>
                    </div>
                    <div class="col-sm-6">
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="name" />
                      </Form.Group>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-12">
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" rows={4} />
                      </Form.Group>
                    </div>
                  </div>
                  
                  <div class="row">
                    <div class="col-sm-4">
                      <Form.Label>City</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>City</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </div>
                    <div class="col-sm-4">
                      <Form.Label>State</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>State</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </div>
                    <div class="col-sm-4">
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control type="text" placeholder="123456" />
                      </Form.Group>
                    </div>
                  </div>

                  <div class="row pt-4">
                    <div class="col-sm-4">
                        <button class="btn-product btn-cart wid_200">Update</button>
                    </div>
                  </div>
                  
                </Form>
                </div>

                
                <div className="col-sm-6">

                <div class="card_inner">
                  <div class="row pt-4">
                    <div class="col-sm-6">
                      <h1 class="">Billing Address</h1>
                    </div>
                    <div class="col-sm-6 text-right">
                      <img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" class="address_edit_icon"></img>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4"><p>Name</p></div>
                    <div class="col-sm-8"><p>Demo</p></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4"><p>Email</p></div>
                    <div class="col-sm-8"><p>demo@gmail.com</p></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4"><p>Mobile Number</p></div>
                    <div class="col-sm-8"><p>5555555555</p></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4"><p>Address</p></div>
                    <div class="col-sm-8"><p>dfdjkhfjkdhfdjskhfjdshfk<br></br>sdnszbdsmabdsads<br></br></p></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4"><p>State</p></div>
                    <div class="col-sm-8"><p>Demo</p></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4"><p>City</p></div>
                    <div class="col-sm-8"><p>Demo</p></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4"><p>pincode</p></div>
                    <div class="col-sm-8"><p>5555555555</p></div>
                  </div>
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
          <Button variant="primary">Ok</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};;

export default CartContent;

import React, { useEffect, useState } from "react";

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
              <div className="cart-actions-right mb-6 pt-4">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};;

export default CartContent;

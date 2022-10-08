import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";

import { useHistory } from "react-router-dom";
//import Image from "react-bootstrap/Image";
import { BiArrowBack,BiRightArrowAlt } from "react-icons/bi";

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

const CartContent = () => {

  return (<>

        <section className="customer-section appear-animate">
            <div className="step-by pr-4 pl-4">
                <h3 className="title title-simple title-step active"><a href="#">Shopping Cart</a></h3>
            </div>
            <div className="container mt-7 mb-2">
                <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12 pr-lg-4">
                        <table className="shop-table cart-table">
                            <thead>
                                <tr>
                                    <th><span>Product</span></th>
                                    <th>Description</th>
                                    <th><span>Price</span></th>
                                    <th><span>quantity</span></th>
                                    <th>Subtotal</th>
                                    <th>Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="product-thumbnail">
                                        <figure>
                                            <a href="product-simple.html">
                                                <img src={product18} width="100" height="100"
                                                    alt="product" />
                                            </a>
                                        </figure>
                                    </td>
                                    <td className="product-name">
                                        <div className="product-name-section">
                                            <a href="product-simple.html">Converse Training Shoes</a>
                                        </div>
                                    </td>
                                    <td className="product-subtotal">
                                        <span className="amount">$129.99</span>
                                    </td>
                                    <td className="product-quantity">
                                        <div className="input-group">
                                            <button className="quantity-minus d-icon-minus"></button>
                                            <input className="quantity form-control" type="number" min="1"
                                                max="1000000" />
                                            <button className="quantity-plus d-icon-plus"></button>
                                        </div>
                                    </td>
                                    <td className="product-price">
                                        <span className="amount">$129.99</span>
                                    </td>
                                    <td className="product-close">
                                        <a href="cart.html#" className="product-remove" title="Remove this product">
                                            <i className="fas fa-times"></i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="product-thumbnail">
                                        <figure>
                                            <a href="product-simple.html">
                                                <img src={product19} width="100" height="100"
                                                    alt="product" />
                                            </a>
                                        </figure>

                                    </td>
                                    <td className="product-name">
                                        <div className="product-name-section">
                                            <a href="product-simple.html">Women Beautiful Headgear</a>
                                        </div>
                                    </td>
                                    <td className="product-subtotal">
                                        <span className="amount">$98.00</span>
                                    </td>
                                    <td className="product-quantity">
                                        <div className="input-group">
                                            <button className="quantity-minus d-icon-minus"></button>
                                            <input className="quantity form-control" type="number" min="1"
                                                max="1000000" />
                                            <button className="quantity-plus d-icon-plus"></button>
                                        </div>
                                    </td>
                                    <td className="product-price">
                                        <span className="amount">$98.00</span>
                                    </td>
                                    <td className="product-close">
                                        <a href="cart.html#" className="product-remove" title="Remove this product">
                                            <i className="fas fa-times"></i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="product-thumbnail">
                                        <figure>
                                            <a href="product-simple.html">
                                                <img src={product18} width="100" height="100"
                                                    alt="product" />
                                            </a>
                                        </figure>
                                    </td>
                                    <td className="product-name">
                                        <div className="product-name-section">
                                            <a href="product-simple.html">Converse Training Shoes</a>
                                        </div>
                                    </td>
                                    <td className="product-subtotal">
                                        <span className="amount">$129.99</span>
                                    </td>
                                    <td className="product-quantity">
                                        <div className="input-group">
                                            <button className="quantity-minus d-icon-minus"></button>
                                            <input className="quantity form-control" type="number" min="1"
                                                max="1000000" />
                                            <button className="quantity-plus d-icon-plus"></button>
                                        </div>
                                    </td>
                                    <td className="product-price">
                                        <span className="amount">$129.99</span>
                                    </td>
                                    <td className="product-close">
                                        <a href="cart.html#" className="product-remove" title="Remove this product">
                                            <i className="fas fa-times"></i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="product-thumbnail">
                                        <figure>
                                            <a href="product-simple.html">
                                                <img src={product19} width="100" height="100"
                                                    alt="product" />
                                            </a>
                                        </figure>

                                    </td>
                                    <td className="product-name">
                                        <div className="product-name-section">
                                            <a href="product-simple.html">Women Beautiful Headgear</a>
                                        </div>
                                    </td>
                                    <td className="product-subtotal">
                                        <span className="amount">$98.00</span>
                                    </td>
                                    <td className="product-quantity">
                                        <div className="input-group">
                                            <button className="quantity-minus d-icon-minus"></button>
                                            <input className="quantity form-control" type="number" min="1"
                                                max="1000000" />
                                            <button className="quantity-plus d-icon-plus"></button>
                                        </div>
                                    </td>
                                    <td className="product-price">
                                        <span className="amount">$98.00</span>
                                    </td>
                                    <td className="product-close">
                                        <a href="cart.html#" className="product-remove" title="Remove this product">
                                            <i className="fas fa-times"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="cart-actions-right mb-6 pt-4">
                            <a href="#" className="btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4">
                            Continue Shopping <i className="d-icon-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </>
  );
};

export default CartContent;

import React from "react";
import OwlCarousel from "react-owl-carousel";
import {  Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";

import product_1 from "../../../images/new-images/demos/demo-food2/products/pro_product_11.jpg";
import product_2 from "../../../images/new-images/demos/demo-food2/products/pro_product_22.jpg";
import product_3 from "../../../images/new-images/demos/demo-food2/products/pro_product_33.jpg";
import product_4 from "../../../images/new-images/demos/demo-food2/products/pro_product_44.jpg";

import product_11 from "../../../images/new-images/demos/demo-food2/products/1.jpg";
import priceTag from "../../../images/new-images/demos/demo-food2/products/price_tag.png";


const FeatureProduct = () => {
  const history = useHistory();

  return (
    <>
     <div className="container-fluid base-color-bg">
                        <section className="category-section mb-4 mb-lg-6 pb-7" >
                            <h2 className="title-echo mb-2"><span>Featured product</span></h2>
                            
                            <br />
                            <div className="container">

                            <OwlCarousel
                                className="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2"
                                    margin={20}
                                    nav
                                    smartSpeed={500}
                                    dots={false}
                                    navContainerClass={"owl-nav"}
                                    responsive={{
                                        0: {
                                            'items': 1
                                        },
                                        768: {
                                            'items': 3
                                        },
                                        992: {
                                            'items': 3
                                        }
                                    }}
                                    // autoplay
                                    loop
                                    autoplayTimeout={2000}
                                    autoplayHoverPause={true}
                            >
                                
                                    <div className="product text-center product-with-qty">
                                        <figure className="product-media">
                                           
                                            <Link to="/product">
                                                <img src={product_1} alt="product" width="280" height="315" />
                                            </Link>
                                            <div className="product-label-group"><img src={priceTag} /></div>
                                        </figure>
                                        <div className="product-details">
                                            <h3 className="product-name text-center">
                                                <a href="#">Healthy Hair</a>
                                            </h3>
                                            <div className="product-price ls-md offer_price_details">
                                                <span className="price">$140.00</span>
                                                <span className="price line-through">Rs. 2,499</span>
                                                
                                            </div>
                                            <div className="ratings-container">
                                                <div className="ratings-full">
                                                    <span className="ratings"></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                            </div>
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart ls-l" data-toggle="modal" data-target="#addCartModal" title="Add to cart"><i className="d-icon-bag"></i><span>Add to cart</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product text-center product-with-qty">
                                        <figure className="product-media">
                                                <Link to="/product">
                                                <img src={product_2} alt="product" width="280" height="315" />
                                                </Link>
                                            <div className="product-label-group">
                                                <img src={priceTag}/>
                                            </div>
                                        </figure>
                                        <div className="product-details">
                                            <h3 className="product-name text-center">
                                                <a href="#">Essential Vitamins</a>
                                            </h3>
                                            <div className="product-price ls-md offer_price_details">
                                                <span className="price">$140.00</span>
                                                <span className="price line-through">Rs. 2,499</span>
                                                
                                            </div>
                                            <div className="ratings-container">
                                                <div className="ratings-full">
                                                    <span className="ratings" ></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                            </div>
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart ls-l" data-toggle="modal" data-target="#addCartModal" title="Add to cart"><i className="d-icon-bag"></i><span>Add to cart</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product text-center product-with-qty">
                                        <figure className="product-media">
                                            <Link to="/product">
                                                <img src={product_3} alt="product" width="280" height="315" />
                                            </Link>
                                            <div className="product-label-group"><img src={priceTag} /></div>
                                        </figure>
                                        <div className="product-details">
                                            <h3 className="product-name text-center">
                                                <a href="#">Apple Cider Vinegar with Garcinia Cambogia and Pomegranate</a>
                                            </h3>
                                            <div className="product-price ls-md offer_price_details">
                                                <span className="price">$140.00</span>
                                                <span className="price line-through">Rs. 2,499</span>
                                               
                                            </div>
                                            <div className="ratings-container">
                                                <div className="ratings-full">
                                                    <span className="ratings"></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                            </div>
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart ls-l" data-toggle="modal" data-target="#addCartModal" title="Add to cart"><i className="d-icon-bag"></i><span>Add to cart</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product text-center product-with-qty">
                                        <figure className="product-media">
                                            <Link to="/product">
                                                <img src={product_4} alt="product" width="280" height="315" />
                                                </Link>
                                            <div className="product-label-group"><img src={priceTag} /></div>
                                        </figure>
                                        <div className="product-details">
                                            <h3 className="product-name text-center">
                                                <a href="#">Multivitamins</a>
                                            </h3>
                                            <div className="product-price ls-md offer_price_details">
                                                <span className="price">$140.00</span>
                                                <span className="price line-through">Rs. 2,499</span>
                                                
                                            </div>
                                            <div className="ratings-container">
                                                <div className="ratings-full">
                                                    <span className="ratings" ></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                            </div>
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart ls-l" data-toggle="modal" data-target="#addCartModal" title="Add to cart"><i className="d-icon-bag"></i><span>Add to cart</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product text-center product-with-qty" >
                                        <figure className="product-media">
                                            <Link to="/product">
                                                <img src={product_11} alt="product" width="280" height="315" />
                                            </Link>
                                            <div className="product-label-group"><img src={priceTag} /></div>
                                        </figure>
                                        <div className="product-details">
                                            <h3 className="product-name">
                                                <a href="#">Grapes</a>
                                            </h3>
                                            <div className="product-price ls-md offer_price_details">
                                                <span className="price">$140.00</span>
                                                <span className="price line-through">Rs. 2,499</span>
                                               
                                            </div>

                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart ls-l" data-toggle="modal" data-target="#addCartModal" title="Add to cart"><i className="d-icon-bag"></i><span>Add to cart</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product text-center product-with-qty" >
                                        <figure className="product-media">
                                           <Link to="/product">
                                                <img src={product_11} alt="product" width="280" height="315" />
                                            </Link>
                                            <div className="product-label-group"><img src={priceTag} /></div>
                                        </figure>
                                        <div className="product-details">
                                            <h3 className="product-name">
                                                <Link to="/product">Grapes</Link>
                                            </h3>
                                            <div className="product-price ls-md offer_price_details">
                                                <span className="price">$140.00</span>
                                                <span className="price line-through">Rs. 2,499</span>
                                                <span className="price base-color">25% off</span>
                                            </div>

                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart ls-l" data-toggle="modal" data-target="#addCartModal" title="Add to cart"><i className="d-icon-bag"></i><span>Add to cart</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product text-center product-with-qty" >
                                        <figure className="product-media">
                                            <Link to="/product">
                                                 <img src={product_11} alt="product" width="280" height="315" />
                                            </Link>
                                            <div className="product-label-group"><img src={priceTag} /></div>
                                        </figure>
                                        <div className="product-details">
                                            <h3 className="product-name">
                                                <Link to="/product">Grapes</Link>
                                            </h3>
                                            <div className="product-price ls-md offer_price_details">
                                                <span className="price">$140.00</span>
                                                <span className="price line-through">Rs. 2,499</span>
                                                <span className="price base-color">25% off</span>
                                            </div>

                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart ls-l" data-toggle="modal" data-target="#addCartModal" title="Add to cart"><i className="d-icon-bag"></i><span>Add to cart</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </section>
                    </div>
    </>
  );
};


export default FeatureProduct;

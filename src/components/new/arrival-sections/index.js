import React from "react";

import OwlCarousel from "react-owl-carousel";

import product_1 from "../../../images/new-images/demos/demo-food2/products/pro_product_1.jpg"
import product_2 from "../../../images/new-images/demos/demo-food2/products/pro_product_2.jpg"
import product_3 from "../../../images/new-images/demos/demo-food2/products/pro_product_3.jpg"
import product_4 from "../../../images/new-images/demos/demo-food2/products/pro_product_4.jpg"

import priceTag from "../../../images/new-images/demos/demo-food2/products/price_tag.png";

import "./style.scss";

const ArrivalSection = () => {
  return (
    <>
     <section className="arrivals-section appear-animate need_sec">
                        <div className="container">
                            <h2 className="title-echo mb-1"><span>What you need? Meet the most Here!</span></h2>
                            <p>From skin to muscles, sleep to energy and fitness to cognition – Liven nurtures <br /> the health with essentials naturally sourced.</p>
                            <div className="tab tab-nav-center">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item ml-1 mr-1 pt-2 pb-2">
                                        <a className="nav-link nav-link-with-img border-rounded active" href="#fruits">
                                            <h3 className="img-cat-title mb-0"><i className="fa fa-home" aria-hidden="true" ></i> Best Sellers</h3>
                                        </a>
                                    </li>
                                    <li className="nav-item ml-1 mr-1 pt-2 pb-2">
                                        <a className="nav-link nav-link-with-img border-rounded" href="#vegetables">
                                            <h3 className="img-cat-title mb-0"><i className="fa fa-home" aria-hidden="true" ></i> Immunity</h3>
                                        </a>
                                    </li>
                                    <li className="nav-item ml-1 mr-1 pt-2 pb-2">
                                        <a className="nav-link nav-link-with-img border-rounded" href="#dry_goods">
                                            <h3 className="img-cat-title mb-0"><i className="fa fa-home" aria-hidden="true" ></i> Sleep</h3>
                                        </a>
                                    </li>
                                    <li className="nav-item ml-1 mr-1 pt-2 pb-2">
                                        <a className="nav-link nav-link-with-img border-rounded" href="#sea_food">
                                            <h3 className="img-cat-title mb-0"><i className="fa fa-home" aria-hidden="true" ></i> Gut</h3>
                                        </a>
                                    </li>
                                    <li className="nav-item ml-1 mr-1 pt-2 pb-2">
                                        <a className="nav-link nav-link-with-img border-rounded" href="#milk_cream">
                                            <h3 className="img-cat-title mb-0"><i className="fa fa-home" aria-hidden="true" ></i> Weight</h3>
                                        </a>
                                    </li>
                                    <li className="nav-item ml-1 mr-1 pt-2 pb-2">
                                        <a className="nav-link nav-link-with-img border-rounded" href="#milk_cream">
                                            <h3 className="img-cat-title mb-0"><i className="fa fa-home" aria-hidden="true" ></i> Detox</h3>
                                        </a>
                                    </li>
                                    <li className="nav-item ml-1 mr-1 pt-2 pb-2">
                                        <a className="nav-link nav-link-with-img border-rounded" href="#milk_cream">
                                            <h3 className="img-cat-title mb-0"><i className="fa fa-home" aria-hidden="true" ></i> Beauty</h3>
                                        </a>
                                    </li>
                                    <li className="nav-item ml-1 mr-1 pt-2 pb-2" >
                                        <a className="nav-link nav-link-with-img border-rounded" href="#milk_cream">
                                            <h3 className="img-cat-title mb-0"><i className="fa fa-home" aria-hidden="true" ></i> Essentials</h3>
                                        </a>
                                    </li>
                                    <li className="nav-item ml-1 mr-1 pt-2 pb-2" >
                                        <a className="nav-link nav-link-with-img border-rounded" href="#milk_cream">
                                            <h3 className="img-cat-title mb-0"><i className="fa fa-home" aria-hidden="true" ></i> Energy</h3>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane pt-4 active" id="fruits">
                                        {/* <div
                                            class="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2"
                                            data-owl-options="{
                                                                    'nav': true,
                                                                    'dots': false,
                                                                    'margin': 20,
                                                                    'autoplay': false,
                                                                    'responsive': {
                                                                        '0': {
                                                                            'items': 1
                                                                        },
                                                                        '768': {
                                                                            'items': 3
                                                                        },
                                                                        '992': {
                                                                            'items': 3
                                                                        }
                                                                    }
                                                                }"
                                        > */}
                                        <OwlCarousel
                                                className="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2"
                                                margin={20}
                                                nav
                                                smartSpeed={500}
                                                dots={false}
                                                navContainerClass={"owl-nav"}
                                                responsive={{
                                                0: {
                                                    items: 1,
                                                },
                                                768: {
                                                    items: 3,
                                                },
                                                992: {
                                                    items: 3,
                                                },
                                                }}
                                                autoplay
                                                loop
                                                autoplayTimeout={2000}
                                                autoplayHoverPause={true}
                                        >
                                            <div className="product text-center product-with-qty">
                                                <figure className="product-media">
                                                    <a href="product.html">
                                                        <img src={product_1} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-label-group">
                                                        <img src={priceTag} />
                                                    </div>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart"></i></a>
                                                    </div>
                                                </figure>
                                                <div className="product-details">
                                                    <h3 className="product-name">
                                                        <a href="#">Glow Japanese Marine Collagen Peptides</a>
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
                                                    <a href="product.html">
                                                        <img src={product_2} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-label-group">
                                                        <img src={priceTag}  />
                                                    </div>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart"></i></a>
                                                    </div>
                                                </figure>
                                                <div className="product-details">
                                                    <h3 className="product-name">
                                                        <a href="#">Marvel Natural B12+ D3</a>
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
                                                    <a href="product.html">
                                                        <img src={product_3} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-label-group">
                                                        <img src={priceTag}  />
                                                    </div>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart"></i></a>
                                                    </div>
                                                </figure>
                                                <div className="product-details">
                                                    <h3 className="product-name">
                                                        <a href="#">Disney Frozen Probiotic</a>
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
                                                    <a href="product.html">
                                                        <img src={product_4} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-label-group">
                                                        <img src={priceTag}  />
                                                    </div>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart"></i></a>
                                                    </div>
                                                </figure>
                                                <div className="product-details">
                                                    <h3 className="product-name">
                                                        <a href="#">Daily Greens</a>
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
                                                        <a href="#" className="btn-product btn-cart ls-l" data-toggle="modal" data-target="#addCartModal" title="Add to cart"><i class="d-icon-bag"></i><span>Add to cart</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                    <div className="tab-pane pt-4" id="vegetables">
                                        {/* <div
                                            class="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2"
                                            data-owl-options="{
                                                                    'nav': true,
                                                                    'dots': false,
                                                                    'margin': 20,
                                                                    'autoplay': false,
                                                                    'responsive': {
                                                                        '0': {
                                                                            'items': 1
                                                                        },
                                                                        '768': {
                                                                            'items': 3
                                                                        },
                                                                        '992': {
                                                                            'items': 3
                                                                        }
                                                                    }
                                                                }"
                                        > */}
                                         <OwlCarousel
                                                className="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2"
                                                margin={20}
                                                nav
                                                smartSpeed={500}
                                                dots={false}
                                                navContainerClass={"owl-nav"}
                                                responsive={{
                                                0: {
                                                    items: 1,
                                                },
                                                768: {
                                                    items: 3,
                                                },
                                                992: {
                                                    items: 3,
                                                },
                                                }}
                                                autoplay
                                                loop
                                                autoplayTimeout={2000}
                                                autoplayHoverPause={true}
                                        >
                                            <div className="product text-center product-with-qty">
                                                <figure className="product-media">
                                                    <a href="#">
                                                        <img src={product_1} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-label-group">
                                                        <img src={priceTag}  />
                                                    </div>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart"></i></a>
                                                    </div>
                                                </figure>
                                                <div className="product-details">
                                                    <h3 className="product-name">
                                                        <a href="#">Glow Japanese Marine Collagen Peptides</a>
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
                                                    <a href="#">
                                                        <img src={product_2} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-label-group">
                                                        <img src={priceTag}  />
                                                    </div>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart"></i></a>
                                                    </div>
                                                </figure>
                                                <div className="product-details">
                                                    <h3 className="product-name">
                                                        <a href="#">Marvel Natural B12+ D3</a>
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
                                                    <a href="#">
                                                        <img src={product_3} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-label-group">
                                                        <img src={priceTag}  />
                                                    </div>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart"></i></a>
                                                    </div>
                                                </figure>
                                                <div className="product-details">
                                                    <h3 className="product-name">
                                                        <a href="#">Disney Frozen Probiotic</a>
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
                                                    <a href="#">
                                                        <img src={product_4} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-label-group">
                                                        <img src={priceTag}  />
                                                    </div>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart"></i></a>
                                                    </div>
                                                </figure>
                                                <div className="product-details">
                                                    <h3 className="product-name">
                                                        <a href="#">Daily Greens</a>
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
                                       </OwlCarousel>
                                    </div>
                                    <div className="tab-pane pt-4" id="dry_goods">
                                        {/* <div
                                            class="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2"
                                            data-owl-options="{
                                                                    'nav': true,
                                                                    'dots': false,
                                                                    'margin': 20,
                                                                    'autoplay': false,
                                                                    'responsive': {
                                                                        '0': {
                                                                            'items': 1
                                                                        },
                                                                        '768': {
                                                                            'items': 3
                                                                        },
                                                                        '992': {
                                                                            'items': 3
                                                                        }
                                                                    }
                                                                }"
                                        > */}
                                          <OwlCarousel
                                                className="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2"
                                                margin={20}
                                                nav
                                                smartSpeed={500}
                                                dots={false}
                                                navContainerClass={"owl-nav"}
                                                responsive={{
                                                0: {
                                                    items: 1,
                                                },
                                                768: {
                                                    items: 3,
                                                },
                                                992: {
                                                    items: 3,
                                                },
                                                }}
                                                autoplay
                                                loop
                                                autoplayTimeout={2000}
                                                autoplayHoverPause={true}
                                        >
                                            <div className="product text-center product-with-qty">
                                                <figure className="product-media">
                                                    <a href="#">
                                                        <img src={product_1} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-label-group">
                                                        <img src={priceTag} />
                                                    </div>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart"></i></a>
                                                    </div>
                                                </figure>
                                                <div className="product-details">
                                                    <h3 className="product-name">
                                                        <a href="#">Glow Japanese Marine Collagen Peptides</a>
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
                                                    <a href="#">
                                                        <img src={product_2} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-label-group">
                                                        <img src={priceTag} />
                                                    </div>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart"></i></a>
                                                    </div>
                                                </figure>
                                                <div className="product-details">
                                                    <h3 className="product-name">
                                                        <a href="#">Marvel Natural B12+ D3</a>
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
                                                    <a href="#">
                                                        <img src={product_3} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-label-group">
                                                        <img src={priceTag} />
                                                    </div>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart"></i></a>
                                                    </div>
                                                </figure>
                                                <div className="product-details">
                                                    <h3 className="product-name">
                                                        <a href="#">Disney Frozen Probiotic</a>
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
                                                    <a href="#">
                                                        <img src={product_4} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-label-group">
                                                        <img src={priceTag}  />
                                                    </div>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart"></i></a>
                                                    </div>
                                                </figure>
                                                <div className="product-details">
                                                    <h3 className="product-name">
                                                        <a href="#">Daily Greens</a>
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
                                        </OwlCarousel>
                                    </div>
                                    <div className="tab-pane pt-4" id="sea_food">
                                        {/* <div
                                            class="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2"
                                            data-owl-options="{
                                                                    'nav': true,
                                                                    'dots': false,
                                                                    'margin': 20,
                                                                    'autoplay': false,
                                                                    'responsive': {
                                                                        '0': {
                                                                            'items': 1
                                                                        },
                                                                        '768': {
                                                                            'items': 3
                                                                        },
                                                                        '992': {
                                                                            'items': 3
                                                                        }
                                                                    }
                                                                }"
                                        > */}
                                         <OwlCarousel
                                                className="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2"
                                                margin={20}
                                                nav
                                                smartSpeed={500}
                                                dots={false}
                                                navContainerClass={"owl-nav"}
                                                responsive={{
                                                0: {
                                                    items: 1,
                                                },
                                                768: {
                                                    items: 3,
                                                },
                                                992: {
                                                    items: 3,
                                                },
                                                }}
                                                autoplay
                                                loop
                                                autoplayTimeout={2000}
                                                autoplayHoverPause={true}
                                        >
                                             <div className="product text-center product-with-qty">
                                                <figure className="product-media">
                                                    <a href="#">
                                                        <img src={product_1} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-label-group">
                                                        <img src={priceTag} />
                                                    </div>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart"></i></a>
                                                    </div>
                                                </figure>
                                                <div className="product-details">
                                                    <h3 className="product-name">
                                                        <a href="#">Glow Japanese Marine Collagen Peptides</a>
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
                                                    <a href="#">
                                                        <img src={product_2} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-label-group">
                                                        <img src={priceTag} />
                                                    </div>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart"></i></a>
                                                    </div>
                                                </figure>
                                                <div className="product-details">
                                                    <h3 className="product-name">
                                                        <a href="#">Marvel Natural B12+ D3</a>
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
                                                    <a href="#">
                                                        <img src={product_3} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-label-group">
                                                        <img src={priceTag} />
                                                    </div>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart"></i></a>
                                                    </div>
                                                </figure>
                                                <div className="product-details">
                                                    <h3 className="product-name">
                                                        <a href="#">Disney Frozen Probiotic</a>
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
                                                    <a href="#">
                                                        <img src={product_4} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-label-group">
                                                        <img src={priceTag}  />
                                                    </div>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart"></i></a>
                                                    </div>
                                                </figure>
                                                <div className="product-details">
                                                    <h3 className="product-name">
                                                        <a href="#">Daily Greens</a>
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
                                        </OwlCarousel>
                                    </div>
                                    <div className="tab-pane pt-4" id="milk_cream">
                                        {/* <div
                                            class="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2"
                                            data-owl-options="{
                                                                    'nav': true,
                                                                    'dots': false,
                                                                    'margin': 20,
                                                                    'autoplay': false,
                                                                    'responsive': {
                                                                        '0': {
                                                                            'items': 1
                                                                        },
                                                                        '768': {
                                                                            'items': 3
                                                                        },
                                                                        '992': {
                                                                            'items': 3
                                                                        }
                                                                    }
                                                                }"
                                        > */}
                                         <OwlCarousel
                                                className="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2"
                                                margin={20}
                                                nav
                                                smartSpeed={500}
                                                dots={false}
                                                navContainerClass={"owl-nav"}
                                                responsive={{
                                                0: {
                                                    items: 1,
                                                },
                                                768: {
                                                    items: 3,
                                                },
                                                992: {
                                                    items: 3,
                                                },
                                                }}
                                                autoplay
                                                loop
                                                autoplayTimeout={2000}
                                                autoplayHoverPause={true}
                                        >
                                             <div className="product text-center product-with-qty">
                                                <figure className="product-media">
                                                    <a href="#">
                                                        <img src={product_1} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-label-group">
                                                        <img src={priceTag} />
                                                    </div>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart"></i></a>
                                                    </div>
                                                </figure>
                                                <div className="product-details">
                                                    <h3 className="product-name">
                                                        <a href="#">Glow Japanese Marine Collagen Peptides</a>
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
                                                    <a href="#">
                                                        <img src={product_2} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-label-group">
                                                        <img src={priceTag} />
                                                    </div>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart"></i></a>
                                                    </div>
                                                </figure>
                                                <div className="product-details">
                                                    <h3 className="product-name">
                                                        <a href="#">Marvel Natural B12+ D3</a>
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
                                                    <a href="#">
                                                        <img src={product_3} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-label-group">
                                                        <img src={priceTag} />
                                                    </div>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart"></i></a>
                                                    </div>
                                                </figure>
                                                <div className="product-details">
                                                    <h3 className="product-name">
                                                        <a href="#">Disney Frozen Probiotic</a>
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
                                                    <a href="#">
                                                        <img src={product_4} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-label-group">
                                                        <img src={priceTag}  />
                                                    </div>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart"></i></a>
                                                    </div>
                                                </figure>
                                                <div className="product-details">
                                                    <h3 className="product-name">
                                                        <a href="#">Daily Greens</a>
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
                                                        <a href="#" className="btn-product btn-cart ls-l" data-toggle="modal" data-target="#addCartModal" title="Add to cart"><i class="d-icon-bag"></i><span>Add to cart</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
    </>
  );
};

export default ArrivalSection;

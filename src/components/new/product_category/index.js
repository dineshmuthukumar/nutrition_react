

import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import store_1 from "../../../images/new-images/subpages/store-1.jpg";
import store_2 from "../../../images/new-images/subpages/store-2.jpg";
import store_3 from "../../../images/new-images/subpages/store-3.jpg";
import store_4 from "../../../images/new-images/subpages/store-4.jpg";
import pro_product_1 from "../../../images/new-images/demos/demo-food2/products/pro_product_1.jpg";
import pro_product_2 from "../../../images/new-images/demos/demo-food2/products/pro_product_2.jpg";
import pro_product_3 from "../../../images/new-images/demos/demo-food2/products/pro_product_3.jpg";
import pro_product_4 from "../../../images/new-images/demos/demo-food2/products/pro_product_4.jpg";
//import pro_product_5 from "../../../images/new-images/demos/demo-food2/products/pro_product_4.jpg";

import "./styles.scss";

const Product_Category = () => {


return (<>                            
     <section className="customer-section pb-10 appear-animate">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-12 mb-4">
                    <h3 className="section-title lh-1 font-weight-bold">Product Category</h3>
                    <h4 className="section-title lh-1 font-weight-bold">What you want to know about Effervescent?</h4>
                    <p className="section-desc text-grey">
                        Effervescent are disintegrating capsules that releases carbon dioxide when dropped into water. It makes the drugs as an easily available solution for faster absorption from upper small
                        intestine with improved bioavailability. These are the compact version of versatile nutrients in an individual tablet with natural flavorings, colors and hydrophilic lubricants. Each one is
                        maintained with integrity and protected from moisture by proper manufacturing and packing procedure. The effervescent tablets are packed in tight, moisture-free plastic tubes with Desiccants.
                    </p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-12 mb-4">
                    <h4 className="section-title lh-1 font-weight-bold">Resilience with Effervescent!</h4>
                    <p className="section-desc text-grey">
                        Effervescent are disintegrating capsules that releases carbon dioxide when dropped into water. It makes the drugs as an easily available solution for faster absorption from upper small
                        intestine with improved bioavailability. These are the compact version of versatile nutrients in an individual tablet with natural flavorings, colors and hydrophilic lubricants. Each one is
                        maintained with integrity and protected from moisture by proper manufacturing and packing procedure. The effervescent tablets are packed in tight, moisture-free plastic tubes with Desiccants.
                    </p>
                </div>
            </div>
        </div>
    </section>
    
    <section className="overlay_product">
        <div className="container">
            <div className="code-template">
                <div className="row cols-sm-2 cols-lg-4 code-content" >
                    <div className="image-box image-overlay">
                        <figure className="banner-radius">
                            <img src={store_1} alt="image-overlay" width="280" height="280" />
                            <h4 className="overlay-visible">Fizzy</h4>
                            <div className="overlay overlay-transparent">
                                <p className="">
                                    The active molecules in the formula gets bubbled and dissolves the nutrients in the water making it fun and delicious to consume, maintaining the properties intact in each sip.
                                </p>
                            </div>
                        </figure>
                    </div>
                    <div className="image-box image-overlay">
                        <figure className="banner-radius">
                            <img src={store_2} alt="image-overlay" width="280" height="280" />
                            <h4 className="overlay-visible">Travel friendly</h4>
                            <div className="overlay overlay-transparent">
                                <p className="">The packing is portable and easy to carry, so you never giveup the try for a healthy lifestyle.</p>
                            </div>
                        </figure>
                    </div>
                    <div className="image-box image-overlay">
                        <figure className="banner-radius">
                            <img src={store_3} alt="image-overlay" width="280" height="280" />
                            <h4 className="overlay-visible">Better Absorption</h4>
                            <div className="overlay overlay-transparent">
                                <p className="">Consuming this bubbling drink is so delicious with allnatural flavors ensuring better bioavailability through faster absorption.</p>
                            </div>
                        </figure>
                    </div>
                    <div className="image-overlay">
                        <figure className="banner-radius">
                            <img src={store_4} alt="image-overlay" width="280" height="280" />
                            <h4 className="overlay-visible">No worries</h4>
                            <div className="overlay overlay-transparent">
                                <p className="">
                                    This fizzy formulation is effective enough to deliver proper nutrients to the consumer in a safe manner. There are no health-harming compounds and this formula has undergone
                                    certain certifications for daily consumption.
                                </p>
                            </div>
                        </figure>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6 mb-4 order-lg-auto order-sm-last">
                        <div className="banner banner-4 banner-fixed banner-radius overlay-effect2 content-middle content-center appear-animate fadeIn appear-animation-visible">
                            <figure>
                                <img src="https://d-themes.com/html/riode/images/demos/demo1/banners/banner2.jpg" alt="banner" width="350" height="177" style={{backgroundColor:'#1e1e1e'}} />
                            </figure>
                            <div className="banner-content d-flex align-items-center w-100 text-left" style={{padding: "20px" }} >
                                <div className="mr-auto mb-4 mb-md-0">
                                    <h4 className="banner-subtitle text-white">Fizzy</h4>
                                    <p className="text-white">The active molecules in the formula gets bubbled and dissolves the nutrients in the water making it fun and delicious to consume, maintaining the properties intact in each sip.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 order-lg-auto order-sm-last">
                        <div className="banner banner-4 banner-fixed banner-radius overlay-effect2 content-middle content-center appear-animate fadeIn appear-animation-visible">
                            <figure>
                                <img src="https://d-themes.com/html/riode/images/demos/demo1/banners/banner2.jpg" alt="banner" width="350" height="177"  style={{backgroundColor:'#1e1e1e'}}  />
                            </figure>
                            <div className="banner-content d-flex align-items-center w-100 text-left" style={{padding: "20px"}}>
                                <div className="mr-auto mb-4 mb-md-0">
                                    <h4 className="banner-subtitle text-white">No worries</h4>
                                    <p className="text-white">There are no health-harming compounds and this formula has undergone
                                    certain certifications for daily consumption.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6 mb-4 order-lg-auto order-sm-last">
                        <div className="banner banner-4 banner-fixed banner-radius overlay-effect2 content-middle content-center appear-animate fadeIn appear-animation-visible">
                            <figure>
                                <img src="https://d-themes.com/html/riode/images/demos/demo1/banners/banner2.jpg" alt="banner" width="350" height="177"  style={{backgroundColor:'#1e1e1e'}}  />
                            </figure>
                            <div className="banner-content d-flex align-items-center w-100 text-left"  style={{padding: "20px"}}>
                                <div className="mr-auto mb-4 mb-md-0">
                                    <h4 className="banner-subtitle text-white">Travel friendly</h4>
                                    <p className="text-white">The packing is portable and easy to carry, so you never giveup the try for a healthy lifestyle.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 order-lg-auto order-sm-last">
                        <div className="banner banner-4 banner-fixed banner-radius overlay-effect2 content-middle content-center appear-animate fadeIn appear-animation-visible">
                            <figure>
                                <img src="https://d-themes.com/html/riode/images/demos/demo1/banners/banner2.jpg" alt="banner" width="350" height="177"  style={{backgroundColor:'#1e1e1e'}} />
                            </figure>
                            <div className="banner-content d-flex align-items-center w-100 text-left" style={{padding: "20px"}}>
                                <div className="mr-auto mb-4 mb-md-0">
                                    <h4 className="banner-subtitle text-white">Better Absorption</h4>
                                    <p className="text-white">Consuming this bubbling drink is so delicious with allnatural flavors ensuring better bioavailability through faster absorption.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="pt-3 mt-2 mb-2 pb-10 need_sec">
                                <div className="container">
                                    <h2 className="title-echo mb-1"><span>Available Products</span></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                    {/* <div
                                        className="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2"
                                        data-owl-options="{
                                            'nav': false,
                                            'dots': false,
                                            'margin': 20,
                                            'autoplay': false,
                                            'responsive': {
                                                '0': {
                                                    'items': 2
                                                },
                                                '768': {
                                                    'items': 3
                                                },
                                                '992': {
                                                    'items': 4
                                                }
                                            }
                                            }"
                                                > */}
                                         <OwlCarousel
                                                className="owl-carousel "
                                                margin={20}
                                                nav
                                                smartSpeed={500}
                                                dots={false}
                                            
                                                navContainerClass={"owl-nav"}
                                                navText={[
                                                `<img src=https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/back-arrow.png  />`,
                                                `<img src=https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/back-arrow.png />`,
                                                ]}
                                                responsive={{
                                                0: {
                                                    items: 1,
                                                },
                                                768: {
                                                    items: 1,
                                                },
                                                800: {
                                                    items: 4,
                                                },
                                                }}
                                                autoplay
                                                loop
                                                autoplayTimeout={2000}
                                                autoplayHoverPause={true}
                                                // navText={[
                                                //   '<i class="fa fa-chevron-left"></i>"',
                                                //   '<i class="fa fa-chevron-right"></i>'
                                                // ]}
                                            
                                            >
                                        <div className="product text-center product-with-qty">
                                            <figure className="product-media">
                                                <a href="#">
                                                    <img src={pro_product_1} alt="product" width="280" height="315" />
                                                </a>
                                                <div className="product-label-group">
                                                    <label className="product-label label-sale">25% Off</label>
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
                                                    {/* <!-- <span className="price base-color">25% off</span> --> */}
                                                </div>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings" style={{width: "100%"}}></span>
                                                        <span className="tooltiptext tooltip-top"></span>
                                                    </div>
                                                </div>
                                                {/* <!-- <div className="row">
                                                            <div className="col-sm-12">
                                                                <div className="product-action">
                                                                    <a href="#" className="btn-product btn-cart ls-l" data-toggle="modal" data-target="#addCartModal" title="Add to cart"><i className="d-icon-bag"></i><span>Add to cart</span></a>
                                                                </div>
                                                            </div>
                                                        </div> --> */}

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart ls-l" data-toggle="modal" data-target="#addCartModal" title="Add to cart"><i className="d-icon-bag"></i><span>Add to cart</span></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product text-center product-with-qty">
                                            <figure className="product-media">
                                                <a href="#">
                                                    <img src={pro_product_2} alt="product" width="280" height="315" />
                                                </a>
                                                <div className="product-label-group">
                                                    <label className="product-label label-sale">25% Off</label>
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
                                                    {/* <!-- <span className="price base-color">25% off</span> --> */}
                                                </div>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings" style={{width: "100%"}}></span>
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
                                                    <img src={pro_product_3} alt="product" width="280" height="315" />
                                                </a>
                                                <div className="product-label-group">
                                                    <label className="product-label label-sale">25% Off</label>
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
                                                    {/* <!-- <span className="price base-color">25% off</span> --> */}
                                                </div>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings" style={{width: "100%"}}></span>
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
                                                    <img src={pro_product_4} alt="product" width="280" height="315" />
                                                </a>
                                                <div className="product-label-group">
                                                    <label className="product-label label-sale">25% Off</label>
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
                                                    {/* <!-- <span className="price base-color">25% off</span> --> */}
                                                </div>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings" style={{width: "100%"}}></span>
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
                                                    <img src={pro_product_2} alt="product" width="280" height="315" />
                                                </a>
                                                <div className="product-label-group">
                                                    <label className="product-label label-sale">25% Off</label>
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
                                                    {/* <!-- <span className="price base-color">25% off</span> --> */}
                                                </div>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings" style={{width: "100%"}}></span>
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
                                                    <img src={pro_product_3} alt="product" width="280" height="315" />
                                                </a>
                                                <div className="product-label-group">
                                                    <label className="product-label label-sale">25% Off</label>
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
                                                    {/* <!-- <span className="price base-color">25% off</span> --> */}
                                                </div>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings" style={{width: "100%"}}></span>
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
    </section>

    <section className="new_our_idea pt-2 pt-md-7 pt-10 pb-8" id="distinct_table">
                                <div className="container p-0">
                                <h2 className="title-echo mb-1"><span>Why we are Distinct from other?</span></h2>
                                    <div className="row justify-content-center">
                                        <div className="col-sm-6">
                                            <div className="table-responsive table-bordered">          
                                                <table className="table">
                                                    <thead className="base-bg">
                                                      <tr>
                                                        <th>Be Bodywise Advantage</th>
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      <tr>
                                                        <td><i className="fas fa-certificate"></i> No Added Sugar</td>
                                                      </tr>
                                                      <tr>
                                                        <td><i className="fas fa-certificate"></i> Good for Gut Health</td>
                                                      </tr>
                                                      <tr>
                                                        <td><i className="fas fa-certificate"></i> No Preservatives</td>
                                                      </tr>
                                                    </tbody>
                                                </table>
                                              </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="table-responsive table-bordered">          
                                                <table className="table">
                                                    <thead className="red-bg">
                                                      <tr>
                                                        <th>Ordinary Products</th>
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      <tr>
                                                        <td><i className="fas fa-certificate fa-red"></i> Contains unnatural additions</td>
                                                      </tr>
                                                      <tr>
                                                        <td><i className="fas fa-certificate fa-red"></i> Not good for the Gut</td>
                                                      </tr>
                                                      <tr>
                                                        <td><i className="fas fa-certificate fa-red"></i> Contains Preservatives</td>
                                                      </tr>
                                                    </tbody>
                                                </table>
                                              </div>
                                        </div>
                                    </div>
                                </div>
    </section>
                <section className="new_our_idea pt-2 pt-md-7 pt-10 pb-8">
                                <div className="container p-0">
                                <h2 className="title-echo mb-1"><span>Frequently Asked Question?</span></h2>
                                <p className="new_our_idea_des">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                <div className="row justify-content-center">
                                    <div className="col-sm-9 offset-sm-1">
                                        <div className="code-template">
                                            <div className="accordion accordion-background accordion-icon accordion-boxed accordion-card-border accordion-plus accordion-gutter-sm code-content">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <a href="#collapse7-1" className="expand">Q. What are Effervescent?</a>
                                                    </div>
                                                    <div id="collapse7-1" className="collapsed">
                                                        <div className="card-body">
                                                            <p className="mb-0">Effervescent tablets are solid preparations of nutrients that are designed to release CO2 in contact with water through disintegration in a few minutes. It dissolves completely and becomes available in liquid form for easy and fastabsorbing dosing method. This occurs by a chemical reaction between the carbonate or bicarbonate salt (sodium bicarbonate) and a weak organic acid (citric or tartaric acid) in the liquid. It causes the tablets to make a bubbling effect producing fizzy drink making its usage interesting every time you take. It is also flavored naturally making the consumption tastier and simpler for supporting health.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <a href="#collapse7-2" className="expand">Q. How safe is to take effervescent daily?</a>
                                                    </div>
                                                    <div id="collapse7-2" className="collapsed">
                                                        <div className="card-body">
                                                            <p className="mb-0">It is safe to consume effervescent daily even in multiple count. It is necessary to take them with 8 ounces of water for each tablet. This might improve hydration and also support the desires in a healthy and fun way. Consulting with a medical professional is best before using or after finding discomforts with usage is beneficial. Also, taking it as recommended might prevent health complications.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <a href="#collapse7-3" className="expand">Q. Why not capsules or other forms of drugs?</a>
                                                    </div>
                                                    <div id="collapse7-3" className="collapsed">
                                                        <div className="card-body">
                                                            <p className="mb-0">Effervescent is the same as effervescent liquid drinks. It indulges users in consuming proper dosage and prevents stomach issues. This is not something like hard capsules which most of the people find difficulty to swallow and leaves no medicine taste behind even after swallowing. It can be naturally flavored and colored ensuring the taste and absorption without causing hesitation of consuming a health supplement.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <a href="#collapse7-4" className="expand">Q. What is the right way of taking these effervescent tablets?</a>
                                                    </div>
                                                    <div id="collapse7-4" className="collapsed">
                                                        <div className="card-body">
                                                            <p className="mb-0">It is better to fizz and drink these tablets during day time than at night as it might cause some sleeping discomfort. It can be taken with or without food but taking with food works better and results no way of attaining any stomach discomforts by preventing any acidic reactions.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <a href="#collapse7-5" className="expand">Q. Any precautionary to be followed before taking effervescent drink?</a>
                                                    </div>
                                                    <div id="collapse7-5" className="collapsed">
                                                        <div className="card-body">
                                                            <p className="mb-0">As said, taking multiple effervescent tablets is safe on a day. But if there is any prior health illness or already under medication kindly consult with the doctor before use. Do not exceed the limit or consume more numbers to prevent even mild side effects like stomach upset and nausea.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <a href="#collapse7-6" className="expand">Q. What are the problems for which effervescent available?</a>
                                                    </div>
                                                    <div id="collapse7-6" className="collapsed">
                                                        <div className="card-body">
                                                            <p className="mb-0">As of now, effervescent is the leading technology highly preferred by people to nourish their body and support. Hence, Liven consists of readily available effervescent tablet for weight loss (ACV), skin, hair, women's health, multivitamins and more.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                                </div>
                            </section>

    </>
    );

}


export default Product_Category;
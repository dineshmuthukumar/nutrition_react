import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import product_1 from "../../../images/new-images/demos/demo-food2/products/final/product_1.jpg";
import product_2 from "../../../images/new-images/demos/demo-food2/products/final/product_2.jpg";
import product_3 from "../../../images/new-images/demos/demo-food2/products/final/product_3.jpg";
import product_4 from "../../../images/new-images/demos/demo-food2/products/final/product_4.jpg";
import packag from "../../../images/new-images/demos/demo-food2/products/final/Packages.png";
import price_tag from "../../../images/new-images/demos/demo-food2/products/price_tag.png";
import a from "../../../images/new-images/demos/demo-food2/products/a.png";
import b from "../../../images/new-images/demos/demo-food2/products/b.png";
import c from "../../../images/new-images/demos/demo-food2/products/c.png";
import d from "../../../images/new-images/demos/demo-food2/products/d.png";
import e from "../../../images/new-images/demos/demo-food2/products/e.png";
import f from "../../../images/new-images/demos/demo-food2/products/f.png";


import pro_product_4 from "../../../images/new-images/demos/demo-food2/products/pro_product_4.jpg";
import pro_product_1 from "../../../images/new-images/demos/demo-food2/products/pro_product_1.jpg";
import pro_product_2 from "../../../images/new-images/demos/demo-food2/products/pro_product_2.jpg";
import pro_product_3 from "../../../images/new-images/demos/demo-food2/products/pro_product_3.jpg";
import pro_banner_2 from "../../../images/new-images/demos/demo-food2/products/pro_banner_2.jpg"

import a_1 from "../../../images/new-images/demos/demo-food2/icons/icon/1-a.png";
import a_2 from "../../../images/new-images/demos/demo-food2/icons/icon/2-a.png"
import a_3 from "../../../images/new-images/demos/demo-food2/icons/icon/3-a.png"
import a_4 from "../../../images/new-images/demos/demo-food2/icons/icon/4-a.png"
import a_5 from "../../../images/new-images/demos/demo-food2/icons/icon/5-a.png"
import a_6 from "../../../images/new-images/demos/demo-food2/icons/icon/6-a.png"
import a_7 from "../../../images/new-images/demos/demo-food2/icons/icon/7-a.png"
import a_8 from "../../../images/new-images/demos/demo-food2/icons/icon/8-a.png"
import a_9 from "../../../images/new-images/demos/demo-food2/icons/icon/9-a.png"
import a_10 from "../../../images/new-images/demos/demo-food2/icons/icon/10-a.png";
import a_11 from "../../../images/new-images/demos/demo-food2/icons/icon/11-a.png"
import a_12 from "../../../images/new-images/demos/demo-food2/icons/icon/12-a.png"


import usage_img from "../../../images/new-images/demos/demo-food2/products/final/usage_img.jpg"

import radius_1 from "../../../images/new-images/demos/demo-food2/banners/radius_1.png"
import radius_2 from "../../../images/new-images/demos/demo-food2/banners/radius_2.png"
import radius_3 from "../../../images/new-images/demos/demo-food2/banners/radius_3.png"
import radius_4 from "../../../images/new-images/demos/demo-food2/banners/radius_4.png"

import apple_feature from "../../../images/new-images/demos/demo-food2/products/final/apple_feature.png"
import why_choose from "../../../images/new-images/demos/demo-food2/products/why_choose.png";


import app_1 from "../../../images/new-images/demos/demo-food2/products/final/app_1.png";
import app_2 from "../../../images/new-images/demos/demo-food2/products/final/app_2.png";
import app_3 from "../../../images/new-images/demos/demo-food2/products/final/app_3.png";
import app_4 from "../../../images/new-images/demos/demo-food2/products/final/app_4.png";
import app_5 from "../../../images/new-images/demos/demo-food2/products/final/app_5.png";

import app_11 from "../../../images/new-images/demos/demo-food2/products/final/app_11.png";
import app_22 from "../../../images/new-images/demos/demo-food2/products/final/app_22.png";
import app_33 from "../../../images/new-images/demos/demo-food2/products/final/app_33.png";
import app_44 from "../../../images/new-images/demos/demo-food2/products/final/app_44.png";
import app_55 from "../../../images/new-images/demos/demo-food2/products/final/app_55.png";

import Comment_1 from "../../../images/new-images/blog/comments/1.jpg"
import Comment_2 from "../../../images/new-images/blog/comments/2.jpg"


const ProductDetails = () => {
  


  return (
    <>
        <section className="">
            <div className="product product-single" id="cart_product_page">
                <div className="row">
                    <div className="col-md-6">
                        <div className="product-gallery product-gallery-sticky mb-lg-9 mb-4 pb-0">
                            <div className="product-single-carousel owl-carousel owl-theme owl-nav-inner row cols-1">
                                <figure className="product-image">
                                    <img
                                        src={product_1}
                                        data-zoom-image={product_1}
                                        alt="Women's Brown Leather Backpacks"
                                        width="600"
                                        height="675"
                                    />
                                </figure>
                                <figure className="product-image">
                                    <img
                                        src={product_2}
                                        data-zoom-image={product_2}
                                        alt="Women's Brown Leather Backpacks"
                                        width="600"
                                        height="675"
                                    />
                                </figure>
                                <figure className="product-image">
                                    <img
                                        src={product_3}
                                        data-zoom-image={product_3}
                                        alt="Women's Brown Leather Backpacks"
                                        width="600"
                                        height="675"
                                    />
                                </figure>
                                <figure className="product-image">
                                    <img
                                        src={product_4}
                                        data-zoom-image={product_4}
                                        alt="Women's Brown Leather Backpacks"
                                        width="600"
                                        height="675"
                                    />
                                </figure>
                            </div>

                            <div className="inner-product-label-group">
                                {/* <!-- <label className="inner-product-label label-sale">25% Off</label> --> */}
                                <img src={price_tag} />
                            </div>

                            <div className="product-thumbs-wrap" style={{display: "block"}}>
                                <div className="row">
                                    <div className="col-sm-9">
                                        <div className="product-thumbs">
                                            <div className="product-thumb active">
                                                <img src={product_1} alt="product thumbnail" className="product-thumb_img" />
                                            </div>
                                            <div className="product-thumb">
                                                <img src={product_2} alt="product thumbnail" className="product-thumb_img" />
                                            </div>
                                            <div className="product-thumb">
                                                <img src={product_3} alt="product thumbnail" className="product-thumb_img" />
                                            </div>
                                            <div className="product-thumb">
                                                <img src={product_4} alt="product thumbnail" className="product-thumb_img" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- <div className="col-sm-4">
                                    <button className="thumb-up disabled"><i className="fas fa-chevron-left"></i></button>
                                    <button className="thumb-down disabled"><i className="fas fa-chevron-right"></i></button>  
                                    </div> --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-details">
                            <h1 className="product-name">Apple Cider Vinegar - LIVEN BURN with ACV!</h1>
                            <p>Liven BURN with Apple Cider Vinegar with goodness of mother and Garcinia Cambogia and Inulin Fibers.</p>
                            <div className="ratings-container justify-content-start">
                                <div className="ratings-full">
                                    <span className="ratings" style={{width: "0%"}}></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                </div>
                                <a href="#product-tab-reviews" className="link-to-tab rating-reviews">( 0 reviews )</a>
                            </div>
                            <p className="product-short-desc">
                                A fizzy formula with infusion of pure ACV and Garcinia with HCA compound to control appetite, Pomegranate to boost metabolism, inulin fibers for better digestion and satiation that promotes
                                healthy weight loss.
                            </p>
                            <div className="product_list_icon">
                                <div className="row" style={{display:"none"}}>
                                    <div className="col-sm-12">
                                        <ul>
                                            <li>
                                                <div className="icon-box icon-box-side">
                                                    {/* <!-- <i className="icon-box-icon d-icon-truck"></i> --> */}
                                                    <img src={a} className="pro_des_icon" />
                                                    <div className="icon-box-content">
                                                        <h4 className="icon-box-title text-capitalize ls-normal">Provides antioxidants & skin support</h4>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-box icon-box-side">
                                                    {/* <!-- <i className="icon-box-icon d-icon-truck"></i> --> */}
                                                    <img src={b} className="pro_des_icon" />
                                                    <div className="icon-box-content">
                                                        <h4 className="icon-box-title text-capitalize ls-normal">Enhances fat-burning</h4>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-box icon-box-side">
                                                    {/* <!-- <i className="icon-box-icon d-icon-truck"></i> --> */}
                                                    <img src={c} className="pro_des_icon" />
                                                    <div className="icon-box-content">
                                                        <h4 className="icon-box-title text-capitalize ls-normal">Suppresses cravings</h4>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-box icon-box-side">
                                                    {/* <!-- <i className="icon-box-icon d-icon-truck"></i> --> */}
                                                    <img src={d} className="pro_des_icon" />
                                                    <div className="icon-box-content">
                                                        <h4 className="icon-box-title text-capitalize ls-normal">Supports heart health</h4>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-box icon-box-side">
                                                    {/* <!-- <i className="icon-box-icon d-icon-truck"></i> --> */}
                                                    <img src={e} className="pro_des_icon" />
                                                    <div className="icon-box-content">
                                                        <h4 className="icon-box-title text-capitalize ls-normal">Keeps you hydrated</h4>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-box icon-box-side">
                                                    {/* <!-- <i className="icon-box-icon d-icon-truck"></i> --> */}
                                                    <img src={f} className="pro_des_icon" />
                                                    <div className="icon-box-content">
                                                        <h4 className="icon-box-title text-capitalize ls-normal">Delicious</h4>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row mt-3 mb-3">
                                    <div className="col-sm-12">
                                        <div className="product-form-group">
                                            <button className="btn-product btn-cart"><i className="d-icon-bag"></i>Apple Flavour</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row cart_packlist" style={{display:"none"}}>
                                <div className="col-sm-4 p-0">
                                    <div className="plans">
                                        <label className="plan basic-plan" htmlFor="basic">
                                            <input type="radio" name="plan" id="basic" />
                                            <div className="plan-content">
                                                <div className="plan-details">
                                                    <span>Sample Package</span>
                                                    <div className="pack_padding">
                                                        <h1 className="pack_tittle">Per Bottle</h1>
                                                        <h1 className="pack_tittle_save">(Save $40.00)</h1>
                                                        <img src={pro_product_4} />
                                                    </div>
                                                    <div className="pack_add_cart"><i className="fa fa-inr" aria-hidden="true"></i> 220 / Fulse</div>
                                                </div>
                                            </div>
                                        </label>
                                        <div className="inner-product-label-group2">
                                            <label className="inner-product-label label-sale2">25% Off</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 p-0">
                                    <div className="plans">
                                        <label className="plan complete-plan" htmlFor="complete">
                                            <input type="radio" id="complete" name="plan" />
                                            <div className="plan-content">
                                                <div className="plan-details">
                                                    <span>Sample Package</span>
                                                    <div className="pack_padding">
                                                        <h1 className="pack_tittle">Per Bottle</h1>
                                                        <h1 className="pack_tittle_save">(Save $40.00)</h1>
                                                        <img src={pro_product_4} />
                                                    </div>
                                                    <div className="pack_add_cart"><i className="fa fa-inr" aria-hidden="true"></i> 220 / Fulse</div>
                                                </div>
                                            </div>
                                        </label>
                                        <div className="inner-product-label-group2">
                                            <label className="inner-product-label label-sale2">25% Off</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 p-0">
                                    <div className="plans">
                                        <label className="plan complete-plan" htmlFor="future">
                                            <input type="radio" id="future" name="plan" />
                                            <div className="plan-content">
                                                <div className="plan-details">
                                                    <span>Sample Package</span>
                                                    <div className="pack_padding">
                                                        <h1 className="pack_tittle">Per Bottle</h1>
                                                        <h1 className="pack_tittle_save">(Save $40.00)</h1>
                                                        <img src={pro_product_4} />
                                                    </div>
                                                    <div className="pack_add_cart"><i className="fa fa-inr" aria-hidden="true"></i> 220 / Fulse</div>
                                                </div>
                                            </div>
                                        </label>
                                        <div className="inner-product-label-group2">
                                            <label className="inner-product-label label-sale2">25% Off</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <img src={packag} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-4"></div>
                                <div className="col-sm-4">
                                    <div className="product-form product-qty">
                                        <div className="product-form-group">
                                            <button className="btn-product btn-cart"><i className="d-icon-bag"></i>Add To BAG</button>
                                        </div>
                                    </div>  
                                </div>
                                <div className="col-sm-4"></div>
                            </div>

                            <hr className="product-divider mb-3" />
                        </div>
                    </div>
                </div>
                <div className="add_to_whitelist">
                    <h2 className="title title-center ls-s mb-8 dis_block">Best to Opt with</h2>
                    <div className="row d-flex-center">
                        <div className="col-sm-8">
                            <div className="row">
                                <div className="col-sm-4">
                                    <img src={pro_product_1} className="" />
                                    <a href="#" className="no-hover cart_plus_icon"><i className="fas fa-plus"></i></a>
                                </div>
                                <div className="col-sm-4">
                                    <img src={pro_product_2} className="" />
                                    <a href="#" className="no-hover cart_plus_icon"><i className="fas fa-plus"></i></a>
                                </div>
                                <div className="col-sm-4">
                                    <img src={pro_product_3} className="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="product-price ls-md offer_price_details">
                                <span className="">Total Price : </span>
                                <span className="price">$140.00</span>
                                <span className="price line-through">Rs. 2,499</span>
                            </div>
                            <div className="product-form-group justify-content-center">
                                <button className="btn-product btn-cart wid_200"><i className="d-icon-bag pr-2"></i> Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="form-checkbox mb-0">
                                <input type="checkbox" className="custom-checkbox" id="create-account" name="create-account" />
                                <label className="form-control-label ls-s" for="create-account">This item: Glow Japanese Marine Collagen Peptides</label>
                                <div className="product_pack_count">
                                    <select name="orderby" className="form-control count_pack_value">
                                        <option value="default">Pack of 1</option>
                                        <option value="popularity" selected="selected">Pack of 2</option>
                                    </select>
                                </div>
                                <div className="product-price ls-md offer_price_details">
                                    <span className="price line-through">Rs. 2,499</span>
                                    <span className="price">$140.00</span>
                                    <span className="price base-color">25% off</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-checkbox mb-6">
                                <input type="checkbox" className="custom-checkbox" id="different-address" name="different-address" />
                                <label className="form-control-label ls-s" htmlFor="different-address">Beauty Japanese Marine Collagen Peptides</label>
                                <div className="product_pack_count">
                                    <select name="orderby" className="form-control count_pack_value">
                                        <option value="default">Pack of 1</option>
                                        <option value="popularity" defaultValue="selected">Pack of 2</option>
                                    </select>
                                </div>
                                <div className="product-price ls-md offer_price_details">
                                    <span className="price line-through">Rs. 2,499</span>
                                    <span className="price">$140.00</span>
                                    <span className="price base-color">25% off</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-checkbox mb-0">
                                <input type="checkbox" className="custom-checkbox" id="create-account-add" name="create-account-add" />
                                <label className="form-control-label ls-s" htmlFor="create-account-add">This item: Glow Japanese Marine Collagen Peptides</label>
                                <div className="product_pack_count">
                                    <select name="orderby" className="form-control count_pack_value">
                                        <option value="default">Pack of 1</option>
                                        <option value="popularity" defaultValue="selected">Pack of 2</option>
                                    </select>
                                </div>
                                <div className="product-price ls-md offer_price_details">
                                    <span className="price line-through">Rs. 2,499</span>
                                    <span className="price">$140.00</span>
                                    <span className="price base-color">25% off</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="product_banner_section_3" style={{display: "none"}}>
                            <div className="container">
                                <div className="row product_banner_3">
                                    <div className="col-sm-8">
                                        <div className="code-template">
                                            <div className="accordion accordion-background accordion-icon accordion-boxed accordion-card-border accordion-plus accordion-gutter-sm code-content">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <a href="#collapse7-1" className="collapse">Q. How to consume?</a>
                                                    </div>
                                                    <div id="collapse7-1" className="expanded">
                                                        <div className="card-body">
                                                            <p className="mb-0">- Drop one tab in 250 ml of water.</p>
                                                            <p className="mb-0">- Wait for it to fizz.</p>
                                                            <p className="mb-0">- Gulp down the deicious goodness of ACV.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <a href="#collapse7-2" className="expand">Q. How and when to consume ACV tablet?</a>
                                                    </div>
                                                    <div id="collapse7-2" className="expanded">
                                                        <div className="card-body">
                                                            <p className="mb-0">
                                                                It is better to take 1 Liven Burn ACV effervescent tablet one time a day preferably each morning on an empty stomach or 20 minutes before a meal. The usage direction is to drop
                                                                one tablet in a glass (250 ml) of water and wait until it dissolves. Now gulp down the fizzy drink for gaining excellent energy and weight loss support.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 text-center">
                                        <img src={pro_banner_2} style={{width:"100%",padding:"0px 20px"}} />
                                    </div>
                                </div>
                            </div>
        </section>

        <section className="element-section mt-9 mb-10">
                            <div className="container">
                                <h2 className="title title-center ls-s mb-8 dis_block">Liven Burn is Safe!</h2>
                                <div className="row elements justify-content-center">
                                    <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                                        <a href="#" className="element-type">
                                            <div className="element element-accordian dotted_border">
                                                <img src={a_1} className="whole_food_img" />
                                                <p>Gluten Free</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                                        <a href="#" className="element-type">
                                            <div className="element element-icon dotted_border">
                                                <img src={a_2} className="whole_food_img" />
                                                <p>Sugar Free</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                                        <a href="#" className="element-type">
                                            <div className="element element-blog dotted_border">
                                                <img src={a_3} className="whole_food_img" />
                                                <p>Corn Free</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                                        <a href="#" className="element-type">
                                            <div className="element element-icon dotted_border">
                                                <img src={a_4} className="whole_food_img" />
                                                <p>Trans Fats Free</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                                        <a href="#" className="element-type">
                                            <div className="element element-button dotted_border">
                                                <img src={a_5} className="whole_food_img" />
                                                <p>Soy Free</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                                        <a href="#" className="element-type">
                                            <div className="element element-button dotted_border">
                                                <img src={a_6} className="whole_food_img" />
                                                <p>Paraben Free</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="" style={{display:"none"}}>
                                    <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                                        <a href="#" className="element-type">
                                            <div className="element element-icon dotted_border">
                                                <img src={a_7} className="whole_food_img" />
                                                <p>Sulfites Free</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                                        <a href="#" className="element-type">
                                            <div className="element element-button dotted_border">
                                                <img src={a_8} className="whole_food_img" />
                                                <p>Gmo Free</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                                        <a href="#" className="element-type">
                                            <div className="element element-button dotted_border">
                                                <img src={a_9} className="whole_food_img" />
                                                <p>Egg Free</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                                        <a href="#" className="element-type">
                                            <div className="element element-button dotted_border">
                                                <img src={a_10} className="whole_food_img" />
                                                <p>Nitrates Free</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                                        <a href="#" className="element-type">
                                            <div className="element element-button dotted_border">
                                                <img src={a_11} className="whole_food_img" />
                                                <p>Nuts Free</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                                        <a href="#" className="element-type">
                                            <div className="element element-button dotted_border">
                                                <img src={a_12} className="whole_food_img" />
                                                <p>Dairy Free</p>
                                            </div>
                                        </a>
                                    </div>
                                    </div>

                                </div>
                               
                            </div>
        </section>

        <section className="element-section" id="why_choose_image">
                            <div className="container">
                                <div className="row mt-5">
                                    <div className="col-md-7">
                                        <h2 className="description-title mb-4 font-weight-semi-bold ls-m">How to Use?</h2>
                                        <ul className="mb-8">
                                            <li><b>Pop</b>: Remove the Desiccant cap. product image here</li>
                                            <li><b>Drop</b>: Put 1 tab in a glass of water (250ml).</li>
                                            <li><b>Fizz</b>: Wait till it dissolves.</li>
                                            <li><b>Savour</b>: Drink it for tasting the delicious benefits of Liven BURN with ACV.</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-5">
                                        <img src={usage_img} style={{width:"100%"}} />
                                    </div>
                                </div>
                            </div>
        </section>

        <section className="" id="absolute_cart">
                            <div className="container">
                                <h2 className="title title-center ls-s mb-8 dis_block">Who to take Liven Burn with ACV?</h2>
                                <br />
                                <div className="row mt-10" style={{display: "none"}}>
                                    <div className="col-sm-3">
                                        <div className="icon-box icon-inversed text-center">
                                            <span className="icon-box-icon">
                                                {/* <!-- <i className="d-icon-database"></i> --> */}
                                                <img src={radius_1} alt="category" />
                                            </span>
                                            <div className="icon-box-content">
                                                <p>Sed egestas, ante et vulputate volutpat, ros pede sempe.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="icon-box icon-inversed text-center">
                                            <span className="icon-box-icon">
                                                {/* <!-- <i className="d-icon-database"></i> --> */}
                                                <img src={radius_2} alt="category" />
                                            </span>
                                            <div className="icon-box-content">
                                                <p>Sed egestas, ante et vulputate volutpat, ros pede sempe.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="icon-box icon-inversed text-center">
                                            <span className="icon-box-icon">
                                                {/* <!-- <i className="d-icon-database"></i> --> */}
                                                <img src={radius_3} alt="category" />
                                            </span>
                                            <div className="icon-box-content">
                                                <p>Sed egestas, ante et vulputate volutpat, ros pede sempe.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="icon-box icon-inversed text-center">
                                            <span className="icon-box-icon">
                                                {/* <!-- <i className="d-icon-database"></i> --> */}
                                                <img src={radius_4} alt="category" />
                                            </span>
                                            <div className="icon-box-content">
                                                <p>Sed egestas, ante et vulputate volutpat, ros pede sempe.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row pro_feature">
                                    <div className="col-sm-12">
                                        <img src={apple_feature} className="acv_img" />
                                    </div>
                                </div>
                                
                                <div className="row mt-5" style={{display:"none"}}>
                                    <div className="col-sm-8">
                                        <div className="row">
                                            <h2 className="description-title mb-4 font-weight-semi-bold ls-m">What is the right time to consume?</h2>
                                            <div className="col-lg-6 col-12 text-center mt-md-0">
                                                <div className="icon-box icon-box1 pt-0">
                                                    <div className="icon-box-icon mx-auto drop-shadow ml-lg-0">
                                                        <figure>
                                                            <img src={radius_1} alt="icon" width="100" height="auto" />
                                                        </figure>
                                                    </div>
                                                    <div className="icon-box-content">
                                                        <p>20 minutes before meal</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 text-center mt-md-0">
                                                <div className="icon-box icon-box1 pt-0">
                                                    <div className="icon-box-icon mx-auto drop-shadow ml-lg-0">
                                                        <figure>
                                                            <img src={radius_2} alt="icon" width="100" height="auto" />
                                                        </figure>
                                                    </div>
                                                    <div className="icon-box-content">
                                                        <p>Follow Healthy diet and exercise</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-12 text-center mt-md-0">
                                                <div className="icon-box icon-box1 pt-4">
                                                    <div className="icon-box-icon mx-auto drop-shadow ml-lg-0">
                                                        <figure>
                                                            <img src={radius_3} alt="icon" width="100" height="auto" />
                                                        </figure>
                                                    </div>
                                                    <div className="icon-box-content">
                                                        <p>Consume up to 90-180 days</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 text-center mt-md-0">
                                                <div className="icon-box icon-box1 pt-4">
                                                    <div className="icon-box-icon mx-auto drop-shadow ml-lg-0">
                                                        <figure>
                                                            <img src={radius_4} alt="icon" width="100" height="auto" />
                                                        </figure>
                                                    </div>
                                                    <div className="icon-box-content">
                                                        <p>Supports both men and women</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <img src={pro_banner_2} />
                                    </div>
                                </div>

                            </div>
        </section>

        <section className="element-section" id="why_choose_image">
                            <div className="container">
                                <div className="row mt-5">
                                    <div className="col-md-12">
                                        <h2 className="description-title mb-4 font-weight-semi-bold ls-m text-center">How Liven Burn Works?</h2>
                                        <p className="text-left">A fizzy formula with infusion of pure ACV and Garcinia with HCA compound to control appetite, Pomegranate to boost metabolism, inulin fibers for better digestion and satiation that promotes healthy weight loss. A fizzy formula with infusion of pure ACV and Garcinia with HCA compound to control appetite, Pomegranate to boost metabolism, inulin fibers for better digestion and satiation that promotes healthy weight loss.</p>
                                        <p className="text-left">A fizzy formula with infusion of pure ACV and Garcinia with HCA compound to control appetite, Pomegranate to boost metabolism, inulin fibers for better digestion and satiation that promotes healthy weight loss.</p>
                                    </div>
                                </div>
                                <div className="row burn_works mb-10">
                                    <div className="col-sm-4 burn_works">
                                        <img src={a} className="pro_des_icon2" />
                                        Provides Antioxidants & Skin Support
                                    </div>
                                    <div className="col-sm-4 burn_works">
                                        <img src={b} className="pro_des_icon2" />
                                        Enhances Fat-Burning
                                    </div>
                                    <div className="col-sm-4 burn_works">
                                        <img src={c} className="pro_des_icon2" />
                                        Suppresses Cravings
                                    </div>
                                    <div className="col-sm-4 burn_works">
                                        <img src={d} className="pro_des_icon2" />
                                        Supports Heart Health
                                    </div>
                                    <div className="col-sm-4 burn_works">
                                        <img src={e} className="pro_des_icon2" />
                                        Keeps You Hydrated
                                    </div>
                                    <div className="col-sm-4 burn_works">
                                        <img src={f} className="pro_des_icon2" />
                                        Delicious
                                    </div>
                                </div>

                                <div className="row mt-10">
                                    <div className="col-md-8">
                                        <h2 className="description-title mb-4 font-weight-semi-bold ls-m">Why Choose Liven BURN with AVC?</h2>
                                        <p>A pure extraction process that filters out the unnecessaries and retains the healthy compounds with the mother making the fizzy drink healthy and delicious.</p>
                                        <ul className="mb-8">
                                            <li>Sweet to taste with natural sweeteners!</li>
                                            <li>High quality ingredients with unpasteurized fermented apple juice.</li>
                                            <li>Highly beneficial to implement in daily routine.</li>
                                            <li>Supports holistic health.</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                        <img src={why_choose} style={{width:"85%"}} />
                                    </div>
                                </div>

                            </div>
        </section>

        <section className="arrivals-section appear-animate" id="Potential_product">
                            <h2 className="title title-center ls-s mb-8 dis_block">Includes Healing Potential of:</h2>
                            <div className="tab tab-nav-center">
                                <div className="tab-content">
                                    <div className="tab-pane pt-4 active" id="fruits">
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
                                                'items': 4
                                            },
                                            '992': {
                                                'items': 4
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
                                                // autoplay
                                                loop
                                                autoplayTimeout={2000}
                                                autoplayHoverPause={true}
                                                // navText={[
                                                //   '<i class="fa fa-chevron-left"></i>"',
                                                //   '<i class="fa fa-chevron-right"></i>'
                                                // ]}
                                            
                                            >

                                            <div className="product text-center product-with-qty no_border">
                                                <figure className="product-media">
                                                    <a href="$">
                                                        <img src={app_1} alt="product" width="280" height="315" />
                                                        <img src={app_11} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-plus"></i></a>
                                                    </div>
                                                </figure>
                                            </div>
                                            <div className="product text-center product-with-qty no_border">
                                                <figure className="product-media">
                                                    <a href="$">
                                                        <img src={app_2} alt="product" width="280" height="315" />
                                                        <img src={app_22} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-plus"></i></a>
                                                    </div>
                                                </figure>
                                            </div>
                                            <div className="product text-center product-with-qty no_border">
                                                <figure className="product-media">
                                                    <a href="$">
                                                        <img src={app_3} alt="product" width="280" height="315" />
                                                        <img src={app_33} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-plus"></i></a>
                                                    </div>
                                                </figure>
                                            </div>
                                            <div className="product text-center product-with-qty no_border">
                                                <figure className="product-media">
                                                    <a href="$">
                                                        <img src={app_4} alt="product" width="280" height="315" />
                                                        <img src={app_44} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-plus"></i></a>
                                                    </div>
                                                </figure>
                                            </div>
                                            <div className="product text-center product-with-qty no_border">
                                                <figure className="product-media">
                                                    <a href="$">
                                                        <img src={app_5} alt="product" width="280" height="315" />
                                                        <img src={app_55} alt="product" width="280" height="315" />
                                                    </a>
                                                    <div className="product-action-vertical">
                                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-plus"></i></a>
                                                    </div>
                                                </figure>
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
        </section>

        <section className="new_our_idea pt-2 pt-md-7 pt-10">
                            <div className="container p-0">
                                <h2 className="title-echo mb-1"><span>Customer Review</span></h2>
                                <p className="new_our_idea_des">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                                </p>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="">
                                            <div className="review-overlay"></div>
                                            <div className="review-form-wrapper">
                                                <div className="title-wrapper text-left">
                                                    <h3 className="title title-simple text-left text-normal">Add a Review</h3>
                                                    <p>Your email address will not be published. Required fields are marked *</p>
                                                </div>
                                                <div className="rating-form">
                                                    <label for="rating" className="text-dark">Your rating * </label>
                                                    <span className="rating-stars selected">
                                                        <a className="star-1" href="demo-food2-product.html#">1</a>
                                                        <a className="star-2" href="demo-food2-product.html#">2</a>
                                                        <a className="star-3" href="demo-food2-product.html#">3</a>
                                                        <a className="star-4 active" href="demo-food2-product.html#">4</a>
                                                        <a className="star-5" href="demo-food2-product.html#">5</a>
                                                    </span>

                                                    <select name="rating" id="rating" required="" style={{display: "none"}}>
                                                        <option value="">Rate…</option>
                                                        <option value="5">Perfect</option>
                                                        <option value="4">Good</option>
                                                        <option value="3">Average</option>
                                                        <option value="2">Not that bad</option>
                                                        <option value="1">Very poor</option>
                                                    </select>
                                                </div>
                                                <form action="demo-food2-product.html#">
                                                    <textarea id="reply-message" cols="30" rows="6" className="form-control mb-4" placeholder="Comment *" required></textarea>
                                                    <button type="submit" className="btn-product btn-cart wid_200">Submit<i className="d-icon-arrow-right"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card-body expanded" id="collapse1-3" style={{display: "block"}}>
                                            <div className="row">
                                                <div className="col-12 mb-6">
                                                    <div className="avg-rating-container">
                                                        <mark>5.0</mark>
                                                        <div className="avg-rating">
                                                            <span className="avg-rating-title">Average Rating</span>
                                                            <div className="ratings-container mb-0">
                                                                <div className="ratings-full">
                                                                    <span className="ratings" style={{width: "100%"}}></span>
                                                                    <span className="tooltiptext tooltip-top">5.00</span>
                                                                </div>
                                                                <span className="rating-reviews">(2 Reviews)</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ratings-list mb-2">
                                                        <div className="ratings-item">
                                                            <div className="ratings-container mb-0">
                                                                <div className="ratings-full">
                                                                    <span className="ratings" style={{width: "100%"}}></span>
                                                                    <span className="tooltiptext tooltip-top">5.00</span>
                                                                </div>
                                                            </div>
                                                            <div className="rating-percent">
                                                                <span style={{width: "100%"}}></span>
                                                            </div>
                                                            <div className="progress-value">100%</div>
                                                        </div>
                                                        <div className="ratings-item">
                                                            <div className="ratings-container mb-0">
                                                                <div className="ratings-full">
                                                                    <span className="ratings" style={{width: "80%"}}></span>
                                                                    <span className="tooltiptext tooltip-top">4.00</span>
                                                                </div>
                                                            </div>
                                                            <div className="rating-percent">
                                                                <span style={{width: "0%"}}></span>
                                                            </div>
                                                            <div className="progress-value">0%</div>
                                                        </div>
                                                        <div className="ratings-item">
                                                            <div className="ratings-container mb-0">
                                                                <div className="ratings-full">
                                                                    <span className="ratings" style={{width: "60%"}}></span>
                                                                    <span className="tooltiptext tooltip-top">4.00</span>
                                                                </div>
                                                            </div>
                                                            <div className="rating-percent">
                                                                <span style={{width: "0%"}}></span>
                                                            </div>
                                                            <div className="progress-value">0%</div>
                                                        </div>
                                                        <div className="ratings-item">
                                                            <div className="ratings-container mb-0">
.                                                                <div className="ratings-full">
                                                                    <span className="ratings" style={{width: "40%"}}></span>
                                                                    <span className="tooltiptext tooltip-top">2.00</span>
                                                                </div>
                                                            </div>
                                                            <div className="rating-percent">
                                                                <span style={{width: "0%"}}></span>
                                                            </div>
                                                            <div className="progress-value">0%</div>
                                                        </div>
                                                        <div className="ratings-item">
                                                            <div className="ratings-container mb-0">
                                                                <div className="ratings-full">
                                                                    <span className="ratings" style={{width: "20%"}}></span>
                                                                    <span className="tooltiptext tooltip-top">4.00</span>
                                                                </div>
                                                            </div>
                                                            <div className="rating-percent">
                                                                <span style={{width: "0%"}}></span>
                                                            </div>
                                                            <div className="progress-value">0%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 comments pt-2 border-no">
                                                    <nav className="toolbox">
                                                        <div className="toolbox-right">
                                                            <div className="toolbox-item toolbox-sort select-box text-dark">
                                                                <label>Sort By :</label>
                                                                <select name="orderby" className="form-control">
                                                                    <option value="">Default Order</option>
                                                                    <option value="newest" selected="selected">Newest Reviews </option>
                                                                    <option value="oldest">Oldest Reviews</option>
                                                                    <option value="high_rate">Highest Rating</option>
                                                                    <option value="low_rate">Lowest Rating</option>
                                                                    <option value="most_likely">Most Likely</option>
                                                                    <option value="most_unlikely">Most Unlikely</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </nav>
                                                    <ul className="comments-list">
                                                        <li>
                                                            <div className="comment">
                                                                <figure className="comment-media">
                                                                    <a href="#">
                                                                        <img src={Comment_1} alt="avatar" />
                                                                    </a>
                                                                </figure>
                                                                <div className="comment-body">
                                                                    <div className="comment-rating ratings-container">
                                                                        <div className="ratings-full">
                                                                            <span className="ratings" style={{width: "100%"}}></span>
                                                                            <span className="tooltiptext tooltip-top">5.00</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="comment-user">
                                                                        <span className="comment-date">
                                                                            by <span className="font-weight-semi-bold text-uppercase text-dark">John Doe</span> on <span className="font-weight-semi-bold text-dark">Nov 22, 2018</span>
                                                                        </span>
                                                                    </div>

                                                                    <div className="comment-content mb-5">
                                                                        <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.</p>
                                                                    </div>

                                                                    <div className="feeling mt-5">
                                                                        <button className="btn btn-link btn-icon-left btn-slide-up btn-infinite like mr-2">
                                                                            <i className="fa fa-thumbs-up"></i>
                                                                            Like (<span className="count">0</span>)
                                                                        </button>
                                                                        <button className="btn btn-link btn-icon-left btn-slide-down btn-infinite unlike active">
                                                                            <i className="fa fa-thumbs-down"></i>
                                                                            Unlike (<span className="count">1</span>)
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="comment">
                                                                <figure className="comment-media">
                                                                    <a href="#">
                                                                        <img src={Comment_2} alt="avatar" />
                                                                    </a>
                                                                </figure>

                                                                <div className="comment-body">
                                                                    <div className="comment-rating ratings-container">
                                                                        <div className="ratings-full">
                                                                            <span className="ratings" style={{width: "100%"}}></span>
                                                                            <span className="tooltiptext tooltip-top"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="comment-user">
                                                                        <span className="comment-date">
                                                                            by <span className="font-weight-semi-bold text-uppercase text-dark">John Doe</span> on <span className="font-weight-semi-bold text-dark">Nov 22, 2018</span>
                                                                        </span>
                                                                    </div>

                                                                    <div className="comment-content">
                                                                        <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.</p>
                                                                    </div>
                                                                    <div className="feeling mt-5">
                                                                        <button className="btn btn-link btn-icon-left btn-slide-up btn-infinite like mr-2">
                                                                            <i className="fa fa-thumbs-up"></i>
                                                                            Like (<span className="count">0</span>)
                                                                        </button>
                                                                        <button className="btn btn-link btn-icon-left btn-slide-down btn-infinite unlike">
                                                                            <i className="fa fa-thumbs-down"></i>
                                                                            Unlike (<span className="count">0</span>)
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <nav className="toolbox toolbox-pagination justify-content-end">
                                                        <ul className="pagination">
                                                            <li className="page-item disabled">
                                                                <a className="page-link page-link-prev" href="#" aria-label="Previous" tabindex="-1" aria-disabled="true"> <i className="d-icon-arrow-left"></i>Prev </a>
                                                            </li>
                                                            <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a></li>
                                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                            <li className="page-item page-item-dots"><a className="page-link" href="#">6</a></li>
                                                            <li className="page-item">
                                                                <a className="page-link page-link-next" href="#" aria-label="Next"> Next<i className="d-icon-arrow-right"></i> </a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
        </section>

        <section className="new_our_idea pt-2 pt-md-7 pt-10 pb-8">
                            <div className="container p-0">
                                <h2 className="title-echo mb-1"><span>Clear Your Mind Now! Answers for Your Queries!</span></h2>
                                <br />
                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="code-template">
                                            <div className="accordion accordion-background accordion-icon accordion-boxed accordion-card-border accordion-plus accordion-gutter-sm code-content">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <a href="#collapse7-1" className="collapse">Q. How many tablets a day helps taste the benefits of Liven Burn as Fitness Fuel?</a>
                                                    </div>
                                                    <div id="collapse7-1" className="expanded">
                                                        <div className="card-body">
                                                            <p className="mb-0">Taking one tablet of Liven Burn with ACV with high inulin fiber helps in attaining nutritional weight loss support making users healthier and happier.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <a href="#collapse7-2" className="expand">Q. How and when to consume ACV tablet?</a>
                                                    </div>
                                                    <div id="collapse7-2" className="collapsed">
                                                        <div className="card-body">
                                                            <p className="mb-0">
                                                                It is better to take 1 Liven Burn ACV effervescent tablet one time a day preferably each morning on an empty stomach or 20 minutes before a meal. The usage direction is to drop
                                                                one tablet in a glass (250 ml) of water and wait until it dissolves. Now gulp down the fizzy drink for gaining excellent energy and weight loss support.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <a href="#collapse7-3" className="expand">Q. Are these effervescent tablets effective in producing long-term results?</a>
                                                    </div>
                                                    <div id="collapse7-3" className="collapsed">
                                                        <div className="card-body">
                                                            <p className="mb-0">
                                                                Yes. The ACV in each tablet is made precise and it delivers extraordinary support. Moreover, there is an additional nutritive support of garcinia, pomegranate and inulin for
                                                                enriching the health by controlling appetite and cravings and is made tastier with natural sweeteners for better results.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <a href="#collapse7-4" className="expand">Q. Does it cause bloating?</a>
                                                    </div>
                                                    <div id="collapse7-4" className="collapsed">
                                                        <div className="card-body">
                                                            <p className="mb-0">
                                                                No. The goodness of natural ACV with inulin fibers improves the healthy digestion in consumers and raises the stomach acid levels reducing the chances of bloating.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <a href="#collapse7-5" className="expand">Q. How quick the results will be?</a>
                                                    </div>
                                                    <div id="collapse7-5" className="collapsed">
                                                        <div className="card-body">
                                                            <p className="mb-0">
                                                                With Liven Burn ACV Effervescent tablets, the users can enjoy incredible results. But consistent dosing method is essential for gaining effective results which is why the
                                                                tablets are made simple, delicious and potent for better results leaving people without any hesitation to use.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <a href="#collapse7-6" className="expand">Q. Do our ACV tablets contain Mother?</a>
                                                    </div>
                                                    <div id="collapse7-6" className="collapsed">
                                                        <div className="card-body">
                                                            <p className="mb-0">Yes. Our tablets include the ACV with mother produced during fermentation and is effective in protecting the gut health as a probiotic.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <a href="#collapse7-7" className="expand">Q. Whether Liven Burn Effervescent drink tastes sour and bitter?</a>
                                                    </div>
                                                    <div id="collapse7-7" className="collapsed">
                                                        <div className="card-body">
                                                            <p className="mb-0">
                                                                Liven Burn fizzy drink is made to taste sweet and it has no added sugar or preservatives. It is made of proper dilution and never leads to any adverse side effects.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="span12">
                                            <div className="thumbnail center well well-small text-center">
                                                <h2>Newsletter</h2>
                                                <p>Subscribe to our weekly Newsletter and stay tuned.</p>
                                                <form action="" method="post">
                                                    <div className="input-prepend">
                                                        <input type="text" id="" className="form-control" name="" placeholder="your@email.com" />
                                                    </div>
                                                    <br />
                                                    <input type="submit" value="Subscribe Now!" className="btn btn-large" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </section>

        <section className="pt-3 mt-2 mb-2 need_sec">
                            <h2 className="title-echo mb-1"><span>Some Related Products</span></h2>
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
                                            <img src={price_tag.png} />
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
                                            {/* <!-- <label className="product-label label-sale">25% Off</label> --> */}
                                            <img src={price_tag} />
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
                                            <img src={price_tag} />
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
                                            <img src={price_tag} />
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
                                            <img  src={price_tag} />
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
                                            <img  src={price_tag} />
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
                            <div className="row mt-10">
                                <div className="col-sm-12 text-center">
                                    <div className="product-form-group justify-content-center">
                                        <button className="btn-product btn-cart wid_250"><i className="d-icon-bag pr-2"></i> More Health Boosters</button>
                                    </div>
                                </div>
                            </div>
                        </section>
    </>
  );
};


export default ProductDetails;
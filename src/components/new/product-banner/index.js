import React, { useEffect, useState } from "react";
import home_one from "../../../images/new-images/demos/demo-food2/products/final/home_one.jpg";

const ProductBanner = () => {
  


  return (
    <>
       <section className="product_banner_section_2 mb-10 pb-6">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h2 className="title-echo mb-1"><span>Enlivening with NATURE!</span></h2>
                                    </div>
                                </div>
                                <div className="row product_banner_2">
                                    <div className="col-sm-6">
                                        <h1>
                                            Nutrition with the<br />
                                            right intentions
                                        </h1>
                                        <p>
                                            We’re honest about our sources, studies, suppliers and labels. Our ingredients are cultivated with care, combined thoughtfully and preserved to be potent to give you the very best of nature’s
                                            nutrition.
                                        </p>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="icon-box icon-box-side">
                                                    <i className="icon-box-icon d-icon-truck"></i>
                                                    <div className="icon-box-content">
                                                        <h4 className="icon-box-title text-capitalize ls-normal">
                                                            Shipping <br />
                                                            Return
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="icon-box icon-box-side">
                                                    <i className="icon-box-icon d-icon-truck"></i>
                                                    <div className="icon-box-content">
                                                        <h4 className="icon-box-title text-capitalize ls-normal">
                                                            Shipping <br />
                                                            Return
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="icon-box icon-box-side">
                                                    <i className="icon-box-icon d-icon-truck"></i>
                                                    <div className="icon-box-content">
                                                        <h4 className="icon-box-title text-capitalize ls-normal">
                                                            Shipping <br />
                                                            Return
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="icon-box icon-box-side">
                                                    <i className="icon-box-icon d-icon-truck"></i>
                                                    <div className="icon-box-content">
                                                        <h4 className="icon-box-title text-capitalize ls-normal">
                                                            Shipping <br />
                                                            Return
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        <img src={home_one}  />
                                    </div>
                                </div>
                            </div>
                    </section>
    </>
  );
};


export default ProductBanner;

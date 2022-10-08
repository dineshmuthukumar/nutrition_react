import React, { useEffect, useState } from "react";
import home_two from "../../../images/new-images//demos/demo-food2/products/final/home_two.jpg";

const ProductBannerOne = () => {
  


  return (
    <>
          <section className="product_banner_section_2 mb-10 pb-6">
                            <div className="container">
                                <div className="row product_banner_2">
                                    <div className="col-sm-6 text-center">
                                        <img src={home_two} className="best_img"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <h1>We are confident that we DO Offer the BEST - <br />Liven’s Credence!</h1>
                                        <br></br>
                                        <p>While People strive to mend their health concerns, LIVEN vigorously supports them with the best holistic nutritional sustenance.</p>
                                        <p>We believe only nature has the safest curing wealth that stabilizes the health of the people and have chosen them appropriately to meet the desired needs of every individual.</p>
                                        <p>The Futuristic nutritional comestibles are made with great care and trials to effectively compensate the lack of nutrition that reboots the wellness.</p>
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
                                        <div className="row"  >
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
                                </div>
                            </div>
                    </section>
    </>
  );
};


export default ProductBannerOne;

import React, { useEffect, useState } from "react";
import pro_bg2 from "../../../images/new-images/demos/demo-food2/products/pro_bg2.png";
import nutri_leaf from "../../../images/new-images/demos/demo-food2/products/nutri_leaf.png";

const WeakStrong = () => {
  


  return (
    <>
      <section className="" id="weak_strongest">
                        <div className="container">
                            <div className="row">
                                    <div className="col-sm-12">
                                        <h2 className="title-echo mb-1"><span>Liven Whirling Analysis</span></h2>
                                    </div>
                                </div>
                            <div className="product_banner_3">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h1 className="mb-10">We make it possible from the weak to strongest…</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-8">
                                        <p>With no quality compromise, our experts carefully designate the particular ingredients following authentic standards to ensure the viability in product’s working.</p>
                                        <p>Our Integrity extends with sourcing, creating, clinical trials and labelling.</p>
                                        <p>We are reliable for both category of people who THRIVE and SURVIVE.</p>
                                        <p> WE substantiate each consumer to THRIVE in life instead of just SURVIVING.</p>
                                    </div>
                                    <div className="col-sm-4">
                                        <img src={pro_bg2} className="weak_strongest_img_absolute" />
                                    </div>
                                </div> 
                                <div className="row">
                                    <div className="col-sm-4 text-center">
                                        <img src={nutri_leaf} className="weak_strongest_img" />
                                    </div>
                                    <div className="col-sm-8">
                                        <ul>
                                            <li>Authentic standards</li>
                                            <li>Ensure Viability</li>
                                            <li>Intact Ingredient properties</li>
                                        </ul>
                                        <p></p>
                                        <p>We clear the path of GOAL to offer delicate doses, Hope, Research-based nutrients and veracious inputs that can put you on the right track of leading healthier and pleasurable life.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
    </>
  );
};


export default WeakStrong;

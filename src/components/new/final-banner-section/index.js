import React, { useEffect, useState } from "react";
import Product from "../../../images/new-images/demos/demo-food2/product.mp4";
import Product2 from "../../../images/new-images/demos/demo-food2/product2.mp4"

import ReactPlayer from "react-player";

const FirstBannerSection = ({ homeContent }) => {
  return (
    <>
      <section className="banner-section row gutter-no">
        {homeContent?.section?.sixth?.imageList &&
          homeContent?.section?.sixth?.imageList?.map(
            (sixthproductcontentList) => {
              return (
                <div className="col-xl-2 col-sm-6 col-12">
                  <div className="banner1 banner banner-fixed overlay-zoom">
                    <figure>
                      <video
                        className="card_video__1z3he"
                        width="auto"
                        height="auto"
                        autoPlay
                        muted
                        loop
                        style={{ width: "100%" }}
                      >
                        <source
                          src={
                            "http://54.177.7.240" +
                            sixthproductcontentList?.image
                          }
                          type="video/mp4"
                        />
                      </video>
                    </figure>

                    <div className="category-content y-50 x-50 w-100 pl-2 pr-2 pb-1 p-absolute appear-animate">
                      <h4 className="banner-subtitle mb-0 font-weight-bold text-white text-uppercase">
                        {sixthproductcontentList?.text}
                      </h4>
                      <a
                        href="#"
                        className="btn btn-md-ellipse btn-ellipse btn-solid btn-primary icon-arrow-right"
                      >
                        <i className="fa fa-play" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
          )}
      </section>
    </>
  );
};


export default FirstBannerSection;

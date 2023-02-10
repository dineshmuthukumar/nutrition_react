import React, { useEffect, useState } from "react";
import home_two from "../../../images/new-images//demos/demo-food2/products/final/home_two.jpg";

const ProductBannerOne = ({ homeContent }) => {
  return (
    <>
      <section className="product_banner_section_2 pb-6">
        <div className="container">
          <div className="row product_banner_2">
            <div className="col-sm-4 text-center">
              {homeContent?.section?.fourth?.image && (
                <img
                  src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${homeContent?.section?.fourth?.image}`}
                  className="best_img"
                />
              )}
            </div>
            <div className="col-sm-8">
              <h1>{homeContent?.section?.fourth?.header}</h1>
              <h3 className="py-2">
                <div
                  dangerouslySetInnerHTML={{
                    __html: homeContent?.section?.fourth?.description,
                  }}></div>
              </h3>
              <br></br>
              {/* <div className="row">
                {homeContent?.section?.fourth?.list &&
                  homeContent?.section?.fourth?.list?.map(
                    (fourthproductcontentList) => {
                      return (
                        <div className="col-sm-6">
                          <div className="icon-box icon-box-side">
                            <i className="icon-box-icon d-icon-truck"></i>
                            <div className="icon-box-content">
                              <h4 className="icon-box-title text-capitalize ls-normal">
                                {fourthproductcontentList}
                              </h4>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductBannerOne;

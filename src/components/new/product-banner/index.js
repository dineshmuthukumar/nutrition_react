import React, { useEffect, useState } from "react";
import home_one from "../../../images/new-images/demos/demo-food2/products/final/home_one.jpg";

const ProductBanner = ({ homeContent }) => {
  return (
    <>
      <section className="product_banner_section_2 mb-10">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="title-echo mb-1 title-poppens">
                <span>{homeContent?.section?.first?.title}</span>
              </h2>
            </div>
          </div>
          <div className="row product_banner_2">
            <div className="col-sm-6">
              <h1 className="sub-title-poppens">
                {homeContent?.section?.first?.header}
              </h1>
              <p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: homeContent?.section?.first?.description,
                  }}></div>
              </p>
              <div className="row">
                {homeContent?.section?.first?.list &&
                  homeContent?.section?.first?.list?.map((firstContentList) => {
                    return (
                      <div className="col-sm-6">
                        <div className="icon-box icon-box-side">
                          <i className="icon-box-icon d-icon-truck"></i>
                          <div className="icon-box-content">
                            <h4 className="icon-box-title text-capitalize ls-normal">
                              {firstContentList}
                            </h4>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                {/* <div className="col-sm-6">
                  <div className="icon-box icon-box-side">
                    <i className="icon-box-icon d-icon-truck"></i>
                    <div className="icon-box-content">
                      <h4 className="icon-box-title text-capitalize ls-normal">
                        Shipping <br />
                        Return
                      </h4>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* <div className="row">
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
              </div> */}
            </div>
            <div className="col-sm-6 text-center">
              {homeContent?.section?.first?.image && (
                <img
                  src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${homeContent?.section?.first?.image}`}
                  alt="First Banner"
                  className="nurtures_images"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductBanner;

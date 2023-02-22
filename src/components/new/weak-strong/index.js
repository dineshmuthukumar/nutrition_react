import React, { useEffect, useState } from "react";
import pro_bg2 from "../../../images/new-images/demos/demo-food2/products/pro_bg2.png";
import nutri_leaf from "../../../images/new-images/demos/demo-food2/products/nutri_leaf.png";

const WeakStrong = ({ homeContent }) => {
  return (
    <>
      <section className="" id="weak_strongest">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="title-echo mb-1 title-font">
                <span className="title-poppens">
                  {homeContent?.section?.second?.title}
                </span>
              </h2>
            </div>
          </div>
          <div className="product_banner_3">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="mb-10 heading-font sub-title-poppens">
                  {homeContent?.section?.second?.header}
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-7">
                {homeContent?.section?.second?.description && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: homeContent?.section?.second?.description,
                    }}></div>
                )}
              </div>
              <div className="col-sm-5">
                {/* <img src={pro_bg2} className="weak_strongest_img_absolute" /> */}
                {homeContent?.section?.second && (
                  <img
                    src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${homeContent?.section?.second?.image}`}
                    className="weak_strongest_img_absolute"
                    alt="First Banner"
                  />
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 text-center">
                <img src={nutri_leaf} className="weak_strongest_img" />
              </div>
              <div className="col-sm-8">
                {homeContent?.section?.second?.list &&
                  homeContent?.section?.second?.list?.map(
                    (secondContentList) => {
                      return secondContentList;
                    }
                  )}
                {/* </ul>
                <p></p>
                <p>
                  We clear the path of GOAL to offer delicate doses, Hope,
                  Research-based nutrients and veracious inputs that can put you
                  on the right track of leading healthier and pleasurable life.
                </p> */}
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeakStrong;

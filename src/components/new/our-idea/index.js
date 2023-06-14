import React, { useEffect, useState } from "react";
import fit_1 from "../../../images/new-images/demos/demo-food2/products/final/fit_1.jpg";
import fit_2 from "../../../images/new-images/demos/demo-food2/products/final/fit_2.jpg";
import fit_3 from "../../../images/new-images/demos/demo-food2/products/final/fit_3.jpg";
import fit_4 from "../../../images/new-images/demos/demo-food2/products/final/fit_4.jpg";
import fit_5 from "../../../images/new-images/demos/demo-food2/products/final/fit_5.jpg";

const OurIdea = ({ homeContent }) => {
  return (
    <>
      <section className="new_our_idea pt-10 pb-10">
        <div className="container p-0">
          <h2 className="title-echo mb-1">
            <span className="title-font title-poppens">
              {homeContent?.section?.third?.title}
            </span>
          </h2>

          <div className="row p-20 justify-content-center align-items-center">
            {homeContent?.section?.third?.imageList &&
              homeContent?.section?.third?.imageList?.map(
                (thirdContentList) => {
                  return (
                    <div className="col-xl-3 col-sm-6 col-12 category">
                      <a href="">
                        <figure className="category-media">
                          {/* <img
                            src={fit_1}
                            alt="category"
                            width="200"
                            height="200"
                          /> */}
                          {thirdContentList?.image && (
                            <img
                              src={`${thirdContentList?.image}`}
                              alt="category"
                              className="category_media_image"
                            />
                          )}
                        </figure>
                      </a>
                      <div className="category-content">
                        <h4 className="category-name mb-1 mt-5">
                          <a href="#">{thirdContentList?.text}</a>
                        </h4>
                      </div>
                      <div className="pro_before_img"></div>
                    </div>
                  );
                }
              )}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurIdea;

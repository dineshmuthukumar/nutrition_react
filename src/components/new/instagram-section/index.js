import React, { useEffect, useState } from "react";
import pro_1 from "../../../images/new-images/demos/demo-food2/products/pro_1.png";
import pro_2 from "../../../images/new-images/demos/demo-food2/products/pro_2.png";
import pro_3 from "../../../images/new-images/demos/demo-food2/products/pro_3.png";
import pro_4 from "../../../images/new-images/demos/demo-food2/products/pro_4.png";
import pro_5 from "../../../images/new-images/demos/demo-food2/products/pro_5.png";



import OwlCarousel from "react-owl-carousel";

const InstagramSection = ({ homeContent }) => {
  return (
    <>
      <section
        className="instagram-section pt-2 pt-md-7 pt-10 pb-8"
        data-animation-options="{'delay': '.2s', 'duration': '.5s' }"
      >
        <div className="container">
          <h2 className="title-echo mb-1">
            <span>{homeContent?.section?.sixth?.title}</span>
          </h2>
          <p>{homeContent?.section?.sixth?.description}</p>
          {/* <div
                                className="owl-carousel owl-theme row cols-xl-5 cols-lg-4 cols-sm-3 cols-2"
                                data-owl-options="{
                            'items': 5,
                            'nav': true,
                            'dots': false,
                            'margin': 20,
                            'autoplay': true,
                            'responsive': {
                                '0': {
                                    'items': 1
                                },
                                '576': {
                                    'items': 3
                                },
                                '992': {
                                    'items': 4
                                },
                                '1200': {
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
            responsive={{
              0: {
                items: 1,
              },
              768: {
                items: 3,
              },
              992: {
                items: 5,
              },
            }}
            autoplay
            loop
            autoplayTimeout={2000}
            autoplayHoverPause={true}
          >
            <figure className="instagram">
              <a href="product.html">
                <img src={pro_1} alt="Instagram" width="220" height="220" />
                <br />
                <span className="categories_title_name">
                  <h5>Plant Protein</h5>
                </span>
              </a>
            </figure>
            <figure className="instagram">
              <a href="product.html">
                <img src={pro_2} alt="Instagram" width="220" height="220" />
                <br />
                <span className="categories_title_name">
                  <h5>Slow</h5>
                </span>
              </a>
            </figure>
            <figure className="instagram">
              <a href="product.html">
                <img src={pro_3} alt="Instagram" width="220" height="220" />
                <br />
                <span className="categories_title_name">
                  <h5>Melts</h5>
                </span>
              </a>
            </figure>
            <figure className="instagram">
              <a href="product.html">
                <img src={pro_4} alt="Instagram" width="220" height="220" />
                <br />
                <span className="categories_title_name">
                  <h5>Kids</h5>
                </span>
              </a>
            </figure>
            <figure className="instagram">
              <a href="product.html">
                <img src={pro_5} alt="Instagram" width="220" height="220" />
                <br />
                <span className="categories_title_name">
                  <h5>Effervescent</h5>
                </span>
              </a>
            </figure>
          </OwlCarousel>
        </div>
      </section>
    </>
  );
};


export default InstagramSection;

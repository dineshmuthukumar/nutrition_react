import React, { useCallback, useEffect, useRef, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";

import product_1 from "../../../images/new-images/demos/demo-food2/products/pro_product_11.jpg";
import product_2 from "../../../images/new-images/demos/demo-food2/products/pro_product_22.jpg";
import product_3 from "../../../images/new-images/demos/demo-food2/products/pro_product_33.jpg";
import product_4 from "../../../images/new-images/demos/demo-food2/products/pro_product_44.jpg";

import product_11 from "../../../images/new-images/demos/demo-food2/products/1.jpg";
import priceTag from "../../../images/new-images/demos/demo-food2/products/price_tag.png";

import Product from "../../product";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";

import "swiper/swiper-bundle.css";

import SwiperCore, { EffectFlip, Navigation, Pagination } from "swiper";

import "./style.scss";

const FeatureProduct = ({ featureProductsContent }) => {
  const swiperRef = useRef();
  const history = useHistory();
  const [update, setUpdate] = useState(0);

  const handleNavigation = useCallback((direction = "") => {
    setUpdate(Math.random());
    //console.log(direction, "direction");
    //if (!direction || !swiperRef.current) return;
    if (direction === "next") swiperRef.current.swiper.slideNext();
    else swiperRef.current.swiper.slidePrev();
  }, []);

  useEffect(() => {
    setUpdate(Math.random());
  }, [swiperRef?.current?.swiper]);
  //console.log(featureProductsContent?.length);

  return (
    <>
      <div className="container-fluid base-color-bg" id="feature-product">
        <section className="category-section mb-4 mb-lg-6 pb-7">
          <h2 className="title-echo mb-2 title-poppens">
            <span>Featured product</span>
          </h2>

          <br />
          <div className="container">
            {/* {featureProductsContent?.length > 0 && (
              <OwlCarousel
                className="owl-carousel owl-theme row cols-lg-4 cols-2"
                margin={20}
                items={1}
                smartSpeed={500}
                dots={false}
                lazyLoad={true}
                navContainerClass={"owl-nav"}
                navText={[
                  `<img src=https://cdn-icons-png.flaticon.com/512/109/109618.png  />`,
                  `<img src=https://cdn-icons-png.flaticon.com/512/109/109617.png  />`,
                ]}
                responsive={{
                  0: {
                    items: 1,
                  },
                  768: {
                    items: 3,
                  },
                  992: {
                    items: 3,
                  },
                }}
                // autoplay
                //   loop
                autoplayTimeout={2000}
                autoplayHoverPause={true}
              >
                {(() => {
                  if (featureProductsContent?.length > 0) {
                    return (
                      <>
                        {featureProductsContent?.map((Featurecontent, fkey) => {
                          return (
                            <Product
                              ProductDetails={Featurecontent}
                              key={fkey}
                            />
                          );
                        })}
                      </>
                    );
                  }
                })()}
              </OwlCarousel>
            )} */}
            {featureProductsContent?.length > 0 && (
              // <OwlCarousel
              //   className="owl-carousel owl-theme row cols-lg-4 cols-2"
              //   margin={20}
              //   items={1}
              //   smartSpeed={500}
              //   dots={false}
              //   lazyLoad={true}
              //   navContainerClass={"owl-nav"}
              //   navText={[
              //     `<img src=https://cdn-icons-png.flaticon.com/512/109/109618.png  />`,
              //     `<img src=https://cdn-icons-png.flaticon.com/512/109/109617.png  />`,
              //   ]}
              //   responsive={{
              //     0: {
              //       items: 1,
              //     },
              //     768: {
              //       items: 3,
              //     },
              //     992: {
              //       items: 3,
              //     },
              //   }}
              //   // autoplay
              //   //   loop
              //   autoplayTimeout={2000}
              //   autoplayHoverPause={true}
              // >
              <Swiper
                ref={swiperRef}
                slidesPerView={3}
                spaceBetween={4}
                slidesPerGroup={3}
                // loop={true}
                // loopFillGroupWithBlank={true}
                navigation={false}
                modules={[Navigation]}
                className="mySwiper"
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 80 },
                  480: { slidesPerView: 2, spaceBetween: 5 },
                  768: { slidesPerView: 3, spaceBetween: 4 },
                  1024: { slidesPerView: 3, spaceBetween: 4 },
                }}
              >
                {(() => {
                  if (featureProductsContent?.length > 0) {
                    return (
                      <>
                        {featureProductsContent?.map((Featurecontent, fkey) => {
                          return (
                            <SwiperSlide>
                              <Product
                                ProductDetails={Featurecontent}
                                key={fkey}
                              />
                            </SwiperSlide>
                          );
                        })}
                      </>
                    );
                  }
                })()}
              </Swiper>
            )}
          </div>

          <button
            className="swipper_back_arrow"
            onClick={() => handleNavigation("prev")}
            disabled={swiperRef?.current?.swiper?.isBeginning}
          >
            <img
              src="https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/back-arrow.png"
              width="40"
              height="40"
              alt="Arrow"
            />
          </button>
          <button
            className="swipper_front_arrow"
            onClick={() => handleNavigation("next")}
            disabled={swiperRef?.current?.swiper?.isEnd}
          >
            <img
              src="https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/front-arrow.png"
              width="40"
              height="40"
              alt="Arrow"
            />
          </button>
        </section>
      </div>
    </>
  );
};

export default FeatureProduct;

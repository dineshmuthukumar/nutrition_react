import React, { useCallback, useEffect, useRef, useState } from "react";
import pro_1 from "../../../images/new-images/demos/demo-food2/products/pro_1.png";
import pro_2 from "../../../images/new-images/demos/demo-food2/products/pro_2.png";
import pro_3 from "../../../images/new-images/demos/demo-food2/products/pro_3.png";
import pro_4 from "../../../images/new-images/demos/demo-food2/products/pro_4.png";
import pro_5 from "../../../images/new-images/demos/demo-food2/products/pro_5.png";

import OwlCarousel from "react-owl-carousel";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";

import "swiper/swiper-bundle.css";

import SwiperCore, { EffectFlip, Navigation, Pagination } from "swiper";

import "./style.scss";

const InstagramSection = ({ homeContent, filterList }) => {
  const swiperRef = useRef();
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

  return (
    <>
      <section
        className="instagram-section pt-2 pt-md-7 pt-10 pb-8"
        data-animation-options="{'delay': '.2s', 'duration': '.5s' }">
        <div className="container">
          <h2 className="title-echo mb-1 title-font">
            <span className="title-poppens">
              {homeContent?.section?.fifth?.title}
            </span>
          </h2>
          <p className="heading-font sub-title-poppens ">
            {homeContent?.section?.fifth?.header}
          </p>
          <p>{homeContent?.section?.fifth?.description}</p>
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

          {/* <OwlCarousel
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
            navText={[
              `<img src=https://cdn-icons-png.flaticon.com/512/109/109618.png  />`,
              `<img src=https://cdn-icons-png.flaticon.com/512/109/109617.png  />`,
            ]}
            autoplay
            loop
            autoplayTimeout={2000}
            autoplayHoverPause={true}
          > */}
          <Swiper
            ref={swiperRef}
            slidesPerView={5}
            spaceBetween={4}
            slidesPerGroup={4}
            // loop={true}
            // loopFillGroupWithBlank={true}
            navigation={false}
            modules={[Navigation]}
            className="mySwiper11"
            breakpoints={{
              320: { slidesPerView: 3, spaceBetween: 5 },
              480: { slidesPerView: 3, spaceBetween: 5 },
              768: { slidesPerView: 5, spaceBetween: 5 },
              1024: { slidesPerView: 5, spaceBetween: 5 },
            }}>
            {filterList &&
              filterList?.map((fifthproductcontentList) => {
                //console.log(fifthproductcontentList, "fifthproductcontentList");
                return (
                  <SwiperSlide>
                    <figure className="instagram">
                      <a
                        href={`/products?name=${fifthproductcontentList?.name}subcategory=${fifthproductcontentList?._id}`}>
                        <img
                          src={`${fifthproductcontentList.image}`}
                          alt="Instagram"
                          width="220"
                          height="220"
                        />
                        <br />
                        <span className="categories_title_name">
                          <h5>{fifthproductcontentList.name}</h5>
                        </span>
                      </a>
                    </figure>
                  </SwiperSlide>
                );
              })}
            {/* <figure className="instagram">
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
            </figure> */}
          </Swiper>

          <button
            className="swipper_back_arrow"
            onClick={() => handleNavigation("prev")}
            disabled={swiperRef?.current?.swiper?.isBeginning}>
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
            disabled={swiperRef?.current?.swiper?.isEnd}>
            <img
              src="https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/front-arrow.png"
              width="40"
              height="40"
              alt="Arrow"
            />
          </button>
        </div>
      </section>
    </>
  );
};

export default InstagramSection;

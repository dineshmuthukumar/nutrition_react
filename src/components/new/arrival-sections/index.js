import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import {
  getCategoryApi,
  getsubCategoryApi,
  productListCategoryApi,
} from "../../../api/base-methods";
import { add_to_cart_thunk } from "../../../redux/thunk/user_cart_thunk";
import { useDispatch, useSelector } from "react-redux";

import product_1 from "../../../images/new-images/demos/demo-food2/products/pro_product_1.jpg";
import product_2 from "../../../images/new-images/demos/demo-food2/products/pro_product_2.jpg";
import product_3 from "../../../images/new-images/demos/demo-food2/products/pro_product_3.jpg";
import product_4 from "../../../images/new-images/demos/demo-food2/products/pro_product_4.jpg";

import priceTag from "../../../images/new-images/demos/demo-food2/products/price_tag.png";
import Product from "../../product";

import { AiFillHome } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";

import "swiper/swiper-bundle.css";

import SwiperCore, { EffectFlip, Navigation, Pagination } from "swiper";

import "./style.scss";

const ArrivalSection = ({ homeContent, categorylist }) => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { user, cart } = useSelector((state) => state);
  const [inCart, setInCart] = useState(false);

  const userSlug = user.data ? user.data : null;
  const [prodList, setProdList] = useState({});
  const [categoryActive, setCategoryActive] = useState(true);
  const [categoryActiveIndex, setCategoryActiveIndex] = useState(0);
  const [productTabActive, setProductTabActive] = useState(true);
  const [bestSellerDetails, setBestSellerDetails] = useState({});

  const swiperRef = useRef();
  const [update, setUpdate] = useState(0);

  const handleNavigation = useCallback((direction = "") => {
    setUpdate(Math.random());
    console.log(direction, "direction");
    //if (!direction || !swiperRef.current) return;
    if (direction === "next") swiperRef.current.swiper.slideNext();
    else swiperRef.current.swiper.slidePrev();
  }, []);

  useEffect(() => {
    setUpdate(Math.random());
  }, [swiperRef?.current?.swiper]);

  const getCategoryDetails = async () => {
    try {
      const result = await getCategoryApi();
      setBestSellerDetails(result?.data?.responseData?.beastProducts);
    } catch (error) {
      console.log(
        "🚀 ~ file: index.js ~ line 49 ~ handleGetNotification ~ error",
        error
      );
    }
  };

  const userCart = cart?.data ? cart?.data : null;
  const IsProductDetails = async (subcategoryId, key) => {
    if (subcategoryId == 0) {
      setProdList(bestSellerDetails);
      setCategoryActive(true);
      setProductTabActive(true);
      setCategoryActiveIndex(key);
    } else {
      const result = await productListCategoryApi(subcategoryId);
      setProdList(result?.data?.responseData?.product?.docs);
      //console.log(result?.data?.responseData?.product?.docs?.length);
      setCategoryActive(true);
      setProductTabActive(true);
      setCategoryActiveIndex(key);
    }
  };

  useEffect(() => {
    //console.log("Usereffect");
    //if (categorylist?.length > 0) {
    //IsProductDetails(categorylist[0]?._id, 0);
    getCategoryDetails();
    IsProductDetails(0, "best_product");
    ///}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    //console.log("Usereffect");
    if (categorylist?.length > 0) {
      //IsProductDetails(categorylist[0]?._id, 0);
      getCategoryDetails();
      IsProductDetails(0, "best_product");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorylist]);

  // useEffect(() => {
  //   if (userSlug) {
  //     const orderSlug = userCart?.line_items?.find(
  //       (obj) => obj._id === nft?.order_details?.slug
  //     );
  //     if (orderSlug) {
  //       setInCart(true);
  //     } else {
  //       setInCart(false);
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [userCart]);
  return (
    <>
      <section className="arrivals-section need_sec">
        <div className="container">
          <h2 className="title-echo mb-1 title-poppens">
            <span>What you need? Meet the most Here!</span>
          </h2>
          <p className="sub-title-poppens">
            From skin to muscles, sleep to energy and fitness to cognition –
            Liven nurtures <br /> the health with essentials naturally sourced.
          </p>
          <div className="tab tab-nav-center">
            <ul className="nav nav-tabs">
              <li
                className="nav-item ml-1 mr-1 pt-2 pb-2"
                ref={ref}
                onClick={() => IsProductDetails(0, "best_product")}
              >
                <a
                  className={`nav-link nav-link-with-img border-rounded ${
                    categoryActiveIndex == "best_product" ? "active" : ""
                  }`}
                >
                  <h3 className="img-cat-title mb-0 ">
                    <AiFillHome /> Best sellers
                  </h3>
                </a>
              </li>
              {(() => {
                if (categorylist?.length > 0) {
                  return (
                    <>
                      {categorylist?.map((arrivalecontent, key) => {
                        return (
                          <li
                            className="nav-item ml-1 mr-1 pt-2 pb-2"
                            ref={ref}
                            onClick={() =>
                              IsProductDetails(arrivalecontent._id, key)
                            }
                          >
                            <a
                              className={`nav-link nav-link-with-img border-rounded ${
                                categoryActiveIndex == key ? "active" : ""
                              }`}
                            >
                              <h3 className="img-cat-title mb-0 gap-4">
                                {arrivalecontent?.layoutPhoto && (
                                  <img
                                    src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${arrivalecontent?.layoutPhoto}`}
                                    alt={"Image"}
                                    width="14"
                                    height="14"
                                  />
                                )}
                                <span>{arrivalecontent?.name}</span>
                              </h3>
                            </a>
                          </li>
                        );
                      })}
                    </>
                  );
                }
              })()}
            </ul>
            <div className="tab-content">
              <div
                className={`tab-pane pt-4 ${productTabActive ? "active" : ""}`}
                id="fruits"
              >
                {prodList?.length > 0 && (
                  // <OwlCarousel
                  //   className="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2"
                  //   margin={20}
                  //   nav
                  //   smartSpeed={500}
                  //   dots={false}
                  //   navContainerClass={"owl-nav"}
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
                  //   navText={[
                  //     `<img src=https://cdn-icons-png.flaticon.com/512/109/109618.png  />`,
                  //     `<img src=https://cdn-icons-png.flaticon.com/512/109/109617.png  />`,
                  //   ]}
                  //   autoplay
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
                      return (
                        <>
                          {prodList?.length > 0 &&
                            prodList?.map((prodDetails, pkey) => {
                              //console.log(prodDetails, "prodDetails");
                              if (prodDetails?.actualAmount) {
                                return (
                                  <SwiperSlide>
                                    <Product
                                      ProductDetails={prodDetails}
                                      key={pkey}
                                    />
                                  </SwiperSlide>
                                );
                              }
                            })}
                        </>
                      );
                    })()}
                  </Swiper>
                )}
                {prodList?.length > 0 ? "" : "No found Product"}
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArrivalSection;

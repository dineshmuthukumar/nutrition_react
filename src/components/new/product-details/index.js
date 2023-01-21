import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";

import price_tag from "../../../images/new-images/demos/demo-food2/products/price_tag.png";
import a from "../../../images/new-images/demos/demo-food2/products/a.png";
import b from "../../../images/new-images/demos/demo-food2/products/b.png";
import c from "../../../images/new-images/demos/demo-food2/products/c.png";
import d from "../../../images/new-images/demos/demo-food2/products/d.png";
import e from "../../../images/new-images/demos/demo-food2/products/e.png";
import f from "../../../images/new-images/demos/demo-food2/products/f.png";

import pro_product_4 from "../../../images/new-images/demos/demo-food2/products/pro_product_4.jpg";
import pro_product_1 from "../../../images/new-images/demos/demo-food2/products/pro_product_1.jpg";
import pro_product_2 from "../../../images/new-images/demos/demo-food2/products/pro_product_2.jpg";
import pro_product_3 from "../../../images/new-images/demos/demo-food2/products/pro_product_3.jpg";
import pro_banner_2 from "../../../images/new-images/demos/demo-food2/products/pro_banner_2.jpg";

import a_1 from "../../../images/new-images/demos/demo-food2/icons/icon/1-a.png";
import a_2 from "../../../images/new-images/demos/demo-food2/icons/icon/2-a.png";
import a_3 from "../../../images/new-images/demos/demo-food2/icons/icon/3-a.png";
import a_4 from "../../../images/new-images/demos/demo-food2/icons/icon/4-a.png";
import a_5 from "../../../images/new-images/demos/demo-food2/icons/icon/5-a.png";
import a_6 from "../../../images/new-images/demos/demo-food2/icons/icon/6-a.png";
import a_7 from "../../../images/new-images/demos/demo-food2/icons/icon/7-a.png";
import a_8 from "../../../images/new-images/demos/demo-food2/icons/icon/8-a.png";
import a_9 from "../../../images/new-images/demos/demo-food2/icons/icon/9-a.png";
import a_10 from "../../../images/new-images/demos/demo-food2/icons/icon/10-a.png";
import a_11 from "../../../images/new-images/demos/demo-food2/icons/icon/11-a.png";
import a_12 from "../../../images/new-images/demos/demo-food2/icons/icon/12-a.png";

import usage_img from "../../../images/new-images/demos/demo-food2/products/final/usage_img.jpg";

import radius_1 from "../../../images/new-images/demos/demo-food2/banners/radius_1.png";
import radius_2 from "../../../images/new-images/demos/demo-food2/banners/radius_2.png";
import radius_3 from "../../../images/new-images/demos/demo-food2/banners/radius_3.png";
import radius_4 from "../../../images/new-images/demos/demo-food2/banners/radius_4.png";

import apple_feature from "../../../images/new-images/demos/demo-food2/products/final/apple_feature.png";
import why_choose from "../../../images/new-images/demos/demo-food2/products/why_choose.png";

import app_1 from "../../../images/new-images/demos/demo-food2/products/final/app_1.png";
import app_2 from "../../../images/new-images/demos/demo-food2/products/final/app_2.png";
import app_3 from "../../../images/new-images/demos/demo-food2/products/final/app_3.png";
import app_4 from "../../../images/new-images/demos/demo-food2/products/final/app_4.png";
import app_5 from "../../../images/new-images/demos/demo-food2/products/final/app_5.png";

import app_11 from "../../../images/new-images/demos/demo-food2/products/final/app_11.png";
import app_22 from "../../../images/new-images/demos/demo-food2/products/final/app_22.png";
import app_33 from "../../../images/new-images/demos/demo-food2/products/final/app_33.png";
import app_44 from "../../../images/new-images/demos/demo-food2/products/final/app_44.png";
import app_55 from "../../../images/new-images/demos/demo-food2/products/final/app_55.png";

import Comment_1 from "../../../images/new-images/blog/comments/1.jpg";
import Comment_2 from "../../../images/new-images/blog/comments/2.jpg";

import packag from "../../../images/new-images/demos/demo-food2/products/final/packages.png";

import Accordion from "../../accordion";
import "./style.scss";
import { currencyFormat, getPrice, validateEmail } from "../../../utils/common";
import { useDispatch, useSelector } from "react-redux";
import { add_to_cart_thunk } from "../../../redux/thunk/user_cart_thunk";
import Product from "../../product";
import { cart_on_thunk } from "../../../redux/thunk/user_thunk";
import FeatureProduct from "../feature-product";
import { EnquiryApi, subscribeApi } from "../../../api/base-methods";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  setCookiesByName,
  getTypeCookies,
  getsaleAmountCookies,
  getproductIdCookies,
} from "../../../utils/cookies";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";

import "swiper/swiper-bundle.css";

import SwiperCore, { EffectFlip, Navigation, Pagination } from "swiper";

const ProductDetails = ({ productData, subCategoryProducts, loading }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, cart } = useSelector((state) => state);
  const [productFavor, setProductFavor] = useState("");
  const [productAmount, setProductAmount] = useState("");
  const userCart = cart?.data ? cart?.data : null;
  //const [productData, setProductData] = useState(false);
  const [inCart, setInCart] = useState(false);
  const [productThumb, setProductThumb] = useState(0);
  const [slideBy, setSlideBy] = useState(0);
  const [status, setStatus] = useState(false);

  const [email, setEmail] = useState();
  const [vEmail, setVEmail] = useState();
  //console.log(productData.productType, "ijedc");

  const swiperRef = useRef();
  const swiperRefBanner = useRef();
  const swiperRefRelated = useRef();
  const [update, setUpdate] = useState(0);
  let TypeCookies = getTypeCookies();
  let SaleAmountCookies = getsaleAmountCookies();
  let productIdCookies = getproductIdCookies();
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

  useEffect(() => {
    // console.log(SaleAmountCookies, "TypeCookies");
    if (productIdCookies && user?.login) {
      console.log(SaleAmountCookies, "TypeCookies");
      // console.log(productIdCookies, "productIdCookies");
      if (productData?._id == productIdCookies) {
        console.log("getproductIdCookies", getproductIdCookies());
        dispatch(
          add_to_cart_thunk(
            productData?._id,
            TypeCookies,
            SaleAmountCookies,
            setStatus
          )
        );
        history.push("/cart");
      }
    }
  }, [productIdCookies, productData]);

  useEffect(() => {
    if (user) {
      const orderSlug = userCart?.line_items?.find(
        (obj) => obj._id === ProductDetails?._id
      );
      if (orderSlug) {
        setInCart(true);
      } else {
        setInCart(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userCart]);

  useEffect(() => {
    // console.log(productData._id, "producttype");
    // console.log(productData.productType, "productData.productType");
    //console.log(productData?.productType, "ewdfcdw");
    // eslint-di useEffect(() => {

    if (productData?.productType) {
      if (productData?.productType[1]?.saleAmount) {
        setProductFavor(productData.productType[1].type);
        setProductAmount(productData.productType[1]?.saleAmount);
        if (!user?.login) {
          setCookiesByName("type", productData.productType[1].type);
          setCookiesByName("saleAmount", productData.productType[1].saleAmount);
          setCookiesByName("productid", productData?._id);
        }
      } else if (productData?.productType[0]?.saleAmount) {
        setProductFavor(productData.productType[0].type);
        setProductAmount(productData.productType[0]?.saleAmount);
        if (!user?.login) {
          setCookiesByName("type", productData.productType[0].type);
          setCookiesByName("saleAmount", productData.productType[0].saleAmount);
          setCookiesByName("productid", productData?._id);
        }
      } else if (productData?.productType[2]?.saleAmount) {
        setProductFavor(productData.productType[2].type);
        setProductAmount(productData.productType[2]?.saleAmount);
        if (!user?.login) {
          setCookiesByName("type", productData.productType[2].type);
          setCookiesByName("saleAmount", productData.productType[2].saleAmount);
          setCookiesByName("productid", productData?._id);
        }
      }
    }
    if (productData?.productType && !user?.login) {
      setCookiesByName("productid", productData?._id);
    }
  }, [productData?.productType, productData]);
  useEffect(() => {
    setSlideBy(productThumb);
  }, [productThumb]);

  function callback(event) {
    var items = event.item.count; // Number of items
    var item = event.item.index;
    setSlideBy(item);
    setProductThumb(item);
  }
  useEffect(() => {
    if (user?.login && status) {
      dispatch(cart_on_thunk());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  useEffect(() => {
    if (user?.login && status) {
      dispatch(cart_on_thunk());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const ProductThumbIncrea = (type = "right") => {
    console.log(type, "type");
    // console.log(productThumb, "productThumb");

    if (type == "left") {
      // console.log("LEtgf");
      setSlideBy(parseInt(slideBy) - 1);

      swiperRefBanner.current.swiper.slidePrev();
      setProductThumb(parseInt(productThumb) - 1);
      //slideBy.slideTo(parseInt(slideBy) - 1);
    } else {
      setSlideBy(parseInt(slideBy) + 1);
      swiperRefBanner.current.swiper.slideNext();
      setProductThumb(parseInt(productThumb) + 1);
    }
  };

  const ProductThumbIncreatype = (type) => {
    console.log(type, "type");
    // console.log(productThumb, "productThumb");

    if (type == "left") {
      // console.log("LEtgf");
      setSlideBy(parseInt(slideBy) - 1);

      swiperRefBanner.current.swiper.slidePrev();
      setProductThumb(parseInt(productThumb) - 1);
      //slideBy.slideTo(parseInt(slideBy) - 1);
    } else {
      setSlideBy(parseInt(slideBy) + 1);
      swiperRefBanner.current.swiper.slideNext();
      setProductThumb(parseInt(productThumb) + 1);
    }
  };

  const handleSendNewsLetter = async () => {
    if (validateEmail(email)) {
      setVEmail(null);

      try {
        //setLoading(true);
        // console.log("object", "sfsfsf");

        // const formData = new FormData();
        // formData.append("Nemail", email);
        let arr = { type: "que", content: email };

        const result = await EnquiryApi(arr);

        if (result.data.statusCode === 200) {
          setVEmail(
            "We will buzz you with important updates. Thank you for being a part of LivenScience"
          );
        }

        setEmail("");
        //setLoading(false);
      } catch (error) {
        //setLoading(false);

        console.log(
          "🚀 ~ file: index.js ~ line 46 ~ handleSendNewsLetter ~ error",
          error
        );
      }
    } else {
      setVEmail("Please provide a valid email");
      return false;
    }
  };
  // function callbackSlider(event) {
  //   var items = event.item.count; // Number of items
  //   var item = event.item.index;
  //   console.log(items, "items");
  //   console.log(item, "item");
  // }
  return (
    <>
      {!loading ? (
        <>
          <section className="">
            <div className="product product-single" id="cart_product_page">
              <div className="row">
                <div className="col-md-6" style={{ padding: "1rem" }}>
                  <div className="product-gallery product-gallery-sticky mb-lg-9 mb-4 pb-0">
                    {/* <div className="product-single-carousel owl-carousel owl-theme owl-nav-inner row cols-1"> */}
                    {productData?.photos?.length > 0 && (
                      // <OwlCarousel
                      //   className=" owl-carousel owl-theme owl-nav-inner owl-loaded owl-drag d-mobile owl-carousel-product"
                      //   margin={20}
                      //   startPosition={slideBy}
                      //   items={1}
                      //   smartSpeed={500}
                      //   dots={false}
                      //   // rtl={true}
                      //   autoWidth={true}
                      //   // responsive={false}
                      //   // id={"owlcaolse"}

                      //   // autoplay

                      //   //   autoplayTimeout={2000}
                      //   //   autoplayHoverPause={true}
                      // >
                      <Swiper
                        ref={swiperRefBanner}
                        slidesPerView={1}
                        spaceBetween={4}
                        slidesPerGroup={1}
                        pagination={true}
                        // loop={true}
                        // initialSlide={slideBy}
                        loopFillGroupWithBlank={true}
                        // navigation={true}
                        // activeSlideKey={slideBy}
                        className="mySwiper"
                        // breakpoints={{
                        //   320: { slidesPerView: 3, spaceBetween: 5 },
                        //   480: { slidesPerView: 3, spaceBetween: 5 },
                        //   768: { slidesPerView: 4, spaceBetween: 5 },
                        //   1024: { slidesPerView: 5, spaceBetween: 5 },
                        // }}
                      >
                        {(() => {
                          if (productData?.photos?.length > 0) {
                            return (
                              <>
                                {productData?.photos?.map((prodImgaes) => {
                                  return (
                                    <SwiperSlide>
                                      <figure className="product-image">
                                        <img
                                          src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${prodImgaes}`}
                                          data-zoom-image={prodImgaes}
                                          alt="Women's Brown Leather Backpacks"
                                          width="600"
                                          height="675"
                                        />
                                      </figure>
                                    </SwiperSlide>
                                  );
                                })}
                              </>
                            );
                          }
                        })()}
                      </Swiper>
                    )}
                    {/* </div> */}

                    <div className="inner-product-label-group">
                      {/* <!-- <label className="inner-product-label label-sale">25% Off</label> --> */}
                      {/* <img src={price_tag} /> */}
                    </div>

                    <div className="product-thumbs-wrap">
                      <div className="row">
                        <div className="col-sm-9">
                          {/* <OwlCarousel
                        className="product-thumbs owl-carousel owl-drag"
                        margin={20}
                        nav
                        items={1}
                        smartSpeed={500}
                        dots={false}
                        id={"owlcaolse"}
                        // navContainerClass={"owl-nav"}
                        responsive={{
                          0: {
                            items: 1,
                          },
                          768: {
                            items: 1,
                          },
                          992: {
                            items: 1,
                          },
                        }} */}
                          {/* // autoplay // loop // autoplayTimeout={2000}
                      // autoplayHoverPause={true}> */}
                          {/* <div className="product-thumbs"> */}
                          <div className="product-thumbs">
                            {(() => {
                              if (productData?.photos?.length > 0) {
                                return (
                                  <>
                                    {productData?.photos?.map(
                                      (prodImgaesThumb, key) => {
                                        return (
                                          <div
                                            className={`product-thumb ${
                                              productThumb == key
                                                ? "active"
                                                : ""
                                            }`}
                                            onClick={() => {
                                              setProductThumb(key);
                                              swiperRefBanner.current.swiper.slideTo(
                                                key
                                              );
                                            }}>
                                            <img
                                              src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${prodImgaesThumb}`}
                                              alt="product thumbnail"
                                              className="product-thumb_img"
                                            />
                                          </div>
                                        );
                                      }
                                    )}
                                  </>
                                );
                              }
                            })()}
                          </div>
                          {/* </OwlCarousel> */}
                          {/* <div className="product-thumb active">
                          <img
                            src={product_1}
                            alt="product thumbnail"
                            className="product-thumb_img"
                          />
                        </div>
                        <div className="product-thumb">
                          <img
                            src={product_2}
                            alt="product thumbnail"
                            className="product-thumb_img"
                          />
                        </div>
                        <div className="product-thumb">
                          <img
                            src={product_3}
                            alt="product thumbnail"
                            className="product-thumb_img"
                          />
                        </div>
                        <div className="product-thumb">
                          <img
                            src={product_4}
                            alt="product thumbnail"
                            className="product-thumb_img"
                          />
                        </div> */}
                        </div>
                        {(() => {
                          if (productData?.photos?.length > 0) {
                            return (
                              <div className="col-sm-3 d-flex">
                                <button
                                  className="thumb-up11"
                                  onClick={() => {
                                    console.log(
                                      parseInt(slideBy),
                                      "parseInt(slideBy)"
                                    );
                                    if (parseInt(slideBy) == 0) {
                                      setSlideBy(
                                        productData?.photos?.length - 1
                                      );
                                      swiperRefBanner.current.swiper.slideTo(
                                        productData?.photos?.length - 1
                                      );
                                      setProductThumb(
                                        productData?.photos?.length - 1
                                      );
                                    }
                                    if (parseInt(slideBy) - 1 <= 0) {
                                      console.log(true, "erfcre");
                                    } else {
                                      console.log(false);
                                    }
                                    if (parseInt(slideBy) - 1 <= -1) {
                                      setSlideBy(
                                        productData?.photos?.length - 1
                                      );
                                      swiperRefBanner.current.swiper.slideTo(
                                        productData?.photos?.length - 1
                                      );
                                      setProductThumb(
                                        productData?.photos?.length - 1
                                      );
                                    } else {
                                      setSlideBy(parseInt(slideBy) - 1);
                                      swiperRefBanner.current.swiper.slidePrev();
                                      setProductThumb(
                                        parseInt(productThumb) - 1
                                      );
                                    }
                                  }}
                                  key="prdni1">
                                  <i class="d-icon-arrow-left"></i>
                                </button>
                                <button
                                  className="thumb-down22"
                                  onClick={() => {
                                    if (
                                      parseInt(slideBy) + 1 >=
                                      productData?.photos?.length
                                    ) {
                                      setSlideBy(0);
                                      swiperRefBanner.current.swiper.slideTo(0);
                                      setProductThumb(0);
                                    } else {
                                      setSlideBy(parseInt(slideBy) + 1);
                                      swiperRefBanner.current.swiper.slideNext();
                                      setProductThumb(
                                        parseInt(productThumb) + 1
                                      );
                                    }
                                  }}
                                  key="prdni34">
                                  <i class="d-icon-arrow-right"></i>
                                </button>
                              </div>
                            );
                          }
                        })()}
                      </div>

                      {/* </div> */}
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6"
                  style={{ backgroundColor: "white", padding: "1rem" }}>
                  <div className="product-details">
                    <h1 className="product-name text-left">
                      {productData?.name}
                    </h1>
                    {/* <p className="product-short-desc">
                      A fizzy formula with infusion of pure ACV and Garcinia
                      with HCA compound to control appetite, Pomegranate to
                      boost metabolism, inulin fibers for better digestion and
                      satiation that promotes healthy weight loss.
                    </p> */}
                    <div className="ratings-container justify-content-start">
                      <div className="ratings-full">
                        <span
                          className="ratings"
                          style={{ width: "100%" }}></span>
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                      {/* <a
                        href="#product-tab-reviews"
                        className="link-to-tab rating-reviews"
                      >
                        ( 0 reviews )
                      </a> */}
                    </div>
                    <p>{productData?.description}</p>

                    <div className="product_list_icon">
                      <div className="row" style={{ display: "none" }}>
                        <div className="col-sm-12">
                          <ul>
                            <li>
                              <div className="icon-box icon-box-side">
                                {/* <!-- <i className="icon-box-icon d-icon-truck"></i> --> */}
                                <img src={a} className="pro_des_icon" />
                                <div className="icon-box-content">
                                  <h4 className="icon-box-title text-capitalize ls-normal">
                                    Provides antioxidants & skin support
                                  </h4>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="icon-box icon-box-side">
                                {/* <!-- <i className="icon-box-icon d-icon-truck"></i> --> */}
                                <img src={b} className="pro_des_icon" />
                                <div className="icon-box-content">
                                  <h4 className="icon-box-title text-capitalize ls-normal">
                                    Enhances fat-burning
                                  </h4>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="icon-box icon-box-side">
                                {/* <!-- <i className="icon-box-icon d-icon-truck"></i> --> */}
                                <img src={c} className="pro_des_icon" />
                                <div className="icon-box-content">
                                  <h4 className="icon-box-title text-capitalize ls-normal">
                                    Suppresses cravings
                                  </h4>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="icon-box icon-box-side">
                                {/* <!-- <i className="icon-box-icon d-icon-truck"></i> --> */}
                                <img src={d} className="pro_des_icon" />
                                <div className="icon-box-content">
                                  <h4 className="icon-box-title text-capitalize ls-normal">
                                    Supports heart health
                                  </h4>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="icon-box icon-box-side">
                                {/* <!-- <i className="icon-box-icon d-icon-truck"></i> --> */}
                                <img src={e} className="pro_des_icon" />
                                <div className="icon-box-content">
                                  <h4 className="icon-box-title text-capitalize ls-normal">
                                    Keeps you hydrated
                                  </h4>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="icon-box icon-box-side">
                                {/* <!-- <i className="icon-box-icon d-icon-truck"></i> --> */}
                                <img src={f} className="pro_des_icon" />
                                <div className="icon-box-content">
                                  <h4 className="icon-box-title text-capitalize ls-normal">
                                    Delicious
                                  </h4>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {productData?.favorName ? (
                        <div className="row mt-3 mb-3">
                          <div className="col-sm-12">
                            <div className="product-form-group">
                              <button
                                className="btn-product btn-cart"
                                onClick={() => {
                                  setProductFavor(
                                    productData?.productType[0]?.type
                                  );
                                  setProductAmount(
                                    productData?.productType[0]?.saleAmount
                                  );
                                }}>
                                <i className="d-icon-bag"></i>
                                {productData?.favorName} Flavour
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="row cart_packlist d-flex justify-content-center w-100 mt-5">
                      {/* Product Pro Start */}
                      {/* <div class="col-sm-4 p-0 BASIC-plan">
                        <div class="plans">
                          <label class="plan BASIC-plan" for="BASIC">
                            <input type="radio" name="plan" id="BASIC" />
                            <div class="plan-content">
                              <div class="plan-details">
                                <span>BASIC</span>
                                <div class="pack_padding">
                                  <h1 class="pack_tittle">pack of 1</h1>
                                  <h1 class="pack_tittle_save">
                                    (Save ₹100.00)
                                  </h1>
                                  <img src="https://admin.livenscience.com/images/product/1672661002579_5-a.png" />
                                </div>
                                <div class="pack_add_cart">₹900.00 / Fulse</div>
                              </div>
                            </div>
                          </label>
                          <div class="inner-product-label-group2">
                            <label class="inner-product-label label-sale2">
                              10% Off
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4 p-0 BASIC-plan plan_height">
                        <div class="plans">
                          <label class="plan BASIC-plan" for="BASIC">
                            <input type="radio" name="plan" id="BASIC" />
                            <div class="plan-content">
                              <div class="plan-details">
                                <span>BASIC</span>
                                <div class="pack_padding">
                                  <h1 class="pack_tittle">pack of 1</h1>
                                  <h1 class="pack_tittle_save">
                                    (Save ₹100.00)
                                  </h1>
                                  <img src="https://admin.livenscience.com/images/product/1672661002579_5-a.png" />
                                </div>
                                <div class="pack_add_cart">₹900.00 / Fulse</div>
                              </div>
                            </div>
                          </label>
                          <div class="inner-product-label-group2">
                            <label class="inner-product-label label-sale2">
                              10% Off
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4 p-0 BASIC-plan">
                        <div class="plans">
                          <label class="plan BASIC-plan" for="BASIC">
                            <input type="radio" name="plan" id="BASIC" />
                            <div class="plan-content">
                              <div class="plan-details">
                                <span>BASIC</span>
                                <div class="pack_padding">
                                  <h1 class="pack_tittle">pack of 1</h1>
                                  <h1 class="pack_tittle_save">
                                    (Save ₹100.00)
                                  </h1>
                                  <img src="https://admin.livenscience.com/images/product/1672661002579_5-a.png" />
                                </div>
                                <div class="pack_add_cart">₹900.00 / Fulse</div>
                              </div>
                            </div>
                          </label>
                          <div class="inner-product-label-group2">
                            <label class="inner-product-label label-sale2">
                              10% Off
                            </label>
                          </div>
                        </div>
                      </div> */}
                      {/* Product Pro End */}

                      {(() => {
                        if (productData?.productType?.length > 0) {
                          return (
                            <>
                              {productData?.productType?.map((producttype) => {
                                if (producttype?.actualAmount) {
                                  return (
                                    <div
                                      className={`col-sm-4 p-0 ${
                                        producttype?.type
                                      }-plan ${
                                        producttype?.type == "PRO"
                                          ? "plan_height"
                                          : ""
                                      }`}>
                                      <div className="plans">
                                        <label
                                          className={`plan ${producttype?.type}-plan`}
                                          htmlFor={producttype?.type}>
                                          <input
                                            type="radio"
                                            name="plan"
                                            id={producttype?.type}
                                            onClick={() =>
                                              setProductFavor(producttype?.type)
                                            }
                                            checked={
                                              productFavor === producttype?.type
                                            }
                                          />
                                          <div className="plan-content">
                                            <div className="plan-details">
                                              <span>{producttype?.type}</span>
                                              <div className="pack_padding">
                                                <h1 className="pack_tittle">
                                                  {producttype?.title}
                                                </h1>
                                                <h1 className="pack_tittle_save">
                                                  (Save{" "}
                                                  {currencyFormat(
                                                    parseFloat(
                                                      producttype?.actualAmount
                                                    ) -
                                                      parseFloat(
                                                        producttype?.saleAmount
                                                      ),
                                                    "INR"
                                                  )}
                                                  )
                                                </h1>
                                                <img
                                                  src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${producttype?.image}`}
                                                />
                                              </div>
                                              <div className="pack_add_cart">
                                                {currencyFormat(
                                                  producttype?.saleAmount,
                                                  "INR"
                                                )}{" "}
                                                / Fulse
                                              </div>
                                            </div>
                                          </div>
                                        </label>
                                        {producttype?.discount > 0 && (
                                          <div className="inner-product-label-group2">
                                            <label className="inner-product-label label-sale2">
                                              {producttype?.discount}
                                              {"% "}
                                              Off
                                            </label>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  );
                                }
                              })}
                            </>
                          );
                        }
                      })()}
                    </div>

                    <div className="row align-items-center justify-content-center mt-5">
                      <div className="col-sm-4">
                        <div className="product-form product-qty">
                          <div className="product-form-group">
                            {user?.login ? (
                              <button
                                className="btn-product btn-cart"
                                onClick={() => {
                                  if (!inCart) {
                                    dispatch(
                                      add_to_cart_thunk(
                                        productData?._id,
                                        productFavor,
                                        productAmount,
                                        setStatus
                                      )
                                    );
                                  }
                                }}>
                                <i className="d-icon-bag"></i>Add To BAG
                              </button>
                            ) : (
                              <Link
                                to={`/login?redirect=${window.location.href}`}
                                //to="/login"
                              >
                                <button className="btn-product btn-cart">
                                  <i className="d-icon-bag"></i>Add To BAG
                                </button>
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="add_to_whitelist" style={{ display: "none" }}>
                <h2 className="title title-center ls-s mb-8 dis_block">
                  Best to Opt with
                </h2>
                <div className="row d-flex-center">
                  <div className="col-sm-8">
                    <div className="row">
                      <div className="col-sm-4">
                        <img src={pro_product_1} className="" />
                        <a href="#" className="no-hover cart_plus_icon">
                          <i className="fas fa-plus"></i>
                        </a>
                      </div>
                      <div className="col-sm-4">
                        <img src={pro_product_2} className="" />
                        <a href="#" className="no-hover cart_plus_icon">
                          <i className="fas fa-plus"></i>
                        </a>
                      </div>
                      <div className="col-sm-4">
                        <img src={pro_product_3} className="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="product-price ls-md offer_price_details">
                      <span className="">Total Price : </span>
                      <span className="price">$140.00</span>
                      <span className="price line-through">Rs. 2,499</span>
                    </div>
                    <div className="product-form-group justify-content-center">
                      <button className="btn-product btn-cart wid_200">
                        <i className="d-icon-bag pr-2"></i> Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <div className="form-checkbox mb-0">
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        id="create-account"
                        name="create-account"
                      />
                      <label
                        className="form-control-label ls-s"
                        htmlFor="create-account">
                        This item: Glow Japanese Marine Collagen Peptides
                      </label>
                      <div className="product_pack_count">
                        <select
                          name="orderby"
                          className="form-control count_pack_value">
                          <option value="default">Pack of 1</option>
                          <option value="popularity" selected="selected">
                            Pack of 2
                          </option>
                        </select>
                      </div>
                      <div className="product-price ls-md offer_price_details">
                        <span className="price line-through">Rs. 2,499</span>
                        <span className="price">$140.00</span>
                        <span className="price base-color">25% off</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-checkbox mb-6">
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        id="different-address"
                        name="different-address"
                      />
                      <label
                        className="form-control-label ls-s"
                        htmlFor="different-address">
                        Beauty Japanese Marine Collagen Peptides
                      </label>
                      <div className="product_pack_count">
                        <select
                          name="orderby"
                          className="form-control count_pack_value">
                          <option value="default">Pack of 1</option>
                          <option value="popularity" defaultValue="selected">
                            Pack of 2
                          </option>
                        </select>
                      </div>
                      <div className="product-price ls-md offer_price_details">
                        <span className="price line-through">Rs. 2,499</span>
                        <span className="price">$140.00</span>
                        <span className="price base-color">25% off</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-checkbox mb-0">
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        id="create-account-add"
                        name="create-account-add"
                      />
                      <label
                        className="form-control-label ls-s"
                        htmlFor="create-account-add">
                        This item: Glow Japanese Marine Collagen Peptides
                      </label>
                      <div className="product_pack_count">
                        <select
                          name="orderby"
                          className="form-control count_pack_value">
                          <option value="default">Pack of 1</option>
                          <option value="popularity" defaultValue="selected">
                            Pack of 2
                          </option>
                        </select>
                      </div>
                      <div className="product-price ls-md offer_price_details">
                        <span className="price line-through">Rs. 2,499</span>
                        <span className="price">$140.00</span>
                        <span className="price base-color">25% off</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="product_banner_section_3"
            style={{ display: "none" }}>
            <div className="container">
              <div className="row product_banner_3">
                <div className="col-sm-8">
                  <div className="code-template">
                    <div className="accordion accordion-background accordion-icon accordion-boxed accordion-card-border accordion-plus accordion-gutter-sm code-content">
                      <div className="card">
                        <div className="card-header">
                          <a href="#collapse7-1" className="collapse">
                            Q. How to consume?
                          </a>
                        </div>
                        <div id="collapse7-1" className="expanded">
                          <div className="card-body">
                            <p className="mb-0">
                              - Drop one tab in 250 ml of water.
                            </p>
                            <p className="mb-0">- Wait for it to fizz.</p>
                            <p className="mb-0">
                              - Gulp down the deicious goodness of ACV.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header">
                          <a href="#collapse7-2" className="expand">
                            Q. How and when to consume ACV tablet?
                          </a>
                        </div>
                        <div id="collapse7-2" className="expanded">
                          <div className="card-body">
                            <p className="mb-0">
                              It is better to take 1 Liven Burn ACV effervescent
                              tablet one time a day preferably each morning on
                              an empty stomach or 20 minutes before a meal. The
                              usage direction is to drop one tablet in a glass
                              (250 ml) of water and wait until it dissolves. Now
                              gulp down the fizzy drink for gaining excellent
                              energy and weight loss support.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 text-center">
                  <img
                    src={pro_banner_2}
                    style={{ width: "100%", padding: "0px 20px" }}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="element-section mt-9 mb-10">
            <div className="container">
              <h2 className="title title-center ls-s mb-8 dis_block">
                {productData?.chooseLivenBurnTitle}
              </h2>
              <div className="row elements justify-content-center">
                {(() => {
                  if (productData?.livenBurns?.length > 0) {
                    return (
                      <>
                        {productData?.livenBurns?.map((takelivenBurn) => {
                          return (
                            <div className="col-xl-2 col col-lg-2 col-md-2 col-sm-2 col-12">
                              <a href="#" className="element-type">
                                <div className="element element-accordian dotted_border">
                                  <img
                                    src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${takelivenBurn?.image}`}
                                    className="whole_food_img"
                                  />
                                  <p>{takelivenBurn?.name}</p>
                                </div>
                              </a>
                            </div>
                          );
                        })}
                      </>
                    );
                  }
                })()}

                <div className="" style={{ display: "none" }}>
                  <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                    <a href="#" className="element-type">
                      <div className="element element-icon dotted_border">
                        <img src={a_7} className="whole_food_img" />
                        <p>Sulfites Free</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                    <a href="#" className="element-type">
                      <div className="element element-button dotted_border">
                        <img src={a_8} className="whole_food_img" />
                        <p>Gmo Free</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                    <a href="#" className="element-type">
                      <div className="element element-button dotted_border">
                        <img src={a_9} className="whole_food_img" />
                        <p>Egg Free</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                    <a href="#" className="element-type">
                      <div className="element element-button dotted_border">
                        <img src={a_10} className="whole_food_img" />
                        <p>Nitrates Free</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                    <a href="#" className="element-type">
                      <div className="element element-button dotted_border">
                        <img src={a_11} className="whole_food_img" />
                        <p>Nuts Free</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3col col-lg-2 col-md-4 col-sm-4 col-12">
                    <a href="#" className="element-type">
                      <div className="element element-button dotted_border">
                        <img src={a_12} className="whole_food_img" />
                        <p>Dairy Free</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="element-section" id="why_choose_image">
            <div className="container">
              <div className="row mt-5 why_choose_dflex">
                <div className="col-md-7">
                  <h2 className="description-title mb-4 font-weight-semi-bold ls-m">
                    {productData?.howToUseTitle}
                  </h2>
                  <div className="mb-8">
                    {/* <b>Pop</b>: Remove the Desiccant cap. product image here */}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: productData?.howToUsedescription,
                      }}></div>
                    {/* <li>
                  <b>Drop</b>: Put 1 tab in a glass of water (250ml).
                </li>
                <li>
                  <b>Fizz</b>: Wait till it dissolves.
                </li>
                <li>
                  <b>Savour</b>: Drink it for tasting the delicious benefits of
                  Liven BURN with ACV.
                </li> */}
                  </div>
                </div>
                <div className="col-md-5">
                  <img
                    src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${productData?.howToUseImage}`}
                    className="why_choose_img"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="" id="absolute_cart">
            <div className="container">
              <h2 className="title title-center ls-s mb-8 dis_block">
                {productData?.chooseLivenBurnTitle}
              </h2>
              <br />
              <div className="row mt-10">
                {(() => {
                  if (productData?.takeLivenBurn?.length > 0) {
                    return (
                      <>
                        {productData?.takeLivenBurn?.map((takelivenBurns) => {
                          return (
                            <div className="col-sm-3">
                              <div className="icon-box icon-inversed text-center bg-livenburnitem">
                                <span className="icon-box-icon">
                                  <img
                                    src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${takelivenBurns.image}`}
                                    alt="category"
                                  />
                                </span>
                                <div className="icon-box-content">
                                  <p>{takelivenBurns?.title}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    );
                  }
                })()}
              </div>
              {/* <div className="row pro_feature">
            <div className="col-sm-12">
              <img
                //src={"http://54.177.7.240" + productData?.chooseLivenBurnImage}
                src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${productData?.chooseLivenBurnImage}`}
                className="acv_img"
              />
            </div>
          </div> */}

              <div className="row mt-5" style={{ display: "none" }}>
                <div className="col-sm-8">
                  <div className="row">
                    <h2 className="description-title mb-4 font-weight-semi-bold ls-m">
                      What is the right time to consume?
                    </h2>
                    <div className="col-lg-6 col-12 text-center mt-md-0">
                      <div className="icon-box icon-box1 pt-0">
                        <div className="icon-box-icon mx-auto drop-shadow ml-lg-0">
                          <figure>
                            <img
                              src={radius_1}
                              alt="icon"
                              width="100"
                              height="auto"
                            />
                          </figure>
                        </div>
                        <div className="icon-box-content">
                          <p>20 minutes before meal</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 text-center mt-md-0">
                      <div className="icon-box icon-box1 pt-0">
                        <div className="icon-box-icon mx-auto drop-shadow ml-lg-0">
                          <figure>
                            <img
                              src={radius_2}
                              alt="icon"
                              width="100"
                              height="auto"
                            />
                          </figure>
                        </div>
                        <div className="icon-box-content">
                          <p>Follow Healthy diet and exercise</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-12 text-center mt-md-0">
                      <div className="icon-box icon-box1 pt-4">
                        <div className="icon-box-icon mx-auto drop-shadow ml-lg-0">
                          <figure>
                            <img
                              src={radius_3}
                              alt="icon"
                              width="100"
                              height="auto"
                            />
                          </figure>
                        </div>
                        <div className="icon-box-content">
                          <p>Consume up to 90-180 days</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 text-center mt-md-0">
                      <div className="icon-box icon-box1 pt-4">
                        <div className="icon-box-icon mx-auto drop-shadow ml-lg-0">
                          <figure>
                            <img
                              src={radius_4}
                              alt="icon"
                              width="100"
                              height="auto"
                            />
                          </figure>
                        </div>
                        <div className="icon-box-content">
                          <p>Supports both men and women</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <img src={pro_banner_2} />
                </div>
              </div>
            </div>
          </section>

          <section className="element-section" id="why_choose_image">
            <div className="container">
              <div className="row mt-5">
                <div className="col-md-12">
                  <h2 className="description-title mb-4 font-weight-semi-bold ls-m text-center">
                    {productData?.burnWorkTitle}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: productData?.burnWorkdescription,
                    }}
                  />
                </div>
              </div>
              <div className="row burn_works mb-3">
                {/* (() => {
              if (productData?.livenBurns?.length > 0) {
                return (
                  <>
                    {productData?.livenBurns?.map((livenBurns) => {
                      return (
                        <div className="col-sm-4 burn_works">
                          <img
                            src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${livenBurns?.image}`}
                            className="pro_des_icon2"
                          />
                          {livenBurns?.name}
                        </div>
                      );
                    })}
                  </>
                )
              }
            })() */}
                {(() => {
                  if (productData?.livenBurnWorkIcon?.length > 0) {
                    return (
                      <>
                        {productData?.livenBurnWorkIcon?.map(
                          (livenBurnWorkIconData) => {
                            return (
                              <div className="col-sm-4 burn_works">
                                <img
                                  src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${livenBurnWorkIconData?.image}`}
                                  className="pro_des_icon2"
                                />
                                {livenBurnWorkIconData?.name}
                              </div>
                            );
                          }
                        )}
                      </>
                    );
                  }
                })()}
                {/* <div className="col-sm-4 burn_works">
                  <img src={a} className="pro_des_icon2" />
                  {productData?.title1}
                </div>
                <div className="col-sm-4 burn_works">
                  <img src={b} className="pro_des_icon2" />

                  {productData?.title2}
                </div>
                <div className="col-sm-4 burn_works">
                  <img src={c} className="pro_des_icon2" />

                  {productData?.title3}
                </div>
                <div className="col-sm-4 burn_works">
                  <img src={d} className="pro_des_icon2" />
                  {productData?.title4}
                </div>
                <div className="col-sm-4 burn_works">
                  <img src={e} className="pro_des_icon2" />
                  {productData?.title5}
                </div>
                <div className="col-sm-4 burn_works">
                  <img src={f} className="pro_des_icon2" />
                  {productData?.title6}
                </div>{" "} */}
              </div>
              <br></br>
              <div className="row mt-10 why_choose_dflex">
                <div className="col-md-8">
                  <h2 className="description-title mb-4 font-weight-semi-bold ls-m">
                    {productData?.chooseLivenBurnTitle}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: productData?.chooseLivenBurndescription,
                    }}></div>
                </div>
                <div className="col-md-4 text-center">
                  <img
                    src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${productData?.chooseLivenBurnImage}`}
                    className="why_choose_img"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="arrivals-section" id="Potential_product">
            <h2 className="title title-center ls-s mb-8 mt-9 dis_block">
              Includes Healing Potential of:
            </h2>
            <div className="tab tab-nav-center">
              <div className="tab-content">
                <div className="tab-pane pt-4 active" id="fruits">
                  {productData?.healingPotentials?.length > 0 && (
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
                        768: { slidesPerView: 4, spaceBetween: 5 },
                        1024: { slidesPerView: 5, spaceBetween: 5 },
                      }}>
                      {(() => {
                        return (
                          <>
                            {productData?.healingPotentials?.map(
                              (healingPoten) => {
                                return (
                                  <SwiperSlide>
                                    {" "}
                                    <div className="product-refdc text-center product-with-qty no_border">
                                      <figure className="product-media">
                                        <a href="javascript:void">
                                          <img
                                            //src={app_1}
                                            src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${healingPoten?.image}`}
                                            alt="product"
                                            width="280"
                                            height="315"
                                            className="healing_image"
                                          />
                                          <div class="title-bottom-left">
                                            {healingPoten?.name}
                                          </div>
                                          <div class="description-bottom-left">
                                            {healingPoten?.description}
                                          </div>
                                          <img
                                            //src={app_11}
                                            // src={
                                            //   "http://54.177.7.240" +
                                            //   healingPoten?.image
                                            // }

                                            src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${healingPoten?.layoutPhoto}`}
                                            className="healing_image-top"
                                            alt="product"
                                            style={{ width: "50% !important" }}
                                            width="280"
                                            height="315"
                                          />
                                        </a>
                                        <div className="product-action-vertical">
                                          <a
                                            href="#"
                                            className="btn-product-icon btn-wishlist"
                                            title="Add to wishlist">
                                            <i className="d-icon-plus"></i>
                                          </a>
                                        </div>
                                      </figure>
                                    </div>
                                  </SwiperSlide>
                                );
                              }
                            )}
                          </>
                        );
                      })()}
                    </Swiper>
                  )}

                  {/* <div className="input-prepend text-center mt-10">
                    <a href="#trial_free_section" className="flex-gap">
                      <img
                        src={claim_now}
                        className="wid_60 trial_enquery-btn"
                      />
                    </a>
                  </div> */}
                </div>

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
            </div>
          </section>

          <section
            className="new_our_idea pt-2 pt-md-7 pt-10"
            style={{ display: "none" }}>
            <div className="container p-0">
              <h2 className="title-echo mb-1">
                <span>Customer Review</span>
              </h2>
              <p className="new_our_idea_des">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </p>
              <div className="row">
                <div className="col-sm-6">
                  <div className="">
                    <div className="review-overlay"></div>
                    <div className="review-form-wrapper">
                      <div className="title-wrapper text-left">
                        <h3 className="title title-simple text-left text-normal">
                          Add a Review
                        </h3>
                        <p>
                          Your email address will not be published. Required
                          fields are marked *
                        </p>
                      </div>
                      <div className="rating-form">
                        <label htmlFor="rating" className="text-dark">
                          Your rating *{" "}
                        </label>
                        <span className="rating-stars selected">
                          <a className="star-1" href="demo-food2-product.html#">
                            1
                          </a>
                          <a className="star-2" href="demo-food2-product.html#">
                            2
                          </a>
                          <a className="star-3" href="demo-food2-product.html#">
                            3
                          </a>
                          <a
                            className="star-4 active"
                            href="demo-food2-product.html#">
                            4
                          </a>
                          <a className="star-5" href="demo-food2-product.html#">
                            5
                          </a>
                        </span>

                        <select
                          name="rating"
                          id="rating"
                          required=""
                          style={{ display: "none" }}>
                          <option value="">Rate…</option>
                          <option value="5">Perfect</option>
                          <option value="4">Good</option>
                          <option value="3">Average</option>
                          <option value="2">Not that bad</option>
                          <option value="1">Very poor</option>
                        </select>
                      </div>
                      <form action="demo-food2-product.html#">
                        <textarea
                          id="reply-message"
                          cols="30"
                          rows="6"
                          className="form-control mb-4"
                          placeholder="Comment *"
                          required></textarea>
                        <button
                          type="submit"
                          className="btn-product btn-cart wid_200">
                          Submit<i className="d-icon-arrow-right"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div
                    className="card-body expanded"
                    id="collapse1-3"
                    style={{ display: "block" }}>
                    <div className="row">
                      <div className="col-12 mb-6">
                        <div className="avg-rating-container">
                          <mark>5.0</mark>
                          <div className="avg-rating">
                            <span className="avg-rating-title">
                              Average Rating
                            </span>
                            <div className="ratings-container mb-0">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}></span>
                                <span className="tooltiptext tooltip-top">
                                  5.00
                                </span>
                              </div>
                              <span className="rating-reviews">
                                (2 Reviews)
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="ratings-list mb-2">
                          <div className="ratings-item">
                            <div className="ratings-container mb-0">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}></span>
                                <span className="tooltiptext tooltip-top">
                                  5.00
                                </span>
                              </div>
                            </div>
                            <div className="rating-percent">
                              <span style={{ width: "100%" }}></span>
                            </div>
                            <div className="progress-value">100%</div>
                          </div>
                          <div className="ratings-item">
                            <div className="ratings-container mb-0">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "80%" }}></span>
                                <span className="tooltiptext tooltip-top">
                                  4.00
                                </span>
                              </div>
                            </div>
                            <div className="rating-percent">
                              <span style={{ width: "0%" }}></span>
                            </div>
                            <div className="progress-value">0%</div>
                          </div>
                          <div className="ratings-item">
                            <div className="ratings-container mb-0">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "60%" }}></span>
                                <span className="tooltiptext tooltip-top">
                                  4.00
                                </span>
                              </div>
                            </div>
                            <div className="rating-percent">
                              <span style={{ width: "0%" }}></span>
                            </div>
                            <div className="progress-value">0%</div>
                          </div>
                          <div className="ratings-item">
                            <div className="ratings-container mb-0">
                              .{" "}
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "40%" }}></span>
                                <span className="tooltiptext tooltip-top">
                                  2.00
                                </span>
                              </div>
                            </div>
                            <div className="rating-percent">
                              <span style={{ width: "0%" }}></span>
                            </div>
                            <div className="progress-value">0%</div>
                          </div>
                          <div className="ratings-item">
                            <div className="ratings-container mb-0">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "20%" }}></span>
                                <span className="tooltiptext tooltip-top">
                                  4.00
                                </span>
                              </div>
                            </div>
                            <div className="rating-percent">
                              <span style={{ width: "0%" }}></span>
                            </div>
                            <div className="progress-value">0%</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 comments pt-2 border-no">
                        <nav className="toolbox">
                          <div className="toolbox-right">
                            <div className="toolbox-item toolbox-sort select-box text-dark">
                              <label>Sort By :</label>
                              <select name="orderby" className="form-control">
                                <option value="">Default Order</option>
                                <option value="newest" selected="selected">
                                  Newest Reviews{" "}
                                </option>
                                <option value="oldest">Oldest Reviews</option>
                                <option value="high_rate">
                                  Highest Rating
                                </option>
                                <option value="low_rate">Lowest Rating</option>
                                <option value="most_likely">Most Likely</option>
                                <option value="most_unlikely">
                                  Most Unlikely
                                </option>
                              </select>
                            </div>
                          </div>
                        </nav>
                        <ul className="comments-list">
                          <li>
                            <div className="comment">
                              <figure className="comment-media">
                                <a href="#">
                                  <img src={Comment_1} alt="avatar" />
                                </a>
                              </figure>
                              <div className="comment-body">
                                <div className="comment-rating ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "100%" }}></span>
                                    <span className="tooltiptext tooltip-top">
                                      5.00
                                    </span>
                                  </div>
                                </div>
                                <div className="comment-user">
                                  <span className="comment-date">
                                    by{" "}
                                    <span className="font-weight-semi-bold text-uppercase text-dark">
                                      John Doe
                                    </span>{" "}
                                    on{" "}
                                    <span className="font-weight-semi-bold text-dark">
                                      Nov 22, 2018
                                    </span>
                                  </span>
                                </div>

                                <div className="comment-content mb-5">
                                  <p>
                                    Sed pretium, ligula sollicitudin laoreet
                                    viverra, tortor libero sodales leo, eget
                                    blandit nunc tortor eu nibh.
                                  </p>
                                </div>

                                <div className="feeling mt-5">
                                  <button className="btn btn-link btn-icon-left btn-slide-up btn-infinite like mr-2">
                                    <i className="fa fa-thumbs-up"></i>
                                    Like (<span className="count">0</span>)
                                  </button>
                                  <button className="btn btn-link btn-icon-left btn-slide-down btn-infinite unlike active">
                                    <i className="fa fa-thumbs-down"></i>
                                    Unlike (<span className="count">1</span>)
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="comment">
                              <figure className="comment-media">
                                <a href="#">
                                  <img src={Comment_2} alt="avatar" />
                                </a>
                              </figure>

                              <div className="comment-body">
                                <div className="comment-rating ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "100%" }}></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                  </div>
                                </div>
                                <div className="comment-user">
                                  <span className="comment-date">
                                    by{" "}
                                    <span className="font-weight-semi-bold text-uppercase text-dark">
                                      John Doe
                                    </span>{" "}
                                    on{" "}
                                    <span className="font-weight-semi-bold text-dark">
                                      Nov 22, 2018
                                    </span>
                                  </span>
                                </div>

                                <div className="comment-content">
                                  <p>
                                    Sed pretium, ligula sollicitudin laoreet
                                    viverra, tortor libero sodales leo, eget
                                    blandit nunc tortor eu nibh.
                                  </p>
                                </div>
                                <div className="feeling mt-5">
                                  <button className="btn btn-link btn-icon-left btn-slide-up btn-infinite like mr-2">
                                    <i className="fa fa-thumbs-up"></i>
                                    Like (<span className="count">0</span>)
                                  </button>
                                  <button className="btn btn-link btn-icon-left btn-slide-down btn-infinite unlike">
                                    <i className="fa fa-thumbs-down"></i>
                                    Unlike (<span className="count">0</span>)
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <nav className="toolbox toolbox-pagination justify-content-end">
                          <ul className="pagination">
                            <li className="page-item disabled">
                              <a
                                className="page-link page-link-prev"
                                href="#"
                                aria-label="Previous"
                                tabIndex="-1"
                                aria-disabled="true">
                                {" "}
                                <i className="d-icon-arrow-left"></i>Prev{" "}
                              </a>
                            </li>
                            <li
                              className="page-item active"
                              aria-current="page">
                              <a className="page-link" href="#">
                                1
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                3
                              </a>
                            </li>
                            <li className="page-item page-item-dots">
                              <a className="page-link" href="#">
                                6
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                className="page-link page-link-next"
                                href="#"
                                aria-label="Next">
                                {" "}
                                Next<i className="d-icon-arrow-right"></i>{" "}
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="new_our_idea pt-2 pt-md-7 pt-10 pb-8">
            <div className="container p-0">
              <h2 className="title-echo mb-1">
                <span>Clear Your Mind Now! Answers for Your Queries!</span>
              </h2>
              <br />
              <div className="row">
                <div className="col-sm-8">
                  <div className="code-template">
                    <div className="accordion accordion-background accordion-icon accordion-boxed accordion-card-border accordion-plus accordion-gutter-sm code-content">
                      {(() => {
                        if (productData?.questions?.length > 0) {
                          return (
                            <>
                              {productData?.questions?.map((prodcontain) => {
                                return <Accordion content={prodcontain} />;
                              })}
                            </>
                          );
                        }
                      })()}
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="span12">
                    <div className="thumbnail center well well-small text-center">
                      <h2>Newsletter</h2>
                      <p>Subscribe to our weekly Newsletter and stay tuned.</p>
                      {/* <form action="" method="post"> */}
                      <div className="input-prepend">
                        <input
                          type="text"
                          id=""
                          placeholder="Entet Email"
                          className="form-control"
                          value={email}
                          required
                          onChange={(e) => setEmail(e.target.value)}
                          style={{ color: "black" }}
                        />
                      </div>
                      {vEmail && <span className="d-flex">{vEmail}</span>}
                      <br />
                      <input
                        type="submit"
                        value="Subscribe Now!"
                        className="btn btn-large"
                        onClick={() => handleSendNewsLetter()}
                      />
                      {/* </form> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-3 mt-2 mb-2 need_sec" id="product_des_page">
            <h2 className="title-echo mb-1">
              <span>Some Related Products</span>
            </h2>

            {/* <div
                                className="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2"
                                data-owl-options="{
                            'nav': false,
                            'dots': false,
                            'margin': 20,
                            'autoplay': false,
                            'responsive': {
                                '0': {
                                    'items': 2
                                },
                                '768': {
                                    'items': 3
                                },
                                '992': {
                                    'items': 3
                                }
                            }
                        }"
                            > */}
            {subCategoryProducts?.length > 0 && (
              <Swiper
                ref={swiperRefRelated}
                slidesPerView={5}
                spaceBetween={4}
                slidesPerGroup={4}
                // loop={true}
                // loopFillGroupWithBlank={true}
                navigation={false}
                modules={[Navigation]}
                className="mySwiper11122d"
                breakpoints={{
                  320: { slidesPerView: 3, spaceBetween: 5 },
                  480: { slidesPerView: 3, spaceBetween: 5 },
                  768: { slidesPerView: 4, spaceBetween: 5 },
                  1024: { slidesPerView: 5, spaceBetween: 5 },
                }}
                // breakpoints={{
                //   320: { slidesPerView: 3, spaceBetween: 5 },
                //   480: { slidesPerView: 3, spaceBetween: 5 },
                //   768: { slidesPerView: 4, spaceBetween: 5 },
                //   1024: { slidesPerView: 5, spaceBetween: 5 },
                // }}
              >
                {/* <OwlCarousel
                  // className="owl-carousel owl-theme own-carosuel-releadproduct row cols-lg-4"
                  className="owl-carousel owl-carousel-healing"
                  margin={20}
                  stagePadding={10}
                  // loop={true}
                  nav={true}
                  items={1} //
                  // autoWidth={true}
                  smartSpeed={500}
                  dots={false}
                  navContainerClass={"owl-nav"}
                  // navContainerClass={"owl-nav"}
                  // navText={[
                  //   `<img src=https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/back-arrow.png  />`,
                  //   `<img src=https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/back-arrow.png />`,
                  // ]}
                  // navText={[
                  //   `<img src=https://cdn-icons-png.flaticon.com/512/109/109618.png  />`,
                  //   `<img src=https://cdn-icons-png.flaticon.com/512/109/109617.png  />`,
                  // ]}
                  responsive={{
                    0: {
                      items: 1,
                    },
                    768: {
                      items: 3,
                    },
                    800: {
                      items: 3,
                    },
                  }}
                  autoplay
                  // loop
                  autoplayTimeout={2000}
                  autoplayHoverPause={true}
                  // navText={[
                  //   '<i class="fa fa-chevron-left"></i>"',
                  //   '<i class="fa fa-chevron-right"></i>'
                  // ]}
                > */}
                {(() => {
                  if (subCategoryProducts?.length > 0) {
                    return (
                      <>
                        {subCategoryProducts?.map(
                          (subCategoryProductsDetails, pkey) => {
                            return (
                              <SwiperSlide>
                                {" "}
                                <Product
                                  ProductDetails={subCategoryProductsDetails}
                                  key={pkey}
                                />
                              </SwiperSlide>
                            );
                          }
                        )}
                      </>
                    );
                  }
                })()}
                {/* </OwlCarousel> */}
              </Swiper>
            )}
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
            <div className="row mt-10">
              <div className="col-sm-12 text-center">
                <div className="product-form-group justify-content-center">
                  {/* {user?.login ? ( */}
                  <Link to={`/products/list/${productData.categoryId}`}>
                    <button className="btn-product btn-cart wid_250">
                      <i className="d-icon-bag pr-2"></i> More Health Boosters
                    </button>
                  </Link>
                  {/* ) : (
                <Link to="/login">
                  <button className="btn-product btn-cart wid_250">
                    <i className="d-icon-bag pr-2"></i> More Health Boosters
                  </button>
                </Link>
              )} */}
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="d-flex gif-loader">
          <img
            src={
              "https://flevix.com/wp-content/uploads/2019/07/Spin-Preloader-1.gif"
            }
            alt="loader"
          />
        </div>
      )}
    </>
  );
};

export default ProductDetails;

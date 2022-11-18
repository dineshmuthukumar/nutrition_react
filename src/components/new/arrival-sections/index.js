import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import {
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
  const userCart = cart?.data ? cart?.data : null;
  const IsProductDetails = async (subcategoryId, key) => {
    const result = await productListCategoryApi(subcategoryId);
    console.log(result?.data?.responseData?.product?.docs);
    setProdList(result?.data?.responseData?.product?.docs);
    //console.log(result?.data?.responseData?.product?.docs?.length);
    setCategoryActive(true);
    setProductTabActive(true);
    setCategoryActiveIndex(key);
  };;

  useEffect(() => {
    //console.log("Usereffect");
    //if (categorylist?.length > 0) {
    IsProductDetails(categorylist[0]?._id, 0);
    ///}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    //console.log("Usereffect");
    if (categorylist?.length > 0) {
      IsProductDetails(categorylist[0]?._id, 0);
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
          <h2 className="title-echo mb-1">
            <span>What you need? Meet the most Here!</span>
          </h2>
          <p>
            From skin to muscles, sleep to energy and fitness to cognition –
            Liven nurtures <br /> the health with essentials naturally sourced.
          </p>
          <div className="tab tab-nav-center">
            <ul className="nav nav-tabs">
              {(() => {
                if (categorylist?.length > 0) {
                  let count = 0;
                  return (
                    <>
                      {categorylist?.map((arrivalecontent, key) => {
                        count++;
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
                              <h3 className="img-cat-title mb-0">
                                <i
                                  className="fa fa-home"
                                  aria-hidden="true"
                                ></i>{" "}
                                {arrivalecontent?.name}
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
                        items: 3,
                      },
                    }}
                    autoplay
                    // autoplayTimeout={2000}
                    //autoplayHoverPause={true}
                  >
                    {(() => {
                      return (
                        <>
                          {prodList?.length > 0 &&
                            prodList?.map((prodDetails, pkey) => {
                              return (
                                <Product
                                  ProductDetails={prodDetails}
                                  key={pkey}
                                />
                              );
                            })}
                        </>
                      );
                    })()}
                  </OwlCarousel>
                )}
                {prodList?.length > 0 ? "" : "No found Product"}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArrivalSection;

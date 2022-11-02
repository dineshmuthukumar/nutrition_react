import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import { getsubCategoryApi } from "../../../api/base-methods";
import { add_to_cart_thunk } from "../../../redux/thunk/user_cart_thunk";
import { useDispatch, useSelector } from "react-redux";

import product_1 from "../../../images/new-images/demos/demo-food2/products/pro_product_1.jpg";
import product_2 from "../../../images/new-images/demos/demo-food2/products/pro_product_2.jpg";
import product_3 from "../../../images/new-images/demos/demo-food2/products/pro_product_3.jpg";
import product_4 from "../../../images/new-images/demos/demo-food2/products/pro_product_4.jpg";

import priceTag from "../../../images/new-images/demos/demo-food2/products/price_tag.png";

import "./style.scss";

const ArrivalSection = ({ homeContent, categorylist }) => {
  const dispatch = useDispatch();
  const { user, cart } = useSelector((state) => state);
  const [inCart, setInCart] = useState(false);

  //console.log(user, "user");
  const userSlug = user.data ? user.data : null;
  const [prodList, setProdList] = useState({});
  const [categoryActive, setCategoryActive] = useState("");
  const [productTabActive, setProductTabActive] = useState("");
  const userCart = cart?.data ? cart?.data : null;
  const IsProductDetails = async (subcategoryId) => {
    const result = await getsubCategoryApi(subcategoryId);
    console.log(result?.data?.responseData?.Products, "result");
    setProdList(result?.data?.responseData?.Products);
    setCategoryActive(subcategoryId);
    setProductTabActive(subcategoryId);
  };

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
                  return (
                    <>
                      {categorylist?.map((arrivalecontent) => {
                        return (
                          <li
                            className="nav-item ml-1 mr-1 pt-2 pb-2"
                            onClick={() =>
                              IsProductDetails(arrivalecontent._id)
                            }
                          >
                            <a
                              className={`nav-link nav-link-with-img border-rounded ${
                                categoryActive == arrivalecontent._id
                                  ? "active"
                                  : ""
                              }`}
                              href="#fruits"
                            >
                              <h3 className="img-cat-title mb-0">
                                <i
                                  className="fa fa-home"
                                  aria-hidden="true"
                                ></i>{" "}
                                {arrivalecontent?.subCategoryName}
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
                  autoplayTimeout={2000}
                  autoplayHoverPause={true}
                >
                  {(() => {
                    if (prodList.length > 0) {
                      return (
                        <>
                          {prodList?.map((prodDetails) => {
                            return (
                              <div className="product text-center product-with-qty">
                                <figure className="product-media">
                                  <Link to="/product">
                                    <img
                                      src={prodDetails.photos[0]}
                                      alt="product"
                                      width="280"
                                      height="315"
                                    />
                                  </Link>
                                  <div className="product-label-group">
                                    <img src={priceTag} />
                                  </div>
                                </figure>
                                <div className="product-details">
                                  <h3 className="product-name">
                                    <a href="#">{prodDetails?.name}</a>
                                  </h3>
                                  <div className="product-price ls-md offer_price_details">
                                    <span className="price">
                                      {prodDetails?.saleAmount}
                                    </span>
                                    <span className="price line-through">
                                      Rs.{prodDetails?.actualAmount}
                                    </span>
                                  </div>
                                  <div className="ratings-container">
                                    <div className="ratings-full">
                                      <span className="ratings"></span>
                                      <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                  </div>
                                  <div className="product-action">
                                    <a
                                      href="#"
                                      className="btn-product btn-cart ls-l"
                                      data-toggle="modal"
                                      data-target="#addCartModal"
                                      title="Add to cart"
                                      onClick={() => {
                                        if (!inCart) {
                                          dispatch(
                                            add_to_cart_thunk(prodDetails?._id)
                                          );
                                        }
                                      }}
                                    >
                                      <i class="d-icon-bag"></i>
                                      <span>Add to cart</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </>
                      );
                    }
                  })()}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArrivalSection;

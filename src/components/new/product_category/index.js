

import React, { useEffect, useState,useRef } from "react";
import { useRouteMatch } from "react-router";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import store_1 from "../../../images/new-images/subpages/store-1.jpg";
import store_2 from "../../../images/new-images/subpages/store-2.jpg";
import store_3 from "../../../images/new-images/subpages/store-3.jpg";
import store_4 from "../../../images/new-images/subpages/store-4.jpg";
import pro_product_1 from "../../../images/new-images/demos/demo-food2/products/pro_product_1.jpg";
import pro_product_2 from "../../../images/new-images/demos/demo-food2/products/pro_product_2.jpg";
import pro_product_3 from "../../../images/new-images/demos/demo-food2/products/pro_product_3.jpg";
import pro_product_4 from "../../../images/new-images/demos/demo-food2/products/pro_product_4.jpg";
import Accordion from "../../accordion";

import Product from "../../product";

const Product_Category = ({ categoryDetails, categoryProdDetails }) => {
  // console.log(categoryProdDetails, "categoryProdDetails");
  // const accordionData = categoryDetails?.questions;

  const perChunk = 2; // items per chunk

  const result = categoryDetails?.description?.reduce(
    (resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    },
    []
  );
  console.log(result, "result");

  return (
    <>
      <section className="customer-section pb-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 mb-4">
              <h3 className="section-title lh-1 font-weight-bold">
                {categoryDetails?.subCategoryName}
              </h3>
              {/* <h4 className="section-title lh-1 font-weight-bold">
                What you want to know about Effervescent?
              </h4> */}
              <div className="section-desc text-grey">
                <div
                  dangerouslySetInnerHTML={{
                    __html: categoryDetails?.categoryDescription,
                  }}
                />
                {/* Effervescent are disintegrating capsules that releases carbon
                dioxide when dropped into water. It makes the drugs as an easily
                available solution for faster absorption from upper small
                intestine with improved bioavailability. These are the compact
                version of versatile nutrients in an individual tablet with
                natural flavorings, colors and hydrophilic lubricants. Each one
                is maintained with integrity and protected from moisture by
                proper manufacturing and packing procedure. The effervescent
                tablets are packed in tight, moisture-free plastic tubes with
                Desiccants. */}
              </div>
            </div>
          </div>
          {/* <div className="row align-items-center">
            <div className="col-md-12 mb-4">
              <h4 className="section-title lh-1 font-weight-bold">
                Resilience with Effervescent!
              </h4>
              <p className="section-desc text-grey">
                Effervescent are disintegrating capsules that releases carbon
                dioxide when dropped into water. It makes the drugs as an easily
                available solution for faster absorption from upper small
                intestine with improved bioavailability. These are the compact
                version of versatile nutrients in an individual tablet with
                natural flavorings, colors and hydrophilic lubricants. Each one
                is maintained with integrity and protected from moisture by
                proper manufacturing and packing procedure. The effervescent
                tablets are packed in tight, moisture-free plastic tubes with
                Desiccants.
              </p>
            </div> 
          </div> */}
        </div>
      </section>
      <section className="overlay_product">
        <div className="container">
          <div className="code-template">
            {/* <div className="row cols-sm-2 cols-lg-4 code-content"> */}
            {result &&
              Object.keys(result).map((template_name) => {
                return (
                  <div className="row justify-content-center">
                    {result[template_name]?.map((queas) => {
                      return (
                        <div className="col-lg-4 col-sm-6 mb-4 order-lg-auto order-sm-last ">
                          <div className="banner banner-4 banner-fixed banner-radius overlay-effect2 content-middle content-center appear-animate fadeIn appear-animation-visible">
                            <figure>
                              <img
                                src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${queas?.image}`}
                                alt="banner"
                                width="350"
                                height="177"
                                style={{
                                  backgroundColor: "#1e1e1e",
                                  height: "50vh",
                                }}
                              />
                            </figure>
                            <div
                              className="banner-content d-flex align-items-center w-100 text-left"
                              style={{ padding: "20px" }}
                            >
                              <div className="mr-auto mb-4 mb-md-0">
                                <h4 className="banner-subtitle text-white">
                                  {" "}
                                  {queas?.title}
                                </h4>
                                <p className="text-white">
                                  {queas?.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}

            {/* <div className="image-box image-overlay">
                <figure className="banner-radius">
                  <img
                    src={store_1}
                    alt="image-overlay"
                    width="280"
                    height="280"
                  />
                  <h4 className="overlay-visible">Fizzy</h4>
                  <div className="overlay overlay-transparent">
                    <p className="">
                      The active molecules in the formula gets bubbled and
                      dissolves the nutrients in the water making it fun and
                      delicious to consume, maintaining the properties intact in
                      each sip.
                    </p>
                  </div>
                </figure>
              </div>
              <div className="image-box image-overlay">
                <figure className="banner-radius">
                  <img
                    src={store_2}
                    alt="image-overlay"
                    width="280"
                    height="280"
                  />
                  <h4 className="overlay-visible">Travel friendly</h4>
                  <div className="overlay overlay-transparent">
                    <p className="">
                      The packing is portable and easy to carry, so you never
                      giveup the try for a healthy lifestyle.
                    </p>
                  </div>
                </figure>
              </div>
              <div className="image-box image-overlay">
                <figure className="banner-radius">
                  <img
                    src={store_3}
                    alt="image-overlay"
                    width="280"
                    height="280"
                  />
                  <h4 className="overlay-visible">Better Absorption</h4>
                  <div className="overlay overlay-transparent">
                    <p className="">
                      Consuming this bubbling drink is so delicious with
                      allnatural flavors ensuring better bioavailability through
                      faster absorption.
                    </p>
                  </div>
                </figure>
              </div>
              <div className="image-overlay">
                <figure className="banner-radius">
                  <img
                    src={store_4}
                    alt="image-overlay"
                    width="280"
                    height="280"
                  />
                  <h4 className="overlay-visible">No worries</h4>
                  <div className="overlay overlay-transparent">
                    <p className="">
                      This fizzy formulation is effective enough to deliver
                      proper nutrients to the consumer in a safe manner. There
                      are no health-harming compounds and this formula has
                      undergone certain certifications for daily consumption.
                    </p>
                  </div>
                </figure>
              </div> */}
            {/* </div> */}

            {/* <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6 mb-4 order-lg-auto order-sm-last">
                <div className="banner banner-4 banner-fixed banner-radius overlay-effect2 content-middle content-center appear-animate fadeIn appear-animation-visible">
                  <figure>
                    <img
                      src="https://d-themes.com/html/riode/images/demos/demo1/banners/banner2.jpg"
                      alt="banner"
                      width="350"
                      height="177"
                      style={{ backgroundColor: "#1e1e1e" }}
                    />
                  </figure>
                  <div
                    className="banner-content d-flex align-items-center w-100 text-left"
                    style={{ padding: "20px" }}
                  >
                    <div className="mr-auto mb-4 mb-md-0">
                      <h4 className="banner-subtitle text-white">Fizzy</h4>
                      <p className="text-white">
                        The active molecules in the formula gets bubbled and
                        dissolves the nutrients in the water making it fun and
                        delicious to consume, maintaining the properties intact
                        in each sip.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4 order-lg-auto order-sm-last">
                <div className="banner banner-4 banner-fixed banner-radius overlay-effect2 content-middle content-center appear-animate fadeIn appear-animation-visible">
                  <figure>
                    <img
                      src="https://d-themes.com/html/riode/images/demos/demo1/banners/banner2.jpg"
                      alt="banner"
                      width="350"
                      height="177"
                      style={{ backgroundColor: "#1e1e1e" }}
                    />
                  </figure>
                  <div
                    className="banner-content d-flex align-items-center w-100 text-left"
                    style={{ padding: "20px" }}
                  >
                    <div className="mr-auto mb-4 mb-md-0">
                      <h4 className="banner-subtitle text-white">No worries</h4>
                      <p className="text-white">
                        The active molecules in the formula gets bubbled and
                        dissolves the nutrients in the water making it fun and
                        delicious to consume, maintaining the properties intact
                        in each sip.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4 order-lg-auto order-sm-last">
                <div className="banner banner-4 banner-fixed banner-radius overlay-effect2 content-middle content-center appear-animate fadeIn appear-animation-visible">
                  <figure>
                    <img
                      src="https://d-themes.com/html/riode/images/demos/demo1/banners/banner2.jpg"
                      alt="banner"
                      width="350"
                      height="177"
                      style={{ backgroundColor: "#1e1e1e" }}
                    />
                  </figure>
                  <div
                    className="banner-content d-flex align-items-center w-100 text-left"
                    style={{ padding: "20px" }}
                  >
                    <div className="mr-auto mb-4 mb-md-0">
                      <h4 className="banner-subtitle text-white">Fizzy</h4>
                      <p className="text-white">
                        The active molecules in the formula gets bubbled and
                        dissolves the nutrients in the water making it fun and
                        delicious to consume, maintaining the properties intact
                        in each sip.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4 order-lg-auto order-sm-last">
                <div className="banner banner-4 banner-fixed banner-radius overlay-effect2 content-middle content-center appear-animate fadeIn appear-animation-visible">
                  <figure>
                    <img
                      src="https://d-themes.com/html/riode/images/demos/demo1/banners/banner2.jpg"
                      alt="banner"
                      width="350"
                      height="177"
                      style={{ backgroundColor: "#1e1e1e" }}
                    />
                  </figure>
                  <div
                    className="banner-content d-flex align-items-center w-100 text-left"
                    style={{ padding: "20px" }}
                  >
                    <div className="mr-auto mb-4 mb-md-0">
                      <h4 className="banner-subtitle text-white">No worries</h4>
                      <p className="text-white">
                        The active molecules in the formula gets bubbled and
                        dissolves the nutrients in the water making it fun and
                        delicious to consume, maintaining the properties intact
                        in each sip.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6 mb-4 order-lg-auto order-sm-last">
                <div className="banner banner-4 banner-fixed banner-radius overlay-effect2 content-middle content-center appear-animate fadeIn appear-animation-visible">
                  <figure>
                    <img
                      src="https://d-themes.com/html/riode/images/demos/demo1/banners/banner2.jpg"
                      alt="banner"
                      width="350"
                      height="177"
                      style={{ backgroundColor: "#1e1e1e" }}
                    />
                  </figure>
                  <div
                    className="banner-content d-flex align-items-center w-100 text-left"
                    style={{ padding: "20px" }}
                  >
                    <div className="mr-auto mb-4 mb-md-0">
                      <h4 className="banner-subtitle text-white">
                        Travel friendly
                      </h4>
                      <p className="text-white">
                        The active molecules in the formula gets bubbled and
                        dissolves the nutrients in the water making it fun and
                        delicious to consume, maintaining the properties intact
                        in each sip.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4 order-lg-auto order-sm-last">
                <div className="banner banner-4 banner-fixed banner-radius overlay-effect2 content-middle content-center appear-animate fadeIn appear-animation-visible">
                  <figure>
                    <img
                      src="https://d-themes.com/html/riode/images/demos/demo1/banners/banner2.jpg"
                      alt="banner"
                      width="350"
                      height="177"
                      style={{ backgroundColor: "#1e1e1e" }}
                    />
                  </figure>
                  <div
                    className="banner-content d-flex align-items-center w-100 text-left"
                    style={{ padding: "20px" }}
                  >
                    <div className="mr-auto mb-4 mb-md-0">
                      <h4 className="banner-subtitle text-white">
                        Better Absorption
                      </h4>
                      <p className="text-white">
                        Consuming this bubbling drink is so delicious with
                        allnatural flavors ensuring better bioavailability
                        through faster absorption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* <section className="category_product_list">
        <div className="container">
          <h2 className="title-echo mb-1">
            <span>Available Products</span>
          </h2>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since.
          </p>
        </div>
        <div className="container">
          <div className="row mt-10">
            <div className="offset-sm-2 col-sm-3">1</div>
            <div className="col-sm-3">1</div>
            <div className="col-sm-3">1</div>
          </div>
          <div className="row mt-10">
            <div className="offset-sm-2 col-sm-3">1</div>
            <div className="col-sm-3">1</div>
            <div className="col-sm-3">1</div>
          </div>
        </div>
      </section>{" "} */}

      <section
        className="pt-3 mt-2 mb-2 pb-10 need_sec cat_new_carosal"
        id="product_category_page_section"
      >
        <div className="container">
          <h2 className="title-echo mb-1">
            <span>Available Products</span>
          </h2>
          <p>{categoryDetails?.productDescription}</p>

          {/* <OwlCarousel className="owl-theme" loop margin={10} nav>
            <div class="item">
              <img src={pro_product_1} />
            </div>
            <div class="item">
              <img src={pro_product_2} />
            </div>
            <div class="item">
              <img src={pro_product_1} />
            </div>
            <div class="item">
              <img src={pro_product_1} />
            </div>
            <div class="item">
              <img src={pro_product_1} />
            </div>
          </OwlCarousel> */}
          {categoryProdDetails?.length > 0 ? (
            <OwlCarousel
              className="owl-carousel owl-loaded owl-drag"
              margin={20}
              nav={true}
              smartSpeed={500}
              dots={false}
              navContainerClass={"owl-nav"}
              mouseDrag={true}
              // stagePadding={0}
              key={`carousel_1`}
              // navigationText={[
              //   "<i class='icon-chevron-left icon-white'><</i>",
              //   "<i class='icon-chevron-right icon-white'>></i>",
              // ]}
              // navText={[
              //   '<i class="fa fa-angle-left" aria-hidden="true"></i>',
              //   '<i class="fa fa-angle-right" aria-hidden="true"></i>',
              // ]}
              // navContainerClass={"owl-nav"}
              //responsiveClass={true}
              // navText={[
              //   `<img src=https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/back-arrow.png  />`,
              //   `<img src=https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/back-arrow.png />`,
              // ]}
              responsive={{
                0: {
                  items: 1,
                },
                768: {
                  items: 3,
                },
                800: {
                  items: 4,
                },
              }}
              // loop
              autoplay={false}
              autoplayTimeout={2000}
              autoplayHoverPause={true}
            >
              {(() => {
                if (categoryProdDetails?.length > 0) {
                  return (
                    <>
                      {categoryProdDetails?.map((prodDetailsList, pkey) => {
                        return (
                          <Product
                            key={pkey}
                            ProductDetails={prodDetailsList}
                          />
                        );
                      })}
                    </>
                  );
                }
              })()}
            </OwlCarousel>
          ) : (
            <div className="no-product d-flex justify-content-center my-7">
              No Product Found
            </div>
          )}
        </div>
      </section>
      <section
        className="new_our_idea pt-2 pt-md-7 pt-10 pb-8"
        id="distinct_table"
      >
        <div className="container p-0">
          <h2 className="title-echo mb-1">
            <span>Why we are Distinct from other?</span>
          </h2>
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <div className="table-responsive table-bordered">
                <table className="table">
                  {/* <thead className="base-bg">
                    <tr>
                      <th>Be Bodywise Advantage</th>
                    </tr>
                  </thead> */}
                  <tbody>
                    {(() => {
                      if (categoryDetails?.advantage?.length > 0) {
                        return (
                          <>
                            {categoryDetails?.advantage?.map(
                              (advantage, addkey) => {
                                return (
                                  <tr
                                    className={`${
                                      addkey == 0 ? "base-bg" : ""
                                    }`}
                                  >
                                    <td>
                                      <i className="fas fa-certificate"></i>
                                      {advantage?.title}
                                    </td>
                                  </tr>
                                );
                              }
                            )}
                          </>
                        );
                      }
                    })()}
                    {/* <tr>
                      <td>
                        <i className="fas fa-certificate"></i> No Added Sugar
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-certificate"></i> Good for Gut
                        Health
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-certificate"></i> No Preservatives
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="table-responsive table-bordered">
                <table className="table">
                  {/* <thead className="red-bg">
                    <tr>
                      <th>Ordinary Products</th>
                    </tr>
                  </thead> */}
                  <tbody>
                    {(() => {
                      if (categoryDetails?.ordinaryProducts?.length > 0) {
                        return (
                          <>
                            {categoryDetails?.ordinaryProducts?.map(
                              (deadvantage, diskey) => {
                                return (
                                  <tr
                                    className={`${diskey == 0 ? "red-bg" : ""}`}
                                  >
                                    <td>
                                      <i className="fas fa-certificate"></i>
                                      {deadvantage?.title}
                                    </td>
                                  </tr>
                                );
                              }
                            )}
                          </>
                        );
                      }
                    })()}
                    {/* <tr>
                      <td>
                        <i className="fas fa-certificate fa-red"></i> Contains
                        unnatural additions
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-certificate fa-red"></i> Not good
                        for the Gut
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-certificate fa-red"></i> Contains
                        Preservatives
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="new_our_idea pt-2 pt-md-7 pt-10 pb-8">
        <div className="container p-0">
          <h2 className="title-echo mb-1">
            <span>Frequently Asked Question?</span>
          </h2>
          {/* <p className="new_our_idea_des">
            {categoryDetails?.questionDescription}
          </p> */}
          <div className="row justify-content-center">
            <div className="col-sm-9 offset-sm-1">
              <div className="code-template">
                <div className="accordion-background accordion-icon accordion-boxed accordion-card-border accordion-plus accordion-gutter-sm code-content">
                  {(() => {
                    if (categoryDetails?.questions?.length > 0) {
                      return (
                        <>
                          {categoryDetails?.questions?.map((contain) => {
                            return <Accordion content={contain} />;
                          })}
                        </>
                      );
                    }
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default Product_Category;
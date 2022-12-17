import React from "react";
import OwlCarousel from "react-owl-carousel";
import {  Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";

import product_1 from "../../../images/new-images/demos/demo-food2/products/pro_product_11.jpg";
import product_2 from "../../../images/new-images/demos/demo-food2/products/pro_product_22.jpg";
import product_3 from "../../../images/new-images/demos/demo-food2/products/pro_product_33.jpg";
import product_4 from "../../../images/new-images/demos/demo-food2/products/pro_product_44.jpg";

import product_11 from "../../../images/new-images/demos/demo-food2/products/1.jpg";
import priceTag from "../../../images/new-images/demos/demo-food2/products/price_tag.png";

import Product from "../../product";
import "./style.scss";

const FeatureProduct = ({ featureProductsContent }) => {
  const history = useHistory();
  //console.log(featureProductsContent?.length);

  return (
    <>
      <div className="container-fluid base-color-bg" id="feature-product">
        <section className="category-section mb-4 mb-lg-6 pb-7">
          <h2 className="title-echo mb-2">
            <span>Featured product</span>
          </h2>

          <br />
          <div className="container">
            <OwlCarousel
              className="owl-carousel owl-theme row cols-lg-4 cols-2"
              margin={20}
              items={1}
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
                          <Product ProductDetails={Featurecontent} key={fkey} />
                        );
                      })}
                    </>
                  );
                }
              })()}
            </OwlCarousel>
          </div>
        </section>
      </div>
    </>
  );
};


export default FeatureProduct;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductDetailsApi } from "../../api/base-methods";
const Product = ({ ProductDetails, key }) => {
  const [productData, setProductData] = useState(false);
  // const accordionData = categoryDetails?.questions;
  //console.log(ProductDetails, "ProductDetails");
  return (
    <div class="product text-center product-with-qty" key={ProductDetails?._id}>
      <figure class="product-media">
        <Link to={`/product/${ProductDetails?._id}`}>
          <img
            src={ProductDetails?.photos}
            alt="product"
            width="280"
            height="315"
            style={{ width: "100%" }}
          />
        </Link>
        <div class="product-label-group">
          <label class="product-label label-sale">25% Off</label>
        </div>
        <div class="product-action-vertical">
          <a
            href="#"
            class="btn-product-icon btn-wishlist"
            title="Add to wishlist"
          >
            <i class="d-icon-heart"></i>
          </a>
        </div>
      </figure>
      <div class="product-details">
        <h3 class="product-name">
          <a href="#">{ProductDetails?.name}</a>
        </h3>

        <div className="product-price ls-md offer_price_details">
          <span className="price">Rs {ProductDetails?.saleAmount}</span>
          <span className="price line-through">
            Rs. {ProductDetails?.actualAmount}
          </span>
          {/* <!-- <span class="price base-color">25% off</span> --> */}
        </div>
        <div class="ratings-container">
          <div class="ratings-full">
            <span class="ratings" style={{ width: "100%" }}></span>
            <span class="tooltiptext tooltip-top"></span>
          </div>
        </div>
        {/* <!-- <div class="row">
                                    <div class="col-sm-12">
                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart ls-l" data-toggle="modal" data-target="#addCartModal" title="Add to cart"><i class="d-icon-bag"></i><span>Add to cart</span></a>
                                        </div>
                                    </div>
                                </div> --> */}

        <div class="product-action">
          <a
            href="#"
            class="btn-product btn-cart ls-l"
            data-toggle="modal"
            data-target="#addCartModal"
            title="Add to cart"
          >
            <i class="d-icon-bag"></i>
            <span>Add to cart</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Product;

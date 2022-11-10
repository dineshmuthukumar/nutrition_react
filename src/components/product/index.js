import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductDetailsApi } from "../../api/base-methods";
import { add_to_cart_thunk } from "../../redux/thunk/user_cart_thunk";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ ProductDetails, key }) => {
  const dispatch = useDispatch();
  const { user, cart } = useSelector((state) => state);
  const userCart = cart?.data ? cart?.data : null;
  const [productData, setProductData] = useState(false);
  const [inCart, setInCart] = useState(false);

  console.log(ProductDetails, "ProductDetails");
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

  return (
    <div class="product text-center product-with-qty" key={ProductDetails?._id}>
      <figure class="product-media">
        {(() => {
          if (ProductDetails?.isFree) {
            return (
              <Link to={`/product/free/${ProductDetails?._id}`}>
                <img
                  src={"http://54.177.7.240" + ProductDetails?.photos[0]}
                  alt="product"
                  width="280"
                  height="315"
                  style={{ width: "100%" }}
                />
              </Link>
            );
          } else {
            return (
              <Link to={`/product/${ProductDetails?._id}`}>
                <img
                  src={"http://54.177.7.240" + ProductDetails?.photos[0]}
                  alt="product"
                  width="280"
                  height="315"
                  style={{ width: "100%" }}
                />
              </Link>
            );
          }
        })()}
        <div class="product-label-group">
          <label class="product-label label-sale">25% Off</label>
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
          {user?.login ? (
            !ProductDetails?.isFree ? (
              <a
                //  href="#"
                class="btn-product btn-cart ls-l"
                data-toggle="modal"
                data-target="#addCartModal"
                title="Add to cart"
                onClick={() => {
                  if (!inCart) {
                    dispatch(add_to_cart_thunk(ProductDetails._id));
                  }
                }}
              >
                <i class="d-icon-bag"></i>
                <span>Add to cart</span>
              </a>
            ) : (
              ""
            )
          ) : (
            <Link to="/Login" class="btn-product btn-cart ls-l">
              {" "}
              Login{" "}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Product;
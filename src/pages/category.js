import React, { useState, useEffect } from "react";
///import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

// import ShowAll from "../components/show-all";
import { useHistory, useRouteMatch } from "react-router";

import { setCookiesByName, setCookies } from "../utils/cookies";
import { user_load_by_token_thunk } from "../redux/thunk/user_thunk";
import { nftCategoriesApi } from "../api/methods";
import useQuery from "../hook/useQuery";

import Header from "../components/header";
import Product_Category from "../components/new/product_category";
import { getsubCategoryApi } from "../api/base-methods";

import Footer from "../components/footer";

const Category = () => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  let query = useQuery();
  const fsz = query.get("fsz");
  const token = query.get("token");
  const match = useRouteMatch();
  const { categoryid } = match.params;
  const [categoryDetails, setCategoryDetails] = useState({});
  const [categoryProdDetails, setCategoryProdDetails] = useState({});

  useEffect(() => {
    if (fsz) {
      sessionStorage.setItem("fsz", fsz);
      setCookiesByName("source", fsz);
    }

    if (token) {
      setCookies(token);

      history.replace(url);
      dispatch(user_load_by_token_thunk(token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // if (query.get("forceUpdate") === "true" || !user.name) {
    getsubCategory();
  }, []);

  useEffect(() => {
    // if (query.get("forceUpdate") === "true" || !user.name) {
    getsubCategory();
  }, [categoryid]);

  const getsubCategory = async () => {
    const result = await getsubCategoryApi(categoryid);
    //console.log(result?.data?.responseData?.subCategories);
    setCategoryDetails(result?.data?.responseData?.subCategories);
    setCategoryProdDetails(result?.data?.responseData?.Products);
    window.scrollTo(0, 0);
    //console.log(categoryDetails?.bannerImage);
  };

  return (
    <>
      <Header
        title="Most Trusted NFT Marketplace To Trade Cricket NFTs"
        description="Jump.trade is the most secured NFT marketplace where you can buy & sell rare cricket NFTs. Discover, collect, and trade authentic cricket player NFTs on our NFT gaming marketplace. Sign up now!"
        image="https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"
      />
      <main className="main single-product">
        <div className="page-content">
          <div className="container-fluid p-0">
            <div
              className="page-header pl-4 pr-4"
              style={{
                backgroundImage: `url(${process.env.REACT_APP_PUBLIC_BASE_URL}${categoryDetails?.bannerImage})`,
              }}
            >
              <h1 className="page-title font-weight-bold lh-1 text-white text-capitalize">
                {/* {categoryDetails?.subCategoryName} */}
              </h1>
            </div>
            <div className="page-content mt-10 pt-10">
              <Product_Category
                categoryDetails={categoryDetails}
                categoryProdDetails={categoryProdDetails}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Category;

import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ProductList from "../components/new/product-list";

import { useHistory, useRouteMatch } from "react-router";

const Productlist = () => {
  return (
    <>
      <Header
        bgImage
        title="Insights on NFT Games, P2E Guides & More | Jump.trade"
        description="Keep yourself updated with the latest stories, insightful information, and latest trends in the web3 space brought to you by Jump.trade, the most trusted NFT marketplace in the world."
      />
      <main className="main single-product">
        <div className="page-content">
          <div className="container-fluid p-0">
            <div
              className="page-header pl-4 pr-4"
              style={{ background: "#7ea4b1" }}
            >
              <h1 className="page-title font-weight-bold lh-1 text-white text-capitalize">
                Product
              </h1>
            </div>
            <ProductList />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Productlist;

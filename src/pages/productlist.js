import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ProductList from "../components/new/product-list";

import { useHistory, useRouteMatch } from "react-router";

const Productlist = () => {
  return (
    <>
      <Header
        title="liven Science | Product List"
        description="Natural Medicine. Sign up now!"
        //image="https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"
      />
      <main className="main single-product">
        <div className="page-content">
          <div className="container-fluid p-0">
            <div
              className="page-header pl-4 pr-4"
              style={{ background: "#7ea4b1" }}>
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

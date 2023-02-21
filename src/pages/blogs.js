import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Blog from "../components/new/blog";

const Blogs = () => {
  return (
    <>
      <Header
        title="liven Science"
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
                Blog
              </h1>
            </div>
            <Blog />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blogs;

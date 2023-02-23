import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Blog from "../components/new/blog";
import { settingsApi } from "../api/base-methods";

const Blogs = () => {
  const [settingsDetails, setSettingsDetails] = useState({});

  useEffect(async () => {
    getSettings();
  }, []);

  const getSettings = async () => {
    try {
      // setNotiLoading(true);
      const result = await settingsApi();
      setSettingsDetails(result?.data?.responseData);
      //setSettingsDetails(result?.data?.responseData?.pages);
    } catch (error) {
      //setNotiLoading(false);

      console.log(
        "🚀 ~ file: index.js ~ line 49 ~ handleGetNotification ~ error",
        error
      );
    }
  };
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
              className="page-header pl-4 pr-4 blog-title-banner"
              style={{
                backgroundImage: `url(${process.env.REACT_APP_PUBLIC_BASE_URL}${settingsDetails?.site?.blogImage})`,
              }}>
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

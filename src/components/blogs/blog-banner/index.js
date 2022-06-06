import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import dayjs from "dayjs";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import blog1 from "../../../images/blog-banner.png";
import blog2 from "../../../images/blog-img1.png";
import blog3 from "../../../images/blog-img2.png";
import blog4 from "../../../images/blog-img3.png";
import { getBlogListApi, getBlogCattApi } from "../../../api/methods";

import { Interweave } from "interweave";

import "../style.scss";

const BlogBanner = () => {
  const [data, setData] = useState();
  const [bannerData, setBannerData] = useState();
  const [sliderData, setSliderData] = useState();

  const options = {
    loop: true,
    margin: 10,
    items: 3,
    nav: true,
    dots: false,
    autoplay: true,
    navText: [
      "<div class='nav-button owl-prev'><img src='https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/back-arrow.png' /></div>",
      "<div class='nav-button owl-next'><img src='https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/front-arrow.png' /></div>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  useEffect(() => {
    blogDetail();
  }, []);
  // const GetSourceImage = async (input) => {
  //   const Filterdata = data?.data?.filter((data) => data.id == input);
  //   if (
  //     Array.isArray(Filterdata[0]?._embedded["wp:featuredmedia"]) &&
  //     Filterdata[0]?._embedded["wp:featuredmedia"].length > 0
  //   ) {
  //     console.log(
  //       Filterdata[0]?._embedded["wp:featuredmedia"]["0"]?.source_url
  //     );
  //     return Filterdata[0]?._embedded["wp:featuredmedia"]["0"]["media_details"][
  //       "sizes"
  //     ]["medium"]["source_url"];
  //   }
  //   return "";
  // };

  const blogDetail = async () => {
    try {
      const categoryData = await getBlogCattApi();
      const blogData = await getBlogListApi();
      const filteredCategoryData = categoryData?.data?.filter(
        (data) => data.slug == "blog"
      );
      const filteredBlogData = blogData?.data?.filter((item) =>
        item.categories.includes(filteredCategoryData[0].id)
      );

      const BannerData = filteredBlogData?.shift();
      const LastBannerData = filteredBlogData;

      setBannerData(BannerData);
      setSliderData(LastBannerData);
      setData(blogData);
    } catch (error) {
      // setReLoading(false);
      //toast.error("An unexpected error occured. Please try again  later");
      console.log(
        ":rocket: ~ file: index.js ~ line 92 ~ responseGoogle ~ error",
        error
      );
    }
  };
  return (
    <div>
      <section class="banner">
        <img
          src={bannerData?._embedded["wp:featuredmedia"]["0"]["source_url"]}
          class="img-fluid"
        />
        <div class="container">
          <div class="banner-content-overlay">
            <div class="post-head">
              <a href="">
                <span class="blog-title">Blog</span>
              </a>
              <a href="">
                <span class="blog-date">
                  {dayjs(bannerData?.date).format("MMM D, YYYY")}
                </span>
              </a>
            </div>
            <div class="d-flex">
              <div class="post-title">
                <h3>
                  <a href={"/blog-details/" + bannerData?.slug}>
                    <Interweave content={bannerData?.title?.rendered} />
                  </a>
                </h3>
              </div>
              <div class="title-desc">
                <Interweave content={bannerData?.content?.rendered} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="blog-list p-80">
        <div class="container">
          <div class="row">
            {sliderData?.map((item, i) => (
              <div class="col-md-4 col-lg-4 col-sm-4">
                <div class="b-list">
                  <img
                    src={item?._embedded["wp:featuredmedia"]["0"]["source_url"]}
                    class="img-fluid"
                  />
                  <h2>
                    <a href={"/blog-details/" + item?.slug}>
                      <Interweave content={item?.title?.rendered} />
                    </a>
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogBanner;

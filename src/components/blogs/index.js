import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import blog1 from "../../images/blog-banner.png";
import blog2 from "../../images/blog-img1.png";
import blog3 from "../../images/blog-img2.png";
import blog4 from "../../images/blog-img3.png";
import Banner from "../blogs/blog-banner";
import BlogAnnouncment from "../blogs/blog-announcement";
import BlogNews from "../blogs/blog-news";
import {
  getBlogListApi,
  getBlogCattApi,
  getBlogCateListApi,
} from "../../api/methods";

import "./style.scss";

const BlogList = () => {
  const [bannerData, setbannerData] = useState();
  const [sliderData, setsliderData] = useState();

  const [announcementData, setannouncementDataa] = useState();
  const [announcementSliderData, setAnnouncementSliderData] = useState();
  const [announcementSplitData, setAnnouncementSplitData] = useState();

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

      setbannerData(BannerData);
      setsliderData(LastBannerData);

      const filteredAnnouncementCategoryData = categoryData?.data?.filter(
        (data) => data.slug == "announcement"
      );

      const BlogAnnouncmentData = await getBlogCateListApi();
      console.log(BlogAnnouncmentData);

      const filteredAnnouncementBlogData = BlogAnnouncmentData?.data?.filter(
        (item) =>
          item.categories.includes(filteredAnnouncementCategoryData[0]?.id)
      );
      const annoncedata = [...filteredAnnouncementBlogData];
      //const annoncedata_last = filteredAnnouncementBlogData;
      const AnnouncementData = annoncedata[0];

      setannouncementDataa(AnnouncementData);
      setAnnouncementSliderData(annoncedata.slice(1, 4));
      setAnnouncementSplitData(annoncedata.slice(4, 7));
      //console.log(LastAnnouncementData.slice(3));
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
      <Banner bannerData={bannerData} sliderData={sliderData} />
      <BlogNews />
      <BlogAnnouncment
        AnnouncementData={announcementData}
        announcementSliderData={announcementSliderData}
        announcementSplitData={announcementSplitData}
      />
      <section className="videoGallery">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>THE SPOTLIGHT</h2>
            </div>
          </div>
          <div className="row">
            <OwlCarousel className="owl-theme" {...options}>
              <div class="item">
                <iframe
                  height="400px"
                  width="100%"
                  allowfullscreen
                  src="https://www.youtube.com/embed/9TnO8cHy20M"
                >
                  {" "}
                </iframe>
              </div>
              <div class="item">
                <iframe
                  height="400px"
                  width="100%"
                  allowfullscreen
                  src="https://www.youtube.com/embed/xyNVk-uRvEA"
                >
                  {" "}
                </iframe>
              </div>
              <div class="item">
                <iframe
                  height="400px"
                  width="100%"
                  allowfullscreen
                  src="https://www.youtube.com/embed/sD0xZxAwKKA"
                >
                  {" "}
                </iframe>
              </div>
              <div class="item">
                <iframe
                  height="400px"
                  width="100%"
                  allowfullscreen
                  src="https://www.youtube.com/embed/3r2jBcW3w6g"
                >
                  {" "}
                </iframe>
              </div>
              <div class="item">
                <iframe
                  height="400px"
                  width="100%"
                  allowfullscreen
                  src="https://www.youtube.com/embed/fRdemITdDgg"
                >
                  {" "}
                </iframe>
              </div>
              <div class="item">
                <iframe
                  height="400px"
                  width="100%"
                  allowfullscreen
                  src="https://www.youtube.com/embed/LJn4ViD80K4"
                >
                  {" "}
                </iframe>
              </div>
              <div class="item">
                <iframe
                  height="400px"
                  width="100%"
                  allowfullscreen
                  src="https://www.youtube.com/embed/_GHKuZ0WcMM"
                >
                  {" "}
                </iframe>
              </div>
              <div class="item">
                <iframe
                  height="400px"
                  width="100%"
                  allowfullscreen
                  src="https://www.youtube.com/embed/FhneIHAGF7E"
                >
                  {" "}
                </iframe>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogList;

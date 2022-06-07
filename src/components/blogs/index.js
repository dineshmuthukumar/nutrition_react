import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import blog1 from "../../images/blog-banner.png";
import blog2 from "../../images/blog-img1.png";
import blog3 from "../../images/blog-img2.png";
import blog4 from "../../images/blog-img3.png";
import Banner from "../blogs/blog-banner";
import { Player, BigPlayButton } from 'video-react';
import BlogAnnouncment from "../blogs/blog-announcement";
import BlogNews from "../blogs/blog-news";
import {
  getBlogListApi,
  getBlogCattApi,
  getBlogCateListApi,
} from "../../api/methods";
import video1 from "../../images/video/badri.mp4";
import video2 from "../../images/video/harbajan.mp4";
import video3 from "../../images/video/ben.mp4";
import video4 from "../../images/video/mills.mp4";
import video5 from "../../images/video/mithali.mp4";
import video6 from "../../images/video/jp.mp4";
import video7 from "../../images/video/jordan.mp4";
import "./style.scss";

const BlogList = () => {
  const [bannerData, setbannerData] = useState();
  const [sliderData, setsliderData] = useState();

  const [announcementData, setannouncementDataa] = useState();
  const [announcementSliderData, setAnnouncementSliderData] = useState();
  const [announcementSplitData, setAnnouncementSplitData] = useState();

  const options = {
    loop: true,
    autoplayHoverPause:true,
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
              <Player
                playsInline
                src={video1}
                fluid={false} width={"100%"}  height={400}
             >
                <BigPlayButton position="center" />
    </Player>
              </div>
              
              <div class="item">
              <Player
                playsInline
                src={video2}
               fluid={false} width={"100%"}  height={400}
             >
                <BigPlayButton position="center" />
    </Player>
                
              </div>
              <div class="item">
              <Player
                playsInline
                src={video3}
               fluid={false} width={"100%"}  height={400}
             >
                <BigPlayButton position="center" />
    </Player>
              </div>
              <div class="item">
              <Player
                playsInline
                src={video4}
               fluid={false} width={"100%"}  height={400}
             >
                <BigPlayButton position="center" />
    </Player>
              </div>
              <div class="item">
              <Player
                playsInline
                src={video5}
               fluid={false} width={"100%"}  height={400}
             >
                <BigPlayButton position="center" />
    </Player>
              </div>
              <div class="item">
              <Player
                playsInline
                src={video6}
               fluid={false} width={"100%"}  height={400}
             >
                <BigPlayButton position="center" />
    </Player>
              </div>
              <div class="item">
              <Player
                playsInline
                src={video7}
               fluid={false} width={"100%"}  height={400}
             >
                <BigPlayButton position="center" />
    </Player>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogList;

import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Banner from "../blogs/blog-banner";
import { Player, BigPlayButton } from "video-react";
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
import v1 from "../../images/badri.jpeg";
import v2 from "../../images/hbj.jpeg";
import v3 from "../../images/w-cap.jpeg";
import v4 from "../../images/boss.jpeg";
import v5 from "../../images/mithali.jpeg";
import v6 from "../../images/cap.jpeg";
import v7 from "../../images/black-cap.jpeg";
import "./style.scss";

const BlogList = () => {
  const [bannerData, setbannerData] = useState();
  const [sliderData, setsliderData] = useState();

  const [announcementData, setannouncementDataa] = useState();
  const [announcementSliderData, setAnnouncementSliderData] = useState();
  const [announcementSplitData, setAnnouncementSplitData] = useState();
  const [loading, setLoading] = useState(false);

  const options = {
    loop: false,
    autoplayHoverPause: true,
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
      setLoading(true);
      const categoryData = await getBlogCattApi();
      const blogData = await getBlogListApi();

      const filteredCategoryData = categoryData?.data?.filter(
        (data) => data.slug == "blog"
      );

      const filteredBlogData = blogData?.data?.filter((item) =>
        item.categories.includes(filteredCategoryData[0].id)
      );

      setbannerData(filteredBlogData[0]);
      setsliderData(filteredBlogData.slice(1, 4));
      const filteredAnnouncementCategoryData = categoryData?.data?.filter(
        (data) => data.slug == "announcement"
      );

      const BlogAnnouncmentData = await getBlogCateListApi();
      // console.log(BlogAnnouncmentData);

      const filteredAnnouncementBlogData = BlogAnnouncmentData?.data?.filter(
        (item) =>
          item.categories.includes(filteredAnnouncementCategoryData[0]?.id)
      );
      const annoncedata = [...filteredAnnouncementBlogData];
      // console.log(annoncedata, "annoncedata");
      //const annoncedata_last = filteredAnnouncementBlogData;
      const AnnouncementData = annoncedata[0];

      setannouncementDataa(AnnouncementData);
      setAnnouncementSliderData(annoncedata.slice(1, 4));
      setAnnouncementSplitData(annoncedata.slice(4, 7));
      //console.log(LastAnnouncementData.slice(3));
      setLoading(false);
    } catch (error) {
      // setReLoading(false);
      //toast.error("An unexpected error occured. Please try again  later");
      console.log(
        ":rocket: ~ file: index.js ~ line 92 ~ responseGoogle ~ error",
        error
      );
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <div className="blog-loader">
          <div class="span">
            <div class="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      ) : (
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
                      poster={v1}
                      playsInline
                      src={video1}
                      fluid={false}
                      width={"100%"}
                      height={400}
                    >
                      <BigPlayButton position="center" />
                    </Player>
                  </div>

                  <div class="item">
                    <Player
                      poster={v2}
                      playsInline
                      src={video2}
                      fluid={false}
                      width={"100%"}
                      height={400}
                    >
                      <BigPlayButton position="center" />
                    </Player>
                  </div>
                  <div class="item">
                    <Player
                      poster={v3}
                      playsInline
                      src={video3}
                      fluid={false}
                      width={"100%"}
                      height={400}
                    >
                      <BigPlayButton position="center" />
                    </Player>
                  </div>
                  <div class="item">
                    <Player
                      poster={v4}
                      playsInline
                      src={video4}
                      fluid={false}
                      width={"100%"}
                      height={400}
                    >
                      <BigPlayButton position="center" />
                    </Player>
                  </div>
                  <div class="item">
                    <Player
                      poster={v5}
                      playsInline
                      src={video5}
                      fluid={false}
                      width={"100%"}
                      height={400}
                    >
                      <BigPlayButton position="center" />
                    </Player>
                  </div>
                  <div class="item">
                    <Player
                      poster={v6}
                      playsInline
                      src={video6}
                      fluid={false}
                      width={"100%"}
                      height={400}
                    >
                      <BigPlayButton position="center" />
                    </Player>
                  </div>
                  <div class="item">
                    <Player
                      poster={v7}
                      playsInline
                      src={video7}
                      fluid={false}
                      width={"100%"}
                      height={400}
                    >
                      <BigPlayButton position="center" />
                    </Player>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default BlogList;

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
import ndtv_logo from "../../../images/ndtv_logo.png";
import mint from "../../../images/mint.png";
import out from "../../../images/out.png";
import tines from "../../../images/tines.png";
import bw from "../../../images/bw.png";
import et from "../../../images/et.png";
import cnbc from "../../../images/cnbc.png";
import n18 from "../../../images/n18.png";
import tfe from "../../../images/tfe.png";
import { Interweave } from "interweave";

import "../style.scss";

const BlogNews = () => {
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
      //   const categoryData = await getBlogCattApi();
      //   const blogData = await getBlogListApi();
      //   const filteredCategoryData = categoryData?.data?.filter(
      //     (data) => data.slug == "blog"
      //   );
      //   const filteredBlogData = blogData?.data?.filter((item) =>
      //     item.categories.includes(filteredCategoryData[0].id)
      //   );
      //   const BannerData = filteredBlogData?.shift();
      //   const LastBannerData = filteredBlogData;
      //   setBannerData(BannerData);
      //   setSliderData(LastBannerData);
      //   setData(blogData);
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
    <section className="news py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 py-4">
            <h2 class="section-heading text-center">
              <span class="main-title">The News Box</span>{" "}
            </h2>
          </div>
        </div>
        <div class="news_box">
          <div class="news_img">
            <a
              rel="nofollow"
              href="https://www.ndtv.com/business/worlds-first-play-to-earn-nft-cricket-game-to-launch-soon-by-guardianlink-2838323"
              target="_blank"
            >
              <img src={ndtv_logo} />
            </a>
          </div>
          <div class="news_img">
            <a
              rel="nofollow"
              href="https://twitter.com/livemint/status/1506561708109996033?s=20&t=pDxQGzoXHqZFWDJr143NZg"
              target="_blank"
            >
              <img src={mint} />
            </a>
          </div>
          <div class="news_img">
            <a
              rel="nofollow"
              href="https://www.outlookindia.com/business/jump-trade-registers-1-2-million-nft-buyers-through-cricket-nft-drop-news-195121"
              target="_blank"
            >
              <img src={out} />
            </a>
          </div>

          <div class="news_img">
            <a
              rel="nofollow"
              href="https://timesofindia.indiatimes.com/business/india-business/guardianlink-enters-nft-gaming-with-new-cricket-game/articleshow/90394235.cms"
              target="_blank"
            >
              <img src={tines} />
            </a>
          </div>
          <div class="news_img">
            <a
              rel="nofollow"
              href="http://bwdisrupt.businessworld.in/article/GuardianLink-Enters-NFT-Gaming-Space-With-P2E-Cricket-Game-/24-03-2022-423588/"
              target="_blank"
            >
              <img src={bw} />
            </a>
          </div>
          <div class="news_img">
            <a
              rel="nofollow"
              href="https://economictimes.indiatimes.com/markets/cryptocurrency/jump-trade-sells-55000-nfts-of-meta-cricket-leagues-in-just-9-mins/articleshow/91071815.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst"
              target="_blank"
            >
              <img src={et} />
            </a>
          </div>

          <div class="news_img">
            <a
              rel="nofollow"
              href="https://www.cnbctv18.com/startup/startup-digest-babychakra-acquires-tinystep-meesho-launches-integrated-e-commerce-app-guardianlink-launches-nft-cricket-game--crypto-investor-katie-haun-raises-15bn-for-new-fund-12923142.htm"
              target="_blank"
            >
              <img src={cnbc} />
            </a>
          </div>
          <div class="news_img">
            <a
              rel="nofollow"
              href="https://www.news18.com/news/business/cryptocurrency/worlds-first-nft-cricket-game-is-here-all-you-need-to-know-4901660.html"
              target="_blank"
            >
              <img src={n18} />
            </a>
          </div>
          <div class="news_img">
            <a
              rel="nofollow"
              href="https://www.financialexpress.com/digital-currency/international-gaming-platform-jump-trade-sells-out-55000-nfts/2502822/"
              target="_blank"
            >
              <img src={tfe} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNews;

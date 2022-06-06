import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import blog1 from "../../../images/blog-banner.png";
import blog2 from "../../../images/blog-img1.png";
import blog3 from "../../../images/blog-img2.png";
import blog4 from "../../../images/blog-img3.png";
import { getBlogListApi } from "../../../api/methods";
import { getBlogCattApi } from "../../../api/methods";
import "../style.scss";

const BlogBanner = () => {
  const [data, setData] = useState();

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
      //dispatch(user_login_thunk(login, setError, setOTP));
      const blogData = await getBlogListApi();

      console.log(blogData);
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
        <img src={blog1} class="img-fluid" />
        <div class="container">
          <div class="banner-content-overlay">
            <div class="post-head">
              <a href="">
                <span class="blog-title">Blog</span>
              </a>
              <a href="">
                <span class="blog-date">June 3,2022</span>
              </a>
            </div>
            <div class="d-flex">
              <div class="post-title">
                <h3>
                  <a href="">
                    Meta Cricket League NFT Collection &#8211; Jump.trade
                  </a>
                </h3>
              </div>
              <div class="title-desc">
                <p>
                  It is hard for anyone in the blockchain or the gaming world
                  not to have noticed Jump.trade’s ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="blog-list p-80">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-lg-4 col-sm-4">
              <div class="b-list">
                <img src={blog2} class="img-fluid" />
                <h2>
                  <a href="">Meta Cricket League NFT Collection – Jump.trade</a>
                </h2>
              </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4">
              <div class="b-list">
                <img src={blog3} class="img-fluid" />
                <h2>
                  <a href="">Jump.trade – What, Why and How</a>
                </h2>
              </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4">
              <div class="b-list">
                <img src={blog4} class="img-fluid" />
                <h2>
                  <a href="">Layer2 – Why Did We Work On It</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogBanner;

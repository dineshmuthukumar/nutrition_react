import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import blog1 from "../../images/blog-banner.png";
import blog2 from "../../images/blog-img1.png";
import blog3 from "../../images/blog-img2.png";
import blog4 from "../../images/blog-img3.png";
import Banner from "../blogs/blog-banner";
import "./style.scss";

const BlogList = () => {
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
  return (
    <div>
      <Banner />
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
                href="https://www.ndtv.com/business/worlds-first-play-to-earn-nft-cricket-game-to-launch-soon-by-guardianlink-2838323"
                target="_blank"
              >
                <img src="https://jtd.venturedemos.com/wp-content/uploads/2022/06/ndtv_logo.png" />
              </a>
            </div>
            <div class="news_img">
              <a
                href="https://twitter.com/livemint/status/1506561708109996033?s=20&t=pDxQGzoXHqZFWDJr143NZg"
                target="_blank"
              >
                <img src="https://jtd.venturedemos.com/wp-content/uploads/2022/06/mint.png" />
              </a>
            </div>
            <div class="news_img">
              <a
                href="https://www.outlookindia.com/business/amitabh-bachchan-pays-over-rs-1-crore-as-gst-on-nft-sale-after-notice-bitcoin-falls-news-188218"
                target="_blank"
              >
                <img src="https://jtd.venturedemos.com/wp-content/uploads/2022/06/out.png" />
              </a>
            </div>

            <div class="news_img">
              <a
                href="https://timesofindia.indiatimes.com/business/india-business/guardianlink-enters-nft-gaming-with-new-cricket-game/articleshow/90394235.cms"
                target="_blank"
              >
                <img src="https://jtd.venturedemos.com/wp-content/uploads/2022/06/tines.png" />
              </a>
            </div>
            <div class="news_img">
              <a
                href="http://bwdisrupt.businessworld.in/article/GuardianLink-Enters-NFT-Gaming-Space-With-P2E-Cricket-Game-/24-03-2022-423588/"
                target="_blank"
              >
                <img src="https://jtd.venturedemos.com/wp-content/uploads/2022/06/bw.png" />
              </a>
            </div>
            <div class="news_img">
              <a
                href="https://economictimes.indiatimes.com/markets/cryptocurrency/jump-trade-sells-55000-nfts-of-meta-cricket-leagues-in-just-9-mins/articleshow/91071815.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst"
                target="_blank"
              >
                <img src="https://jtd.venturedemos.com/wp-content/uploads/2022/06/et.png" />
              </a>
            </div>

            <div class="news_img">
              <a
                href="https://www.cnbctv18.com/startup/startup-digest-babychakra-acquires-tinystep-meesho-launches-integrated-e-commerce-app-guardianlink-launches-nft-cricket-game--crypto-investor-katie-haun-raises-15bn-for-new-fund-12923142.htm"
                target="_blank"
              >
                <img src="https://jtd.venturedemos.com/wp-content/uploads/2022/06/cnbc.png" />
              </a>
            </div>
            <div class="news_img">
              <a
                href="https://www.news18.com/news/business/cryptocurrency/worlds-first-nft-cricket-game-is-here-all-you-need-to-know-4901660.html"
                target="_blank"
              >
                <img src="https://jtd.venturedemos.com/wp-content/uploads/2022/06/n18.png" />
              </a>
            </div>
            <div class="news_img">
              <a
                href="https://www.financialexpress.com/digital-currency/international-gaming-platform-jump-trade-sells-out-55000-nfts/2502822/"
                target="_blank"
              >
                <img src="https://jtd.venturedemos.com/wp-content/uploads/2022/06/tfe.png" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="bg_green announcement ptb-100">
        <div class="container">
          <div className="row">
            <div className="col-sm-12 py-5">
              <h2 className="sectionTitle">ANNOUNCEMENTS</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-9">
              <div class="book">
                <div class="f_book">
                  <img src="https://jtd.venturedemos.com/wp-content/uploads/2019/10/bat-jump-trade.png" />
                </div>
                <div class="s_book">
                  <div class="content_book">
                    <span class="cat_1">ANNOUNCEMENT</span>
                    <h2>
                      Want to be part of the world’s first cricket game NFT
                      drop?
                    </h2>
                    <p>
                      Hello Guardians, Want to be part of the world’s first
                      cricket game NFT drop? ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="book_xtra">
                <span class="cat_1">ANNOUNCEMENT</span>
                <h2>Utility for the BigB punk holders</h2>
              </div>
              <div class="book_xtra">
                <span class="cat_1">ANNOUNCEMENT</span>
                <h2>
                  Fund your wallet now and get ready to buy these cricket NFT
                  drops!
                </h2>
              </div>
              <div class="book_xtra">
                <span class="cat_1">ANNOUNCEMENT</span>
                <h2>
                  Now check your rarirty score of your Meta Cricket League
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="book_bottom">
                <h2>Jump.Trade NFT Champion Buyer Contest</h2>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="book_bottom">
                <h2>Introducing the trade bot to our discord server</h2>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="book_bottom">
                <h2>Jump.trade Super Troop Contest</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                  height="400"
                  width="400"
                  allowfullscreen
                  src="https://www.youtube.com/embed/9TnO8cHy20M"
                >
                  {" "}
                </iframe>
              </div>
              <div class="item">
                <iframe
                  height="400"
                  width="400"
                  allowfullscreen
                  src="https://www.youtube.com/embed/xyNVk-uRvEA"
                >
                  {" "}
                </iframe>
              </div>
              <div class="item">
                <iframe
                  height="400"
                  width="400"
                  allowfullscreen
                  src="https://www.youtube.com/embed/sD0xZxAwKKA"
                >
                  {" "}
                </iframe>
              </div>
              <div class="item">
                <iframe
                  height="400"
                  width="400"
                  allowfullscreen
                  src="https://www.youtube.com/embed/3r2jBcW3w6g"
                >
                  {" "}
                </iframe>
              </div>
              <div class="item">
                <iframe
                  height="400"
                  width="400"
                  allowfullscreen
                  src="https://www.youtube.com/embed/fRdemITdDgg"
                >
                  {" "}
                </iframe>
              </div>
              <div class="item">
                <iframe
                  height="400"
                  width="400"
                  allowfullscreen
                  src="https://www.youtube.com/embed/LJn4ViD80K4"
                >
                  {" "}
                </iframe>
              </div>
              <div class="item">
                <iframe
                  height="400"
                  width="400"
                  allowfullscreen
                  src="https://www.youtube.com/embed/_GHKuZ0WcMM"
                >
                  {" "}
                </iframe>
              </div>
              <div class="item">
                <iframe
                  height="400"
                  width="400"
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

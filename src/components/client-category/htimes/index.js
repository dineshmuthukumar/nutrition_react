import React from "react";
import Image from "react-bootstrap/Image";
import Footer from "../../footer";
import Header from "../../header";
import Cards from "./cards";
import Carousel from "./carousal";

import htLogo from "./img/ht.png";
import sign from "./img/sign.png";
import "./style.scss";

const HTimes = () => {
  return (
    <div>
      <Header />
      <section className="gl_1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ht-logo">
                <Image src={htLogo} />{" "}
              </div>
              <div className="heroSec">
                <div className="main-title">
                  <h1 className="">“You can read a person’s </h1>
                  <h1>soul from their collection”</h1>{" "}
                </div>
                <Image className="belowImg" src={sign} />{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gl_2">
        <div>
          <div className="largeCards">
            <div className="cardrow">
              <div className="col rightCard">
                <div className="detailCard">
                  <h3>Take a stake in India's History</h3>
                  <div className="dottedBorder"></div>
                </div>{" "}
                <Image
                  className=" ls-is-cached"
                  src="https://image-nft.hindustantimes.com/production/wp-content/uploads/2022/02/Artboard-1-copy-5-100-1.jpeg"
                />
                <p>
                  India has a glorious story earmarked by iconic moments. As the
                  nation's leading daily for almost a century, Hindustan Times
                  has captured these moments through the lens of a keen
                  observer. On the momentous occasion of India’s 73rd Republic
                  day, HT has pioneered NFTs composed of news stories that
                  depict these path-breaking events and announcements that are
                  an integral part of our history. This is your moment to have a
                  stake in India’s story.{" "}
                </p>
              </div>
              <div className="col leftCard">
                <div className="detailCard">
                  <h3>Republic day Collections</h3>
                  <div className="dottedBorder"></div>
                </div>{" "}
                <Image
                  className=" ls-is-cached"
                  src="https://image-nft.hindustantimes.com/production/wp-content/uploads/2022/01/Jan-26-Collage.jpeg"
                />
                <p></p>
              </div>
              <div className="col rightCard">
                <div className="detailCard">
                  <h3>
                    Iconic <br />
                    moments <br />
                    from history
                  </h3>
                  <div className="dottedBorder"></div>
                </div>
                <Image
                  className=" ls-is-cached"
                  src="https://image-nft.hindustantimes.com/production/wp-content/uploads/2022/01/NFT-1_26_01_1950_301.jpg"
                />

                <p></p>
              </div>
            </div>
          </div>
          {/* mobile div */}
          <div class="largeCards-m">
            <div class="row">
              <div class="col-sm-12">
                <Image src="https://image-nft.hindustantimes.com/production/wp-content/uploads/2022/02/Artboard-1-copy-5-100-1.jpeg" />
                <div class="detailCard">
                  <h3>Take a stake in India's History</h3>
                  <div class="moreDetails">
                    <div class="prizeEtc"></div>
                  </div>
                  <div class="dottedBorder"></div>
                  <p>
                    India has a glorious story earmarked by iconic moments. As
                    the nation's leading daily for almost a century, Hindustan
                    Times has captured these moments through the lens of a keen
                    observer. On the momentous occasion of India’s 73rd Republic
                    day, HT has pioneered NFTs composed of news stories that
                    depict these path-breaking events and announcements that are
                    an integral part of our history. This is your moment to have
                    a stake in India’s story.
                  </p>
                </div>
              </div>
              <div class="col-sm-12">
                <Image
                  class=" "
                  src="https://image-nft.hindustantimes.com/production/wp-content/uploads/2022/01/Jan-26-Collage.jpeg"
                />
                <div class="detailCard">
                  <h3>Republic day Collections</h3>
                  <div class="moreDetails">
                    <div class="prizeEtc"></div>
                  </div>
                  <div class="dottedBorder"></div>
                  <p></p>
                </div>
              </div>
              <div class="col-sm-12">
                <Image src="https://image-nft.hindustantimes.com/production/wp-content/uploads/2022/01/NFT-1_26_01_1950_301.jpg" />
                <div class="detailCard">
                  <h3>Iconic moments from history</h3>
                  <div class="moreDetails">
                    <div class="prizeEtc"></div>
                  </div>
                  <div class="dottedBorder"></div>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Carousel />
      </section>
      <section>
        <Cards />
      </section>
      <section className="whatSec">
        <div className="container">
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <div class="col mobileTitle">
                  <div class="whatTitle">
                    <div class="borderTop"></div>
                    <h2 class="">What is an NFT</h2>
                  </div>
                </div>
                <div class="col">
                  <Image src="https://image-nft.hindustantimes.com/production/wp-content/uploads/2022/01/Mask-Group-12-1.png" />
                </div>
                <div class="col webTitle">
                  <div class="whatTitle">
                    <div class="borderTop"></div>
                    <h2>What is an NFT</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="rightText">
                <p>
                  With blockchain technology, Non-Fungible Tokens (NFTs) verify
                  ownership of unique digital assets such as art, music,
                  collectibles, GIFs, videos and even PDFs. The technology
                  enables users to claim ownership and buy and sell these assets
                  to others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default HTimes;

import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "react-bootstrap/Image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hone from "../img/one.png";
import htwo from "../img/Group-19417.png";
import hthree from "../img/three.png";
import hfour from "../img/four.png";
import hfive from "../img/five.png";
import hsix from "../img/six.png";
import hsevan from "../img/sevan.png";
import height from "../img/eight.png";
import larrow from "../img/left-arrow.png";
import rarrow from "../img/right-arrow.png";
import arrow from "../img/arrow.svg";

const Carousel = () => {
  const customNavigator = useRef();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="sliderLegacy">
      <div className="navrow">
        <div className="controlSliders">
          <button onClick={() => customNavigator.current.slickPrev()}>
            <Image src={larrow} />
          </button>
          <button onClick={() => customNavigator.current.slickNext()}>
            <Image src={rarrow} />
          </button>
        </div>
      </div>
      <Slider {...settings} ref={customNavigator}>
        <div>
          <div class="sliderTitle">
            <h3>1924</h3>

            <Image class=" " src={arrow} />
          </div>
          <div class="roundImg">
            <Image class=" ls-is-cached" src={hone} />{" "}
          </div>
          <p>Inauguration of the Hindustan Times by Mahatma Gandhi</p>
        </div>
        <div>
          <div class="sliderTitle">
            <h3>1936</h3>

            <Image class=" " src={arrow} />
          </div>
          <div class="roundImg">
            <Image class=" ls-is-cached" src={htwo} />{" "}
          </div>
          <p>Launch of the Hindi daily Hindustan</p>
        </div>
        <div>
          <div class="sliderTitle">
            <h3>1997</h3>

            <Image class=" " src={arrow} />
          </div>
          <div class="roundImg">
            <Image class=" ls-is-cached" src={hthree} />{" "}
          </div>
          <p>
            HT goes digital with the launch of its news website
            Hindustantimes.com
          </p>
        </div>
        <div>
          <div class="sliderTitle">
            <h3>2006</h3>

            <Image class=" " src={arrow} />
          </div>
          <div class="roundImg">
            <Image class=" ls-is-cached" src={hfour} />{" "}
          </div>
          <p>
            HT launches Fever FM, one of India’s leading Bollywood radio
            stations
          </p>
        </div>
        <div>
          <div class="sliderTitle">
            <h3>2007</h3>

            <Image class=" " src={arrow} />
          </div>
          <div class="roundImg">
            <Image class=" ls-is-cached" src={hfive} />{" "}
          </div>
          <p>
            Launched India’s premium business news publication Mint and
            Livemint.com
          </p>
        </div>

        <div>
          <div class="sliderTitle">
            <h3>2008</h3>

            <Image class=" " src={arrow} />
          </div>
          <div class="roundImg">
            <Image class=" ls-is-cached" src={hsix} />{" "}
          </div>
          <p>Launched Shine, one of India’s largest job portals</p>
        </div>

        <div>
          <div class="sliderTitle">
            <h3>2019</h3>

            <Image class=" " src={arrow} />
          </div>
          <div class="roundImg">
            <Image class=" ls-is-cached" src={hsevan} />{" "}
          </div>
          <p>Launched HT Media’s podcast destination, HT Smartcast</p>
        </div>

        <div>
          <div class="sliderTitle">
            <h3>2022</h3>

            <Image class=" " src={arrow} />
          </div>
          <div class="roundImg">
            <Image class=" ls-is-cached" src={height} />{" "}
          </div>
          <p>
            Forays into Web 3.0 with the launch of Timeless Tokens, exclusive
            NFTs by HT.
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

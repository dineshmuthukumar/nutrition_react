import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import NFTCounter from "../nft-counter/index";
import images from "../../utils/images.json";
import OwlCarousel from "react-owl-carousel";

import playWeb from "../../images/jump-trade/hero-banner/02_Play-Banner_low.jpeg";
import playMobile from "../../images/jump-trade/hero-banner/02_Play-Banner_low_Mobile.jpeg";
import playWebText from "../../images/jump-trade/hero-banner/02_Play_Text-only_WEB.png";
import playMobileText from "../../images/jump-trade/hero-banner/02_Play_Text-only_Mobile.png";

import earnWeb from "../../images/jump-trade/hero-banner/03_Earn-Banner_low.jpeg";
import earnMobile from "../../images/jump-trade/hero-banner/03_Earn-Banner_low_Mobile.jpeg";
import earnWebText from "../../images/jump-trade/hero-banner/03_Earn_Text-only_WEB.png";
import earnMobileText from "../../images/jump-trade/hero-banner/03_Earn_Text-only_Mobile.png";

import ownWeb from "../../images/jump-trade/hero-banner/01_Own-Banner_low.jpeg";
import ownMobile from "../../images/jump-trade/hero-banner/01_Own-Banner_low_Mobile.jpeg";
import ownWebText from "../../images/jump-trade/hero-banner/01_Own_Text-only_WEB.png";
import ownMobileText from "../../images/jump-trade/hero-banner/01_Own_Text-only.png";

import firstSlideWeb from "../../images/jump-trade/hero-banner/First_Banner_BG--only_Web.jpeg";
import firstSlideMobile from "../../images/jump-trade/hero-banner/First_Banner_BG--only_Mobile.jpeg";
import firstSlideWebText from "../../images/jump-trade/hero-banner/First_Banner_Text--only_Web.png";
import firstSlideMobileText from "../../images/jump-trade/hero-banner/First_Banner_Text--only_Mobile.png";

import comingSoon from "../../images/jump-trade/hero-banner/Coming-Soon_Common_Web.png";

import "./style.scss";

const TrailerVideo = () => {
  const { innerWidth } = window;
  const history = useHistory();
  const { path } = useRouteMatch();

  const [video, setVideo] = useState(false);

  const handleCheck = () => {
    setVideo(true);
  };

  return (
    <>
      <div>
        {!video ? (
          <>
            <div>"text"</div>
          </>
        ) : (
          <>
            <div>"vedio"</div>
          </>
        )}
      </div>
    </>
  );
};

export default TrailerVideo;

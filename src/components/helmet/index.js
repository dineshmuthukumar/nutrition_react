import React from "react";
import { Helmet } from "react-helmet";

const AppHelmet = ({
  title = "NFT Marketplace | Cricket NFT Marketplace | Buy & Sell Cricket NFTs",
  description = "Jump.trade is your NFT marketplace to buy and sell the cricket game NFTs of Meta Cricket League. Enter the cricket metaverse now!",
  image = "https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg",
}) => {
  console.log("app", description);

  return (
    <Helmet>
      <title>{title} </title>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Jump.Trade" />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={window.location.href} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:description" content={description} />

      <meta itemprop="image" content={image} />
      <link rel="canonical" href={window.location.href.split(/[?#]/)[0]} />
    </Helmet>
  );
};

export default AppHelmet;

import React from "react";
import { Helmet } from "react-helmet";

const AppHelmet = ({
  title = "Buy Cricket NFTs | Trade Meta Cricket League NFTs | Jump.trade",
  description = "Get Your Hands On The Prized Meta Cricket League NFTs & Signed Bats Again On The Jump.trade Marketplace. Fund Your Wallets Now!",
  image = "https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg",
}) => {
  return (
    <Helmet>
      <title>{title} </title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:description" content={description} />
      <meta itemprop="image" content={image} />
    </Helmet>
  );
};

export default AppHelmet;

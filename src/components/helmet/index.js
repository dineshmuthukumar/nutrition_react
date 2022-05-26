import React from "react";
import { Helmet } from "react-helmet";

const AppHelmet = ({
  title = "NFT Marketplace | Cricket NFT Marketplace | Buy & Sell Cricket NFTs",
  description = "Jump.trade is the most secured NFT marketplace where you can buy & sell rare cricket NFTs. Discover, collect, and trade authentic cricket player NFTs on our NFT gaming marketplace. Sign up now!",
  image = "https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg",
  hideCanonical = false,
}) => {
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
      {!hideCanonical && (
        <link rel="canonical" href={window.location.href.split(/[?#]/)[0]} />
      )}
    </Helmet>
  );
};

export default AppHelmet;

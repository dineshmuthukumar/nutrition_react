import React from "react";
import { Helmet } from "react-helmet";

const AppHelmet = ({
  title = "NFT Marketplace | BeyondLife.club NFT| BeyondLife.club Marketplace| Premium NFT collection",
  description = "BeyondLife.club marketplace is an NFT platform to buy/sell iconic NFT collection that marks history in the NFT spectrum",
  image = "https://cdn.beyondlife.club/media/social/marketplace_og.jpg",
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

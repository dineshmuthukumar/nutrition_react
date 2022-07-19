import React from "react";
import { Helmet } from "react-helmet";

const AppHelmet = ({
  title,
  description,
  image,
  hideCanonical = false,
  height,
  width,
}) => {
  return (
    <Helmet>
      {title && <title>{title} </title>}
      {description && <meta name="description" content={description} />}

      {title && <meta property="og:title" content={title} />}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content="Jump.Trade" />
      {description && <meta property="og:description" content={description} />}
      {width && <meta property="og:image:width" content={width} />}
      {height && <meta property="og:image:height" content={height} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={window.location.href} />
      {title && <meta name="twitter:title" content={title} />}
      {image && <meta name="twitter:image" content={image} />}
      {description && <meta name="twitter:description" content={description} />}

      {image && <meta itemprop="image" content={image} />}
      {!hideCanonical && (
        <link rel="canonical" href={window.location.href.split(/[?#]/)[0]} />
      )}
    </Helmet>
  );
};

export default AppHelmet;

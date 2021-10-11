import React from "react";
import ContentLoader from "react-content-loader";

export const TitleLoader = () => (
  <ContentLoader viewBox="0 0 100% 100%" height={50} width={"100%"}>
    <rect y="0" width="100%" height="100%" />
  </ContentLoader>
);

export const DescriptionLoader = () => (
  <ContentLoader viewBox="0 0 100% 100%" height={50} width={"100%"}>
    <rect y="0" width="100%" height="100%" />
  </ContentLoader>
);

export const PriceLoader = () => (
  <ContentLoader viewBox="0 0 100% 100%" height={50} width={"100%"}>
    <rect y="0" width="100%" height="100%" />
  </ContentLoader>
);

export const AuctionLoader = () => (
  <ContentLoader viewBox="0 0 100% 100%" height={50} width={"100%"}>
    <rect y="0" width="100%" height="100%" />
  </ContentLoader>
);

export const QuantityLoader = () => (
  <ContentLoader viewBox="0 0 100% 100%" height={50} width={"100%"}>
    <rect y="0" width="100%" height="100%" />
  </ContentLoader>
);

export const NFTLoader = (props) => (
  <ContentLoader
    width={"100%"}
    height={"100%"}
    viewBox="0 0 700 300"
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    {...props}
  >
    <rect x="55" y="42" rx="16" ry="16" width="274" height="216" />
    <rect x="412" y="113" rx="3" ry="3" width="102" height="7" />
    <rect x="402" y="91" rx="3" ry="3" width="178" height="6" />
    <rect x="405" y="139" rx="3" ry="3" width="178" height="6" />
    <rect x="416" y="162" rx="3" ry="3" width="102" height="7" />
    <rect x="405" y="189" rx="3" ry="3" width="178" height="6" />
    <rect x="406" y="223" rx="14" ry="14" width="180" height="32" />
    <rect x="376" y="41" rx="3" ry="3" width="231" height="29" />
  </ContentLoader>
);

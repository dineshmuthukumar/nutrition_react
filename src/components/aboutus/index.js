import React from "react";

import Tablet from "../tablet";

import "./style.scss";

const Content = ({ data = {}, variant = "content", className = "" }) => (
  <div className={`${variant} ${className}`.trim()}>
    {data?.title &&
      (variant === "banner" ? (
        <h1>{`${data?.title}`}</h1>
      ) : (
        <h4>{`${data?.title}`}</h4>
      ))}
    {data?.description && (
      <div
        dangerouslySetInnerHTML={{
          __html: data?.description,
        }}>
        {/* <p>{`${data?.description}`}</p> */}
      </div>
    )}
    {data?.image && (
      <img src={`https://admin.livenscience.com${data?.image}`}></img>
    )}
  </div>
);

const AboutUsSection = ({ data = {} }) => {
  const { bannerImage = null, sectionArray = [] } = data;
  const [contentWithBg, ...rest] = sectionArray;
  return (
    <>
      <Tablet />
      <section className="aboutus">
        <div className="banner-block">
          <Content variant="banner" data={{ image: bannerImage }} />
        </div>
        <div className="content-block">
          <Content variant="content-with-bg" data={contentWithBg}></Content>
          {rest &&
            rest.map((item, i) => (
              <Content key={i} variant="content container" data={item} />
            ))}
        </div>
        <div className="position-relative w-100" style={{ height: "100px" }}>
          <Tablet trigger={70}></Tablet>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;

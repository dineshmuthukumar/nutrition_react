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
    {data?.description && <p>{`${data?.description}`}</p>}
    {/* {data?.image && <img src={data?.image}></img>} */}
    {
      <img src="https://admin.livenscience.com/pem/image_1671101192858.jpg"></img>
    }
  </div>
);

const AboutUsSection = ({ data = [] }) => {
  const [first, ...rest] = data;
  return (
    <>
      <Tablet />
      <section className="aboutus">
        <div className="banner-block">
          <Content variant="banner" data={first} />
        </div>
        <div className="content-block">
          {rest.map((item, i) => (
            <Content key={i} variant="content" data={item} />
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

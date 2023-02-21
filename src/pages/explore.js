import { useEffect, useState } from "react";

import { exploreApi } from "../api/base-methods";

import Header from "../components/header";
import AboutUsSection from "../components/aboutus";
import Footer from "../components/footer";

const STATIC_DATA = [
  {
    title: "About us",
    description: "",
    image: "https://admin.livenscience.com/pem/image_1671101192858.jpg",
  },
  {
    title: "Our Focus!",
    description: `Liven is not just a brand that focuses on business promotion; instead, ensuring that we accomplish the goal of enlivening people with nature's versatile health-progressing benefits. Enjoying the modern lifestyle becomes no more a worry as We (Liven) take care of your health without any more deprivation. We have set our goal to thwart the health concerning issues in people with a NATURAL FORMULATION that can be delivered through advanced science.`,
    image: "",
  },
  {
    title: "Our Destiny!",
    description: `Liven is not just a brand that focuses on business promotion; instead, ensuring that we accomplish the goal of enlivening people with nature's versatile health-progressing benefits. Enjoying the modern lifestyle becomes no more a worry as We (Liven) take care of your health without any more deprivation. We have set our goal to thwart the health concerning issues in people with a NATURAL FORMULATION that can be delivered through advanced science.`,
    image: "",
  },
  {
    title: "Our Process!",
    description: `Liven is not just a brand that focuses on business promotion; instead, ensuring that we accomplish the goal of enlivening people with nature's versatile health-progressing benefits. Enjoying the modern lifestyle becomes no more a worry as We (Liven) take care of your health without any more deprivation. We have set our goal to thwart the health concerning issues in people with a NATURAL FORMULATION that can be delivered through advanced science.`,
    image: "",
  },
];

const Explore = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    const response = await exploreApi();
    if (response.status === 200 && response?.data?.responseData)
      setData(response?.data?.responseData || {});
    // setData(STATIC_DATA);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header
        title="liven Science"
        description="Natural Medicine. Sign up now!"
        //image="https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"
      />
      {data ? <AboutUsSection data={data} /> : <>Loading</>}
      <Footer />
    </>
  );
};

export default Explore;

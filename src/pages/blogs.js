import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import BlogList from "../components/blogs";

const Blog = () => {
  return (
    <>
      <Header
        bgImage
        title="Insights on NFT Games, P2E Guides & More | Jump.trade"
        description="Keep yourself updated with the latest stories, insightful information, and latest trends in the web3 space brought to you by Jump.trade, the most trusted NFT marketplace in the world."
      />
      <BlogList />
      <Footer />
    </>
  );
};

export default Blog;

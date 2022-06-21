import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import BlogDetail from "../components/blogs/blog-list";

const BlogList = () => {
  return (
    <>
      <Header
        bgImage
        title="Find All Our Blogs Here | Jump.trade"
        description="Your one-stop-shop for all the blogs and updates posted on Jump.trade. Keep yourself updated on everything web3, play-to-earn games, NFT, and jump.trade here."
      />
      <BlogDetail />
      <Footer />
    </>
  );
};

export default BlogList;

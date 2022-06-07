import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import BlogList from "../components/blogs";

const Blog = () => {
  return (
    <>
      <Header
        bgImage
        title="Blogs | Jump.Trade"
        description="Take a look at the cricket NFTs that got sold recently on the jump.trade NFT marketplace. We know you missed it! Go buy the ones that are live for sale."
      />
      <BlogList />
      <Footer />
    </>
  );
};

export default Blog;

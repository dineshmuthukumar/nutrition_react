import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import BlogList from "../components/blogs";

const Blog = () => {
  return (
    <>
      <Header bgImage title="Blogs | Jump.Trade" />
      <BlogList />
      <Footer />
    </>
  );
};

export default Blog;

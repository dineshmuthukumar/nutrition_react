import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import BlogDetail from "../components/blogs/detail";

const BlogDetails = () => {
  return (
    <>
      <Header bgImage title="Blogs | Jump.Trade" />
      <BlogDetail />
      <Footer />
    </>
  );
};

export default BlogDetails;

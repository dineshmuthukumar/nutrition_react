import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import BlogDetail from "../components/blogs/blog-list";

const BlogList = () => {
  return (
    <>
      <Header
        bgImage
        title="NFT Marketplace | Cricket NFT Marketplace | Buy & Sell Cricket NFTs "
        description="Jump.trade is the most secured NFT marketplace where you can buy & sell rare cricket NFTs. Discover, collect, and trade authentic cricket player NFTs on our NFT gaming marketplace. Sign up now!"
      />
      <BlogDetail />
      <Footer />
    </>
  );
};

export default BlogList;

import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import BlogDetail from "../components/blogs/detail";
import {getBlogMetaApi} from "../api/methods";
import { useParams } from "react-router";

const BlogDetails = () => {
  const { slug } = useParams();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  useEffect(() => {
    metaDetail();
  }, []);
  const metaDetail = async () => {
    try {
      
      const GetmetaDetails = await getBlogMetaApi({ slug: slug });
      setTitle(GetmetaDetails?.data?.json?.og_title);
      setDescription(GetmetaDetails?.data?.json?.description);
      

      //console.log(LastAnnouncementData.slice(3));
    } catch (error) {
      // setReLoading(false);
      //toast.error("An unexpected error occured. Please try again  later");
      console.log(
        ":rocket: ~ file: index.js ~ line 92 ~ responseGoogle ~ error",
        error
      );
    }
  };
  return (
    <>
      <Header bgImage title={title}  description={description} />
      <BlogDetail />
      <Footer />
    </>
  );
};

export default BlogDetails;
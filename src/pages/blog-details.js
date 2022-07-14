import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import BlogDetail from "../components/blogs/detail";
import { getBlogMetaApi } from "../api/methods";
import { useParams } from "react-router";

const BlogDetails = () => {
  const { slug } = useParams();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  useEffect(() => {
    metaDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const metaDetail = async () => {
    try {
      const GetmetaDetails = await getBlogMetaApi({ slug: slug });
      setTitle(GetmetaDetails?.data?.json?.og_title);
      setDescription(GetmetaDetails?.data?.json?.description);
      setImage(GetmetaDetails?.data?.json?.og_image[0]?.url);

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
      <Header bgImage title={title} description={description} image={image} />
      <BlogDetail />
      <Footer />
    </>
  );
};

export default BlogDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getBlogCattApi, getBlogCateListApi } from "../../api/methods";
import { Interweave } from "interweave";
import dayjs from "dayjs";
import "./style.scss";

const BlogDetail = () => {
  const [data, setData] = useState();
  const [cate, setCate] = useState();
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    blogDetail();
  }, []);

  const blogDetail = async () => {
    try {
      setLoading(true);
      const blogData = await getBlogCateListApi();
      const CateData = await getBlogCattApi();
      const filteredblogData = blogData?.data?.filter(
        (data) => data.slug == slug
      );
      setData(filteredblogData[0]);
      //console.log(filteredblogData[0]);
      const filteredcateData = CateData?.data?.filter(
        (item) => item.id == filteredblogData[0].categories
      );
      //console.log(filteredcateData[0]);
      setCate(filteredcateData[0].name);
      //console.log(filteredblogData);
      setLoading(false);
    } catch (error) {
      // setReLoading(false);
      //toast.error("An unexpected error occured. Please try again  later");
      console.log(
        ":rocket: ~ file: index.js ~ line 92 ~ responseGoogle ~ error",
        error
      );
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <div className="blog-loader">
          <div class="span">
            <div class="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="single-post">
          <section class="blog-content p-80">
            <div class="container">
              <div class="row">
                <div class="title-head text-center">
                  <h3>
                    <a href="">{cate}</a>
                  </h3>
                  <h2>
                    <Interweave content={data?.title?.rendered} />
                  </h2>
                  <h5 class="b_date">
                    {dayjs(data?.date).format("MMM D, YYYY")}
                  </h5>
                </div>
              </div>
              <div class="row">
                <div class="border-line"></div>
              </div>
              <div class="row">
                <div class="col-md-10 col-lg-10 col-sm-10 col-xs-12 offset-md-1 offset-lg-1 offset-sm-1">
                  <div class="right-blog-cnt">
                    <Interweave content={data?.content?.rendered} />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="border-line"></div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default BlogDetail;

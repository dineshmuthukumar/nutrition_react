import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
import {
  // getBlogListApi,
  getBlogCattApi,
  getBlogCateListApi,
} from "../../api/methods";
import { Interweave } from "interweave";
// import dayjs from "dayjs";
import "./style.scss";
// import { map } from "lodash";

const BlogList = () => {
  const [data, setData] = useState();
  // const [cate, setCate] = useState();
  // const { slug } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    blogDetail();
  }, []);

  const blogDetail = async () => {
    try {
      setLoading(true);
      const blogData = await getBlogCateListApi();

      const CateData = await getBlogCattApi();

      const filteredCategoryData = CateData?.data?.filter(
        (data) => data.slug === "blog"
      );

      const filteredBlogData = blogData?.data?.filter((item) =>
        item.categories.includes(filteredCategoryData[0].id)
      );

      setData(filteredBlogData);
      //    console.log(filteredBlogData);
      //console.log(filteredcateData[0]);
      // setCate(CateData);
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
  const getCategoryDetails = (input) => {
    const categoryname = [];

    // const filteredblogData = cate?.data
    //   .filter((data) => input.includes(data?.id))
    //   .map((filteredName) => categoryname.push(filteredName?.name));

    // console.log(categoryname);

    if (categoryname?.length > 0) {
      if (categoryname?.length >= 2) {
        return categoryname[1];
      } else {
        return categoryname.toString();
      }
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
        <section className="blog-list ptb-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="sec-heading live-flex-box">
                  <span className="title">Blog</span>
                </div>
              </div>
            </div>
            <div className="row">
              {data?.map((item, i) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <a className="single-card-blog" href={"/blog/" + item?.slug}>
                    <div className="blog_box">
                      <div className="bg-color">
                        <div className="box_img">
                          {item?._embedded["wp:featuredmedia"]?.length > 0 && (
                            <img
                              src={
                                item?._embedded["wp:featuredmedia"]["0"][
                                  "source_url"
                                ]
                              }
                              alt="Embedded Item"
                              className="img-fluid"
                            />
                          )}
                        </div>

                        <div className="blog_content mt-2">
                          <span className="cat-des">
                            {getCategoryDetails(item.categories)}
                          </span>
                          <h5 className="mt-3">
                            <Interweave content={item?.title?.rendered} />
                          </h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogList;

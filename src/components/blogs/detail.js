import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getBlogCateListApi, getBlogCattApi } from "../../api/methods";
import { Interweave } from "interweave";
import dayjs from "dayjs";
import "./style.scss";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const BlogDetail = () => {
  const [data, setData] = useState();
  const [cate, setCate] = useState();
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState("recent");
  const [recent, setRecent] = useState();
  const [popular, setPopular] = useState();
  console.log("val", slug);

  const shareUrl = `${process.env.REACT_APP_WEBSITE_URL}/blog/${slug}`;

  useEffect(() => {
    blogDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const blogDetail = async () => {
    try {
      setLoading(true);

      const blogData = await getBlogCateListApi();
      const CateData = await getBlogCattApi();
      const filteredblogData = blogData?.data?.filter(
        (data) => data.slug === slug
      );
      // console.log("value", data);
      setData(filteredblogData[0]);
      const filteredcateData = CateData?.data?.filter(
        (item) => item.id === filteredblogData[0].categories
      );

      const filteredCategoryData = CateData?.data?.filter(
        (data) => data.slug === "blog"
      );
      const filteredBlogData = blogData?.data?.filter((item) =>
        item.categories.includes(filteredCategoryData[0].id)
      );
      setRecent(filteredBlogData.slice(0, 4));
      setCate(filteredcateData[0]?.name);
      let arr2 = [1595, 1587, 1529, 1581, 1567];
      let res = filteredBlogData.filter((item) => arr2.includes(item.id));
      setPopular(res);
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
          <div className="span">
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <section className="ptb-100 blog_page">
            <div className="container">
              <div className="row">
                {/* <div className="col-lg-12 text-right">
            <button onclick="togglercolor()" id="btn">DARK</button>
          </div> */}
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="blog_section">
                    <div className="blog_heading">
                      <h2>
                        <Interweave content={data?.title?.rendered} />
                      </h2>
                      <p className="text-muted">
                        by marketting /{" "}
                        {dayjs(data?.date).format("MMM D, YYYY")}
                      </p>
                    </div>
                    <div className="blog_banner rounded">
                      {data?._embedded["wp:featuredmedia"]?.length > 0 && (
                        <img
                          src={
                            data?._embedded["wp:featuredmedia"]["0"][
                              "source_url"
                            ]
                          }
                          className="img-fluid rounded w-100"
                          alt="blog"
                        />
                      )}
                    </div>
                    <div className="blog_content text-size mt-5">
                      {" "}
                      <Interweave content={data?.content?.rendered} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="post-tabs rounded bordered p-4 position-sticky top-0 mt-2">
                    <h4>Recently Post</h4>
                    <ul
                      className="nav nav-tabs nav-pills nav-fill mt-4"
                      id="postsTab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          aria-controls="popular"
                          aria-selected="true"
                          className={`nav-link  ${
                            key === "recent" ? "active" : ""
                          }`}
                          data-bs-target="#popular"
                          data-bs-toggle="tab"
                          id="popular-tab"
                          role="tab"
                          type="button"
                          onClick={() => setKey("recent")}
                        >
                          Recent
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          aria-controls="recent"
                          aria-selected="false"
                          className={`nav-link  ${
                            key === "popular" ? "active" : ""
                          }`}
                          data-bs-target="#recent"
                          data-bs-toggle="tab"
                          id="recent-tab"
                          role="tab"
                          type="button"
                          onClick={() => setKey("popular")}
                        >
                          Popular
                        </button>
                      </li>
                    </ul>

                    <div className="tab-content mt-2" id="postsTabContent">
                      <div
                        aria-labelledby="popular-tab"
                        className={`tab-pane fade  ${
                          key === "recent" ? "show active" : ""
                        }`}
                        id="popular"
                        role="tabpanel"
                      >
                        {recent?.map((item, i) => (
                          <div className="post post-list-sm position-relative circle d-flex justify-content-start align-items-center py-3">
                            <div className="thumb rounded-circle">
                              <a href={"/blog/" + item?.slug}>
                                <div className="inner">
                                  {item?._embedded["wp:featuredmedia"]?.length >
                                    0 && (
                                    <img
                                      src={
                                        item?._embedded["wp:featuredmedia"][
                                          "0"
                                        ]["source_url"]
                                      }
                                      className="rounded-circle me-3"
                                      alt="post-title"
                                    />
                                  )}
                                </div>
                              </a>
                            </div>
                            <div className="details clearfix">
                              <h6 className="post-title my-0">
                                <a
                                  href={"/blog/" + item?.slug}
                                  className="text-decoration-none text-dark lh-base lh-base"
                                >
                                  <Interweave content={item?.title?.rendered} />
                                </a>
                              </h6>
                              <ul className="meta list-inline mt-1 mb-0">
                                <li className="list-inline-item">
                                  {dayjs(item?.date).format("D MMM  YYYY")}
                                </li>
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div
                        aria-labelledby="recent-tab"
                        // className="tab-pane fade"
                        className={`tab-pane fade  ${
                          key === "popular" ? "show active" : ""
                        }`}
                        id="recent"
                        role="tabpanel"
                      >
                        {popular?.map((item, i) => (
                          <div className="post post-list-sm position-relative circle d-flex justify-content-start align-items-center py-3">
                            <div className="thumb rounded-circle">
                              <a href={"/blog/" + item?.slug}>
                                <div className="inner">
                                  {item?._embedded["wp:featuredmedia"]?.length >
                                    0 && (
                                    <img
                                      src={
                                        item?._embedded["wp:featuredmedia"][
                                          "0"
                                        ]["source_url"]
                                      }
                                      className="rounded-circle me-3"
                                      alt="post-title"
                                    />
                                  )}
                                </div>
                              </a>
                            </div>
                            <div className="details clearfix">
                              <h6 className="post-title my-0">
                                <a
                                  href={"/blog/" + item?.slug}
                                  className="text-decoration-none text-dark lh-base lh-base"
                                >
                                  <Interweave content={item?.title?.rendered} />
                                </a>
                              </h6>
                              <ul className="meta list-inline mt-1 mb-0">
                                <li className="list-inline-item">
                                  {dayjs(item?.date).format("D MMM  YYYY")}
                                </li>
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="social_links mt-3">
                        <h4>Social links</h4>
                        <ul className="d-flex align-items-center justify-content-start p-0 list-unstyled mt-3">
                          <li>
                            <a
                              target="_blank"
                              onClick={() =>
                                window.open(
                                  `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}}%26quote=${encodeURIComponent(
                                    data?.title?.rendered
                                  )}`
                                )
                              }
                            >
                              <FaFacebook />
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              onClick={() =>
                                window.open(
                                  `https://www.instagram.com/sharer.php?u=${shareUrl}}%26quote=${encodeURIComponent(
                                    data?.title?.rendered
                                  )}`
                                )
                              }
                            >
                              <FaInstagram />
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              onClick={() =>
                                window.open(
                                  `https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(
                                    data?.title?.rendered
                                  )}`
                                )
                              }
                            >
                              <FaTwitter />
                            </a>
                          </li>

                          {/* <li> */}
                          {/* <a
                              href="https://discord.com/invite/JRWmNb38GW"
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                            >
                              <FaDiscord />
                            </a> */}
                          {/* </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default BlogDetail;

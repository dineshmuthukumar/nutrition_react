import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";

import { useHistory, useRouteMatch } from "react-router";
//import Image from "react-bootstrap/Image";
import { BiArrowBack, BiRightArrowAlt } from "react-icons/bi";

import { Button, Form } from "react-bootstrap";
import { HiOutlineArrowRight } from "react-icons/hi";
import {
  FaDiscord,
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Nav from "react-bootstrap/Nav";

import nd_3 from "../../../images/new-images/blog/single/3.jpg";
import nd_4 from "../../../images/new-images/blog/single/4.jpg";
import nd_5 from "../../../images/new-images/blog/single/5.jpg";
import nd_1 from "../../../images/new-images/blog/single/1.jpg";

import comments_1 from "../../../images/new-images/blog/comments/1.jpg";
import comments_2 from "../../../images/new-images/blog/comments/2.jpg";

import { blogListIdApi } from "../../../api/base-methods";
import "./style.scss";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const BlogPost = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const { slug } = match.params;
  const [blogData, setBlogData] = useState({});
  const [recentData, setRecentData] = useState({});

  const [categoryList, setCategoryList] = useState([]);
  const [recentList, setRecentList] = useState([]);

  const [offset, setOffset] = useState(0);
  const getBlogDetails = async () => {
    try {
      let response = await blogListIdApi(slug);
      setBlogData(response?.data?.responseData?.blogs);
      setRecentData(response?.data?.responseData?.recentBlogs);
      setCategoryList(response?.data?.responseData?.categoryBlogs);
      window.scrollTo(0, 0);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBlogDetails();
    // const onScroll = () => setOffset(window.pageYOffset);
    // // clean up code
    // window.removeEventListener("scroll", onScroll);
    // window.addEventListener("scroll", onScroll, { passive: true });
    // return () => window.removeEventListener("scroll", onScroll);
    ///categoriesList(1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getBlogDetails();

    //window.location.reload();
    ///categoriesList(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);
  return (
    <>
      <div className="container">
        <ul
          className="nav-filters j ustify-content-center"
          data-target=".posts"></ul>

        <div className="row gutter-lg">
          <div className="col-sm-9">
            <article className="post-single">
              {blogData?.image && (
                <figure className="post-media">
                  <a href="">
                    <img //src={"http://54.177.7.240" + blogData?.image}
                      src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${blogData?.image}`}
                      className="blog_post_img"
                      alt="post"
                    />
                  </a>
                </figure>
              )}
              <div className="post-details">
                <div className="post-meta">
                  by{" "}
                  <a href="" className="post-author">
                    {blogData?.username}
                  </a>{" "}
                  on{" "}
                  <a href="" className="post-date">
                    {dayjs(blogData?.createdAt).format("MMM DD,YYYY")}
                  </a>
                  {/* |{" "}
                  <a href="post-single.html#" className="post-comment">
                    <span>2</span> Comments
                  </a> */}
                </div>
                <h4 className="post-title">
                  <a href="post-single.html#">{blogData?.title}</a>
                </h4>
                <div className="post-body mb-7">
                  <p className="mb-5">
                    {" "}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: blogData?.content,
                      }}></div>
                  </p>
                </div>
              </div>
            </article>

            {/* <div className="related-posts">
              <h3 className="title title-simple text-left text-normal font-weight-bold ls-normal">
                Related Posts
              </h3>

              {recentData?.length > 0 ? (
                <OwlCarousel
                  className="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2"
                  margin={20}
                  nav
                  // smartSpeed={500}
                  dots={false}
                  navContainerClass={"owl-nav"}
                  responsive={{
                    0: {
                      items: 1,
                    },
                    768: {
                      items: 3,
                    },
                    992: {
                      items: 3,
                    },
                  }}
                  // autoplay
                  loop
                  autoplayTimeout={2000}
                  autoplayHoverPause={true}>
                  {(() => {
                    return (
                      <>
                        {recentData?.map((Recentcontent, fkey) => {
                          return (
                            <div className="post">
                              <figure className="post-media">
                                <a href="post-single.html#">
                                  <img
                                    // src={
                                    //   "http://54.177.7.240" +
                                    //   Recentcontent?.image
                                    // }
                                    src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${Recentcontent?.image}`}
                                    width="380"
                                    height="250"
                                    alt="post"
                                  />
                                </a>
                                <div className="post-calendar">
                                  <span className="post-day">
                                    {" "}
                                    {dayjs(Recentcontent?.createdAt).format(
                                      "DD"
                                    )}
                                  </span>
                                  <span className="post-month">
                                    {" "}
                                    {dayjs(Recentcontent?.createdAt).format(
                                      "MMM"
                                    )}
                                  </span>
                                </div>
                              </figure>
                              <div className="post-details">
                                <h4 className="post-title">
                                  <a href="post-single.html">
                                    {Recentcontent?.title}
                                  </a>
                                </h4>
                                <p className="post-content">
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: Recentcontent?.content,
                                    }}></div>
                                </p>

                                <Link
                                  to={`/blogpost/${Recentcontent?._id}`}
                                  className="btn btn-link btn-underline btn-primary">
                                  Read more
                                  <i className="d-icon-arrow-right"></i>
                                </Link>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    );
                  })()}
                </OwlCarousel>
              ) : (
                "no record found"
              )}
            </div> */}
            {/* <div className="comments">
              <br />
              <h3 className="title title-simple text-left text-normal font-weight-bold">
                3 Comments
              </h3>
              <ul>
                <li>
                  <div className="comment">
                    <figure className="comment-media">
                      <a href="post-single.html#">
                        <img src={comments_1} alt="avatar" />
                      </a>
                    </figure>
                    <div className="comment-body">
                      <div className="comment-user">
                        <span className="comment-date">
                          November 9, 2018 at 2:19 pm
                        </span>
                        <h4>
                          <a href="post-single.html#">Jimmy Pearson</a>
                        </h4>
                      </div>

                      <div className="comment-content mb-2">
                        <p>
                          Sed pretium, ligula sollicitudin laoreet viverra,
                          tortor libero sodales leo, eget blandit nunc tortor eu
                          nibh. Nullam mollis. Ut justo. Suspendisse potenti.{" "}
                        </p>
                      </div>
                      <a
                        href="post-single.html#"
                        className="btn btn-link btn-reveal-right"
                      >
                        REPLY<i className="d-icon-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="comment">
                        <figure className="comment-media">
                          <a href="post-single.html#">
                            <img src={comments_2} alt="avatar" />
                          </a>
                        </figure>

                        <div className="comment-body">
                          <div className="comment-user">
                            <span className="comment-date">
                              November 9, 2018 at 2:19 pm
                            </span>
                            <h4>
                              <a href="post-single.html#">Lena Knight</a>
                            </h4>
                          </div>

                          <div className="comment-content mb-2">
                            <p>Morbi interdum mollis sapien. Sed ac risus.</p>
                          </div>
                          <a
                            href="post-single.html#"
                            className="btn btn-link btn-reveal-right"
                          >
                            REPLY<i className="d-icon-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="comment">
                    <figure className="comment-media">
                      <a href="post-single.html#">
                        <img src={comments_1} alt="avatar" />
                      </a>
                    </figure>

                    <div className="comment-body">
                      <div className="comment-user">
                        <span className="comment-date">
                          November 9, 2018 at 2:19 pm
                        </span>
                        <h4>
                          <a href="post-single.html#">Johnathan Castillo</a>
                        </h4>
                      </div>

                      <div className="comment-content mb-2">
                        <p>
                          Vestibulum volutpat, lacus a ultrices sagittis, mi
                          neque euismod dui, eu pulvinar nunc sapien ornare
                          nisl. Phasellus pede arcu, dapibus eu, fermentum et,
                          dapibus sed, urna.
                        </p>
                      </div>
                      <a
                        href="post-single.html#"
                        className="btn btn-link btn-reveal-right"
                      >
                        REPLY<i className="d-icon-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="reply mb-10">
              <div className="title-wrapper text-left">
                <br />
                <h3 className="title title-simple text-left text-normal">
                  Leave A Reply
                </h3>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>
              <form action="blog_description">
                <textarea
                  id="reply-message"
                  cols="30"
                  rows="6"
                  className="form-control mb-4"
                  placeholder="Comment *"
                  required
                ></textarea>
                <div className="row">
                  <div className="col-md-6 mb-5">
                    <input
                      type="text"
                      className="form-control"
                      id="reply-name"
                      name="reply-name"
                      placeholder="Name *"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-5">
                    <input
                      type="email"
                      className="form-control"
                      id="reply-email"
                      name="reply-email"
                      placeholder="Email *"
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="btn-product btn-cart wid_200">
                  POST COMMENT<i className="d-icon-arrow-right"></i>
                </button>
              </form>
            </div> */}
          </div>
          <div className="col-sm-3">
            <div className="blog-category-section">
              <div className="inner-blog-one">
                <div className="blog-block">
                  <div className="blog-sub-heading">
                    <h2>Recent Post</h2>
                  </div>
                </div>
                <div className="search-section">
                  {recentData &&
                    recentData?.length > 0 &&
                    recentData?.map((recentListDetail) => {
                      return (
                        <Link to={`/blogs/${recentListDetail?.slug}`}>
                          <div className="search-block">
                            <div className="search-img">
                              <img
                                src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${recentListDetail?.image}`}
                                alt=""
                              />
                            </div>
                            <div className="search-para">
                              <a>{recentListDetail?.title}</a>
                              <span className="">
                                {" "}
                                {dayjs(recentListDetail?.createdAt).format(
                                  "MMM DD,YYYY"
                                )}
                              </span>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </div>
              <br />
              <div className="inner-blog-one">
                <div className="blog-block">
                  <div className="blog-sub-heading">
                    <h2>Blog Categories</h2>
                  </div>
                </div>
                <div className="search-section-blog">
                  <Nav defaultActiveKey="/home" as="ul">
                    {/* <Nav.Item as="li">
                      <Nav.Link>Beauty</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link>Beauty</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link>Beauty</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link>Beauty</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link>Beauty</Nav.Link>
                    </Nav.Item> */}
                    {categoryList?.map((CategoryDetail) => {
                      return (
                        <Nav.Item as="li">
                          <Nav.Link
                            onClick={() =>
                              history.push(`/blog?id=${CategoryDetail?._id}`)
                            }>
                            {CategoryDetail?.name}{" "}
                            {CategoryDetail?.count > 0
                              ? `(${CategoryDetail?.count})`
                              : ""}
                          </Nav.Link>
                        </Nav.Item>
                      );
                    })}
                  </Nav>
                </div>
              </div>
              <br />
              <div className="inner-blog-one">
                <div className="blog-block">
                  <div className="blog-sub-heading">
                    <h2>Recent Post</h2>
                  </div>
                </div>
                <div className="search-section">
                  <div className="search-block">
                    <div className="search-img">
                      <img
                        src="https://accounts.jump.trade/static/media/eth1.128ad42d.png"
                        alt=""
                      />
                    </div>
                    <div className="search-para">
                      <a>
                        Superfood Plant Protein Samplers | Dark Chocolate
                        Hazelnut
                      </a>
                      <span className="">Feb 13, 2023</span>
                    </div>
                  </div>
                  <div className="search-block">
                    <div className="search-img">
                      <img
                        src="https://accounts.jump.trade/static/media/eth1.128ad42d.png"
                        alt=""
                      />
                    </div>
                    <div className="search-para">
                      <a>
                        Superfood Plant Protein Samplers | Dark Chocolate
                        Hazelnut
                      </a>
                      <span className="">Feb 13, 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;

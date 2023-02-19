import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";

import { useHistory } from "react-router-dom";
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
import first from "../../../images/new-images/blog/3col/1.jpg";
import second from "../../../images/new-images/blog/3col/2.jpg";
import three from "../../../images/new-images/blog/3col/3.jpg";
import four from "../../../images/new-images/blog/3col/4.jpg";
import five from "../../../images/new-images/blog/3col/5.jpg";
import six from "../../../images/new-images/blog/3col/6.jpg";

import { Link } from "react-router-dom";

import { blogListApi } from "../../../api/base-methods";

import Pagination from "../pagination";

import "./style.scss";
import dayjs from "dayjs";
import Category from "../../../pages/category";
import { useQuery } from "../../../hook/url-params";

const Blog = () => {
  const history = useHistory();
  const query = useQuery();
  const [list, setList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [isNextPage, setIsNextPage] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [recentList, setRecentList] = useState([]);
  var queryAdd = window.location.search.substring(1);

  //console.log(queryAdd, "queryAdd");
  var vars = queryAdd.split("=");
  const slug = vars[1];
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const response = await blogListApi(1);
    // console.log(response?.data?.responseData?.blogs?.docs, "response");
    let list = response?.data?.responseData?.blogs?.docs;
    if (slug) {
      list = list.filter((e) => e?.categoryId == slug);
    }

    setList(list);
    setTotalCount(response?.data?.responseData?.blogs?.totalDocs);
    setLimit(response?.data?.responseData?.blogs?.limit);
    setCurrentPage(response?.data?.responseData?.blogs?.page);
    setIsNextPage(response?.data?.responseData?.blogs?.hasNextPage);
    setTotalPages(response?.data?.responseData?.blogs?.totalPages);
    setCategoryList(response?.data?.responseData?.categoryBlogs);
    setRecentList(response?.data?.responseData?.recentBlogs);
    setLoading(false);
  }, [slug]);

  const handlePage = async (page) => {
    const response = await blogListApi(currentPage);
  };

  return (
    <>
      <div className="page-content pb-10 mb-10">
        <div className="container">
          <ul
            className="nav-filters filter-underline blog-filters justify-content-center"
            data-target=".posts"></ul>

          <div className="row">
            <div className="col-sm-9">
              <div
                className="posts grid post-grid row"
                data-grid-options="{
                                'layoutMode': 'fitRows'
                            }">
                {!loading
                  ? list?.length > 0
                    ? list?.length > 0 &&
                      list?.map((obj, index) => {
                        return (
                          <Link
                            to={`/blogs/${obj?.slug}`}
                            className="grid-item col-sm-6 col-lg-4 lifestyle shopping winter-sale">
                            {" "}
                            <div>
                              <article className="post">
                                <figure className="post-media">
                                  <a href="#">
                                    <img
                                      //src={"http://54.177.7.240" + obj?.image}
                                      src={`${process.env.REACT_APP_PUBLIC_BASE_URL}${obj?.image}`}
                                      width="380"
                                      height="280"
                                      alt="post"
                                    />
                                  </a>
                                </figure>
                                <div className="post-details">
                                  <div className="post-meta">
                                    on{" "}
                                    <a
                                      href="blog-grid-3col.html#"
                                      className="post-date">
                                      {/* July 25, 2022 */}
                                      {dayjs(obj?.createdAt).format(
                                        "MMM DD,YYYY"
                                      )}
                                    </a>
                                    |{" "}
                                    {/* <a
                            href="blog-grid-3col.html#"
                            className="post-comment"
                          >
                            <span>2</span> Comments
                          </a> */}
                                  </div>
                                  <h4 className="post-title">
                                    <a href="#">{obj?.title}</a>
                                  </h4>
                                  <p className="post-content">
                                    {" "}
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: obj?.content,
                                      }}></div>
                                  </p>
                                  {/* <a href="blog_post.html" className="btn btn-link btn-underline btn-primary">Read
                                                                  more<i className="d-icon-arrow-right"></i></a> */}

                                  <Link
                                    to={`/blogpost/${obj?._id}`}
                                    className="btn btn-link btn-underline btn-primary">
                                    Read more
                                    <i className="d-icon-arrow-right"></i>
                                  </Link>
                                </div>
                              </article>
                            </div>{" "}
                          </Link>
                        );
                      })
                    : "No Found Blog"
                  : "Loading...."}
              </div>
              {list?.length > 0 ? (
                <div className="user-profile-table-pagination">
                  <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={totalCount}
                    pageSize={limit}
                    onPageChange={(page) => handlePage(page)}
                  />
                </div>
              ) : (
                ""
              )}
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
                    {!loading
                      ? recentList?.map((recentListDetail) => {
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
                        })
                      : "Loading...."}
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
                      {!loading
                        ? categoryList?.map((CategoryDetail) => {
                            return (
                              <Nav.Item as="li">
                                <Nav.Link
                                  onClick={() =>
                                    history.push(`?id=${CategoryDetail?._id}`)
                                  }>
                                  {CategoryDetail?.name}{" "}
                                  {CategoryDetail?.count > 0
                                    ? `(${CategoryDetail?.count})`
                                    : ""}
                                </Nav.Link>
                              </Nav.Item>
                            );
                          })
                        : "Loading..."}

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
                    </Nav>
                  </div>
                </div>
                <br />
                {/* <div className="inner-blog-one">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

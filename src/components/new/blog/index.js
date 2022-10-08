import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";

import { useHistory } from "react-router-dom";
//import Image from "react-bootstrap/Image";
import { BiArrowBack,BiRightArrowAlt } from "react-icons/bi";

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

import first from "../../../images/new-images/blog/3col/1.jpg";
import second from "../../../images/new-images/blog/3col/2.jpg";
import three from "../../../images/new-images/blog/3col/3.jpg";
import four from "../../../images/new-images/blog/3col/4.jpg";
import five from "../../../images/new-images/blog/3col/5.jpg";
import six from "../../../images/new-images/blog/3col/6.jpg";

import {  Link } from "react-router-dom";




import "./style.scss";

const Blog = () => {

  return (<>
        <div className="page-content pb-10 mb-10">
                        <div className="container">
                            <ul className="nav-filters filter-underline blog-filters justify-content-center" data-target=".posts"></ul>
                            <div className="posts grid post-grid row" data-grid-options="{
                                'layoutMode': 'fitRows'
                            }">
                                <div className="grid-item col-sm-6 col-lg-4 lifestyle shopping winter-sale">
                                    <article className="post">
                                        <figure className="post-media">
                                            <a href="#">
                                                <img src={first} width="380" height="280" alt="post" />
                                            </a>
                                        </figure>
                                        <div className="post-details">
                                            <div className="post-meta">
                                                on <a href="blog-grid-3col.html#" className="post-date">July 25, 2022</a>
                                                | <a href="blog-grid-3col.html#" className="post-comment"><span>2</span> Comments</a>
                                            </div>
                                            <h4 className="post-title"><a href="#">Lorem Ipsum</a>
                                            </h4>
                                            <p className="post-content">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            {/* <a href="blog_post.html" className="btn btn-link btn-underline btn-primary">Read
                                                more<i className="d-icon-arrow-right"></i></a> */}

                                            <Link to="/blogpost" className="btn btn-link btn-underline btn-primary">Read
                                            more<i className="d-icon-arrow-right"></i></Link>
                                        </div>
                                    </article>
                                </div>
                                <div className="grid-item col-sm-6 col-lg-4 lifestyle sport">
                                    <article className="post inner-video ">
                                        <figure className="post-media">
                                            <a href="#">
                                                <img src={second} width="380" height="280" alt="post" />
                                            </a>
                                            <span className="video-play"></span>
                                            <video width="380">
                                                <source src="video/memory-of-a-woman.mp4" type="video/mp4" />
                                            </video>
                                        </figure>
                                        <div className="post-details">
                                            <div className="post-meta">
                                                on <a href="#" className="post-date">July 25, 2022</a>
                                                | <a href="#" className="post-comment"><span>7</span> Comments</a>
                                            </div>
                                            <h4 className="post-title"><a href="#">Lorem Ipsum</a></h4>
                                            <p className="post-content">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <Link to="/blogpost" className="btn btn-link btn-underline btn-primary">Read
                                            more<i className="d-icon-arrow-right"></i></Link>
                                        </div>
                                    </article>
                                </div>
                                <div className="grid-item col-sm-6 col-lg-4 fashion lifestyle">
                                    <article className="post">
                                        <figure className="post-media">
                                            <div className="owl-carousel owl-theme owl-dot-inner owl-dot-white row cols-1 gutter-no"
                                                data-owl-options="{
                                                'items': 1    
                                            }">
                                                <img src={three} width="380" height="280" alt="post" />
                                                <img src={second} width="380" height="280" alt="post" />
                                                <img src={first} width="380" height="280" alt="post" />
                                            </div>
                                        </figure>
                                        <div className="post-details">
                                            <div className="post-meta">
                                                on <a href="#" className="post-date">July 25, 2022</a>
                                                | <a href="#" className="post-comment"><span>9</span> Comments</a>
                                            </div>
                                            <h4 className="post-title"><a href="#">Lorem Ipsum</a></h4>
                                            <p className="post-content">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <Link to="/blogpost" className="btn btn-link btn-underline btn-primary">Read
                                            more<i className="d-icon-arrow-right"></i></Link>
                                        </div>
                                    </article>
                                </div>
                                <div className="grid-item col-sm-6 col-lg-4 travel summer-sale">
                                    <article className="post">
                                        <figure className="post-media">
                                            <a href="#">
                                                <img src={four} width="380" height="280" alt="post" />
                                            </a>
                                        </figure>
                                        <div className="post-details">
                                            <div className="post-meta">
                                                on <a href="#" className="post-date">July 25, 2022</a>
                                                | <a href="#" className="post-comment"><span>3</span> Comments</a>
                                            </div>
                                            <h4 className="post-title"><a href="#">Lorem Ipsum</a></h4>
                                            <p className="post-content">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <Link to="/blogpost" className="btn btn-link btn-underline btn-primary">Read
                                            more<i className="d-icon-arrow-right"></i></Link>
                                        </div>
                                    </article>
                                </div>
                                <div className="grid-item col-sm-6 col-lg-4 travel hobbies">
                                    <article className="post">
                                        <figure className="post-media">
                                            <a href="#">
                                                <img src={five} width="380" height="280" alt="post" />
                                            </a>
                                        </figure>
                                        <div className="post-details">
                                            <div className="post-meta">
                                                on <a href="#" className="post-daet">July 25, 2022</a>
                                                | <a href="#" className="post-comment"><span>4</span> Comments</a>
                                            </div>
                                            <h4 className="post-title"><a href="#">Lorem Ipsum</a></h4>
                                            <p className="post-content">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <Link to="/blogpost" className="btn btn-link btn-underline btn-primary">Read
                                            more<i className="d-icon-arrow-right"></i></Link>
                                        </div>
                                    </article>
                                </div>
                                <div className="grid-item col-sm-6 col-lg-4 hobbies">
                                    <article className="post">
                                        <figure className="post-media">
                                            <a href="#">
                                                <img src={six} width="380" height="280" alt="post" />
                                            </a>
                                        </figure>
                                        <div className="post-details">
                                            <div className="post-meta">
                                                on <a href="#" className="post-date">July 25, 2022</a>
                                                | <a href="#" className="post-comment"><span>9</span> Comments</a>
                                            </div>
                                            <h4 className="post-title"><a href="#">Lorem Ipsum</a></h4>
                                            <p className="post-content">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <Link to="/blogpost" className="btn btn-link btn-underline btn-primary">Read
                                            more<i className="d-icon-arrow-right"></i></Link>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <a className="page-link page-link-prev" href="#" aria-label="Previous" tabindex="-1"
                                        aria-disabled="true">
                                        <i className="d-icon-arrow-left"></i>Prev
                                    </a>
                                </li>
                                <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item">
                                    <a className="page-link page-link-next" href="#" aria-label="Next">
                                        Next<i className="d-icon-arrow-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
        </div>
  </>
  );
};

export default Blog;

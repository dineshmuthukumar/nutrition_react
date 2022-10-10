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

import nd_3 from "../../../images/new-images/blog/single/3.jpg";
import nd_4 from "../../../images/new-images/blog/single/4.jpg";
import nd_5 from "../../../images/new-images/blog/single/5.jpg";
import nd_1 from "../../../images/new-images/blog/single/1.jpg";


import comments_1 from "../../../images/new-images/blog/comments/1.jpg";
import comments_2 from "../../../images/new-images/blog/comments/2.jpg";


import "./style.scss";

const BlogPost = () => {

  return (<>
        <div className="container">
            <ul className="nav-filters filter-underline blog-filters justify-content-center" data-target=".posts"></ul>
            
            <div className="row gutter-lg">
                <div className="offset-sm-1 col-sm-10">
                    <article className="post-single">
                        <figure className="post-media">
                            <a href="post-single.html#">
                                <img src={nd_1} width="880" height="450" alt="post" />
                            </a>
                        </figure>
                        <div className="post-details">
                            <div className="post-meta">
                                by <a href="post-single.html#" className="post-author">John Doe</a>
                                on <a href="post-single.html#" className="post-date">Nov 22, 2018</a>
                                | <a href="post-single.html#" className="post-comment"><span>2</span> Comments</a>
                            </div>
                            <h4 className="post-title"><a href="post-single.html#">Explore Fashion Trending For Women In Autumn
                                    2022</a></h4>
                            <div className="post-body mb-7">
                                <p className="mb-5"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
                                    aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
                                    laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
                                    nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>

                                <p className="mb-6">Sed egestas, ante et vulputate volutpat, eros pede semper est,
                                    vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
                                    commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
                                    tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a <a
                                        href="post-single.html#">ultrices sagittis</a>, mi neque euismod dui, eu pulvinar nunc
                                    sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus
                                    sed, urna.</p>
                            </div>

                            
                            
                        </div>
                    </article>
                    
                    
                    <div className="related-posts">
                        <h3 className="title title-simple text-left text-normal font-weight-bold ls-normal">Related
                            Posts</h3>
                        {/* <div className="owl-carousel owl-theme row cols-lg-3 cols-sm-2" data-owl-options="{
                            'nav': true,
                            'dots': false,
                            'items': 1,
                            'margin': 20,
                            'loop': false,
                            'responsive': {
                                '576': {
                                    'items': 2
                                },
                                '768': {
                                    'items': 3
                                }
                            }
                        }"> */}

                                <OwlCarousel
                                className="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2"
                                    margin={20}
                                    nav
                                    // smartSpeed={500}
                                    dots={false}
                                    navContainerClass={"owl-nav"}
                                    responsive={{
                                        0: {
                                            'items': 1
                                        },
                                        768: {
                                            'items': 3
                                        },
                                        992: {
                                            'items': 3
                                        }
                                    }}
                                    // autoplay
                                    loop
                                    autoplayTimeout={2000}
                                    autoplayHoverPause={true}
                            >

                            <div className="post">
                                <figure className="post-media">
                                    <a href="post-single.html#">
                                        <img src={nd_3} width="380" height="250"
                                            alt="post" />
                                    </a>
                                    <div className="post-calendar">
                                        <span className="post-day">19</span>
                                        <span className="post-month">JAN</span>
                                    </div>
                                </figure>
                                <div className="post-details">
                                    <h4 className="post-title"><a href="post-single.html">20% Off Coupon for
                                            Week</a>
                                    </h4>
                                    <p className="post-content">Lorem ipsum dolor sit amet,onadipiscing elit, sedsd
                                        doeiu
                                    </p>
                                    <a href="post-single.html"
                                        className="btn btn-link btn-underline btn-primary">Read more<i
                                            className="d-icon-arrow-right"></i></a>
                                </div>
                            </div>
                            <div className="post">
                                <figure className="post-media">
                                    <a href="post-single.html#">
                                        <img src={nd_4} width="380" height="250"
                                            alt="post" />
                                    </a>
                                    <div className="post-calendar">
                                        <span className="post-day">27</span>
                                        <span className="post-month">SEP</span>
                                    </div>
                                </figure>
                                <div className="post-details">
                                    <h4 className="post-title"><a href="post-single.html">20% Off Coupon for
                                            Week</a>
                                    </h4>
                                    <p className="post-content">Lorem ipsum dolor sit amet,onadipiscing elit, sedsd
                                        doeiu
                                    </p>
                                    <a href="post-single.html"
                                        className="btn btn-link btn-underline btn-primary">Read more<i
                                            className="d-icon-arrow-right"></i></a>
                                </div>
                            </div>
                            <div className="post">
                                <figure className="post-media">
                                    <a href="post-single.html#">
                                        <img src={nd_5} width="380" height="250"
                                            alt="post" />
                                    </a>
                                    <div className="post-calendar">
                                        <span className="post-day">12</span>
                                        <span className="post-month">SEP</span>
                                    </div>
                                </figure>
                                <div className="post-details">
                                    <h4 className="post-title"><a href="post-single.html">20% Off Coupon for
                                            Week</a>
                                    </h4>
                                    <p className="post-content">Lorem ipsum dolor sit amet,onadipiscing elit, sedsd
                                        doeiu
                                    </p>
                                    <a href="post-single.html"
                                        className="btn btn-link btn-underline btn-primary">Read more<i
                                            className="d-icon-arrow-right"></i></a>
                                </div>
                            </div>
                            <div className="post">
                                <figure className="post-media">
                                    <a href="post-single.html#">
                                        <img src={nd_4} width="380" height="250"
                                            alt="post" />
                                    </a>
                                    <div className="post-calendar">
                                        <span className="post-day">27</span>
                                        <span className="post-month">SEP</span>
                                    </div>
                                </figure>
                                <div className="post-details">
                                    <h4 className="post-title"><a href="post-single.html">20% Off Coupon for
                                            Week</a>
                                    </h4>
                                    <p className="post-content">Lorem ipsum dolor sit amet,onadipiscing elit, sedsd
                                        doeiu
                                    </p>
                                    <a href="post-single.html"
                                        className="btn btn-link btn-underline btn-primary">Read more<i
                                            className="d-icon-arrow-right"></i></a>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                    <div className="comments">
                        <br />
                        <h3 className="title title-simple text-left text-normal font-weight-bold">3 Comments</h3>
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
                                            <span className="comment-date">November 9, 2018 at 2:19 pm</span>
                                            <h4><a href="post-single.html#">Jimmy Pearson</a></h4>
                                        </div>

                                        <div className="comment-content mb-2">
                                            <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
                                                sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut
                                                justo. Suspendisse potenti. </p>
                                        </div>
                                        <a href="post-single.html#" className="btn btn-link btn-reveal-right">REPLY<i
                                                className="d-icon-arrow-right"></i></a>
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
                                                    <span className="comment-date">November 9, 2018 at 2:19
                                                        pm</span>
                                                    <h4><a href="post-single.html#">Lena Knight</a></h4>
                                                </div>

                                                <div className="comment-content mb-2">
                                                    <p>Morbi interdum mollis sapien. Sed ac risus.</p>
                                                </div>
                                                <a href="post-single.html#" className="btn btn-link btn-reveal-right">REPLY<i
                                                        className="d-icon-arrow-right"></i></a>
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
                                            <span className="comment-date">November 9, 2018 at 2:19 pm</span>
                                            <h4><a href="post-single.html#">Johnathan Castillo</a></h4>
                                        </div>

                                        <div className="comment-content mb-2">
                                            <p>Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
                                                dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                                                dapibus eu, fermentum et, dapibus sed, urna.</p>
                                        </div>
                                        <a href="post-single.html#" className="btn btn-link btn-reveal-right">REPLY<i
                                                className="d-icon-arrow-right"></i></a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="reply mb-10">
                        <div className="title-wrapper text-left">
                            <br />
                            <h3 className="title title-simple text-left text-normal">Leave A Reply</h3>
                            <p>Your email address will not be published. Required fields are marked *</p>
                        </div>
                        <form action="blog_description">
                            <textarea id="reply-message" cols="30" rows="6" className="form-control mb-4"
                                placeholder="Comment *" required></textarea>
                            <div className="row">
                                <div className="col-md-6 mb-5">
                                    <input type="text" className="form-control" id="reply-name" name="reply-name"
                                        placeholder="Name *" required />
                                </div>
                                <div className="col-md-6 mb-5">
                                    <input type="email" className="form-control" id="reply-email" name="reply-email"
                                        placeholder="Email *" required />
                                </div>
                            </div>
                            <button type="submit" className="btn-product btn-cart wid_200">POST COMMENT<i
                                    className="d-icon-arrow-right"></i></button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
  </>
  );
};

export default BlogPost;

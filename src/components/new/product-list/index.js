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

import first from "../../../images/new-images/blog/3col/1.jpg";
import second from "../../../images/new-images/blog/3col/2.jpg";
import three from "../../../images/new-images/blog/3col/3.jpg";
import four from "../../../images/new-images/blog/3col/4.jpg";
import five from "../../../images/new-images/blog/3col/5.jpg";
import six from "../../../images/new-images/blog/3col/6.jpg";

import { Link } from "react-router-dom";

import { productListApi } from "../../../api/base-methods";

import pagination from "../pagination";
import Product from "../../product";

import "./style.scss";

const Productlist = () => {
  const [list, setList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [isNextPage, setIsNextPage] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(async () => {
    const response = await productListApi(1);
    //console.log(response?.data?.responseData, "response");
    setList(response?.data?.responseData?.product?.docs);
    setTotalCount(response?.data?.responseData?.product?.totalDocs);
    setLimit(response?.data?.responseData?.product?.limit);
    setCurrentPage(response?.data?.responseData?.product?.page);
    setIsNextPage(response?.data?.responseData?.product?.hasNextPage);
    setTotalPages(response?.data?.responseData?.product?.totalPages);
  }, []);

  const handlePage = async (page) => {
    const response = await productListApi(currentPage);
  };

  return (
    <>
      <div className="page-content pb-10 mb-10">
        <div className="container">
          <ul
            className="nav-filters filter-underline blog-filters justify-content-center"
            data-target=".posts"
          ></ul>
          <div
            className="posts grid post-grid row gap-4"
            // data-grid-options="{
            //                     'layoutMode': 'fitRows'
            //                 }"
          >
            {list?.length > 0 &&
              list?.map((obj, index) => {
                return <Product ProductDetails={obj} key={index} />;
              })}
          </div>
          {list?.length > 0 ? (
            <div className="user-profile-table-pagination">
              <pagination
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
          {/* <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a
                className="page-link page-link-prev"
                href="#"
                aria-label="Previous"
                tabIndex="-1"
                aria-disabled="true"
              >
                <i className="d-icon-arrow-left"></i>Prev
              </a>
            </li>
            <li className="page-item active" aria-current="page">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link page-link-next"
                href="#"
                aria-label="Next"
              >
                Next<i className="d-icon-arrow-right"></i>
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </>
  );
};

export default Productlist;

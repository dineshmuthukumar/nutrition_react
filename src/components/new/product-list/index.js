import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";

import { useHistory, useRouteMatch } from "react-router-dom";
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

import {
  productListApi,
  productListCategoryApiwithpage,
} from "../../../api/base-methods";

import pagination from "../pagination";
import Product from "../../product";

import "./style.scss";

const Productlist = () => {
  const match = useRouteMatch();

  const { categoryid } = match.params;
  const [list, setList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [isNextPage, setIsNextPage] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    if (categoryid) {
      setLoading(true);
      let response = await productListCategoryApiwithpage(1, categoryid);
      setList(response?.data?.responseData?.product?.docs);
      setTotalCount(response?.data?.responseData?.product?.totalDocs);
      //setLimit(response?.data?.responseData?.product?.limit);
      setCurrentPage(response?.data?.responseData?.product?.page);
      setIsNextPage(response?.data?.responseData?.product?.hasNextPage);
      setTotalPages(response?.data?.responseData?.product?.totalPages);
      setLoading(false);
      window.scrollTo(0, 0);
    } else {
      setLoading(true);
      let response = await productListApi(1);
      setList(response?.data?.responseData?.product?.docs);
      setTotalCount(response?.data?.responseData?.product?.totalDocs);
      // setLimit(response?.data?.responseData?.product?.limit);
      setCurrentPage(response?.data?.responseData?.product?.page);
      setIsNextPage(response?.data?.responseData?.product?.hasNextPage);
      setTotalPages(response?.data?.responseData?.product?.totalPages);
      setLoading(false);
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(async () => {
    if (categoryid) {
      setLoading(true);
      let response = await productListCategoryApiwithpage(1, categoryid);
      setList(response?.data?.responseData?.product?.docs);
      setTotalCount(response?.data?.responseData?.product?.totalDocs);
      //setLimit(response?.data?.responseData?.product?.limit);
      setCurrentPage(response?.data?.responseData?.product?.page);
      setIsNextPage(response?.data?.responseData?.product?.hasNextPage);
      setTotalPages(response?.data?.responseData?.product?.totalPages);
      setLoading(false);
      window.scrollTo(0, 0);
    } else {
      setLoading(true);
      let response = await productListApi(1);
      setList(response?.data?.responseData?.product?.docs);
      setTotalCount(response?.data?.responseData?.product?.totalDocs);
      // setLimit(response?.data?.responseData?.product?.limit);
      setCurrentPage(response?.data?.responseData?.product?.page);
      setIsNextPage(response?.data?.responseData?.product?.hasNextPage);
      setTotalPages(response?.data?.responseData?.product?.totalPages);
      setLoading(false);
      window.scrollTo(0, 0);
    }
  }, [categoryid]);

  const handlePage = async (page) => {
    if (categoryid) {
      const response = await productListCategoryApiwithpage(
        currentPage,
        categoryid
      );
      setList(response?.data?.responseData?.product?.docs);
      setCurrentPage(page);
    } else {
      const response = await productListApi(currentPage);
      setList(response?.data?.responseData?.product?.docs);
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="page-content pb-10 mb-10">
        <section class="pt-3 mt-2 mb-2 pb-10 need_sec">
          <div className="container">
            {loading ? (
              <p>Loading Please wait...</p>
            ) : (
              <div class="row">
                {list?.length > 0 ? (
                  list?.map((obj, index) => {
                    return (
                      <div className="col-sm-3">
                        <Product ProductDetails={obj} key={index} />
                      </div>
                    );
                  })
                ) : (
                  <p>No product Found</p>
                )}

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
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Productlist;

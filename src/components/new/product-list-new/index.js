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
  getsubCategoryListApi,
  productListSubCategoryApiwithpage,
} from "../../../api/base-methods";

import pagination from "../pagination";
import Product from "../../product";
import useQuery from "../../../hook/useQuery";

import "./style.scss";

const ProductlistNew = () => {
  const match = useRouteMatch();
  const query = useQuery();
  const subCategoriesId = query.get("subcategory");
  const history = useHistory();
  const { categoryid } = match.params;
  const [list, setList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [isNextPage, setIsNextPage] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [subCategoryDetails, setSubCategoryDetails] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(subCategoriesId);

  // console.log(subCategoriesId, "subCategoriesId");
  //  useEffect(async () => {
  //   console.log(subCategoriesId, "subCategoriesId");
  //   setSelectedCategory(subCategoriesId);
  //   // console.log(response?.data?.responseData?.filterCategories);
  // }, [subCategoriesId]);

  useEffect(async () => {
    const response = await getsubCategoryListApi(1);
    setSubCategoryDetails(response?.data?.responseData?.filterCategories);
    // console.log(response?.data?.responseData?.filterCategories);
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
      if (selectedCategory) {
        setLoading(true);
        const response = await productListSubCategoryApiwithpage(
          1,
          selectedCategory
        );
        setList(response?.data?.responseData?.product?.docs);
        setTotalCount(response?.data?.responseData?.product?.totalDocs);
        // setLimit(response?.data?.responseData?.product?.limit);
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
      if (selectedCategory && selectedCategory != "all") {
        setLoading(true);
        const response = await productListSubCategoryApiwithpage(
          1,
          selectedCategory
        );
        setList(response?.data?.responseData?.product?.docs);
        setTotalCount(response?.data?.responseData?.product?.totalDocs);
        // setLimit(response?.data?.responseData?.product?.limit);
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
    }
  }, [selectedCategory]);

  const handlePage = async (page) => {
    if (categoryid) {
      const response = await productListCategoryApiwithpage(
        currentPage,
        categoryid
      );
      setList(response?.data?.responseData?.product?.docs);
      setCurrentPage(page);
    } else {
      if (selectedCategory) {
        const response = await productListSubCategoryApiwithpage(
          currentPage,
          selectedCategory
        );
        setList(response?.data?.responseData?.product?.docs);
        setCurrentPage(page);
      } else {
        const response = await productListApi(currentPage);
        setList(response?.data?.responseData?.product?.docs);
        setCurrentPage(page);
      }
    }
  };
  const handleChangeEvent = (e) => {
    //console.log(e.target.value, "selectCategroy");
    if (e.target.value) {
      setSelectedCategory(e.target.value);
    } else {
      setSelectedCategory("");
    }
  };

  return (
    <>
      <div className="page-content pb-10 mb-10">
        <section class="pt-3 mt-2 mb-2 pb-10 need_sec">
          <div className="container">
            {!categoryid && (
              <div class=" shop_filter mb-5">
                <div class="">
                  <div class="counter">
                    <div class="row">
                      <div class="col-sm-12">
                        <Form.Label>Sub Category</Form.Label>
                        <Form className="d-flex">
                          {subCategoryDetails.length > 0 &&
                            subCategoryDetails?.map((data, type) => (
                              <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                  inline
                                  label={data.name}
                                  name={`group`}
                                  type={"radio"}
                                  value={data.code}
                                  id={`inline-${type}-1`}
                                  checked={data.code == selectedCategory}
                                  //onKeyPress={handleKeyPressEvent}
                                  onChange={handleChangeEvent}
                                />
                              </div>
                            ))}
                          <Form.Check
                            inline
                            label={"All"}
                            name={`group`}
                            type={"radio"}
                            value={"all"}
                            id={`inline--1`}
                            checked={"all" == selectedCategory}
                            //onKeyPress={handleKeyPressEvent}
                            onChange={() => {
                              setSelectedCategory("all");
                            }}
                          />
                        </Form>
                        {/* <button
                          onClick={() => {
                            ResetCategory();
                          }}
                          className="btn btn-primary">
                          Reset
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

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

export default ProductlistNew;

import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import _ from "lodash";

import { nftActiveOrders } from "../api/methods";
import { NFTLoader } from "../components/nft-basic-details/content-loader";
import { listForSaleDetail, ownerDetails } from "../api/actioncable-methods";
import { artistApi } from "../api/base-methods";
import OwnerList from "../components/owner-list";
import Footer from "../components/footer/index";
import NFTOrderDetails from "../components/nft-order-details/index";

import Details from "./details";
import OrderDetails from "./order-details";
//import AdditionalPerks from "../components/additional-perks/index";
import NFTPlayerStats from "../components/nft-player-stats";
import { Redirect } from "react-router";

const NftDetails = () => {
  const { slug } = useParams();
  const [loader, setLoader] = useState(true);
  const [orderSlug, setorderSlug] = useState("");
  const [currentPage, setcurrentPage] = useState("");

  useEffect(() => {
    GetOrderList();
    //return false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const GetOrderList = async () => {
    try {
      setLoader(true);
      let transactions = await nftActiveOrders({
        nft_slug: slug,
      });

      //console.log(transactions.data.data.orders[0]);
      if (transactions?.data?.data?.orders) {
        setorderSlug(transactions?.data?.data?.orders[0]);
        setcurrentPage("orderdetails");
      } else {
        setcurrentPage("details");
      }
      //console.log(orderSlug);
      //console.log(currentPage);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loader ? (
        <NFTLoader />
      ) : (
        (() => {
          if (currentPage == "orderdetails") {
            return <OrderDetails orderSlug={orderSlug} />;
          } else if (currentPage == "orderdetails") {
            return <Details />;
          } else {
            return <Redirect to="/"></Redirect>;
          }
        })()
      )}
    </>
  );
};

export default NftDetails;

import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
// import { useSelector } from "react-redux";
// import _ from "lodash";

import { nftActiveOrders } from "../api/methods";
// import { listForSaleDetail, ownerDetails } from "../api/actioncable-methods";
// import { artistApi } from "../api/base-methods";
// import OwnerList from "../components/owner-list";
// import Footer from "../components/footer/index";
// import NFTOrderDetails from "../components/nft-order-details/index";

import Details from "./details";
import OrderDetails from "./order-details";
//import AdditionalPerks from "../components/additional-perks/index";
// import NFTPlayerStats from "../components/nft-player-stats";
import { Redirect } from "react-router";
import DetailsLoader from "../utils/detailsLoader";

const NftDetails = () => {
  const history = useHistory();
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
      if (transactions?.data?.data?.orders.length) {
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
      if (error?.response?.status === 404) history.replace("/");
    }
  };

  return (
    <>
      {loader ? (
        <DetailsLoader />
      ) : (
        (() => {
          if (currentPage === "orderdetails") {
            return <OrderDetails CurrentOrderSlug={orderSlug} details={true} />;
          } else if (currentPage === "details") {
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

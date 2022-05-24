import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import OwlCarousel from "react-owl-carousel";
//import { Dropdown } from "react-bootstrap";
//import { FaCheckCircle } from "react-icons/fa";
//import { BiCaretDown } from "react-icons/bi";
import ContentLoader from "react-content-loader";
import { nftRecentlySoldApi } from "../../api/methods";
//import NFTMore from "../nft-more/index";
import frontArrow from "../../images/jump-trade/front-arrow.png";
import backArrow from "../../images/jump-trade/back-arrow.png";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./style.scss";
import CollectionCard from "../nft-more/nft-card";

const RecentlySoldNFT = () => {
  const history = useHistory();
  const [page] = useState(1);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  // const [filter, setFilter] = useState({
  //   sort: [
  //     {
  //       name: "Recently Sold",
  //       value: "recently_sold",
  //       checked: true,
  //     },
  //     {
  //       name: "Price - High to Low",
  //       value: "price_desc",
  //       checked: false,
  //     },
  //     {
  //       name: "Price - Low to High",
  //       value: "price_asc",
  //       checked: false,
  //     },
  //   ],
  // });

  useEffect(() => {
    topTradesList(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const topTradesList = async (page, sort = "recently_sold") => {
    try {
      setLoading(true);
      let response = await nftRecentlySoldApi(page, sort);
      setList(response.data.data.nfts);
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error(
        "The request could not be processed at this time. Please try again."
      );
    }
  };

  // const ShowAllSort = React.forwardRef(({ onClick }, ref) => (
  //   <div
  //     className="filter-drop-sort-btn"
  //     ref={ref}
  //     onClick={(e) => {
  //       e.preventDefault();
  //       onClick(e);
  //     }}
  //   >
  //     {filter.sort.find((obj) => obj.checked === true)?.name
  //       ? `Sort By: ${filter.sort.find((obj) => obj.checked === true).name}`
  //       : "Sort By"}
  //     <BiCaretDown />
  //   </div>
  // ));

  // const handleSortNFT = (input) => {
  //   const sort_filters = input.value;
  //   const info = { ...filter };
  //   info.sort = filter.sort.map((obj) => ({
  //     ...obj,
  //     checked: sort_filters ? sort_filters === obj.value : false,
  //   }));
  //   setFilter(info);
  //   topTradesList(page, sort_filters);
  // };

  return (
    <>
      <section className="hot-collection-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="sec-heading live-flex-box">
                <span className="title">RECENTLY SOLD</span>
                <span
                  className="viewallBtnliveaction"
                  onClick={() => history.push("/nft-marketplace/sale-history")}
                >
                  View all
                </span>
              </div>

              {!loading ? (
                <div className="row">
                  {list.length > 0 ? (
                    <OwlCarousel
                      className="owl-theme"
                      margin={20}
                      nav
                      smartSpeed={500}
                      dots={false}
                      navContainerClass={"carousel-btn-block"}
                      // navText={[
                      //   `<span class="icon-right-arrow left"><img src=${arrowRight} /></span>`,
                      //   `<span class="icon-right-arrow right"><img src=${arrowRight} /></span>`,
                      // ]}
                      navText={[
                        `<span class="icon-right-arrow left"> <img src=${backArrow} /> </span>`,
                        `<span class="icon-right-arrow right"><img src=${frontArrow} /></span>`,
                      ]}
                      responsive={{
                        0: {
                          items: 1,
                        },
                        768: {
                          items: 2,
                        },
                        800: {
                          items: 3,
                        },
                        1024: {
                          items: 4,
                        },
                        1200: {
                          items: 4,
                        },
                        1541: {
                          items: 4,
                        },
                      }}
                    >
                      {list.map((nft, i) => (
                        <CollectionCard
                          key={`live-auction-${i}`}
                          nft={nft}
                          recentSold={true}
                          favouriteNFT={false}
                        />
                      ))}
                    </OwlCarousel>
                  ) : (
                    <div className="col-12 text-center">
                      <h3 className="my-3">
                        You'll Soon See A Live Auction NFTs!
                      </h3>
                    </div>
                  )}
                </div>
              ) : (
                <NFTCardLoader />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const NFTCardLoader = (props) => (
  <ContentLoader
    viewBox="0 50 900 300"
    width={"100%"}
    height={"100%"}
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    className="mt-1"
    {...props}
  >
    <rect x="0" y="5" rx="2" ry="2" width="218" height="280" />
    <rect x="228" y="5" rx="2" ry="2" width="218" height="280" />
    <rect x="456" y="5" rx="2" ry="2" width="218" height="280" />
    <rect x="684" y="5" rx="2" ry="2" width="218" height="280" />
  </ContentLoader>
);

export default RecentlySoldNFT;

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Dropdown } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { BiCaretDown } from "react-icons/bi";
import ContentLoader from "react-content-loader";
import { nftRecentlySoldApi } from "../../api/methods";
import NFTMore from "../nft-more/index";
import "./style.scss";

const RecentlySoldNFT = () => {
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filter, setFilter] = useState({
    sort: [
      {
        name: "Recently Sold",
        value: "recently_sold",
        checked: true,
      },
      {
        name: "Price - High to Low",
        value: "price_desc",
        checked: false,
      },
      {
        name: "Price - Low to High",
        value: "price_asc",
        checked: false,
      },
    ],
  });

  useEffect(() => {
    topTradesList(page);
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

  const ShowAllSort = React.forwardRef(({ onClick }, ref) => (
    <div
      className="filter-drop-sort-btn"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {filter.sort.find((obj) => obj.checked === true)?.name
        ? `Sort By: ${filter.sort.find((obj) => obj.checked === true).name}`
        : "Sort By"}
      <BiCaretDown />
    </div>
  ));

  const handleSortNFT = (input) => {
    const sort_filters = input.value;
    const info = { ...filter };
    info.sort = filter.sort.map((obj) => ({
      ...obj,
      checked: sort_filters ? sort_filters === obj.value : false,
    }));
    setFilter(info);
    topTradesList(page, sort_filters);
  };

  return (
    <>
      <section className="hot-collection-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="sec-heading flex-box">
                <span className="title">Recently Sold</span>
                <div className="recsold-inner-flex-box">
                  <div className="filt-flex-box">
                    <Dropdown>
                      <Dropdown.Toggle
                        align="start"
                        drop="start"
                        as={ShowAllSort}
                      ></Dropdown.Toggle>

                      <Dropdown.Menu align="start">
                        {filter.sort.map((obj, i) => (
                          <Dropdown.Item
                            key={`nft${i}`}
                            as="button"
                            onClick={() => handleSortNFT(obj)}
                          >
                            <FaCheckCircle
                              color={obj.checked ? "green" : "#ccc"}
                              className="mb-1 me-2"
                              size={17}
                            />{" "}
                            {obj.name}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <span
                    className="viewallBtn"
                    onClick={() => history.push("/nfts/recently-sold")}
                  >
                    View all
                  </span>
                </div>
              </div>

              {!loading ? (
                <div className="row">
                  {list.length > 0 ? (
                    <NFTMore nftList={list} hideTitle recentSold />
                  ) : (
                    <div className="col-12 text-center">
                      <h3 className="my-3">No Records Found!</h3>
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

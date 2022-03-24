import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import { Dropdown } from "react-bootstrap";
import { BiCaretDown } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { topBuyerApi } from "../../api/methods";
import Buyer from "./buyer";
import userImage from "../../images/artist-image.png";
import "./style.scss";

const TopBuyers = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filter, setFilter] = useState({
    timeFormat: [
      {
        name: "This Day",
        value: "day",
        checked: false,
      },
      {
        name: "This Week",
        value: "week",
        checked: false,
      },
      {
        name: "This Month",
        value: "month",
        checked: true,
      },
    ],
  });

  useEffect(() => {
    topBuyers();
  }, []);

  const topBuyers = async (timeFormat = "month") => {
    try {
      setLoading(true);
      let response = await topBuyerApi({ page: 1, time_format: timeFormat });
      setList(response.data.data.users);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const TimeFormatDropdown = React.forwardRef(({ onClick }, ref) => (
    <div
      className="filter-drop-sort-btn"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {filter.timeFormat.find((obj) => obj.checked === true)?.name
        ? filter.timeFormat.find((obj) => obj.checked === true).name
        : "Filter By"}{" "}
      <BiCaretDown className="mb-1" />
    </div>
  ));

  const handleTimeFormat = (input) => {
    const info = { ...filter };
    const index = info.timeFormat.findIndex((obj) => obj.value === input.value);
    for (let xx = 0; xx < info.timeFormat.length; xx++) {
      info.timeFormat[xx].checked = false;
    }
    info.timeFormat[index] = {
      ...info.timeFormat[index],
      checked: !info.timeFormat[index].checked,
    };
    setFilter(info);

    const timeFormatType = filter.timeFormat.find(
      (obj) => obj.checked === true
    ).value;
    topBuyers(timeFormatType);
  };

  return (
    <>
      <section className="top-seller-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="sec-heading d-flex align-items-center mb-5 explore-heading">
                <span className="me-4 text-nowrap">Top Buyers</span>
                <span className="d-flex justify-content-between mt-2 w-100 filter-blocks days">
                  <div className="d-flex flex-wrap filter-box">
                    <Dropdown className="me-2">
                      <Dropdown.Toggle
                        align="start"
                        drop="start"
                        as={TimeFormatDropdown}
                      ></Dropdown.Toggle>

                      <Dropdown.Menu align="start">
                        {filter.timeFormat.map((obj, i) => (
                          <Dropdown.Item
                            key={`nft${i}`}
                            as="button"
                            onClick={() => handleTimeFormat(obj)}
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
                </span>
              </div>

              <div className="row">
                {loading ? (
                  <TopBuyerLoader />
                ) : (
                  <>
                    {list.length > 0 ? (
                      list.map((buyer, i) => (
                        <Buyer
                          key={`user-${i}`}
                          index={i}
                          buyer={buyer}
                          image={userImage}
                        />
                      ))
                    ) : (
                      <div className="col-12 text-center">
                        <h3 className="my-3">
                          The Buyers You'll Need To Watch Out For Because Of
                          Their NFT Collections!
                        </h3>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const TopBuyerLoader = (props) => (
  <ContentLoader
    viewBox="0 50 900 100"
    width={"100%"}
    height={"100%"}
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    className="mt-1"
    {...props}
  >
    <rect x="0" y="5" rx="2" ry="2" width="218" height="100" />
    <rect x="228" y="5" rx="2" ry="2" width="218" height="100" />
    <rect x="456" y="5" rx="2" ry="2" width="218" height="100" />
    <rect x="684" y="5" rx="2" ry="2" width="218" height="100" />
  </ContentLoader>
);

export default TopBuyers;

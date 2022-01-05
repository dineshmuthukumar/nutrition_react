import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import ContentLoader from "react-content-loader";
import { FaCheckCircle } from "react-icons/fa";

import NFTCard from "../nft-card";
import { nftShowAllApi } from "../../api/methods";
import cardImage from "../../images/drops/nft_2.png";
import "./style.scss";
import { BiX } from "react-icons/bi";

const ShowAll = () => {
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const [filter, setFilter] = useState({
    category: [
      {
        name: "Madushala",
        value: "madushala",
        checked: false,
      },
      {
        name: "Chakra Art Punks",
        value: "art_punks",
        checked: false,
      },
      {
        name: "BigB Punks",
        value: "bigb_punks",
        checked: false,
      },
    ],
    sale: [
      {
        name: "Bid",
        value: "bid",
        checked: false,
      },
      {
        name: "Buy",
        value: "buy",
        checked: false,
      },
    ],
    nft: [
      {
        name: "ERC721",
        value: "erc721",
        checked: false,
      },
      {
        name: "ERC1155",
        value: "erc1155",
        checked: false,
      },
    ],
  });

  useEffect(() => {
    showAllNFTs(page);
  }, []);

  const showAllNFTs = async (page) => {
    try {
      page === 1 && setLoading(true);
      setLoadingMore(true);
      let response = await nftShowAllApi({ page });
      setList([...list, ...response.data.data.nfts]);
      setHasNext(response.data.data.next_page);
      page === 1 && setLoading(false);
      setLoadingMore(false);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMore = () => {
    if (hasNext) {
      showAllNFTs(page + 1);
      setPage(page + 1);
    }
  };

  const CategoryDropdown = React.forwardRef(({ onClick }, ref) => (
    <div
      className="filter-drop-btn"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      Category
    </div>
  ));

  const SaleTypeDropdown = React.forwardRef(({ onClick }, ref) => (
    <div
      className="filter-drop-btn"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      Sale Type
    </div>
  ));

  const NFTTypeDropdown = React.forwardRef(({ onClick }, ref) => (
    <div
      className="filter-drop-btn"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      NFT Type
    </div>
  ));

  const handleCategoryCheck = (input) => {
    const info = { ...filter };
    const index = info.category.findIndex((obj) => obj.value === input.value);
    info.category[index] = {
      ...info.category[index],
      checked: !info.category[index].checked,
    };
    setFilter(info);
  };

  const handleSaleCheck = (input) => {
    const info = { ...filter };
    const index = info.sale.findIndex((obj) => obj.value === input.value);
    info.sale[index] = {
      ...info.sale[index],
      checked: !info.sale[index].checked,
    };
    setFilter(info);
  };

  const handleNFTCheck = (input) => {
    const info = { ...filter };
    const index = info.nft.findIndex((obj) => obj.value === input.value);
    info.nft[index] = {
      ...info.nft[index],
      checked: !info.nft[index].checked,
    };
    setFilter(info);
  };

  return (
    <>
      <section className="showall-nft-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="sec-heading d-flex align-items-end mb-2">
                <span className="me-4">
                  {!loading ? `Showing All (${list.length})` : <ShowCount />}
                </span>

                <span className="d-flex">
                  <Dropdown className="me-3">
                    <Dropdown.Toggle
                      align="start"
                      drop="start"
                      as={CategoryDropdown}
                    ></Dropdown.Toggle>

                    <Dropdown.Menu align="start">
                      {filter.category.map((obj, i) => (
                        <Dropdown.Item
                          key={`category${i}`}
                          as="button"
                          onClick={() => handleCategoryCheck(obj)}
                        >
                          <FaCheckCircle
                            color={obj.checked ? "green" : "#ccc"}
                            className="mb-1 me-2"
                            size={17}
                          />
                          {obj.name}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="me-3">
                    <Dropdown.Toggle
                      align="start"
                      drop="start"
                      as={SaleTypeDropdown}
                    ></Dropdown.Toggle>

                    <Dropdown.Menu align="start">
                      {filter.sale.map((obj, i) => (
                        <Dropdown.Item
                          key={`sale${i}`}
                          as="button"
                          onClick={() => handleSaleCheck(obj)}
                        >
                          <FaCheckCircle
                            color={obj.checked ? "green" : "#ccc"}
                            className="mb-1 me-2"
                            size={17}
                          />
                          {obj.name}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle
                      align="start"
                      drop="start"
                      as={NFTTypeDropdown}
                    ></Dropdown.Toggle>

                    <Dropdown.Menu align="start">
                      {filter.nft.map((obj, i) => (
                        <Dropdown.Item
                          key={`nft${i}`}
                          as="button"
                          onClick={() => handleNFTCheck(obj)}
                        >
                          <FaCheckCircle
                            color={obj.checked ? "green" : "#ccc"}
                            className="mb-1 me-2"
                            size={17}
                          />
                          {obj.name}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
              </div>

              <div className="mt-4 mb-4 d-flex">
                {filter.category
                  .filter((xx) => xx.checked === true)
                  .map((obj, i) => (
                    <div key={`filter-pill${i}`} className="filter-pill-button">
                      <div className="first">{obj.name}</div>
                      <div className="last">
                        <BiX
                          role="button"
                          size={20}
                          onClick={() => handleCategoryCheck(obj)}
                        />
                      </div>
                    </div>
                  ))}

                {filter.sale
                  .filter((xx) => xx.checked === true)
                  .map((obj, i) => (
                    <div key={`filter-pill${i}`} className="filter-pill-button">
                      <div className="first">{obj.name}</div>
                      <div className="last">
                        <BiX
                          role="button"
                          size={20}
                          onClick={() => handleSaleCheck(obj)}
                        />
                      </div>
                    </div>
                  ))}

                {filter.nft
                  .filter((xx) => xx.checked === true)
                  .map((obj, i) => (
                    <div key={`filter-pill${i}`} className="filter-pill-button">
                      <div className="first">{obj.name}</div>
                      <div className="last">
                        <BiX
                          role="button"
                          size={20}
                          onClick={() => handleNFTCheck(obj)}
                        />
                      </div>
                    </div>
                  ))}
              </div>

              {!loading ? (
                <div className="row">
                  {list.length > 0
                    ? list.map((nft, i) => (
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                          <NFTCard nft={nft} key={i} image={cardImage} />
                        </div>
                      ))
                    : "No Data Found!"}

                  {!loading && loadingMore && <NFTCardLoader />}

                  {hasNext && (
                    <div className="row mb-5">
                      <div className="col-md-12 text-center">
                        <button
                          className="load_more"
                          disabled={loadingMore}
                          onClick={fetchMore}
                        >
                          {loadingMore ? "Loading..." : "Load More"}
                        </button>
                      </div>
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
    viewBox="0 50 900 400"
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

const ShowCount = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={50}
    viewBox="0 0 300 50"
    backgroundColor="#d9d9d9"
    foregroundColor="#ededed"
    {...props}
  >
    <rect x="0" y="6" rx="0" ry="0" width="343" height="38" />
  </ContentLoader>
);

export default ShowAll;

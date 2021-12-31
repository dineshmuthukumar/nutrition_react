import React, { useEffect, useState } from "react";
import NFTCard from "../nft-card";
import { toast } from "react-toastify";
import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import cardImage from "../../images/drops/nft_2.png";
import { hotNFTsApi } from "../../api/methods";
import "./style.scss";

const HotCollections = () => {
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);

  useEffect(() => {
    hotNFTList(page);
  }, []);

  const hotNFTList = async (page) => {
    try {
      setLoading(true);
      let response = await hotNFTsApi({ page });
      setList([...list, ...response.data.data.nfts]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      {console.log(list, "list")}
      <section className="hot-collection-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="sec-heading">
                Hot Collections
                <div className="carousel-btn-box">
                  <a className="carousel-btn">
                    <VscChevronLeft />
                  </a>
                  <a className="carousel-btn">
                    <VscChevronRight />
                  </a>
                </div>
              </h1>
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-sm-6">
                  <NFTCard image={cardImage} />
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                  <NFTCard image={cardImage} />
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                  <NFTCard image={cardImage} />
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                  <NFTCard image={cardImage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotCollections;

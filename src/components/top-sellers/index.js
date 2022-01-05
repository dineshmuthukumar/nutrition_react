import React, { useEffect, useState } from "react";
import Seller from "./seller";
import "./style.scss";
import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import userImage from "../../images/artist-image.png";
import { topSellersApi } from "../../api/methods";

const TopSellers = () => {
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    topSellers(page);
  }, []);

  const topSellers = async (page) => {
    try {
      setLoading(true);
      let response = await topSellersApi({ page, time_format: "month" });
      setList([...list, ...response.data.data.users]);
      setHasNext(response.data.data.next_page);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMore = () => {
    if (hasNext) {
      setLoadingMore(true);
      topSellers(page + 1);
      setPage(page + 1);
      setLoadingMore(false);
    }
  };

  return (
    <>
      <section className="top-seller-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="sec-heading">Top Sellers</h1>
              <div className="row">
                {list.length > 0 ? (
                  list.map((seller, i) => (
                    <Seller
                      key={`user-${i}`}
                      index={i}
                      seller={seller}
                      image={userImage}
                    />
                  ))
                ) : (
                  <div className="col-12 text-center">
                    <h3 className="my-3">No Data Found!</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopSellers;

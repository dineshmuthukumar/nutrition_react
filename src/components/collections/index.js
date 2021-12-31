import React, { useEffect, useState } from "react";
import "./style.scss";
import CollectionCard from "./collection-card";
import cardImage from "../../images/drops/nft_2.png";
import { nftCategoriesApi } from "../../api/methods";
import { toast } from "react-toastify";

const Collections = () => {
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    categoriesList(page);
  }, []);

  const categoriesList = async (page) => {
    try {
      setLoading(true);
      let response = await nftCategoriesApi({ page });
      setList([...list, ...response.data.data.categories]);
      setHasNext(response.data.data.next_page);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMore = () => {
    if (hasNext) {
      setLoadingMore(true);
      categoriesList(page + 1);
      setPage(page + 1);
      setLoadingMore(false);
    }
  };

  return (
    <>
      <section className="collection-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="sec-heading">Collections</h1>
              <div className="row">
                {list.map((category) => (
                  <CollectionCard
                    key={category.slug}
                    category={category}
                    image={cardImage}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collections;

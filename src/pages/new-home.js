import React, { useState, useEffect } from "react";
import { List } from "react-content-loader";
import Header from "../components/header";
import { nftCategoriesApi } from "../api/methods";
import toaster from "../utils/toaster";
import NFTList from "./../components/nft-list";
// import NewDrops from "../components/new-drops";
import NewDropsTemp from "./../components/new-drops-temp/index";

const NewHome = () => {
  const [list, setList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState({ page: 1 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    nftCategories(page);
  }, []);

  const nftCategories = async (page) => {
    try {
      setLoading(true);
      let response = await nftCategoriesApi(page);
      setCategories(response.data.data.categories);
      setLoading(false);
    } catch (err) {
      console.log(err);
      toaster(500, "Something went wrong");
    }
  };

  return (
    <>
      <Header hideSign />
      {/* <NewDrops categories={categories} /> */}
      <NewDropsTemp categories={categories} />

      {/* {!loading ? <NFTList data={list} /> : <ThreeColumnLoader />} */}
      {/* <div className="container">
        <h1 className="text-center mt-5 mb-5">
          Never miss a drop. Sign up now!
        </h1>
        {
          !loading ? <div className="row">
            {list.map((nft) => (
              <div className="col-12 col-sm-6 col-md-4" key={nft.slug}>
                <ClientCard
                  title={nft.name}
                  desc={nft.description}
                  nftId={nft.slug}
                  nftType={nft.nft_type}
                  imgUrl={
                    "https://i.pinimg.com/originals/93/2a/88/932a88d96ca31d447044a8041bf8d100.png"
                  }
                />
              </div>
            ))}
          </div> : <ThreeColumnLoader />
        }
      </div> */}
    </>
  );
};

const ThreeColumnLoader = () => {
  return (
    <div className="row">
      <div className="col-12 col-sm-6 col-md-4">
        <List height={100} />
      </div>
      <div className="col-12 col-sm-6 col-md-4">
        <List height={100} />
      </div>
      <div className="col-12 col-sm-6 col-md-4">
        <List height={100} />
      </div>
    </div>
  );
};

export default NewHome;

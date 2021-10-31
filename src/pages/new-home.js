import React, { useState, useEffect } from "react";
import Header from "../components/header";

import NewDropsTemp2 from "../components/new-drops-temp2";
import toaster from "../utils/toaster";
import { nftCategoriesApi } from "../api/methods";

const NewHome = () => {
  const [categories, setCategories] = useState([]);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    nftCategories(1);
  }, []);

  const nftCategories = async (page) => {
    try {
      let response = await nftCategoriesApi(page);
      setCategories(response.data.data.categories);
    } catch (err) {
      console.log(err);
      toaster(500, "Something went wrong");
    }
  };

  return (
    <>
      <Header started={started} />
      <NewDropsTemp2
        categories={categories}
        started={started}
        setStarted={setStarted}
      />
      {/* <NewDropsTemp2 categories={categories} /> */}

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

export default NewHome;

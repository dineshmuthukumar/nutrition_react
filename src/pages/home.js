import React, { useState, useEffect } from "react";
import { List } from 'react-content-loader';
import Header from "../components/header";
import ClientCard from "./../components/clientcard";
import { nftListApi } from "../api/methods";
import toaster from "../utils/toaster";

const Home = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState({ page: 1 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    nftList(page);
  }, []);

  const nftList = async (page) => {
    try {
      let response = await nftListApi(page);
      setList(response.data.data.nfts);
      setLoading(false);
    } catch (err) {
      console.log(err);
      toaster(500, "Something went wrong");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="text-center mt-5 mb-5">
          Never miss a drop. Sign up now!
        </h1>
        {
          !loading ? <div className="row">
            {list.map((nft) => (
              <div className="col-12 col-sm-6 col-md-4" key={nft.id}>
                <ClientCard
                  title={nft.name}
                  desc={nft.description}
                  nftId={nft.id}
                  imgUrl={
                    "https://i.pinimg.com/originals/93/2a/88/932a88d96ca31d447044a8041bf8d100.png"
                  }
                />
              </div>
            ))}
          </div> : <ThreeColumnLoader />
        }
      </div>
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

export default Home;

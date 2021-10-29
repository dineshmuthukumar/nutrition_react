import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import NFTMedia from "../components/nft-media";
import NFTLootBaseDetails from "../components/nft-loot-basic-details";
import NFTLootBuy from "../components/nft-loot-buy";
import { NFTLoader } from "../components/nft-basic-details/content-loader";
import { nftCategoryDetailApi } from "../api/methods";
import NFTLootMedia from "../components/nft-loot-media";
import { toast } from "react-toastify";

const Loot = () => {
  const { slug } = useParams();
  const [nft, setNft] = useState({});
  const [category, setCategory] = useState({});
  const [auctionEndTime, setAuctionEndTime] = useState("");
  const [bidWinner, setBidWinner] = useState(null);
  const [erc721, setErc721] = useState(false);
  const [isAuctionStarted, setIsAuctionStarted] = useState(false);
  const [isAuctionEnded, setIsAuctionEnded] = useState(false);
  const [soldOut, setSoldOut] = useState(false);
  const [loader, setLoader] = useState(true);
  const [lootBuyPop, setLootBuyPop] = useState(false);

  useEffect(() => {
    nftCategoryDetail(slug);
  }, []);

  const nftCategoryDetail = async (slug) => {
    try {
      setLoader(true);
      let response = await nftCategoryDetailApi({ slug: slug });
      setCategory(response.data.data.category);
      const loot = response.data.data.category.category_detail;
      setAuctionEndTime(loot.auction_end_time);
      setIsAuctionStarted(
        new Date().getTime() >= new Date(loot.auction_start_time).getTime()
      );
      setIsAuctionEnded(
        new Date().getTime() > new Date(loot.auction_end_time).getTime()
      );
      setLoader(false);
    } catch (err) {
      setLoader(false);
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  const handleAuctionStartTimer = () => {
    setIsAuctionStarted(true);
  };
  const handleAuctionEndTimer = () => {
    setIsAuctionEnded(true);
  };

  return (
    <>
      <Header />
      {loader ? (
        <NFTLoader />
      ) : (
        <div className="container-fluid">
          <div className="bid_section_wrapper">
            <div className="row fit-to-height">
              <div className="col-12 col-lg-7">
                <NFTLootMedia />
              </div>
              <div className="col-12 col-lg-5">
                <NFTLootBaseDetails
                  category={category}
                  lootBuyPop={lootBuyPop}
                  setLootBuyPop={setLootBuyPop}
                  isAuctionStarted={isAuctionStarted}
                  isAuctionEnded={isAuctionEnded}
                  auctionEndTime={auctionEndTime}
                  soldOut={soldOut}
                  handleAuctionStartTimer={handleAuctionStartTimer}
                  handleAuctionEndTimer={handleAuctionEndTimer}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loot;
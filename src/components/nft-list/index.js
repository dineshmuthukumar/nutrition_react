import React from "react";
import NFTDrops from "../nft-drops";
import goBtn from "../../images/arrow.svg";
import "./style.scss";

const NFTList = ({ data = [] }) => {
  return (
    <div class="bl_drop_wrapper">
      <div class="container-fluid">
        {data.map((nft) => (
          <NFTDrops
            title={nft.name}
            desc={nft.description}
            nftId={nft.slug}
            nftType={nft.nft_type}
          />
        ))}
      </div>
      <div class="container-fluid mt-5 mb-5">
        <div class="row mt-5 justify-content-center">
          <div class="col-md-9">
            <div class="nbl_newsletter">
              <div class="nbl_newsletter_form">
                <h2>Don't miss out on the featured Drops</h2>
                <form>
                  <input
                    type="text"
                    name="email"
                    placeholder="name@email.com"
                  />
                  <button type="button">
                    <img src={goBtn} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTList;

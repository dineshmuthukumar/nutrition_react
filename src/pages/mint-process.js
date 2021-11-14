import React from "react";
import { FiSettings } from "react-icons/fi";

const MintProcess = () => {
  return (
    <>
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col">
            <div className="w-75 m-auto">
              <div className="form-group text-center">
                <div>
                  <FiSettings size={70} />
                </div>

                <div className="mt-2 not-found-text">
                  We are almost there! We are gathering and inventorizing your
                  Loot and Other items. We will let you know as soon as you can
                  collect your rightful NFTs from our very first drop.
                  <br /> Thank you for being part of NFT history in India!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MintProcess;

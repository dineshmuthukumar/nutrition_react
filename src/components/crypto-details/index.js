import React, { useState } from "react";
import CopyToClipboardComponent from "./../copy-to-clipboard";
import QRCode from "react-qr-code";

const CryptoDetails = () => {
  return (
    <>
      <div className="bg-white mt-3 p-5 rounded">
        <div className="d-flex justify-content-between">
          <div>
            <h4> Balance </h4>
          </div>
          <div>
            <h4>
              2000 <span className="text-secondary">ETH</span>
            </h4>
          </div>
        </div>
      </div>
      <div className="bg-white mt-3 p-5 rounded">
        <h4> Crypto Wallet Details </h4>
        <small>Manage your crypto curriencies here</small>

        <div className="row">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="mt-3 mb-4">
              <label>DO NOT SEND NIFTIES TO THIS ADDRESS</label>
              <div>
                <CopyToClipboardComponent copyText="0x4430b3230294D12c6AB2aAC5C2cd80B16b581" />
              </div>
              <small className="text-secondary">
                (New deposits will be credited after 6 confirmations)
              </small>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-6 text-center">
            <div>
              <QRCode value="0x4430b3230294D12c6AB2aAC5C2cd80B16b581" />,
            </div>
            <small className="text-secondary font-10">
              0x4430b3230294D12c6AB2aAC5C2cd80B16b581
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoDetails;

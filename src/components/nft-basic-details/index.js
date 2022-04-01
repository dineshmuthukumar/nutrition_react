import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ReadMoreReact from "read-more-react";
import { useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import _ from "lodash";

import BidValue from "../bid-value";
import ToolTip from "../tooltip";
import NFTPutOnSale from "../nft-put-on-sale";
import { ReactComponent as DiscordSvg } from "./../../icons/discord_logo.svg";

import "./style.scss";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { calculateTimeLeft } from "../../utils/common";

const NFTBaseDetails = ({
  nft,
  putOnSalePop,
  setPutOnSalePop,
  isQuantityAvailable,
  ownerOrdersList,
  owners,
}) => {
  const history = useHistory();
  const state = useSelector((state) => state.user);

  const { user } = state.data;

  const erc721 = nft.nft_type === "erc721";
  const isOwner = _.has(nft, "owner_details");
  const availableQuantity = _.get(nft, "owner_details.available_quantity", 0);

  const { days, hours, minutes, seconds } = calculateTimeLeft(nft.launch_time);

  var rem_text = "";

  if (days > 0) {
    rem_text += days + "d ";
  }
  if (hours > 0) {
    rem_text += hours + "h ";
  }
  if (minutes > 0) {
    rem_text += minutes + "m ";
  }

  const popover = () => (
    <Popover>
      <Popover.Body>
        <p className="password-terms">
          Your NFT will be available to be listed for sale in <b>{rem_text}</b>
        </p>
      </Popover.Body>
    </Popover>
  );

  const KycPopOver = () => (
    <Popover>
      <Popover.Body>
        <p className="password-terms">
          Please complete your KYC process to be eligible for listing NFTs for
          sale.
        </p>
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <div className="creator mt-3">
        <span
          className="link"
          onClick={() => {
            if (
              nft.celebrity_id ===
              parseInt(process.env.REACT_APP_HINDUSTAN_TIMES_ID)
            ) {
              return history.push(`/hindustan-times-NFT`);
            } else if (
              nft.celebrity_id ===
              parseInt(process.env.REACT_APP_KALPANA_CHAWLA_ID)
            ) {
              return history.push(`/kalpana-chawla-NFT`);
            } else if (
              nft.celebrity_id === parseInt(process.env.REACT_APP_LATIMES_ID)
            ) {
              return history.push(`/latimes-NFT`);
            } else {
              return history.push(`/explore/category/${nft?.category_slug}`);
            }
          }}
        >
          {nft.category_name}
        </span>{" "}
        | {nft?.celebrity_name} Exclusive NFTs
        <ToolTip
          icon={<FaCheckCircle size={16} className="ms-2 check-icon" />}
          content="Verified Artist"
          placement="right"
        />
      </div>
      <div className="nft-title-container">
        <div className="nft-title">{nft.name}</div>

        <ToolTip
          icon={
            <div
              className="discord"
              onClick={() =>
                window.open("https://discord.com/invite/87s8ReJ5FA", "_blank")
              }
            >
              {/* <div className="count">22</div> */}
              <DiscordSvg />
            </div>
          }
          content="View this NFT bid's discord server"
          placement="left"
        />
      </div>
      <p className="text-secondary mt-1 mb-5 nft-desc">
        {nft.description && (
          <ReadMoreReact
            min={200}
            ideal={200}
            max={560}
            text={nft.description}
          />
        )}
      </p>

      <div className="bottom-content">
        {erc721 && owners.length > 0 && (
          <>
            <div className="d-flex">
              <BidValue
                title="Owned By"
                avatar={owners[0].avatar_url}
                name={owners[0].user_name}
                userSlug={owners[0].slug}
                seller={true}
                owner={owners[0]}
                isEnd
              />
            </div>
            <hr className="custom-divider" />
          </>
        )}

        <div className="d-flex">
          <BidValue title="Category" value={nft.category_name} />
        </div>
        <hr className="custom-divider" />
        <div className="d-flex">
          {(() => {
            if (erc721 && isOwner) {
              return (
                <BidValue
                  title="You Own"
                  value="1 of 1"
                  isLeft
                  isOwner={isOwner}
                />
              );
            } else if (erc721 && !isOwner) {
              return <BidValue title="Limited Edition" value="1 of 1" isLeft />;
            } else if (!erc721 && isOwner) {
              return (
                <BidValue
                  title="You Own"
                  value={`${_.get(nft, "owner_details.total_quantity")} / ${
                    nft.total_quantity
                  }`}
                  isOwner
                />
              );
            } else {
              return <BidValue title="Edition(s)" value={nft.total_quantity} />;
            }
          })()}
        </div>
        <hr className="custom-divider" />

        <div className="text-center">
          <NFTPutOnSale
            nft={nft}
            putOnSalePop={putOnSalePop}
            setPutOnSalePop={setPutOnSalePop}
            isQuantityAvailable={isQuantityAvailable}
          />

          {(() => {
            if (!user) {
              return (
                <button
                  disabled={false}
                  className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                  onClick={() =>
                    window.open(
                      `${process.env.REACT_APP_ACCOUNTS_URL}/signin?redirect=${window.location.href}`,
                      "_self"
                    )
                  }
                >
                  Sign In
                </button>
              );
            } else if (isOwner && ownerOrdersList.length === 0) {
              return user?.kyc_status !== "success" ? (
                <OverlayTrigger
                  trigger={["click"]}
                  rootClose={true}
                  placement="top"
                  overlay={KycPopOver()}
                >
                  <button
                    disabled={false}
                    className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                  >
                    List for sale
                  </button>
                </OverlayTrigger>
              ) : days === 0 &&
                hours === 0 &&
                minutes === 0 &&
                seconds < 0.2 ? (
                <button
                  disabled={false}
                  className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                  onClick={() => setPutOnSalePop(!putOnSalePop)}
                >
                  List for sale
                </button>
              ) : (
                <OverlayTrigger
                  trigger={["click"]}
                  rootClose={true}
                  placement="top"
                  overlay={popover()}
                >
                  <button
                    disabled={false}
                    className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                  >
                    List for sale
                  </button>
                </OverlayTrigger>
              );
            } else if (isOwner && ownerOrdersList.length > 0) {
              if (isQuantityAvailable != null && isQuantityAvailable > 0) {
                return user?.kyc_status !== "success" ? (
                  <OverlayTrigger
                    trigger={["click"]}
                    rootClose={true}
                    placement="top"
                    overlay={KycPopOver()}
                  >
                    <button
                      disabled={false}
                      className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                    >
                      {erc721
                        ? "List for sale"
                        : `List for sale (${
                            isQuantityAvailable
                              ? isQuantityAvailable
                              : availableQuantity
                          })`}
                    </button>
                  </OverlayTrigger>
                ) : days === 0 &&
                  hours === 0 &&
                  minutes === 0 &&
                  seconds < 0.2 ? (
                  <button
                    disabled={false}
                    className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                    onClick={() => setPutOnSalePop(!putOnSalePop)}
                  >
                    {erc721
                      ? "List for sale"
                      : `List for sale (${
                          isQuantityAvailable
                            ? isQuantityAvailable
                            : availableQuantity
                        })`}
                  </button>
                ) : (
                  <OverlayTrigger
                    trigger={["click"]}
                    rootClose={true}
                    placement="top"
                    overlay={popover()}
                  >
                    <button
                      disabled={false}
                      className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                    >
                      {erc721
                        ? "List for sale"
                        : `List for sale (${
                            isQuantityAvailable
                              ? isQuantityAvailable
                              : availableQuantity
                          })`}
                    </button>
                  </OverlayTrigger>
                );
              } else {
                return (
                  <button
                    disabled={true}
                    className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                  >
                    Listed on sale
                  </button>
                );
              }
            }
          })()}
        </div>
      </div>
    </>
  );
};

export default NFTBaseDetails;

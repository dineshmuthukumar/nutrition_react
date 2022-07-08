import React from "react";
import dayjs from "dayjs";
import { useHistory } from "react-router-dom";

import { currencyFormat } from "../../utils/common";

import "./style.scss";

const UpgradeCard = ({ nft, history, isEnd = false }) => {
  const routeHistory = useHistory();
  console.log(isEnd, "isEnd");
  //const { user } = useSelector((state) => state.user.data);

  return (
    <div className="bid-histroy-card">
      {isEnd ? (
        <div className="history-end-content">No upgrades yet .</div>
      ) : (
        <>
          <div className="first-half full-width">
            <div className="bid-histoy-details">
              <div className="time text-secondary">
                Upgraded on :{" "}
                {dayjs(history?.transfered_at).format("MMM D, YYYY hh:mm A")}
              </div>
              <div className="bid-owner">
                <span
                  className="transaction-value text-secondary"
                  role={"button"}
                  onClick={() =>
                    routeHistory.push(`/user/${history?.user_slug}/details`)
                  }
                >
                  {history?.user_name}
                </span>
                &nbsp;has upgraded this NFT from&nbsp; Level{" "}
                {history?.from_level} to Level {history?.to_level}
                {(() => {
                  if (history?.payment_type === "assert") {
                    return (
                      <>
                        &nbsp;for&nbsp;
                        <span className="transaction-value">
                          {parseFloat(history?.buy_value).toFixed(2)}
                          {" JT Points  "}
                        </span>{" "}
                      </>
                    );
                  } else {
                    return (
                      <>
                        &nbsp;for&nbsp;
                        <span className="transaction-value">
                          {currencyFormat(history.buy_value, "USD")}
                        </span>
                      </>
                    );
                  }
                })()}
                &nbsp;
                {`using ${history?.used_cards} upgrade cards`}
              </div>
            </div>
          </div>
          {/* <div className="second-half">
            <div className="bid-value">
              {currencyFormat(history.total_amount, "USD")}
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default UpgradeCard;

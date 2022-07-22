import React from "react";

import arrowYellow from "../../images/jump-trade/cups/yellow-arrows.png";
import GoldCup from "../../images/jump-trade/cups/gold-cup.svg";
import SilverCup from "../../images/jump-trade/cups/silver-cup.svg";
import BronzeCup from "../../images/jump-trade/cups/bronze-cup.svg";
import Crown from "../../images/jump-trade/cups/crown.svg";
import CricketBat from "../../images/jump-trade/cups/cricket-bat.svg";

import Points from "../../images/jump-trade/cups/points.svg";
import JTIcon from "../../images/jump-trade/cups/jt-icon.svg";
import DollarIcon from "../../images/jump-trade/cups/dollar.svg";

import LeaderboardBG from "../../images/leaderboard-banner.png";

import "./style.scss";

const LeaderBoard = () => {
  return (
    <>
      <section className="leader-board-block">
        <article className="leader-board-section">
          {/* <img src={LeaderboardBG} /> */}
          <div className="leader-board-header">
            <h2>LEADERBOARD</h2>
            <p>
              The Meta Cricket League Brings You The Vibrance, Energy, &amp;
              Awesomeness Of Cricket In The Meta-Realm.
            </p>
            <img src={arrowYellow} className="yellow-arrow" />
          </div>
        </article>
        <article className="leader-board-table-section">
          <div className="header-block">
            <div className="dropdown-block"></div>
            <div className="timer-block">
              <h5>
                <span>START TIME </span> 13/07/2022 18:00:00
              </h5>
              <h5>
                <span>END TIME </span> 13/07/2022 20:00:00
              </h5>
            </div>
          </div>
          <div className="point-block">
            <div className="topper-box">
              <img src={GoldCup} />
              <h3>
                <span>25000</span> JT points
              </h3>
            </div>
            <div className="topper-box">
              <img src={SilverCup} />
              <h3>
                <span>25000</span> JT points
              </h3>
            </div>
            <div className="topper-box">
              <img src={BronzeCup} />
              <h3>
                <span>25000</span> JT points
              </h3>
            </div>
          </div>
          <div className="jt-table-block">
            <div className="jt-table-header">
              <div className="jt-table-row hidemobileHeader">
                <div className="positionName-box">
                  <div className="position-boxes">Position</div>
                  <div className="name-boxes">Player</div>
                </div>
                <div className="pointsPrice-box">
                  <div className="point-boxes">
                    <img src={Points} />
                  </div>
                  <div className="jtpoint-boxes">
                    <img src={JTIcon} />
                  </div>
                  <div className="price-boxes">
                    <img src={DollarIcon} />
                  </div>
                </div>
              </div>
              <h4 className="mobile-header-title">Top 10 Players</h4>
            </div>
            <div className="jt-table-body">
              <div className="jt-table-row first-rank">
                <div className="positionName-box">
                  <div className="position-boxes">
                    <div>
                      <img src={GoldCup} alt="cricket-bat" />
                      <h5>
                        1 <sup>st</sup>
                      </h5>
                    </div>
                  </div>
                  <div className="name-boxes">
                    <div>
                      <img src={JTIcon} alt="cricket-bat" />
                      <h5>JAVEEDHHUSSAIN</h5>
                    </div>
                  </div>
                </div>
                <div className="pointsPrice-box">
                  <div className="point-boxes">
                    <img src={Points} />
                    <h5>50003411</h5>
                  </div>
                  <div className="jtpoint-boxes">
                    <img src={JTIcon} />
                    <h5>50003411</h5>
                  </div>
                  <div className="price-boxes">
                    <img src={DollarIcon} />
                    <h5>50003411</h5>
                  </div>
                </div>
              </div>
              <div className="jt-table-row second-rank">
                <div className="positionName-box">
                  <div className="position-boxes">
                    <div>
                      <img src={SilverCup} alt="Silver-cup" />
                      <h5>
                        2 <sup>nd</sup>
                      </h5>
                    </div>
                  </div>
                  <div className="name-boxes">
                    <div>
                      <img src={JTIcon} alt="cricket-bat" />
                      <h5>JAVEEDHHUSSAIN</h5>
                    </div>
                  </div>
                </div>
                <div className="pointsPrice-box">
                  <div className="point-boxes">
                    <img src={Points} />
                    <h5>50003411</h5>
                  </div>
                  <div className="jtpoint-boxes">
                    <img src={JTIcon} />
                    <h5>50003411</h5>
                  </div>
                  <div className="price-boxes">
                    <img src={DollarIcon} />
                    <h5>50003411</h5>
                  </div>
                </div>
              </div>
              <div className="jt-table-row third-rank">
                <div className="positionName-box">
                  <div className="position-boxes">
                    <div>
                      <img src={BronzeCup} alt="Bronze-cup" />
                      <h5>
                        3 <sup>rd</sup>
                      </h5>
                    </div>
                  </div>
                  <div className="name-boxes">
                    <div>
                      <img src={JTIcon} alt="cricket-bat" />
                      <h5>JAVEEDHHUSSAIN</h5>
                    </div>
                  </div>
                </div>
                <div className="pointsPrice-box">
                  <div className="point-boxes">
                    <img src={Points} />
                    <h5>50003411</h5>
                  </div>
                  <div className="jtpoint-boxes">
                    <img src={JTIcon} />
                    <h5>50003411</h5>
                  </div>
                  <div className="price-boxes">
                    <img src={DollarIcon} />
                    <h5>50003411</h5>
                  </div>
                </div>
              </div>

              <div className="jt-table-row">
                <div className="positionName-box">
                  <div className="position-boxes">
                    <div>
                      <img src={Crown} alt="Crown" />
                      <h5>
                        4 <sup>th</sup>
                      </h5>
                    </div>
                  </div>
                  <div className="name-boxes">
                    <div>
                      <img src={JTIcon} alt="cricket-bat" />
                      <h5>JAVEEDHHUSSAIN</h5>
                    </div>
                  </div>
                </div>
                <div className="pointsPrice-box">
                  <div className="point-boxes">
                    <img src={Points} />
                    <h5>50003411</h5>
                  </div>
                  <div className="jtpoint-boxes">
                    <img src={JTIcon} />
                    <h5>50003411</h5>
                  </div>
                  <div className="price-boxes">
                    <img src={DollarIcon} />
                    <h5>50003411</h5>
                  </div>
                </div>
              </div>
              <div className="jt-table-row">
                <div className="positionName-box">
                  <div className="position-boxes">
                    <div>
                      <img src={Crown} alt="Crown" />
                      <h5>
                        5 <sup>th</sup>
                      </h5>
                    </div>
                  </div>
                  <div className="name-boxes">
                    <div>
                      <img src={JTIcon} alt="cricket-bat" />
                      <h5>JAVEEDHHUSSAIN</h5>
                    </div>
                  </div>
                </div>
                <div className="pointsPrice-box">
                  <div className="point-boxes">
                    <img src={Points} />
                    <h5>50003411</h5>
                  </div>
                  <div className="jtpoint-boxes">
                    <img src={JTIcon} />
                    <h5>50003411</h5>
                  </div>
                  <div className="price-boxes">
                    <img src={DollarIcon} />
                    <h5>50003411</h5>
                  </div>
                </div>
              </div>
              <div className="jt-table-row">
                <div className="positionName-box">
                  <div className="position-boxes">
                    <div>
                      <img src={Crown} alt="Crown" />
                      <h5>
                        6 <sup>th</sup>
                      </h5>
                    </div>
                  </div>
                  <div className="name-boxes">
                    <div>
                      <img src={JTIcon} alt="cricket-bat" />
                      <h5>JAVEEDHHUSSAIN</h5>
                    </div>
                  </div>
                </div>
                <div className="pointsPrice-box">
                  <div className="point-boxes">
                    <img src={Points} />
                    <h5>50003411</h5>
                  </div>
                  <div className="jtpoint-boxes">
                    <img src={JTIcon} />
                    <h5>50003411</h5>
                  </div>
                  <div className="price-boxes">
                    <img src={DollarIcon} />
                    <h5>50003411</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="jt-table-footer ">
              <div className="jt-table-row my-ranking">
                <div className="positionName-box">
                  <div className="position-boxes">
                    <div>
                      <img src={CricketBat} alt="cricket-bat" />
                      <h5>
                        30 <sup>th</sup>
                      </h5>
                    </div>
                  </div>
                  <div className="name-boxes">
                    <div>
                      <img src={JTIcon} alt="cricket-bat" />
                      <h5>JAVEEDHHUSSAIN</h5>
                    </div>
                  </div>
                </div>
                <div className="pointsPrice-box">
                  <div className="point-boxes">
                    <img src={Points} />
                    <h5>50003411</h5>
                  </div>
                  <div className="jtpoint-boxes">
                    <img src={JTIcon} />
                    <h5>50003411</h5>
                  </div>
                  <div className="price-boxes">
                    <img src={DollarIcon} />
                    <h5>50003411</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default LeaderBoard;

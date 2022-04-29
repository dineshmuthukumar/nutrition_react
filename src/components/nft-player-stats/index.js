import React from "react";

import lvl001 from "../../images/jump-trade/player_levels/1.png";
import lvl002 from "../../images/jump-trade/player_levels/2.png";
import lvl003 from "../../images/jump-trade/player_levels/3.png";
import lvl004 from "../../images/jump-trade/player_levels/4.png";
import lvl005 from "../../images/jump-trade/player_levels/5.png";
import lvl006 from "../../images/jump-trade/player_levels/6.png";
import lvl007 from "../../images/jump-trade/player_levels/7.png";
import lvl008 from "../../images/jump-trade/player_levels/8.png";
import lvl009 from "../../images/jump-trade/player_levels/9.png";
import lvl0010 from "../../images/jump-trade/player_levels/10.png";
import lvl0011 from "../../images/jump-trade/player_levels/11.png";
import lvl0012 from "../../images/jump-trade/player_levels/12.png";
import lvl0013 from "../../images/jump-trade/player_levels/13.png";
import lvl0014 from "../../images/jump-trade/player_levels/14.png";
import lvl0015 from "../../images/jump-trade/player_levels/15.png";

import playerstatsBG from "../../images/jump-trade/playerstatsBG.png";
import playerstatsinnerBG from "../../images/jump-trade/playerstatsinnerBG.png";

import "./style.scss";

const NFTPlayerStats = ({ stats = [], core }) => {
  const level = [
    {
      type: "1",
      name: "LVL 1",
      value: lvl001,
    },
    {
      type: "2",
      name: "LVL 2",
      value: lvl002,
    },
    {
      type: "3",
      name: "LVL 3",
      value: lvl003,
    },
    {
      type: "4",
      name: "LVL 4",
      value: lvl004,
    },
    {
      type: "5",
      name: "LVL 5",
      value: lvl005,
    },
    {
      type: "6",
      name: "LVL 6",
      value: lvl006,
    },
    {
      type: "7",
      name: "LVL 7",
      value: lvl007,
    },
    {
      type: "8",
      name: "LVL 8",
      value: lvl008,
    },
    {
      type: "9",
      name: "LVL 9",
      value: lvl009,
    },
    {
      type: "10",
      name: "LVL 10",
      value: lvl0010,
    },
    {
      type: "11",
      name: "LVL 11",
      value: lvl0011,
    },
    {
      type: "12",
      name: "LVL 12",
      value: lvl0012,
    },
    {
      type: "13",
      name: "LVL 13",
      value: lvl0013,
    },
    {
      type: "14",
      name: "LVL 14",
      value: lvl0014,
    },
    {
      type: "15",
      name: "LVL 15",
      value: lvl0015,
    },
  ];
  const data = level.find((obj) => obj.type === core?.level);

  return (
    <section className="player-stats">
      {data && (
        <div className="heading-block">
          <h3>Player stats</h3>
          {core?.role === "Batsman" && (
            <div className="perf-hint">
              Batsman performance against different bowler type
            </div>
          )}
          <div className="player-level">
            <h6>{data.name}</h6>
            <img src={data.value} />
          </div>
        </div>
      )}

      <div className="player-stats-list">
        <ul>
          {stats.map((stat, i) => (
            <li key={`stat-${i}`}>
              <span className="key">{stat.name}</span>
              <span className="value">
                <span>{stat.value} </span> / {stat.maximum}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NFTPlayerStats;

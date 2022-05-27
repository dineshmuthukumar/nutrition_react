import React from "react";
import { level } from "../../utils/common";

import "./style.scss";

const NFTPlayerStats = ({ stats = [], core }) => {
  return (
    <>
      {core?.role === "Batsman" && (
        <h5 className="stats-hint">
          Batsman performance against different bowler type
        </h5>
      )}
      <section className="player-stats">
        {level(core?.level?.value) && (
          <div className="heading-block">
            <h3>Player stats</h3>

            <div className="player-level">
              <h6>{level(core?.level?.value).name}</h6>
              <img
                src={level(core?.level?.value).value}
                alt="Player_level"
                loading="lazy"
              />
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
    </>
  );
};

export default NFTPlayerStats;

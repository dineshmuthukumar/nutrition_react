import React from "react";
import images from "../../utils/images.json";

import "./style.scss";

const NFTPlayerStats = ({ stats = [], core }) => {
  const level = [
    {
      type: "1",
      name: "LVL 1",
      value: images.level1,
    },
    {
      type: "2",
      name: "LVL 2",
      value: images.level2,
    },
    {
      type: "3",
      name: "LVL 3",
      value: images.level3,
    },
    {
      type: "4",
      name: "LVL 4",
      value: images.level4,
    },
    {
      type: "5",
      name: "LVL 5",
      value: images.level5,
    },
    {
      type: "6",
      name: "LVL 6",
      value: images.level6,
    },
    {
      type: "7",
      name: "LVL 7",
      value: images.level7,
    },
    {
      type: "8",
      name: "LVL 8",
      value: images.level8,
    },
    {
      type: "9",
      name: "LVL 9",
      value: images.level9,
    },
    {
      type: "10",
      name: "LVL 10",
      value: images.level10,
    },
    {
      type: "11",
      name: "LVL 11",
      value: images.level11,
    },
    {
      type: "12",
      name: "LVL 12",
      value: images.level12,
    },
    {
      type: "13",
      name: "LVL 13",
      value: images.level13,
    },
    {
      type: "14",
      name: "LVL 14",
      value: images.level14,
    },
    {
      type: "15",
      name: "LVL 15",
      value: images.level15,
    },
  ];
  const data = level.find((obj) => obj.type === core?.level);

  return (
    <>
      {core?.role === "Batsman" && (
        <h5 className="stats-hint">
          Batsman performance against different bowler type
        </h5>
      )}
      <section className="player-stats">
        {data && (
          <div className="heading-block">
            <h3>Player stats</h3>

            <div className="player-level">
              <h6>{data.name}</h6>
              <img src={data.value} alt="Player_level" loading="lazy" />
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

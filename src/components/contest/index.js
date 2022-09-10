import React, { useState } from "react";
import playWebText from "../../images/jump-trade/hero-banner/02_Play_Text-only_WEB.png";

import "./style.scss";

const ContestComponent = () => {
  return (
    <>
      <div className="releasenotes-wrapper">
        <img src={playWebText} />

        <div className="row">
          <div className="col-12">
            {/* <ReleaseNotesCard mkplace={"Marketplace"} />
                    <ReleaseNotesCard mkplace={"Marketplace"} />
                    <ReleaseNotesCard mkplace={"Marketplace"} />
                    <ReleaseNotesCard mkplace={"Marketplace"} /> */}

            <article className="release-notes-card-box">
              <h1 className="card-name">September 2022</h1>
              <h6>Jump.trade Marketplace Website Updates</h6>
              <ul className="card-key-points">
                <li>
                  Cards History: Details of Upgrade Cards earned in each
                  tournament added under "My Cards".
                </li>
                <li>
                  Limit Order: Users can configure their NFT choices and get
                  notified if an NFT matches their requirements and is available
                  for purchase.
                </li>
              </ul>
            </article>
            <article className="release-notes-card-box">
              {/* <h6 className="created-info">July 2022</h6> */}
              <h1 className="card-name">August 2022</h1>
              <h6>Jump.trade Marketplace Website Updates</h6>
              <ul className="card-key-points">
                <li>
                  Integrate filters to enable sorting by MCL Player NFT Levels
                  in the Explore marketplace and My NFTs sections.
                </li>
                <li>
                  Include TDS-related updates to the Terms & Conditions section.
                </li>
                <li>
                  Include bowling style information on MCL Bowler NFT pages.
                </li>
                <li>
                  New display design for the tournament countdown timer section.
                </li>
              </ul>
              <h6>Jump.trade Marketplace App Updates </h6>
              <ul className="card-key-points small-liner-inner">
                <li>
                  Android App
                  <ul className="small-liner">
                    <li>
                      Integrate filters to enable sorting by MCL Player NFT
                      Levels in the Explore marketplace and My NFTs sections.
                    </li>

                    <li>
                      Ability to purchase multiple NFTs simultaneously using the
                      "Add to Cart" feature.
                    </li>
                  </ul>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
      <div className="c-tab-body"></div>
    </>
  );
};

export default ContestComponent;

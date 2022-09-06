import React, { useState } from "react";
import ReleaseNotesCard from "./release-note-card";
import releaseNotesHero from "../../images/jump-trade/release-note-hero.jpg";
import "./style.scss";

const ReleaseNotesComponent = () => {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: "MarketPlace",
      active: true,
    },
    {
      id: 2,
      name: "Mcl Game ",
      active: false,
    },
  ]);

  const [active, setActive] = useState(1);
  const [isActivePanel, setActivePanel] = useState({});

  const handleChange = (input) => {
    const info = [...tabs];

    const index = info.findIndex((o) => o.id === input.id);

    for (var x = 0; x < info.length; x++) {
      if (index === x) info[x] = { ...info[x], active: true };
      else info[x] = { ...info[x], active: false };
    }

    setTabs(info);
    setActive(input.id);

    if (input.id !== active) {
      setActivePanel({});
    }
  };

  return (
    <>
      <img src={releaseNotesHero} />
      <div className="releasenotes-wrapper">
        {/* <div className="faq_header">
          <h2>FAQs</h2>{" "}
        </div> */}
        {/* <h3 className="heading heading-h3">Release Notes</h3>{" "} */}
        <div className="c-tabs">
          {tabs.map((obj, i) => (
            <div
              role="button"
              onClick={() => handleChange(obj)}
              key={`navtab${i}`}
              className={`nav-tab ${obj.active ? "active" : ""}`}
            >
              {obj.name}
            </div>
          ))}
        </div>
        <div className="c-tab-body">
          {(() => {
            if (active === 1) {
              return (
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
                        Cards History: Details of Upgrade Cards earned in each tournament added under "My Cards".
                        </li>
                        <li>
                        Limit Order: Users can configure their NFT choices and get notified if an NFT matches their requirements and is available for purchase.
                        </li>
                      </ul>
                      </article>
                      <article className="release-notes-card-box">
                      {/* <h6 className="created-info">July 2022</h6> */}
                      <h1 className="card-name">August 2022</h1>
                      <h6>Jump.trade Marketplace Website Updates</h6>
                      <ul className="card-key-points">
                        <li>
                          Integrate filters to enable sorting by MCL Player NFT
                          Levels in the Explore marketplace and My NFTs
                          sections.
                        </li>
                        <li>
                          Include TDS-related updates to the Terms & Conditions
                          section.
                        </li>
                        <li>
                          Include bowling style information on MCL Bowler NFT
                          pages.
                        </li>
                        <li>
                          New display design for the tournament countdown timer
                          section.
                        </li>
                      </ul>
                      <h6>Jump.trade Marketplace App Updates </h6>
                      <ul className="card-key-points small-liner-inner">
                        <li>
                          Android App
                          <ul className="small-liner">
                            <li>
                              Integrate filters to enable sorting by MCL Player
                              NFT Levels in the Explore marketplace and My NFTs
                              sections.
                            </li>

                            <li>
                              Ability to purchase multiple NFTs simultaneously
                              using the "Add to Cart" feature.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </article>

                    <article className="release-notes-card-box">
                      {/* <h6 className="created-info">July 2022</h6> */}
                      <h1 className="card-name">July 2022</h1>
                      <h6>Jump.trade Marketplace Website Updates</h6>
                      <ul className="card-key-points">
                        <li>
                          A dedicated game page for MCL to enable easy game file
                          download.
                        </li>
                        <li>
                          Special testing is ongoing for Guild User Accounts.
                        </li>
                        <li>Minor user experience improvements.</li>
                      </ul>
                      <h6>Jump.trade Marketplace App Updates </h6>
                      <ul className="card-key-points small-liner-inner">
                        <li>
                          Android App
                          <ul className="small-liner">
                            <li>Enable functionality for login with OTP.</li>
                            <li>New in-built live chat support.</li>
                            <li>
                              Display upgradable cards under the My Cards
                              section.
                            </li>
                            <li>Improvements to user experience.</li>
                          </ul>
                        </li>
                      </ul>
                      <ul className="card-key-points small-liner-inner">
                        <li>
                          iOS App
                          <ul className="small-liner">
                            <li>Enable functionality for login with OTP.</li>
                            <li>New in-built live chat support.</li>
                            <li>Improvements to user experience.</li>
                          </ul>
                        </li>
                      </ul>
                    </article>
                  </div>
                </div>
              );
            } else if (active === 2) {
              return (
                <div className="row">
                  <div className="col-12">
                    {/* <ReleaseNotesCard mkplace={"Beta release features"} />
                    <ReleaseNotesCard mkplace={"MCL GAME"} />
                    <ReleaseNotesCard mkplace={"MCL GAME"} />
                    <ReleaseNotesCard mkplace={"MCL GAME"} /> */}
                    <article className="release-notes-card-box">
                      <h1 className="card-name">August 2022</h1>
                      <ul className="card-key-points">
                        <li>
                          Improve navigation of videos in the Help section by
                          adding forward and backward arrows.
                        </li>
                        <li>
                          Enable the option to toggle vibration on and off to
                          the user.
                        </li>
                        <li>Enable left-hand player controls to the user.</li>
                        <li>Improvements to the camera angles.</li>
                        <li>Changes to the game APIs.</li>
                        <li>Introduce night-time stadium mode.</li>
                        <li>
                          Remove restrictions and allow usage of bowlers in all
                          three overs of the match.
                        </li>
                        <li>Explore Rookie-versus-Rookie tournaments.</li>
                        <li>
                          Enable tournaments with an activation code entry
                          system.
                        </li>
                      </ul>
                    </article>

                    <article className="release-notes-card-box">
                      {/* <h6 className="created-info">4 AUGUST 2022</h6> */}
                      <h1 className="card-name">July 2022</h1>
                      <ul className="card-key-points">
                        <li>Implement bug fixes for Fielder's fielding.</li>
                        <li>
                          Apply visual changes and animations to the Kitbox
                          screen.
                        </li>
                        <li>
                          Enable search with live user names on the Matchmaking
                          screen.
                        </li>
                        <li>Improve FPS for low-spec devices.</li>
                        <li>Change pop-up window edges to rounded corners. </li>
                        <li>
                          Highlight the user's current position in green color
                          on the leaderboard.
                        </li>
                        <li>
                          Improvements to animations on Match Victory and Defeat
                          screens.
                        </li>
                        <li>
                          Improvements to cricket ball movement physics when
                          using the Stroke button.
                        </li>
                        <li>
                          Increase the sizes of the Loft and Stroke buttons and
                          slider for easy access.
                        </li>
                        <li>
                          Align the batting camera angle to slightly above the
                          batsman to allow a clear view of the bowler.
                        </li>
                        <li>
                          Increase countdown timer for bowler selection to 10
                          seconds.
                        </li>
                        <li>Track location data of users from our backend.</li>

                        <li>
                          Display ball pitching placement for a few seconds to
                          allow players more time to decide their batting shot
                          and direction better.
                        </li>

                        <li>
                          Add multi-color effects when displaying 4s and 6s,
                          according to the game theme.
                        </li>
                        <li>
                          New logic to the admin panel to allow the upload of
                          tournament images and display it dynamically inside
                          the game.
                        </li>
                        <li>Updates to the NFT level upgrade feature.</li>
                        <li>
                          Introduce 3 new pitch types - Dry, Green, and Normal.
                        </li>
                      </ul>
                    </article>
                  </div>
                </div>
              );
            }
          })()}
        </div>
      </div>
    </>
  );
};

export default ReleaseNotesComponent;

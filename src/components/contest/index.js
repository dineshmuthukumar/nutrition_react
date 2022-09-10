import React, { useState } from "react";
import playWebText from "../../images/jump-trade/hero-banner/02_Play_Text-only_WEB.png";
import bmw from "../../images/jump-trade/bmw.jpg";
import bmw_banner_contest from "../../images/jump-trade/bmw_banner_contest.png";
import bmw_banner_contest_mob from "../../images/jump-trade/bmw_banner_contest_mob.png";
import images from "../../utils/images.json";

import "./style.scss";
import { Link } from "react-router-dom";

const ContestComponent = () => {
  const { innerWidth } = window;
  return (
    <>
      <div className="contest-wrapper">
        <img src={innerWidth > 767 ? bmw_banner_contest : bmw_banner_contest_mob} />

        <div className="row">
          <div className="col-12">
            {/* <ReleaseNotesCard mkplace={"Marketplace"} />
                    <ReleaseNotesCard mkplace={"Marketplace"} />
                    <ReleaseNotesCard mkplace={"Marketplace"} />
                    <ReleaseNotesCard mkplace={"Marketplace"} /> */}

            <article className="release-notes-card-box">
              <p>Jump.trade brings to its energetic and enthusiastic community the <strong>Big Mad Winnings</strong> contest… a chance to win BMW motorbike, iPhone 14, and a host of other awesome prizes.</p>
              <p>Did you ever imagine your NFT buying could be so rewarding? </p>
              <p><strong>How to Participate?</strong></p>
              <p>All you need to do is buy at least 2 NFTs (1 Batsman and 1 Bowler NFT) to enter the contest. All the purchases between 12th September 2022 at 9 AM IST and 12th October 2022 at 9 PM IST make you eligible to participate in Big Mad Winnings.
              </p>
              <p>All those who purchase at least 2 NFTs in the above mentioned combination will be eligible to win. 100  winners will be arbitrarily selected and given the rewards.
              </p>
              <p><strong>What are the rewards I will get?</strong></p>
              <div className="col-md-12">
                <div className="row justify-content-start">
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="contest-card">
                      <img src={images?.context1}  />
                      <div className="winner-content">
                        <p>Power-Packed.& Style-Personified With Its German DNA</p>
                        <div className="winner-count d-flex justify-content-between align-items-center">
                          <p>Winners:</p>
                          <p>1</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="contest-card">
                      <img src={images?.context2} />
                      <div className="winner-content">
                        <p>With the latest, don't Be Just Stylish! Be iStylish</p>
                        <div className="winner-count d-flex justify-content-between align-items-center">
                          <p>Winners:</p>
                          <p>1</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="contest-card">
                      <img src={images?.context3} />
                      <div className="winner-content">
                        <p>When your Gaming Rage Isn't Okay With Ordinary Specs!</p>
                        <div className="winner-count d-flex justify-content-between align-items-center">
                          <p>Winners:</p>
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="contest-card">
                      <img src={images?.context4}/>
                      <div className="winner-content">
                        <p>The PS That Every Gamer says 'I Love You' To!</p>
                        <div className="winner-count d-flex justify-content-between align-items-center">
                          <p>Winners:</p>
                          <p>1</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="contest-card">
                      <img src={images?.context5} />
                      <div className="winner-content">
                        <p>Not Math! Not Relationships! But The X Everybody Wants!</p>
                        <div className="winner-count d-flex justify-content-between align-items-center">
                          <p>Winners:</p>
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="contest-card">
                      <img src={images?.context6} />
                      <div className="winner-content">
                        <p>Time To Add Some Handy Numbers To Your Fitness Goals!</p>
                        <div className="winner-count d-flex justify-content-between align-items-center">
                          <p>Winners:</p>
                          <p>3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="contest-card">
                      <img src={images?.context7} />
                      <div className="winner-content">
                        <p>A Universe Of Possibilities With This 'Galaxy' of a Device!</p>
                        <div className="winner-count d-flex justify-content-between align-items-center">
                          <p>Winners:</p>
                          <p>1</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="contest-card">
                      <img src={images?.context8} />
                      <div className="winner-content">
                        <p>A New-Gen Smartwatch To Add To To Your Style & Suave</p>
                        <div className="winner-count d-flex justify-content-between align-items-center">
                          <p>Winners:</p>
                          <p>10</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="contest-card">
                      <img src={images?.context9}/>
                      <div className="winner-content">
                        <p>A New-Gen Smartwatch To Add To To Your Style & Suave</p>
                        <div className="winner-count d-flex justify-content-between align-items-center">
                          <p>Winners:</p>
                          <p>1</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="contest-card">
                      <img src={images?.context10} />
                      <div className="winner-content">
                        <p>This TV Is OnePlus... But Its Features Make It A Perfect 10</p>
                        <div className="winner-count d-flex justify-content-between align-items-center">
                          <p>Winners:</p>
                          <p>1</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="contest-card">
                      <img src={images?.context11} />
                      <div className="winner-content">
                        <p>You've Heard Enough Of How This Nothing Is Something, eh?</p>
                        <div className="winner-count d-flex justify-content-between align-items-center">
                          <p>Winners:</p>
                          <p>1</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="contest-card">
                      <img src={images?.context12} />
                      <div className="winner-content">
                        <p>Truly Wireless... And Truly Dope For The Audophile In You!</p>
                        <div className="winner-count d-flex justify-content-between align-items-center">
                          <p>Winners:</p>
                          <p>20</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="contest-card">
                      <img src={images?.context13} />
                      <div className="winner-content">
                        <p>Portable Hi-Q Music To Teleport Your Senses Into Bliss!</p>
                        <div className="winner-count d-flex justify-content-between align-items-center">
                          <p>Winners:</p>
                          <p>30</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="contest-card">
                      <img src={images?.context14}/>
                      <div className="winner-content">
                        <p>The GuardianLink Classic! Ssshhh! Crypto Rewards Inside!</p>
                        <div className="winner-count d-flex justify-content-between align-items-center">
                          <p>Winners:</p>
                          <p>26</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p><strong>Rules and regulations:</strong></p>
              <ul className="card-key-points">
                <li>
                  You will have to buy at least one batsman NFT and one bowler NFT to be eligible to participate in this contest.
                </li>
                <li>
                  The contest is subject to the laws and regulations of the Republic of India.
                </li>
                <li>The organizer reserves the sole right and absolute discretion to extend or terminate the contest without any prior notice to any party.</li>
                <li>
                  he winners of prices might be required to confirm their identity over a phone call or a video call. The participant understands this responsibility, and they consent to verify their identity. The participant also agrees that non-verification or inadequate verification might result in them forfeiting their prize.
                </li>
                <li>The participant agrees that they are cognizant of the rules and regulations of their states/jurisdictions regarding participation in such contests and the participant agrees that they are solely responsible for any discrepancies that might arise.
                </li>
                <li>
                  The organizer reserves the right to cancel the participation of participants engaging in unfair and malicious practices including but not limited to using bots and wash trading.
                </li>
                <li>The participant consents to the bearing of additional costs and other deductions at source related to the prize. The organizer will not be responsible for the costs and the organizer reserves the right to make their decision in case of such discrepancies.
                </li>
              </ul>
              <span className="link-to">
              <Link to={`/bmw-contest-terms-and-conditions`}>Read the complete T&Cs here</Link></span>
              <h6>Disclaimer: Crypto products and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions.
              </h6>
            </article>
          </div>
        </div>
      </div >
      <div className="c-tab-body"></div>
    </>
  );
};

export default ContestComponent;

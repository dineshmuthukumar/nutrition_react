import React from "react";

import Marquee from "react-fast-marquee";
import { BsArrowRight } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import DropImage from "../../images/jump-trade/coupon.png";
import NFTCounter from "../nft-counter";
import "./style.scss";

const NewDropSection = () => {
  return (
    <>
      <section className="new-drop-section">
        <Marquee pauseOnHover speed={100} className="marque-block">
          DROPS ON DROPS ON DROPS ON DROPS ON DROPS ON DROPS ON DROPS ON DROPS
          ON DROPS ON DROPS ON DROPS ON DROPS ON DROPS ON DROPS ON DROPS ON
          DROPS ON DROPS ON DROPS ON DROPS ON DROPS ON DROPS ON DROPS ON DROPS
          ON DROPS ON
        </Marquee>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="new-drop-box">
                <img src={DropImage} className="content-img" />
                <div className="drop-timer-box">
                  <h4>New drop 1</h4>

                  <div className="btn-block">
                    <a href="javascript:void(0);">
                      JOIN THE WAITLIST <BsArrowRight />
                    </a>
                    <a href="javascript:void(0);">
                      ADD TO CALENDER <HiPlus />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Marquee pauseOnHover speed={100} className="marque-block">
          DROPS ON DROPS ON DROPS ON DROPS ON DROPS ON DROPS ON DROPS ON DROPS
          ON DROPS ON DROPS ON DROPS ON DROPS ON DROPS ON DROPS ON DROPS ON
          DROPS ON DROPS ON DROPS ON DROPS ON DROPS ON DROPS ON DROPS ON DROPS
          ON DROPS ON
        </Marquee>
      </section>
    </>
  );
};

export default NewDropSection;

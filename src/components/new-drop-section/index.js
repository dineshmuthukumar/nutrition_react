import React, { useEffect, useState } from "react";

import Marquee from "react-fast-marquee";
import { BsArrowRight } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import images from "../../utils/images.json";
//import NFTCounter from "../nft-counter";
import TimeCounter from "../time-counter";
import "./style.scss";

const NewDropSection = () => {
  const drop_start_date = "May 15, 2022 12:30:00";
  const [drop_time, set_drop_time] = useState();
  const [live, set_live] = useState(true);

  const timeFunction = (check = false) => {
    var offset = new Date().getTimezoneOffset();

    var drop_start_date_utc = new Date(drop_start_date);
    drop_start_date_utc.setMinutes(drop_start_date_utc.getMinutes() - offset);

    var s_time = new Date();

    if (check) s_time.setSeconds(s_time.getSeconds() + 2);

    if (new Date(drop_start_date_utc) < s_time) {
      set_live(true);
    } else {
      set_drop_time(drop_start_date_utc);
      set_live(false);
    }
  };

  useEffect(() => {
    timeFunction(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                <img
                  src={images.coupon}
                  className="content-img"
                  alt="Content-Img1"
                />
                <div className="drop-timer-box">
                  <h4>Chelsea Drop</h4>
                  <TimeCounter time={drop_time} />

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

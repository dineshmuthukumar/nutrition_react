import React, { useState, useEffect } from "react";
import Footer from "../../footer";
import Header from "../../header";
import NFTCounter from "../../nft-counter";

import "./style.scss";

const KalpanaChawla = () => {
  const open_start_date = "Mar 08, 2022 12:30:00";

  const [open_time, set_open_time] = useState();

  const timeFunction = (check = false) => {
    var offset = new Date().getTimezoneOffset();

    var open_start_date_utc = new Date(open_start_date);
    open_start_date_utc.setMinutes(open_start_date_utc.getMinutes() - offset);

    var s_time = new Date();

    if (check) s_time.setSeconds(s_time.getSeconds() + 2);

    if (new Date(open_start_date_utc) < s_time) {
      //   dispatch(open_live_thunk());
    } else {
      set_open_time(open_start_date_utc);
    }
  };

  useEffect(() => {
    timeFunction(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheck = () => {
    timeFunction(true);
  };

  return (
    <>
      {" "}
      <Header />
      <div className="timer-center">
        <div className="timer-c">
          <div>
            {/* <div className="c-content">Kalpana Chawla NFT Comes in</div> */}
            <NFTCounter
              time={open_time}
              handleEndEvent={handleCheck}
              timeClass="ctime"
              intervalClass="cinterval"
              intervalGapClass="me-3"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KalpanaChawla;

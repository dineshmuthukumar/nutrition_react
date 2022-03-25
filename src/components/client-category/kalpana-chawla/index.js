import React, { useState, useEffect } from "react";
import { nftCategoryDetailApi } from "../../../api/methods";
import useQuery from "../../../hook/useQuery";
import { setCookiesByName } from "../../../utils/cookies";
import Explore from "../../explore";
import Footer from "../../footer";
import Header from "../../header";
import NFTCounter from "../../nft-counter";

import "./style.scss";

const KalpanaChawla = () => {
  const open_start_date = "Mar 08, 2022 12:10:00";

  const [open_time, set_open_time] = useState();
  const [launch, set_launch] = useState(false);

  const timeFunction = (check = false) => {
    var offset = new Date().getTimezoneOffset();

    var open_start_date_utc = new Date(open_start_date);
    open_start_date_utc.setMinutes(open_start_date_utc.getMinutes() - offset);

    var s_time = new Date();

    if (check) s_time.setSeconds(s_time.getSeconds() + 2);

    if (new Date(open_start_date_utc) < s_time) {
      set_launch(true);
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

  const slug = "OnoBDyzdtQg7LZYV";
  const [categoryDetail, setCategoryDetail] = useState({});
  const [loading, setLoading] = useState(false);
  let query = useQuery();
  const fsz = query.get("fsz");

  useEffect(() => {
    if (fsz) {
      sessionStorage.setItem("fsz", fsz);
      setCookiesByName("source", fsz);
    }

    nftCategoryDetail(slug);
  }, []);

  const nftCategoryDetail = async (slug) => {
    try {
      setLoading(true);
      let response = await nftCategoryDetailApi({ slug });
      setCategoryDetail(response.data.data.category);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />

      {launch ? (
        <Explore
          categoryDetail={categoryDetail}
          slug={categoryDetail?.slug}
          clientUrl={"kalpana-chawla-NFT"}
        />
      ) : (
        <div className="timer-center">
          <div className="timer-c">
            <div>
              {open_time && (
                <>
                  <div className="c-content fs-12">
                    The Unexplored Space of Kalpana Chawla
                  </div>
                  <div className="c-content mt-3">Sale starts in</div>
                  <div className="c-timer">
                    <NFTCounter
                      time={open_time}
                      handleEndEvent={handleCheck}
                      timeClass="ctime"
                      intervalClass="cinterval"
                      intervalGapClass="me-3"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default KalpanaChawla;

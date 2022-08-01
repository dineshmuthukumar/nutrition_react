import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import Tournament from "./tournament";

import Marquee from "react-fast-marquee";
import MCL from "../../images/mcl-game-launcher/mcl.png";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./style.scss";
import { AiFillAndroid } from "react-icons/ai";
import { tournamentsApi } from "../../api/base-methods";
import ContentLoader from "react-content-loader";

const MclTournaments = () => {
  const [tournamentData, setTournamentData] = useState([
    // {
    //     "name": "Grand Slam 5",
    //     "start_time": "2022-07-28T14:29:00.000Z",
    //     "end_time": "2022-07-29T18:22:00.000Z"
    // },
    // {
    //     "name": "tournamenttttee",
    //     "start_time": "2022-07-28T15:27:00.000Z",
    //     "end_time": "2022-07-29T15:27:00.000Z"
    // },
    // {
    //     "name": "Warm-up League",
    //     "start_time": "2022-08-01T18:15:00.000Z",
    //     "end_time": "2022-08-01T18:15:00.000Z"
    // },
    // {
    //     "name": "Monday League 20/20",
    //     "start_time": "2022-07-30T07:48:00.000Z",
    //     "end_time": "2022-07-30T15:48:00.000Z"
    // },
    // {
    //     "name": "MCL LEAGUE",
    //     "start_time": "2022-07-30T05:42:00.000Z",
    //     "end_time": "2022-07-30T11:43:00.000Z"
    // }
  ]);

  useEffect(() => {
    tournamentsTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tournamentsTimer = async () => {
    try {
       let result = await tournamentsApi();
        setTournamentData([]);
       dataCheck(result?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const dataCheck = (tournamentDetails) => {
    let finishedData = tournamentDetails?.finished.reverse();
    if (tournamentDetails?.active.length >= 3) {
      setTournamentData([...finishedData, ...tournamentDetails?.active]);
    } else {
      let appendData = [];
      for (let load = 0; load < 3 - tournamentDetails?.active.length; load++) {
        appendData.push({ name: "Up Next",schedule:true });
      }
      setTournamentData([
        ...finishedData,
        ...tournamentDetails?.active,
        ...appendData,
      ]);
    }
  };
  return (
    <>
      <section className="trailer_section live">
        <div className="trailer-container">
          <div className="">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="trailer-content">
                <div className="mock-device mcl-logo-launch">
                  <img src={MCL} />
                </div>
                {tournamentData.length > 0 && (
                  <OwlCarousel
                    className="owl-theme tournament-list-carousel"
                    margin={0}
                    smartSpeed={500}
                    lazyLoad
                    center
                    dots
                    nav={false}
                    startPosition={2}
                    responsive={{
                      0: {
                        items: 1,
                      },
                      600: {
                        items: 2,
                      },
                      992: {
                        items: 4,
                      },
                      1024: {
                        items: 4,
                      },
                      1200: {
                        items: 4,
                      },
                      1541: {
                        items: 4,
                      },
                    }}
                  >
                    {tournamentData.length > 0 &&
                      tournamentData.map((data, index) => (
                        <>{index<5 && 
                         <Tournament
                          index={index}
                          statusChange={() => tournamentsTimer()}
                          tournamentData={data}
                        />
                        }
                        </>
                      )
                      )}
                    {/* <Tournament ClassNames="expire-card" />
                  <Tournament ClassNames="livenow-card" />
                  <Tournament ClassNames="upcoming-card" />
                  <Tournament ClassNames="upcoming-card" />
                  <Tournament ClassNames="upcoming-card" />
                  <Tournament ClassNames="upcoming-card" /> */}
                  </OwlCarousel>
                )}

                <Marquee pauseOnHover speed={100} className="marque-block">
                  <span>WANT TO PLAY? DOWNLOAD THE GAME NOW!</span>{" "}
                  <span>WANT TO PLAY? DOWNLOAD THE GAME NOW!</span>{" "}
                  <span>WANT TO PLAY? DOWNLOAD THE GAME NOW!</span>{" "}
                  <span>WANT TO PLAY? DOWNLOAD THE GAME NOW!</span>{" "}
                </Marquee>

                {/* <a
                  className="download-icon-btn my-5 d-block"
                  href={process.env.REACT_APP_MCL_GAME_LINK}
                >
                  <img src={Downloadicon} />
                </a> */}
                <a
                  href={process.env.REACT_APP_MCL_GAME_LINK}
                  target="_blank"
                  className="download-icon-btn black-btn fs-5 fw-bold"
                >
                  <span>
                    {" "}
                    <AiFillAndroid /> Download MCL Game
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
const NFTCardLoader = (props) => (
  <ContentLoader
    viewBox="0 0 900 300"
    width={"100%"}
    height={"100%"}
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    className="mt-1"
    {...props}
  >
    <rect x="0" y="5" rx="2" ry="2" width="218" height="280" />
    <rect x="228" y="5" rx="2" ry="2" width="218" height="280" />
    <rect x="456" y="5" rx="2" ry="2" width="218" height="280" />
    <rect x="684" y="5" rx="2" ry="2" width="218" height="280" />
  </ContentLoader>
);

export default MclTournaments;

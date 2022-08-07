import React, { cloneElement, useEffect, useRef, useState } from "react";
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
  const [tournamentData, setTournamentData] = useState([]);
  const owlRef = useRef();
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
    let finishedData = tournamentDetails?.finished;
    if (tournamentDetails?.active.length >= 1) {
      let appendData = [];
      if(tournamentDetails?.active.length ===1){
        appendData.push({ name: "Up Next", schedule: true });
      setTournamentData([finishedData[0], ...tournamentDetails?.active,...appendData]);
      }
      else{
        setTournamentData([finishedData[0], ...tournamentDetails?.active]);
      }
    } else {
      let reverseFinishedData=tournamentDetails?.finished.reverse();
      let appendData = [];
      for (let load = 0; load < 1; load++) {
        appendData.push({ name: "Up Next", schedule: true });
      }
      setTournamentData([
        ...reverseFinishedData,
        // ...tournamentDetails?.active,
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
                    ref={owlRef}
                    className="owl-theme tournament-list-carousel"
                    margin={0}
                    smartSpeed={500}
                    lazyLoad
                    center
                    dots={true}
                    dotsEach={1}
                    nav={false}
                    startPosition={1}
                    onClick={(e) => {
                      let toIndex = parseInt(e.target.ariaRowIndex);
                      if (!isNaN(toIndex)) owlRef.current.to(toIndex, 500);
                    }}
                    responsive={{
                      0: {
                        items: 1,
                      },
                      600: {
                        items: 1,
                      },
                      992: {
                        items: 3,
                      },
                      1024: {
                        items: 3,
                      },
                      1200: {
                        items: 3,
                      },
                      1541: {
                        items: 3,
                      },
                    }}
                  >
                    {tournamentData.length > 0 &&
                      tournamentData.map((data, index) => (
                        <>
                          {index < 3 && (
                            <Tournament
                              index={index}
                              statusChange={() => tournamentsTimer()}
                              tournamentData={data}
                            />
                          )}
                        </>
                      ))}
                  </OwlCarousel>
                )}

                <Marquee pauseOnHover speed={100} className="marque-block">
                  <span>WANT TO PLAY? DOWNLOAD THE GAME NOW!</span>{" "}
                  <span>WANT TO PLAY? DOWNLOAD THE GAME NOW!</span>{" "}
                  <span>WANT TO PLAY? DOWNLOAD THE GAME NOW!</span>{" "}
                  <span>WANT TO PLAY? DOWNLOAD THE GAME NOW!</span>{" "}
                </Marquee>

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

import React, { useRef, useState } from "react";
import play from "../../images/play.png";
import playBtn from "../../images/play-btn.png";
import "./style.scss";
import { VscClose } from "react-icons/vsc";
const TrailerVideo = () => {
  const videoRef = useRef();
  // const closeoRef = useRef();
  const [video, setVideo] = useState(false);

  return (
    <>
      <div ref={videoRef}>
        {!video ? (
          <>
            <div>
              <section className="trailer_section d-flex align-items-center">
                <div className="trailer-container">
                  <div className="top-fixed-trailer"></div>
                  <div className="">
                    <div className="col-xl-8 col-lg-8 col-md-9 col-sm-12 col-12">
                      <div className="trailer-content ps-5">
                        <h2 className="mb-2">Meta Cricket League</h2>
                        <h4 className=""> Redefining Cricket... For You!</h4>

                        <p className="text-white trailer-desc">
                          Experience A Glimpse Of The Meta Cricket League, The
                          World's First-Ever P2E Cricket Game... The Thrill, The
                          Joy, & The Awesomeness! Watch The Game Trailer!
                        </p>
                        <a className="d-flex py-4">
                          {" "}
                          <img
                            src={play}
                            alt=""
                            className="watch-btn"
                            onClick={() => {
                              setVideo(!video);
                              videoRef.current.scrollIntoView();
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-fixed-trailer">
                    <div className="px-md-5 px-2">
                      <div class="d-flex flex-column-mob justify-content-between">
                        <a
                          target="_self"
                          href="/nft-marketplace/"
                          className="list-style-none p-8"
                        >
                          <div class="p-2 d-flex flex-btn">
                            <div className="btn-click-icon">
                              <img src={playBtn} />
                            </div>
                            <div className="btn-click ms-md-3 ms-0 fs-2">
                              <span>Explore Marketplace</span>
                            </div>
                          </div>
                        </a>
                        <div className="vr"></div>
                        <a
                          target="_blank"
                          // href="https://guardianlink.gitbook.io/meta-cricket-league/"
                          className="list-style-none p-8"
                        >
                          <div class="p-2 d-flex flex-btn">
                            <div className="btn-click-icon">
                              <img src={playBtn} />
                            </div>
                            <div className="btn-click ms-md-3 ms-0 fs-2">
                              <span>Whitepaper</span>
                              <p className="coming_soon">Coming Soon</p>
                            </div>
                          </div>
                        </a>
                        <div className="vr"></div>

                        <a className="list-style-none p-8">
                          <div class="p-2 d-flex flex-btn">
                            <div className="btn-click-icon">
                              <img src={playBtn} />
                            </div>
                            <div className="btn-click ms-md-3 ms-0 fs-2">
                              <span>Subscribe For App</span>
                              <p className="coming_soon">Coming Soon</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </>
        ) : (
          <>
            <div>
              <section className="video-container">
                <div className="trailer-container">
                  <div className="trailer-close-btn  end-0 translate-middle-x">
                    <div
                      className="close-comp d-inline-flex "
                      onClick={() => {
                        setVideo(!video);
                        videoRef.current.scrollIntoView();
                      }}
                    >
                      <VscClose size={50} color="#e1ff04" />
                    </div>
                  </div>
                  <iframe
                    width="100%"
                    height="auto"
                    //www.youtube.com/embed/DLlkNdIikLU?autoplay=1&autohide=1&fs=1&rel=0&hd=1&wmode=opaque&enablejsapi=1
                    // src="https://www.youtube.com/embed/LJn4ViD80K4?autoplay=1&showinfo=0&controls=0&?rel=0"
                    src="https://www.youtube.com/embed/aSJl-BdgwyM?autoplay=1&rel=0&hd=1&wmode=opaque&enablejsapi=1&controls=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </section>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TrailerVideo;

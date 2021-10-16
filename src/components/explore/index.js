import React from "react";
import postOne from "../../images/post1.png";
import postTwo from "../../images/post2.png";
import postThree from "../../images/post3.png"; 
import Switch from "react-switch";
import "./style.scss";
const Explore = () => {
  return <>
  
<section className="explore-drops">
  <div className="container">
    <div className="row mt-5 explore-title">
      <div className="col-md-6">
      <h1>Madhushala Collections</h1>
      <p>BeyondLife.club brings you the philosophical undertones of Madhushala in Amitabh’s baritone as an NFT!. Now you can own a recorded version of Madhushala, curated by Amitabh Bachchan himself. </p>
      </div>
    </div>
      <div className="row">
      <div className="about-user mt-5">
              <div className="row">
                <div className="col-md-12 ">
                  <div className="about-heading mb-4">
                    <div>
                      <h3 className="about-title">Showing All (12)</h3>
                    </div>
                    <div>
                      <ul className="nav user-nav">
                        <li className="nav-item">
                          <a
                            className="nav-link active px-5"
                            aria-current="page"
                            href="#"
                          >
                            Filter By
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Sort By
                          </a>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gutters-20">
                {/* <!-- post column starts --> */}
                <div className="col-xl-4 col-lg-4 col-sm-6">
                  <div className="block-box user-post mb-5">
                    <div className="item-post">
                      <img src={postOne} width="100%" align="post" />
                    </div>
                    <h6 className="post-title">Signed Poster #001</h6>
                    <p>Amitabh Bachchan</p>
                    <div className="post-cost pw_we">
                      <div className="post-sold-text">Auction Starting in</div>
                      <div className="post-sold-cost">3h 16m 18s</div>
                    </div>
                  </div>
                </div>
                {/* <!-- post column starts --> */}
                {/* <!-- post column starts --> */}
                <div className="col-xl-4 col-lg-4 col-sm-6">
                  <div className="block-box user-post  mb-5">
                    <div className="item-post">
                      <img src={postTwo} width="100%" align="post" />
                    </div>
                    <h6 className="post-title">Signed Poster #010</h6>
                    <p>Amitabh Bachchan</p>
                    <div className="post-cost pw_we">
                    <div className="post-sold-text">Auction Starting in</div>
                      <div className="post-sold-cost">3h 16m 18s</div>
                    </div>
                  </div>
                </div>
                {/* <!-- post column starts --> */}
                {/* <!-- post column starts --> */}
                <div className="col-xl-4 col-lg-4 col-sm-6">
                  <div className="block-box user-post  mb-5">
                    <div className="item-post">
                      <img src={postThree} width="100%" align="post" />
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="left-bid">
                        <h6 className="post-title">Hocus Pocuss</h6>
                    <p>Julianlage</p>
                        </div>
                        <div  className="rights-bid">
                    <p className="left_bid mt-3">Only 10 left</p>
                        </div>
                    </div>
                    <div className="post-cost pw_we d-flex  justify-content-between">
                      <div className="left-bid">
                          <div className="post-sold-text">Bid Price</div>
                          <div className="post-sold-cost">$100.28</div>
                      </div>
                      <div className="right-bid">
                          <div className="post-sold-text">Ending In</div>
                          <div className="post-sold-cost">3h 16m 18s</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- post column starts --> */}
                {/* <!-- post column starts --> */}
                <div className="col-xl-4 col-lg-4 col-sm-6">
                  <div className="block-box user-post  mb-5">
                    <div className="item-post">
                      <img src={postThree} width="100%" align="post" />
                    </div>
                    <h6 className="post-title">Hocus Pocus</h6>
                    <p>Julianlage</p>
                    <div className="post-cost pw_we">
                    <div className="post-sold-text">Auction Starting in</div>
                      <div className="post-sold-cost">3h 16m 18s</div>
                    </div>
                  </div>
                </div>
                {/* <!-- post column starts --> */}
                {/* <!-- post column starts --> */}
                <div className="col-xl-4 col-lg-4 col-sm-6">
                  <div className="block-box user-post  mb-5">
                    <div className="item-post">
                      <img src={postOne} width="100%" align="post" />
                    </div>
                    <h6 className="post-title">Hocus Pocus</h6>
                    <p>Julianlage</p>
                    <div className="post-cost pw_we">
                    <div className="post-sold-text">Auction Starting in</div>
                      <div className="post-sold-cost">3h 16m 18s</div>
                    </div>
                  </div>
                </div>
                {/* <!-- post column starts --> */}
                {/* <!-- post column starts --> */}
                <div className="col-xl-4 col-lg-4 col-sm-6">
                  <div className="block-box user-post  mb-5">
                    <div className="item-post">
                      <img src={postTwo} width="100%" align="post" />
                    </div>
                    <h6 className="post-title">Hocus Pocus</h6>
                    <p>Julianlage</p>
                    <div className="post-cost pw_we">
                    <div className="post-sold-text">Auction Starting in</div>
                      <div className="post-sold-cost">3h 16m 18s</div>
                    </div>
                  </div>
                </div>
                {/* <!-- post column starts --> */}
              </div>
            </div>
      </div>
  </div>
</section>
  
  
  </>;
};

export default Explore;

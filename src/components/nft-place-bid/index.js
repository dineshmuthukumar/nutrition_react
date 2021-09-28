import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Offcanvas } from "react-bootstrap";
import { BiX } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import ErrorText from "./error-text";
import "./style.scss";

const NFTPlaceBid = ({ show = false }) => {
  const { user } = useSelector((state) => state.user.data);
  const history = useHistory();

  const [success, setSuccess] = useState(false);

  const [isQuantity, setIsQuantity] = useState(true);

  return (
    <Offcanvas
      show={show}
      onHide={() =>
        history.push(history.location.pathname.replace("/placebid", ""))
      }
      placement="end"
      className="w-100 w-md-50 w-lg-42"
    >
      <Offcanvas.Body className="p-0 pop-body-container">
        <div className="pop-nft-details">
          {!success ? (
            <>
              <div className="pop-head-content">
                <div className="pop-bid-title">Place a bid</div>
                <div className="close-button-pop">
                  <BiX
                    role="button"
                    size={45}
                    onClick={() =>
                      history.push(
                        history.location.pathname.replace("/placebid", "")
                      )
                    }
                  />
                </div>
              </div>

              {/* error-progress -> error progress , loading -> progressing */}
              <div className="pop-bid-progress">
                <div className="progress-complete"></div>
              </div>

              <div className="error-float-container">
                {/* <ErrorText type="nobalance" />
            <ErrorText type="ending-time" />
            <ErrorText
              type="error"
              title="Error Message Heading"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
            /> */}
              </div>

              <div className="pop-nft-media">
                <img src="https://picsum.photos/780/750" />
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif" /> */}
                {/* <video controls>
              <source
                src="https://www.w3schools.com/tags/movie.mp4"
                type="video/mp4"
              />
            </video> */}

                {/* <audio controls>
              <source
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                type="audio/mp3"
              />
              Your browser does not support the audio element.
            </audio> */}
              </div>
              <div className="pop-author-name text-center mt-3">
                Amitabh Bachchan
              </div>
              <div className="pop-nft-title text-center mb-1">
                Signed Poster #001
              </div>

              {/* error-bid -> less value than min bid,  error-balance -> low value  */}
              <div className="input-bid-container mt-5">
                <label className="input-bid-text">
                  Enter minimum bid amount of $105.44
                </label>

                {isQuantity ? (
                  <div className="input-quantity-container">
                    <input className="input-quantity" placeholder="0 NFTs" />
                    {/* text-dark -> dark text after entering quantity */}
                    <span className="quantity-to-value ">$3000</span>
                  </div>
                ) : (
                  <div className="input-bid-wrap">
                    <span className="bid-currency">$</span>
                    <input className="input-bid" placeholder="0" />
                  </div>
                )}
                <div className="balance-details">
                  Your wallet balance is {user?.currency_symbol} {user?.balance}
                </div>
              </div>
              <div className="bottom-area">
                <div className="terms text-secondary">
                  Once a bid is placed, it cannot be withdrawn. Learn More about
                  how auctions work.
                </div>

                <div className="bottom-content-pop">
                  <div
                    className="back-button"
                    onClick={() =>
                      history.push(
                        history.location.pathname.replace("/placebid", "")
                      )
                    }
                  >
                    Back
                  </div>
                  <div className="place-bid-button">
                    <button
                      // disabled
                      className="btn btn-dark text-center btn-lg w-75 rounded-pill place-bid-btn-pop " //process -> proccessing
                      onClick={() =>
                        window.open(
                          `${process.env.REACT_APP_BASE_URL}/signin?redirect=${window.location.href}`,
                          "_self"
                        )
                      }
                    >
                      Place Bid
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="sucess-title">
                <FaCheckCircle color={"#23bf61"} size={60} />
                <div className="message mt-3">
                  Bid successfully placed. <br /> You are the highest bidder
                </div>
              </div>

              <div className="pop-nft-media mt-4 preview">
                <img src="https://picsum.photos/780/750" />
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif" /> */}
                {/* <video controls>
              <source
                src="https://www.w3schools.com/tags/movie.mp4"
                type="video/mp4"
              />
            </video> */}

                {/* <audio controls>
              <source
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                type="audio/mp3"
              />
              Your browser does not support the audio element.
            </audio> */}
              </div>
              <div className="pop-author-name text-center mt-3">
                Amitabh Bachchan
              </div>
              <div className="pop-nft-title text-center mb-1">
                Signed Poster #001
              </div>

              <div className="success-summary-container mt-3">
                <div className="success-summary">
                  <div>Bid price</div>
                  <div className="bold">$105.50</div>
                </div>
                <div className="success-summary">
                  <div>Bid placed on</div>
                  <div className="bold">22 Sep, 2021 12:35:20</div>
                </div>
                <div className="success-summary">
                  <div>Bid placed for</div>
                  <div className="bold">1 Limited Edition</div>
                </div>
                <div className="success-summary">
                  <div>Transaction No.</div>
                  <div className="bold">019dh393...00382182</div>
                </div>
              </div>

              <div className="bottom-area">
                <div className="bottom-content-pop">
                  <div className="place-bid-button">
                    <button
                      className="btn btn-dark text-center btn-lg w-75 rounded-pill place-bid-btn-pop "
                      onClick={() =>
                        history.push(
                          history.location.pathname.replace("/placebid", "")
                        )
                      }
                    >
                      Okay
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default NFTPlaceBid;

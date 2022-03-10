import React from "react";
import Footer from "../../footer";
import Header from "../../header";
import Image from "react-bootstrap/Image";
import "./style.scss";
import ffLogo from "./img/logo2.png";
import cat1 from "./img/cat1.jpg";
import cat2 from "./img/cat2.jpg";
import cat3 from "./img/cat3.jpg";
import cat4 from "./img/cat4.jpg";
import cat5 from "./img/cat5.jpg";
import { Link } from "react-router-dom";
const FullyFaltoo = () => {
  return (
    <>
      <Header />
      <section className="client-category">
        <div className="container-fluid">
          <div className="row">
            <div className="ft-logo">
              <Image src={ffLogo} />{" "}
            </div>
          </div>
          <div className="row mt-3 d-flex justify-content-between align-items-center explore-title">
            <div class="col-md-6">
              <h1>FullyFaltoo Collectible NFTs</h1>
              <p>
                This is the best bundle of pop culture immersion you can get
                your hands on. It's the Limited Edition 90s nostalgia and GenZ
                memorabilia. A cautionary word of advice for crypto-bros with
                eyes on this enviable collection to adorn your digital
                mantlepiece - word is, there are many Indie Jones' and Jack
                Sparrows out scouring for it.
              </p>
            </div>
            <div className="col-md-6">
              <div class="countdown-wrapper">
                <ul id="countdown">
                  <li>
                    <span class="days">00</span>
                    <p>days</p>
                  </li>
                  <li>
                    <span class="hours">00</span>
                    <p>hours </p>
                  </li>
                  <li>
                    <span class="minutes">00</span>
                    <p>minutes</p>
                  </li>
                  <li>
                    <span class="seconds">00</span>
                    <p>seconds</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="category_list">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div class="card_title">
                <h2>Populr Collections</h2>
                <p></p>
              </div>
            </div>
          </div>
          <div className="row mt-5 justify-content-center">
            <div className=" mb-3 col-lg-2 col-4 ">
              <Link>
                <div className="category_card active">
                  <Image src={cat1} />
                  <h1>Category title</h1>
                </div>
              </Link>
            </div>
            <div className=" mb-3 col-lg-2 col-4">
              <Link>
                <div className="category_card">
                  <Image src={cat2} />
                  <h1>Category title</h1>
                </div>
              </Link>
            </div>
            <div className=" mb-3 col-lg-2 col-4">
              <Link>
                <div className="category_card">
                  <Image src={cat3} />
                  <h1>Category title</h1>
                </div>
              </Link>
            </div>
            <div className=" mb-3 col-lg-2 col-4">
              <Link>
                <div className="category_card">
                  <Image src={cat4} />
                  <h1>Category title</h1>
                </div>
              </Link>
            </div>
            <div className=" mb-3 col-lg-2 col-4">
              <Link>
                <div className="category_card">
                  <Image src={cat5} />
                  <h1>Category title</h1>
                </div>
              </Link>
            </div>
            {/* <div className=" mb-3 col-lg-1"></div> */}
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div class="sec-heading d-flex align-items-center mb-2 explore-heading">
                <span class="me-4 mt-2 text-nowrap">Collection Name NFT</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <a href="" className="more-card">
                <span class="nft-type-badge">ERC1155</span>
                <Image
                  alt="media logo"
                  src="https://mpcdn.guardiannft.org/regpnmsqyvo0evoxyuck3qdfv0aj"
                  role="button"
                />
                <div class="top-content-title">
                  <div>
                    <div class="more-nft-title">Let's Go L.A.</div>
                    <div class="more-nft-desc">@Thomas Brown</div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <a href="" className="more-card">
                <span class="nft-type-badge">ERC1155</span>
                <Image
                  alt="media logo"
                  src="https://mpcdn.guardiannft.org/regpnmsqyvo0evoxyuck3qdfv0aj"
                  role="button"
                />
                <div class="top-content-title">
                  <div>
                    <div class="more-nft-title">Let's Go L.A.</div>
                    <div class="more-nft-desc">@Thomas Brown</div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <a href="" className="more-card">
                <span class="nft-type-badge">ERC1155</span>
                <Image
                  alt="media logo"
                  src="https://mpcdn.guardiannft.org/regpnmsqyvo0evoxyuck3qdfv0aj"
                  role="button"
                />
                <div class="top-content-title">
                  <div>
                    <div class="more-nft-title">Let's Go L.A.</div>
                    <div class="more-nft-desc">@Thomas Brown</div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <a href="" className="more-card">
                <span class="nft-type-badge">ERC1155</span>
                <Image
                  alt="media logo"
                  src="https://mpcdn.guardiannft.org/regpnmsqyvo0evoxyuck3qdfv0aj"
                  role="button"
                />
                <div class="top-content-title">
                  <div>
                    <div class="more-nft-title">Let's Go L.A.</div>
                    <div class="more-nft-desc">@Thomas Brown</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FullyFaltoo;

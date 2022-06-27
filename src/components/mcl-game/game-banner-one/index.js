import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import Toggle from "react-toggle";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiMail, FiPhone } from "react-icons/fi";
import banners from "../../../images/banner-img.png";
import "../style.scss";
import images from "../../../utils/images.json";

const MclGameOne = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <section className="game-banner">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-lg-5 p-2">
                <img className="img-fluid" src={banners} />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-lg-5 p-2">
                <h2 className="display-4 mcl-title">Meta Criket League</h2>
                <h2 className="display-4 mobile_app">Mobile App</h2>
                <p className="fs-5 text-white game-desc">
                  The Meta Cricket League brings you the vibrance, energy, &
                  awesomeness of cricket in the meta-realm. Play your NFT
                  cricket game, win matches, climb up the leaderboard and earn
                  unbelievable rewards for your time and efforts!
                </p>
                <Form className="gameplay-form">
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <Form.Control
                        className="mb-2"
                        id="inlineFormInput"
                        type="tel"
                        placeholder="Enter Email ID / Phone"
                      />
                    </Col>

                    <Col xs="auto">
                      <div class="switch-button">
                        <label>
                          <Toggle
                            className="switch-icon"
                            icons={{
                              checked: <FiPhone />,
                              unchecked: <FiMail />,
                            }}
                            defaultChecked={toggle}
                            onChange={() => setToggle(!toggle)}
                          />
                          {/* <span>Custom icons</span> */}
                        </label>
                      </div>
                    </Col>
                    {/* <Col xs="auto">
                      <Button type="submit" className="submit-btn my-2">
                        SUBSCRIBE
                      </Button>
                    </Col> */}
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MclGameOne;

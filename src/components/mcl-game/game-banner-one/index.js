import React, { useState, useEffect } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import Toggle from "react-toggle";
// import { useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
import { FiMail, FiPhone } from "react-icons/fi";
import { validateEmail, validatePhone } from "../../../utils/common";
// import InputText from "../../input-text";
// import { useQuery } from "../../../hook/url-params";

import "../style.scss";
import images from "../../../utils/images.json";

const MclGameOne = () => {
  // const location = useLocation();
  //const query = useQuery(location.search);
  // const redirect = query.get("redirect");
  // const email = query.get("email");
  // const phone = query.get("phone");
  const [toggle, setToggle] = useState(false);
  const [type, setType] = useState("email");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [vEmail, setVEmail] = useState();
  const [subcribe, setSubcribe] = useState({
    email: "",
    phone: "",
  });

  const [validation, setValidation] = useState({
    email: false,
    valid_email: false,
    phone: false,
    valid_phone: false,
  });

  const toggleType = () => {
    setType(type == "email" ? "mobile" : "email");
    //console.log(type);
  };

  const handleSubcribe = () => {
    setError(null);
    setVEmail("");
    if (checkValidation()) {
      setVEmail(null);

      try {
        setLoading(true);

        // const result = await sendEmailNewletter(email2);

        // if (result.data.status) {
        setVEmail(
          "You're now on our waitlist! Keep an eye on your inbox for the latest updates on a Minnal NFTs!"
        );
        // } else {
        //   setVEmail2(
        //     "Nobody loves NFTs like you do as your email id is already on our waitlist! We'll keep you posted on this Minnal NFT drop schedule."
        //   );
        // }

        setSubcribe({ email: "", phone: "" });
        setLoading(false);
      } catch (error) {
        setLoading(false);

        console.log(
          "🚀 ~ file: index.js ~ line 46 ~ handleSendNewsLetter ~ error",
          error
        );
      }
    }
  };

  const checkValidation = () => {
    let c_validation = { ...validation };

    if (type == "email") {
      if (!subcribe.email) {
        c_validation = { ...c_validation, email: true };
      } else {
        if (validateEmail(subcribe.email)) {
          c_validation = { ...c_validation, valid_email: false };
        } else {
          c_validation = { ...c_validation, valid_email: true };
        }
      }
      setValidation(c_validation);
      if (!c_validation.email) {
        if (validateEmail(subcribe.email)) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      if (!subcribe.phone) {
        c_validation = { ...c_validation, phone: true };
      } else {
        if (validatePhone(subcribe.phone)) {
          c_validation = { ...c_validation, valid_phone: false };
        } else {
          c_validation = { ...c_validation, valid_phone: true };
        }
      }
      setValidation(c_validation);
      if (!c_validation.phone) {
        if (validatePhone(subcribe.phone)) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  };

  const handleChangeEvent = (e) => {
    setError(null);
    setVEmail("");
    setSubcribe({ ...subcribe, [e.target.name]: e.target.value.trim() });
    console.log(e.target.value);
    if (e.target.value) {
      setValidation({ ...validation, [e.target.name]: false });
    } else {
      setValidation({ ...validation, [e.target.name]: true });
    }
  };

  const handleKeyPressEvent = (event) => {
    if (event.key === "Enter") {
      handleSubcribe();
    }
  };

  return (
    <>
      <section className="game-banner">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-lg-5 p-2">
                <img className="img-fluid" src={images.sample} />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-lg-5 p-2">
                <h2 className="display-4 mcl-title">Meta Criket League</h2>
                <h2 className="display-4 mobile_app">Mobile App</h2>
                <p className="fs-5 text-white game-desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  aliquid, mollitia odio veniam sit iste esse assumenda amet
                  aperiam exercitationem, ea animi blanditiis recusandae!
                  Ratione voluptatum molestiae adipisci, beatae obcaecati.
                </p>
                <Form
                  className="gameplay-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <Row className="align-items-center">
                    <Col xs="auto">
                      {type == "email" ? (
                        <Form.Control
                          className="mb-2"
                          id="inlineFormInput"
                          type="type"
                          name="email"
                          required={validation.email}
                          placeholder="Enter Email ID "
                          onChange={handleChangeEvent}
                          onKeyPress={handleKeyPressEvent}
                          value={subcribe.email}
                          disabled={loading}
                        />
                      ) : (
                        <Form.Control
                          className="mb-2"
                          id="inlineFormInput"
                          type="tel"
                          name="phone"
                          placeholder="Phone"
                          required={validation.phone}
                          onChange={handleChangeEvent}
                          onKeyPress={handleKeyPressEvent}
                          value={subcribe.phone}
                          disabled={loading}
                        />
                      )}

                      {type == "email"
                        ? validation.valid_email && (
                            <p className="error_text">
                              Please enter a valid email address
                            </p>
                          )
                        : validation.valid_phone && (
                            <p className="error_text">
                              Please enter a valid phone number
                            </p>
                          )}
                      <p className="nft_email_error">{vEmail}</p>
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
                            onChange={(() => setToggle(!toggle), toggleType)}
                          />
                          {/* <span>Custom icons</span> */}
                        </label>
                      </div>
                    </Col>
                    <Col xs="auto">
                      <Button
                        type="submit"
                        className="submit-btn my-2"
                        onClick={handleSubcribe}
                        disabled={loading}
                      >
                        SUBSCRIBE
                      </Button>
                    </Col>
                    {error && <p className="error_text text-center">{error}</p>}
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

import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { useHistory } from "react-router-dom";
//import Image from "react-bootstrap/Image";
import { BiArrowBack, BiRightArrowAlt } from "react-icons/bi";
import { Button, Form } from "react-bootstrap";
import { HiOutlineArrowRight } from "react-icons/hi";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {
  FaDiscord,
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

import customer from "../../../images/new-images/subpages/customer.jpg";
import store from "../../../images/new-images/subpages/store.jpg";

import "./style.scss";
import InputText from "../../input-text/index";

import {
  validateEmail,
  validateName,
  validateNameReplace,
  validInternationalPhone,
} from "../../../utils/common";
import InputPhone from "../../input-phone";
import { EnquiryApiContact } from "../../../api/base-methods";
import { toast } from "react-toastify";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [validation, setValidation] = useState({
    name: false,
    valid_name: false,
    email: false,
    valid_email: false,
    phone_no: false,
    valid_phone_no: false,
    address: false,
    valid_address: false,
  });
  const [data, setData] = useState({
    name: "",
    email: "",
    phone_no: "",
    address: "",
  });

  const CheckValidation = () => {
    let c_validation = { ...validation };

    if (!data.name) {
      c_validation = { ...c_validation, name: true };
    } else {
      if (validateName(data.first_name)) {
        c_validation = { ...c_validation, valid_name: false };
      } else {
        c_validation = { ...c_validation, valid_name: true };
      }
    }

    if (!data.email) {
      c_validation = { ...c_validation, email: true };
    } else {
      if (validateEmail(data.email)) {
        c_validation = { ...c_validation, valid_email: false };
      } else {
        c_validation = { ...c_validation, valid_email: true };
      }
    }

    if (!data.mobile) {
      c_validation = { ...c_validation, phone_no: true };
    } else {
      if (validInternationalPhone(data.mobile, data.phone_code)) {
        c_validation = { ...c_validation, valid_phone_no: false };
      } else {
        c_validation = { ...c_validation, valid_phone_no: true };
      }
    }
    if (!data.address) {
      c_validation = { ...c_validation, valid_address: true };
    } else {
      c_validation = { ...c_validation, valid_address: false };
    }

    setValidation(c_validation);
    if (
      !c_validation.name &&
      !c_validation.valid_name &&
      !c_validation.phone_no &&
      !c_validation.valid_phone_no &&
      !c_validation.valid_email &&
      !c_validation.email &&
      !c_validation.valid_address
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleChangeEvent = (e) => {
    if (e.target.value) {
      if (e.target.name === "name") {
        if (validateName(e.target.value)) {
          setData({
            ...data,
            [e.target.name]: validateNameReplace(e.target.value),
          });
          setValidation({ ...validation, [e.target.name]: false });
        }
      } else if (e.target.name === "email") {
        // if (validateEmail(e.target.value)) {
        setData({ ...data, [e.target.name]: e.target.value.trim() });
        setValidation({ ...validation, [e.target.name]: false });
        //} else {
        //setValidation({ ...validation, [e.target.name]: true });
        //}
      } else {
        setData({ ...data, [e.target.name]: e.target.value });
        setValidation({ ...validation, [e.target.name]: false });
      }
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
      setValidation({ ...validation, [e.target.name]: true });
    }
  };

  const handleForm = async () => {
    if (CheckValidation()) {
      console.log(data, "data");

      try {
        let Newdata = {
          name: data?.name,
          email: data?.email,
          mobile: data?.mobile,
          message: data?.address,
        };
        //console.log(data, "data");
        //return false;
        setLoading(true);
        const result = await EnquiryApiContact(Newdata);
        // const result = await registerApi(Newdata);

        if (result.data.statusCode === 200) {
          setLoading(false);
          toast.success("Message sent");
          setValidation({
            name: false,
            valid_name: false,
            email: false,
            valid_email: false,
            phone_no: false,
            valid_phone_no: false,
            address: false,
            valid_address: false,
          });
          setData({
            name: "",
            email: "",
            phone_no: "",
            address: "",
          });

          // setShow(true);
          // setId(result?.data?.responseData?.user?._id);
          //dispatch(user_login_otp_action());
        }
      } catch (err) {
        //console.log(err);
        setLoading(false);
        toast.error(err?.data?.message);
      }
    }
  };
  return (
    <>
      <section className="contact-section">
        <Container>
          <Row>
            <div className="col-lg-3 col-md-4 col-sm-6 ls-m mb-4">
              <div className="grey-section d-flex align-items-center h-100">
                <div>
                  <h4 className="mb-2 text-capitalize">Headquarters</h4>
                  <p>
                    1600 Amphitheatre Parkway
                    <br />
                    New York WC1 1BA
                  </p>
                  <h4 className="mb-2 text-capitalize">Phone Number</h4>
                  <p>
                    <Link to="" slassName="btn btn-link">
                      1.800.458.56
                    </Link>
                    <br />
                    <Link to="" className="btn btn-link">
                      1.800.458.56
                    </Link>
                  </p>
                  <h4 className="mb-2 text-capitalize">Support</h4>
                  <p className="mb-4">
                    <Link to="" className="btn btn-link">
                      support@your-domain.com
                    </Link>
                    <br />
                    <Link to="" className="btn btn-link">
                      help@your-domain.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-6 d-flex align-items-center mb-4">
              <div className="w-100 offset-sm-1">
                <Row>
                  <Col>
                    <h2 className="ls-m font-weight-bold">Let’s Connect</h2>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                  </Col>
                </Row>
                <div class="change_pass">
                  <Row>
                    <Col sm={3}>
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1">
                          <Form.Label>Name</Form.Label>
                          <Form.Control type="text" placeholder="name" />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col sm={3}>
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1">
                          <Form.Label>Mobile Number</Form.Label>
                          <Form.Control
                            type="tel"
                            placeholder="Mobile Number"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col sm={3}>
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Email Address"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={9}>
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Comments</Form.Label>
                          <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                      <button
                        type="submit"
                        class="btn-product btn-cart wid_200">
                        Contact Us
                      </button>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section className="quote-section">
        <Container>
          <div className="inner-quote-section">
            <Row>
              <Col>
                <h2>Get Free Quote</h2>
                <p>
                  Do you have a question for us? we'd love to here from you and
                  we would be happy to answer your questions. <br />
                  Reach out to us and we'll response as soon as we can.
                </p>
              </Col>
            </Row>

            <div className="quote-form">
              <Row>
                <Col>
                  <Row>
                    <Col>
                      {/* <Form> */}
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1">
                        {/* <Form.Control type="text" placeholder="name" /> */}
                        <InputText
                          //title={"Email"}
                          name="name"
                          placeholder="Enter name"
                          value={data?.name}
                          required={validation.name}
                          //onKeyPress={handleKeyPressEvent}
                          onChange={handleChangeEvent}
                        />
                        {validation.valid_name && (
                          <p className="error_text">
                            Please enter a valid Name
                          </p>
                        )}
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1">
                        {/* <Form.Control
                            type="text"
                            placeholder="Email Address"
                          /> */}
                        <InputText
                          //title={"Email"}
                          name="email"
                          placeholder="Enter Email"
                          value={data?.email}
                          required={validation.email}
                          //onKeyPress={handleKeyPressEvent}
                          onChange={handleChangeEvent}
                        />
                        {validation.valid_email && (
                          <p className="error_text">
                            Please enter a valid email address
                          </p>
                        )}
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1">
                        <InputPhone
                          ///title={"Mobile"}
                          defaultCountry={"in"}
                          value={data.mobile}
                          required={validation.phone_no}
                          //onEnterKeyPress={handleSignUp}
                          onChange={(e, c_code) => {
                            setData({
                              ...data,
                              mobile: e,
                              phone_code: c_code?.countryCode?.toUpperCase(),
                            });
                            if (e) {
                              setValidation({
                                ...validation,
                                phone_no: false,
                              });
                            } else {
                              setValidation({
                                ...validation,
                                phone_no: true,
                              });
                            }
                          }}
                        />
                        {validation.valid_phone_no && (
                          <p className="error_text">
                            Please enter a valid mobile number
                          </p>
                        )}
                      </Form.Group>

                      {/* </Form> */}
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      {/* <Form> */}
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1">
                          {/* <Form.Control
                            type="text"
                            placeholder="Email Address"
                          /> */}
                          <InputText
                            //title={"Email"}
                            name="address"
                            placeholder="Enter Message"
                            value={data?.address}
                            //required={validation.email}
                            //onKeyPress={handleKeyPressEvent}
                            onChange={handleChangeEvent}
                          />
                          {validation.valid_address && (
                            <p className="error_text">
                              Please enter a valid Message
                            </p>
                          )}
                        </Form.Group>
                      </Form.Group>
                      <button
                        //type="submit"
                        class="btn-product btn-cart wid_200"
                        onClick={() => handleForm()}
                        disabled={loading}>
                        {!loading ? "Send Message" : "Loading..."}
                      </button>
                      {/* </Form> */}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactSection;

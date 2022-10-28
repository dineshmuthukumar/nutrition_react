

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputPhone from "../../input-phone";
import InputText from "../../input-text";
import InputOTP from "../../input-otp";
import { useLocation, Redirect } from "react-router-dom";
import { useHistory } from "react-router";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

import { getCookies, setCookies } from "../../../utils/cookies";
import {
  user_login_with_email_thunk,
  user_load_by_token_thunk,
  user_login_thunk,
} from "../../../redux/thunk/user_thunk";

import {
  validateEmail,
  validatePassword,
  validateName,
  validInternationalPhone,
  validateNameReplace,
  openWindowBlank,
} from "./../../../utils/common";

import { useQuery } from "./../../../hook/url-params";

import { resendOtpApi, LoginWithOtp } from "../../../api/base-methods";

import "./styles.scss";

const Logincomponent = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const { user } = useSelector((state) => state);
  const history = useHistory();
  const location = useLocation();
  const query = useQuery(location.search);
  const redirect = query.get("redirect");
  const dispatch = useDispatch();
  const [navigate, setNavigate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState("login");
  const [error, setError] = useState();
  const [otp, setOTP] = useState(false);
  const [id, setId] = useState("");
  const [otpValue, setOTPValue] = useState("");
  const [phone, setPhone] = useState("");
  const [verifyLoading, setVerifyLoading] = useState(false);

  const [register, setRegister] = useState({
    name: "",
    email: "",
    accepted_terms_and_condition: "",
  });

  const [login, setLogin] = useState({});
  const [checked, setChecked] = useState(false);

  const [validation, setValidation] = useState({
    name: false,
    valid_name: false,
    email: false,
    valid_email: false,
    phone_no: false,
    valid_phone_no: false,
    accepted_terms_and_condition: false,
  });

  const [lvalidation, setLValidation] = useState({
    phone_no: false,
    valid_phone_no: false,
  });

  const handleKeyPressEvent = (event) => {
    if (event.key === "Enter") {
      handleSignUp();
    }
  };
  useEffect(() => {
    if (user?.login && getCookies()) {
      if (redirect) {
        window.open(redirect, "_self");
      } else {
        if (location.state?.from) {
          history.push(location.state?.from.pathname);
        } else {
          // window.open(`${process.env.REACT_APP_MARKETPLACE_URL}`, "_self");
          history.push("/accounts/profile");
        }
      }
    }
  }, [user, history, location.state?.from, redirect]);

  const handleChangeEvent = (e) => {
    if (e.target.value) {
      if (e.target.name === "name") {
        if (validateName(e.target.value)) {
          setRegister({
            ...register,
            [e.target.name]: validateNameReplace(e.target.value),
          });
          setValidation({ ...validation, [e.target.name]: false });
        }
      } else if (e.target.name === "email") {
        setRegister({ ...register, [e.target.name]: e.target.value.trim() });
        setValidation({ ...validation, [e.target.name]: false });
      } else {
        setRegister({ ...register, [e.target.name]: e.target.value });
        setValidation({ ...validation, [e.target.name]: false });
      }
    } else {
      setRegister({ ...register, [e.target.name]: e.target.value });
      setValidation({ ...validation, [e.target.name]: true });
    }
  };

  const checkValidation = () => {
    let c_validation = { ...validation };
    if (!register.name) {
      c_validation = { ...c_validation, name: true };
    } else {
      if (validateName(register.name)) {
        c_validation = { ...c_validation, valid_name: false };
      } else {
        c_validation = { ...c_validation, valid_name: true };
      }
    }

    if (!register.email) {
      c_validation = { ...c_validation, email: true };
    } else {
      if (validateEmail(register.email)) {
        c_validation = { ...c_validation, valid_email: false };
      } else {
        c_validation = { ...c_validation, valid_email: true };
      }
    }

    if (!register.mobile) {
      c_validation = { ...c_validation, phone_no: true };
    } else {
      if (validInternationalPhone(register.mobile, register.phone_code)) {
        c_validation = { ...c_validation, valid_phone_no: false };
      } else {
        c_validation = { ...c_validation, valid_phone_no: true };
      }
    }
    if (!register.accepted_terms_and_condition) {
      c_validation = { ...c_validation, accepted_terms_and_condition: true };
    }

    setValidation(c_validation);
    if (
      !c_validation.name &&
      !c_validation.valid_name &&
      !c_validation.email &&
      !c_validation.phone_no &&
      !c_validation.valid_email &&
      !c_validation.valid_phone_no &&
      !c_validation.accepted_terms_and_condition
    ) {
      return true;
    } else {
      return false;
    }
  };

  const LogincheckValidation = () => {
    let c_validation = { ...lvalidation };

    if (!login.mobile) {
      c_validation = { ...c_validation, phone_no: true };
    } else {
      if (validInternationalPhone(login.mobile, login.phone_code)) {
        c_validation = { ...c_validation, valid_phone_no: false };
      } else {
        c_validation = { ...c_validation, valid_phone_no: true };
      }
    }

    setLValidation(c_validation);
    if (!c_validation.phone_no && !c_validation.valid_phone_no) {
      return true;
    } else {
      return false;
    }
  };

  const handleSignUp = async () => {
    if (checkValidation()) {
      try {
        setLoading(true);
        setError("");
        // let apiInput = { ...register };
        // console.log(apiInput,"apiInput");
        dispatch(
          user_login_with_email_thunk(
            register,
            setError,
            setOTP,
            setId,
            setLoading
          )
        );
        console.log(otp, "otp");
        console.log(id, "id");
        //setLoading(false);
        // const result = await registerApi(apiInput);
        // console.log(result,"result");
        // if (result.status === 200) {
        //     dispatch(user_load_by_data_thunk(result?.data?.responseData?.user));
        // }
      } catch (err) {
        setLoading(false);
        console.log(err);
        if (err?.status === 422) {
          setError(err?.data?.message);
          if (err?.data?.error_code === 0) {
            //   setError(
            //     "This Email is already associated with a GuardianLink ID. Please Login or use a different email to register."
            //   );
          }
        } else {
          ///toast.error("An unexpected error occured. Please try again ");
          console.log(
            "🚀 ~ file: index.js ~ line 106 ~ handleSignUp ~ err",
            err
          );
        }
      }
    }
  };

  const handleVerifyOTP = async () => {
    setError(null);
    if (otpValue.length === 6) {
      try {
        setError("");
        setVerifyLoading(true);

        const result = await LoginWithOtp({
          id: id,
          otp: otpValue,
        });

        // dispatch(user_login_thunk(login, setError, setOTP));

        setCookies(result?.data?.responseData?.user?.token);
        setVerifyLoading(false);
        setNavigate(true);
        dispatch(
          user_load_by_token_thunk(result?.data?.responseData?.user?.token)
        );
      } catch (error) {
        setVerifyLoading(false);
        setError(
          "It seems you have entered the wrong OTP. Please check the number(s) you have entered."
        );
        console.log(
          "🚀 ~ file: index.js ~ line 172 ~ handleVerifyOTP ~ error",
          error
        );
      }
    } else {
      setError("Please enter the full OTP received through your email.");
    }
  };
  const handleResendOTP = async () => {
    dispatch(
      user_login_thunk(login, setError, setOTP, setId, setShow, setMessage)
    );
    // setShow(true);
    // setMessage("OTP Sent");
  };
  const handleLoginOTP = async () => {
    if (LogincheckValidation()) {
      try {
        setLoading(true);
        setError("");
        // let apiInput = { ...register };
        // console.log(apiInput,"apiInput");
        dispatch(
          user_login_thunk(login, setError, setOTP, setId, setShow, setMessage)
        );
        console.log(otp, "otp");
        console.log(id, "id");
        setLoading(false);
        // setShow(true);
        // setMessage("OTP Sent");
        // const result = await registerApi(apiInput);
        // console.log(result,"result");
        // if (result.status === 200) {
        //     dispatch(user_load_by_data_thunk(result?.data?.responseData?.user));
        // }
      } catch (err) {
        setLoading(false);
        console.log(err);
        if (err?.status === 422) {
          setError(err?.data?.message);
          if (err?.data?.error_code === 0) {
            //   setError(
            //     "This Email is already associated with a GuardianLink ID. Please Login or use a different email to register."
            //   );
          }
        } else {
          ///toast.error("An unexpected error occured. Please try again ");
          console.log(
            "🚀 ~ file: index.js ~ line 106 ~ handleSignUp ~ err",
            err
          );
        }
      }
    }
  };

  return (
    <>
      <div className="login-popup">
        <div className="form-box">
          <div className="tab tab-nav-simple tab-nav-boxed form-tab">
            <ul
              className="nav nav-tabs nav-fill align-items-center border-no justify-content-center mb-5"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    tab == "login" ? "active" : ""
                  } border-no lh-1 ls-normal`}
                  href="#signin"
                  onClick={() => {
                    setTab("login");
                    setOTP("");
                    setError("");
                    setNavigate("");
                    setVerifyLoading("");
                    setLoading(false);
                  }}
                >
                  Login
                </a>
              </li>
              <li className="delimiter">or</li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    tab == "register" ? "active" : ""
                  } border-no lh-1 ls-normal`}
                  onClick={() => {
                    setTab("register");
                    setOTP("");
                    setError("");
                    setNavigate("");
                    setVerifyLoading("");
                    setLoading(false);
                  }}
                >
                  Register
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className={`tab-pane ${tab == "login" ? "active" : ""}`}
                id="signin"
              >
                {otp ? (
                  <>
                    <div>
                      <h1>Enter the OTP</h1>{" "}
                      <div onClick={() => setOTP(false)}>Change</div>
                      <div className="form-group">
                        <InputOTP
                          onChange={(e) => setOTPValue(e)}
                          value={otpValue}
                        />
                      </div>
                      <button
                        type="button"
                        className="bl_btn"
                        onClick={handleVerifyOTP}
                        disabled={verifyLoading || navigate}
                      >
                        {navigate ? (
                          "Verified Successfully, please wait..."
                        ) : (
                          <>{verifyLoading ? "Verifying..." : "Continue"}</>
                        )}
                      </button>
                      {error && (
                        <p className="error_text text-center">{error}</p>
                      )}
                    </div>
                    <div className="form-footer py-3">
                      <div className="form-checkbox">
                        <input
                          type="checkbox"
                          className="custom-checkbox"
                          id="signin-remember"
                          name="signin-remember"
                        />
                        <label
                          className="form-control-label"
                          for="signin-remember"
                        >
                          Remember me
                        </label>
                      </div>
                      <a
                        href="#"
                        className="lost-link"
                        onClick={() => handleResendOTP()}
                      >
                        Resend code
                      </a>
                    </div>
                  </>
                ) : (
                  <div>
                    <div className="form-group">
                      <InputPhone
                        title={"Mobile"}
                        defaultCountry={"+91"}
                        value={login.mobile}
                        required={lvalidation.phone_no}
                        onChange={(e, c_code) => {
                          setLogin({
                            ...login,
                            mobile: e,
                            phone_code: c_code?.countryCode?.toUpperCase(),
                          });
                          if (e) {
                            setValidation({ ...lvalidation, phone_no: false });
                          } else {
                            setValidation({ ...lvalidation, phone_no: true });
                          }
                        }}
                      />
                      {lvalidation.valid_phone_no && (
                        <p className="error_text">
                          Please enter a valid mobile number
                        </p>
                      )}
                    </div>

                    <button
                      className="btn btn-dark btn-block btn-rounded"
                      type="submit"
                      onClick={handleLoginOTP}
                      disabled={loading}
                    >
                      {loading ? "Loading" : "Request OTP"}
                    </button>

                    {(() => {
                      if (error === "confirm-email") {
                        return "";
                      } else if (error === "login-locked") {
                        return (
                          <p className="error_text text-center">
                            Your login has been disabled because we detected a
                            suspicions activity on your account.{" "}
                            <a href="https://help.jump.trade/en/support/solutions/articles/84000345960-why-is-my-login-disabled-">
                              Learn more
                            </a>
                          </p>
                        );
                      } else {
                        return (
                          <p className="error_text text-center">{error}</p>
                        );
                      }
                    })()}
                  </div>
                )}
                {/* <div className="form-choice text-center">
                  <label className="ls-m">or Login With</label>
                  <button
                    className="btn btn-dark btn-block btn-rounded"
                    type="submit"
                  >
                    Request OTP
                  </button>
                </div> */}
              </div>
              <div
                className={`tab-pane ${tab == "register" ? "active" : ""}`}
                id="register"
              >
                {otp ? (
                  <div>
                    <h1>Enter the OTP</h1>{" "}
                    <div onClick={() => setOTP(false)}>Change</div>
                    <div className="form-group">
                      <InputOTP
                        onChange={(e) => setOTPValue(e)}
                        value={otpValue}
                      />
                    </div>
                    <button
                      type="button"
                      className="bl_btn"
                      onClick={handleVerifyOTP}
                      disabled={verifyLoading || navigate}
                    >
                      {navigate ? (
                        "Verified Successfully, please wait..."
                      ) : (
                        <>{verifyLoading ? "Verifying..." : "Continue"}</>
                      )}
                    </button>
                    {error && <p className="error_text text-center">{error}</p>}
                  </div>
                ) : (
                  <>
                    <div>
                      <div className="form-group">
                        <InputText
                          title={"Name"}
                          name="name"
                          placeholder="Enter Name"
                          value={register.name}
                          required={validation.name}
                          onKeyPress={handleKeyPressEvent}
                          onChange={handleChangeEvent}
                        />
                        {validation.valid_name && (
                          <p className="error_text">
                            Please enter a valid name
                          </p>
                        )}
                      </div>
                      <div className="form-group">
                        <InputText
                          title={"Email"}
                          name="email"
                          placeholder="Enter Email"
                          required={validation.email}
                          value={register.email}
                          onKeyPress={handleKeyPressEvent}
                          onChange={handleChangeEvent}
                        />
                        {validation.valid_email && (
                          <p className="error_text">
                            Please enter a valid email address
                          </p>
                        )}
                      </div>

                      <div className="form-group">
                        <InputPhone
                          title={"Mobile"}
                          defaultCountry={"+91"}
                          value={register.mobile}
                          required={validation.phone_no}
                          onEnterKeyPress={handleSignUp}
                          onChange={(e, c_code) => {
                            setRegister({
                              ...register,
                              mobile: e,
                              phone_code: c_code?.countryCode?.toUpperCase(),
                            });
                            if (e) {
                              setValidation({ ...validation, phone_no: false });
                            } else {
                              setValidation({ ...validation, phone_no: true });
                            }
                          }}
                        />
                        {validation.valid_phone_no && (
                          <p className="error_text">
                            Please enter a valid mobile number
                          </p>
                        )}
                      </div>

                      <div className="form-footer">
                        <div className="form-checkbox">
                          <input
                            type="checkbox"
                            className="custom-checkbox"
                            onChange={handleChangeEvent}
                            name="accepted_terms_and_condition"
                            id="register-agree"
                          />
                          <label
                            className="form-control-label"
                            for="register-agree"
                          >
                            I agree to the privacy policy
                          </label>
                          {validation.accepted_terms_and_condition && (
                            <p className="error_text">
                              Please check the Terms and Condition
                            </p>
                          )}
                        </div>
                      </div>
                      <button
                        className="btn btn-dark btn-block btn-rounded"
                        disabled={loading}
                        type="button"
                        onClick={handleSignUp}
                      >
                        {loading ? "Loading..." : "Register"}
                      </button>

                      {(() => {
                        if (error === "confirm-email") {
                          return "";
                        } else if (error === "login-locked") {
                          return (
                            <p className="error_text text-center">
                              Your login has been disabled because we detected a
                              suspicions activity on your account.{" "}
                              <a href="https://help.jump.trade/en/support/solutions/articles/84000345960-why-is-my-login-disabled-">
                                Learn more
                              </a>
                            </p>
                          );
                        } else {
                          return (
                            <p className="error_text text-center">{error}</p>
                          );
                        }
                      })()}
                    </div>

                    <div className="form-choice text-center">
                      <label className="ls-m">or Register With</label>
                    </div>
                  </>
                )}
              </div>
            </div>

            <Col sm={4}>
              {/* Toast Message Start */}
              <Row>
                <Col xs={6}>
                  <Toast
                    onClose={() => setShow(false)}
                    show={show}
                    delay={3000}
                    autohide
                  >
                    {/* <Toast.Header>
                      <strong className="me-auto">Bootstrap</strong>
                      <small>
                        <p>11 mins ago</p>
                      </small>
                    </Toast.Header> */}
                    <Toast.Body>
                      <p>{message}</p>
                    </Toast.Body>
                  </Toast>
                  {/* <Button className="toast_btn" onClick={() => setShow(true)}>Show Toast</Button> */}
                </Col>
              </Row>
              {/* Toast Message End */}
            </Col>
          </div>
        </div>
      </div>
    </>
  );
};



export default Logincomponent;
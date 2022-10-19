

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputPhone from "../../input-phone";
import InputText from "../../input-text";

import { registerApi } from "../../../api/base-methods"
import {
    user_load_by_data_thunk
  } from "../../../redux/thunk/user_thunk";

import {
    validateEmail,
    validatePassword,
    validateName,
    validInternationalPhone,
    validateNameReplace,
    openWindowBlank,
  } from "./../../../utils/common";

  import "./styles.scss";

const Logincomponent = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const [register, setRegister] = useState({
        name: "",
        email: "",
        accepted_terms_and_condition: "",
      });
    const [checked, setChecked] = useState(false);


    const [validation, setValidation] = useState({
        name: false,
        valid_name: false,
        email: false,
        valid_email: false,
        phone_no: false,
        valid_phone_no: false,
        accepted_terms_and_condition: false
      });

      const handleKeyPressEvent = (event) => {
        if (event.key === "Enter") {
          handleSignUp();
        }
      };

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

      const handleSignUp = async () => {
        if (checkValidation()) {
            try {
                setLoading(true);
                let apiInput = { ...register };
                console.log(apiInput,"apiInput");
                const result = await registerApi(apiInput);
                console.log(result,"result");
                if (result.status === 200) {
                    dispatch(user_load_by_data_thunk(result?.data?.responseData?.user));
                }

            } catch (err) {
                setLoading(false);
                    console.log(err);
                    if (err?.status === 422) {
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
        //   try {
        //     setLoading(true);
    
        //     let apiInput = { ...register };
    
        //     if (!checked) {
        //       apiInput = { ...register };
        //     }


    
            //const result = await registerApi(apiInput);
    
            // if (result.status === 201) {
            //   setRegisterSuccess(true);
    
              // XENA Marketing Registration Endpoint
            //   if (getCookiesByName("aid")) {
            //     const response = await xena({
            //       code: 10033,
            //       uid: result?.data?.data?.user_id,
            //       aid: getCookiesByName("aid"),
            //       campaign: getCookiesByName("campaign"),
            //       source: getCookiesByName("source"),
            //       vid: getCookiesByName("vid"),
            //       click_id: getCookiesByName("click_id"),
            //       event_name: "registration",
            //     });
            //     if (process.env.REACT_APP_MARKETING_SCRIPT === "enabled") {
            //       mixpanel.track("Sign up");
            //     }
            //     response.status === 200 && window.open("/signup/success", "_self");
            //   } else {
            //     if (process.env.REACT_APP_MARKETING_SCRIPT === "enabled") {
            //       mixpanel.track("Sign up");
            //     }
            //     window.open("/signup/success", "_self");
            //   }
          //  }
        //   } catch (err) {
        //     setLoading(false);
        //     console.log(err);
        //     if (err?.status === 422) {
        //       if (err?.data?.error_code === 0) {
                
        //           setError(
        //             "This Email is already associated with a GuardianLink ID. Please Login or use a different email to register."
        //           );
        //       }
        //     } else {
        //       toast.error("An unexpected error occured. Please try again ");
        //       console.log(
        //         "🚀 ~ file: index.js ~ line 106 ~ handleSignUp ~ err",
        //         err
        //       );
        //     }
        //   }
    
        //   setLoading(false);
       }
      };

return (  <>        
        <div className="login-popup">
                        <div className="form-box">
                            <div className="tab tab-nav-simple tab-nav-boxed form-tab">
                                <ul className="nav nav-tabs nav-fill align-items-center border-no justify-content-center mb-5"
                                    role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active border-no lh-1 ls-normal" href="#signin">Login</a>
                                    </li>
                                    <li className="delimiter">or</li>
                                    <li className="nav-item">
                                        <a className="nav-link border-no lh-1 ls-normal" href="#register">Register</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane" id="signin">
                                        <form action="#">
                                            <div className="form-group mb-3">
                                                <input type="text" className="form-control" id="singin-email" name="singin-email" placeholder="Mobile or Email *" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="singin-password" name="singin-password" placeholder="please Enter OTP *" required />
                                            </div>
                                            <div className="form-footer">
                                                <div className="form-checkbox">
                                                    <input type="checkbox" className="custom-checkbox" id="signin-remember" name="signin-remember" />
                                                    <label className="form-control-label" for="signin-remember">Remember me</label>
                                                </div>
                                                <a href="#" className="lost-link">Resend code</a>
                                            </div>
                                            <button className="btn btn-dark btn-block btn-rounded" type="submit">Login</button>
                                        </form>
                                        <div className="form-choice text-center">
                                            <label className="ls-m">or Login With</label>
                                            <button className="btn btn-dark btn-block btn-rounded" type="submit">Request OTP</button>
                                        </div>
                                    </div>
                                    <div className="tab-pane active" id="register">
                                        <form action="#">
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
                                                    <p className="error_text">Please enter a valid name</p>
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
                                        {/* <div className="form-group">
                                                <input type="password" className="form-control" id="register-password" name="register-password" placeholder="Password *" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="register-password" name="register-password" placeholder="Confirm Password *" required />
                                            </div> */}
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
                                                    <input type="checkbox" className="custom-checkbox"  onChange={handleChangeEvent} name="accepted_terms_and_condition" id="register-agree"  />
                                                    <label className="form-control-label" for="register-agree">I agree to the privacy policy</label>
                                                    {validation.accepted_terms_and_condition && (
                                                        <p className="error_text">
                                                            Please check the Terms and Condition
                                                        </p>
                                                     )}
                                                </div>
                                            </div>
                                            <button className="btn btn-dark btn-block btn-rounded" disabled={loading}
                                                type="button"
                                                onClick={handleSignUp}>Register</button>
                                        </form>
                                        <div className="form-choice text-center">
                                            <label className="ls-m">or Register With</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    );

}



export default Logincomponent;
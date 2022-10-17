

import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";


import "./styles.scss";

const Logincomponent = () => {

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
                                    <div className="tab-pane active" id="signin">
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
                                    <div className="tab-pane" id="register">
                                        <form action="#">
                                            <div className="form-group">
                                                <input type="email" className="form-control" id="register-email" name="register-email" placeholder="Your Email address *" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="register-password" name="register-password" placeholder="Password *" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="register-password" name="register-password" placeholder="Confirm Password *" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="tel" className="form-control" id="register-tel" name="register-tel" placeholder="Mobile Number *" required />
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" type="date" value="" id="example-date-input" placeholder="Date of Birth" />
                                            </div>

                                            <div className="form-footer">
                                                <div className="form-checkbox">
                                                    <input type="checkbox" className="custom-checkbox" id="register-agree"
                                                        name="register-agree" required />
                                                    <label className="form-control-label" for="register-agree">I agree to the privacy policy</label>
                                                </div>
                                            </div>
                                            <button className="btn btn-dark btn-block btn-rounded" type="submit">Register</button>
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
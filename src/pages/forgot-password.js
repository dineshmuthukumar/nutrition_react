import React from "react";
import { useTranslation } from "react-multi-lang";
import Header from "./../components/header";
import rectImg from "./../images/Rectangle.png";
import ForgotPasswordComponent from "./../components/forgot-password";
import OtpComponent from "./../components/otp";

const ForgotPassword = () => {
  const t = useTranslation();

  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5 col-sm-10 mt-5">
            <h2>{t("forgotpassword")}</h2>
            <small>{t("homedesc")}</small>
            <ForgotPasswordComponent />
            <OtpComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;

import React from "react";
import Header from "./../components/header";
import rectImg from "./../images/Rectangle.png";
import RegisterComponent from "./../components/register";
import { useTranslation } from "react-multi-lang";
import OtpComponent from "./../components/otp";

const Register = () => {
  const t = useTranslation();

  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5 col-sm-10 mt-5">
            <h2>{t("register")}</h2>
            <small>{t("homedesc")}</small>
            <RegisterComponent />
            {/* <OtpComponent /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

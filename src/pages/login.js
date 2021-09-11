import React from "react";
import { useTranslation } from "react-multi-lang";
import Header from "./../components/header";
import LoginComponent from "./../components/login";

const Login = () => {
  const t = useTranslation();

  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5 col-sm-10 mt-5">
            <h2>{t("logintitle")}</h2>
            <small>{t("logindesc")}</small>
            <LoginComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

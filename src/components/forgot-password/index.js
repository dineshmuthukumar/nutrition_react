import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-multi-lang";
import InputText from "../input-text";

const ForgotPasswordComponent = () => {
  const t = useTranslation();

  return (
    <div className="bg-white mt-3 p-5 rounded">
      <div className="form-group mb-4">
        <InputText type="email" title={t("emailaddress")} />
      </div>

      <div className="form-group d-flex justify-content-between">
        <small className="text-secondary">
          <Link to="/signup">{t("signup")}</Link>
        </small>
        <small className="text-secondary">
          <Link to="/signin">{t("signin")}</Link>
        </small>
      </div>
      <div className="form-group mt-2">
        <button type="button" className="btn btn-primary btn-lg w-100">
          {t("sendemail")}
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordComponent;

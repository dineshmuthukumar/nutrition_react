import React from "react";
import { useTranslation } from "react-multi-lang";
import InputText from "./../input-text";

const ValidateProfile = () => {
  const t = useTranslation();
  return (
    <div className="bg-white mt-3 p-5 rounded">
      <h4> {t("validateyourprofile")}</h4>
      <small>{t("validatedesc")}</small>
      <div className="form-group mb-4 mt-3">
        <InputText title={t("emailaddress")} type="email" />
      </div>

      <div className="form-group mt-2">
        <button type="button" className="btn btn-primary btn-lg w-100">
          {t("validate")}
        </button>
      </div>
    </div>
  );
};

export default ValidateProfile;

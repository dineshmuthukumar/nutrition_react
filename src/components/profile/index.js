import React, { useRef } from "react";
import { BiCamera } from "react-icons/bi";
import { useTranslation } from "react-multi-lang";
import InputText from "../input-text";
import InputTextArea from "./../input-textarea";

import "./style.scss";

const ProfileInformation = () => {
  const t = useTranslation();
  const profileImageRef = useRef(null);

  const handleIconChange = (input) => {
    // for (let file of input.target.files) {
    //   const reader = new FileReader();
    //   reader.onload = (event) => {
    //     set_new_collection({
    //       ...new_collection,
    //       icon_input: { type: file.type, base64: event.target.result },
    //     });
    //   };
    //   reader.readAsDataURL(file);
    // }
  };
  return (
    <div className="bg-white mt-3 p-5 rounded profile">
      <h4 className="mb-3"> {t("profileinformation")}</h4>

      <div className="row">
        <div className="col-12 col-md-4 p-4">
          <div className="profile-image">
            <img src="https://cdn1.iconfinder.com/data/icons/essential-21/128/User-512.png" />
            <input
              type="file"
              accept="image/*"
              ref={profileImageRef}
              style={{ display: "none" }}
              onChange={handleIconChange}
            />
            <button
              type="button"
              className="update-image"
              onClick={() => profileImageRef.current.click()}
            >
              <BiCamera size={40} />
            </button>
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <InputText title={t("displayname")} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <InputText title={t("username")} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <InputText title={t("emailaddress")} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <InputText title={t("sociallink")} />
            </div>
            <div className="col-12 mb-3">
              <div className="form-group mb-4">
                <InputTextArea title={t("bio")} rows={3} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="form-group mt-2 text-end">
        <button type="button" className="btn btn-primary">
          {t("updateprofile")}
        </button>
      </div>
    </div>
  );
};

export default ProfileInformation;

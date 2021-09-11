import React, { useState } from "react";
import { useTranslation } from "react-multi-lang";
import { useToasts } from "react-toast-notifications";
import { Link } from "react-router-dom";

import InputText from "../input-text";
import InputPhone from "./../input-phone";
import { registerApi } from "./../../api/methods";
import {
  validateEmail,
  validatePhone,
  passwordLength,
} from "./../../utils/common";
import { BiCheckCircle } from "react-icons/bi";

// import { w3cwebsocket as W3CWebSocket } from "websocket";
//const client = new W3CWebSocket("ws://192.168.19.33:9898");

const RegisterComponent = () => {
  const { addToast } = useToasts();

  // useEffect(() => {
  //   client.onopen = () => {
  //     console.log("WebSocket Client Connected");
  //   };
  //   client.onmessage = (message) => {
  //     console.log(message);
  //   };
  // }, []);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [register, setRegister] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    c_password: "",
    phone_no: "",
  });

  const [validation, setValidation] = useState({
    first_name: false,
    last_name: false,
    email: false,
    password: false,
    c_password: false,
    phone_no: false,
  });

  const handleChangeEvent = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
    if (e.target.value) {
      setValidation({ ...validation, [e.target.name]: false });
    } else {
      setValidation({ ...validation, [e.target.name]: true });
    }
  };

  const checkValidation = () => {
    let c_validation = { ...validation };
    if (!register.first_name) {
      c_validation = { ...c_validation, first_name: true };
    }

    if (!register.last_name) {
      c_validation = { ...c_validation, last_name: true };
    }
    if (!register.email) {
      c_validation = { ...c_validation, email: true };
    }
    if (!register.password) {
      c_validation = { ...c_validation, password: true };
    }
    if (!register.c_password) {
      c_validation = { ...c_validation, c_password: true };
    }
    if (!register.phone_no) {
      c_validation = { ...c_validation, phone_no: true };
    }

    setValidation(c_validation);
    if (
      !c_validation.first_name &&
      !c_validation.last_name &&
      !c_validation.email &&
      !c_validation.password &&
      !c_validation.c_password &&
      !c_validation.phone_no
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSignUp = async () => {
    if (checkValidation()) {
      if (validateEmail(register.email)) {
        if (register.password === register.c_password) {
          if (register.password.length >= passwordLength) {
            if (validatePhone(register.phone_no)) {
              try {
                setLoading(true);

                let apiInput = { ...register };
                delete apiInput.c_password;

                const result = await registerApi(apiInput);
                if (result.status === 201) {
                  setSuccess(true);
                } else if (result.status === 422) {
                  if (!result.data.success) {
                    addToast(result.data.message, {
                      appearance: "warning",
                      autoDismiss: true,
                      autoDismissTimeout: 5000,
                    });
                  }
                } else {
                  addToast("Something went wrong, please try again", {
                    appearance: "error",
                    autoDismiss: true,
                  });
                }
              } catch (err) {
                setLoading(false);

                addToast("Something went wrong, please try again", {
                  appearance: "error",
                  autoDismiss: true,
                });
                console.log(
                  "🚀 ~ file: index.js ~ line 106 ~ handleSignUp ~ err",
                  err
                );
              }

              setLoading(false);
            } else {
              addToast("Invalid mobile number", {
                appearance: "warning",
                autoDismiss: true,
              });
            }
          } else {
            addToast("Password should be minimum 6 charaters", {
              appearance: "warning",
              autoDismiss: true,
            });
          }
        } else {
          addToast("Password not match", {
            appearance: "warning",
            autoDismiss: true,
          });
        }
      } else {
        addToast("Invalid email address", {
          appearance: "warning",
          autoDismiss: true,
        });
      }
    }
  };

  const handleKeyPressEvent = (event) => {
    if (event.key === "Enter") {
      handleSignUp();
    }
  };

  const t = useTranslation();
  return (
    <div className="bg-white mt-3 p-5 rounded">
      {success ? (
        <div className="text-center">
          <BiCheckCircle size="80" color={"green"} />
          <h5 className="mt-3">Registration Successful</h5>
          <p>A confirmation link is sent to your email address</p>
        </div>
      ) : (
        <>
          <div className="form-group mb-3">
            <InputText
              title={t("firstname")}
              name="first_name"
              value={register.first_name}
              required={validation.first_name}
              onKeyPress={handleKeyPressEvent}
              onChange={handleChangeEvent}
            />
          </div>
          <div className="form-group mb-3">
            <InputText
              title={t("lastname")}
              name="last_name"
              value={register.last_name}
              required={validation.last_name}
              onKeyPress={handleKeyPressEvent}
              onChange={handleChangeEvent}
            />
          </div>
          <div className="form-group mb-3">
            <InputText
              title={t("emailaddress")}
              name="email"
              required={validation.email}
              value={register.email}
              onKeyPress={handleKeyPressEvent}
              onChange={handleChangeEvent}
            />
          </div>
          <div className="form-group mb-3">
            <InputText
              title={t("password")}
              type="password"
              name="password"
              required={validation.password}
              value={register.password}
              onKeyPress={handleKeyPressEvent}
              onChange={handleChangeEvent}
            />
          </div>
          <div className="form-group mb-3">
            <InputText
              title={t("confirmpassword")}
              type="password"
              name="c_password"
              required={validation.c_password}
              value={register.c_password}
              onKeyPress={handleKeyPressEvent}
              onChange={handleChangeEvent}
            />
          </div>
          <div className="form-group mb-3">
            <InputPhone
              title={t("mobile")}
              value={register.phone_no}
              required={validation.phone_no}
              onEnterKeyPress={handleSignUp}
              onChange={(e) => {
                setRegister({ ...register, phone_no: e });
                if (e) {
                  setValidation({ ...validation, phone_no: false });
                } else {
                  setValidation({ ...validation, phone_no: true });
                }
              }}
            />
          </div>
          <div className="form-group mt-2 mb-3">
            <button
              disabled={loading}
              type="button"
              className="btn btn-primary"
              onClick={handleSignUp}
            >
              {loading ? "Loading..." : t("signup")}
            </button>
          </div>
          <div className="form-group mt-2">
            <small className="text-secondary">
              {t("haveaccount")} <Link to="/signin">{t("signin")}</Link>
            </small>
          </div>
        </>
      )}
    </div>
  );
};

export default RegisterComponent;

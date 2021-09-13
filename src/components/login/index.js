import React, { useState, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-multi-lang";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import InputText from "../input-text";
import { user_login_thunk } from "./../../redux/thunk/user_thunk";
import { validateEmail, passwordLength } from "./../../utils/common";

const LoginComponent = () => {
  const t = useTranslation();
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log("🚀 ~ file: index.js ~ line 17 ~ LoginComponent ~ user", user);
  const history = useHistory();
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [validation, setValidation] = useState({
    email: false,
    password: false,
  });

  useEffect(() => {
    if (user.login) {
      if (location.state?.from) {
        history.push(location.state?.from.pathname);
      } else {
        history.push("/");
      }
    }
  }, [user]);

  const handleLogin = () => {
    if (checkValidation()) {
      if (validateEmail(login.email)) {
        const { email, password } = login;
        if (email && password) {
          if (validateEmail(email)) {
            if (password.length >= passwordLength) {
              dispatch(user_login_thunk(login, addToast));
            } else {
              addToast("Password should be minimum 6 charaters", {
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
        } else {
          addToast("Email and Password is required", {
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

  const checkValidation = () => {
    let c_validation = { ...validation };

    if (!login.email) {
      c_validation = { ...c_validation, email: true };
    }
    if (!login.password) {
      c_validation = { ...c_validation, password: true };
    }

    setValidation(c_validation);
    if (!c_validation.email && !c_validation.password) {
      return true;
    } else {
      return false;
    }
  };

  const handleChangeEvent = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    if (e.target.value) {
      setValidation({ ...validation, [e.target.name]: false });
    } else {
      setValidation({ ...validation, [e.target.name]: true });
    }
  };

  const handleKeyPressEvent = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="bg-white mt-3 p-5 rounded">
      <div className="form-group mb-4">
        <InputText
          title={t("emailaddress")}
          required={validation.email}
          name="email"
          onChange={handleChangeEvent}
          onKeyPress={handleKeyPressEvent}
          value={login.email}
        />
      </div>

      <div className="form-group">
        <InputText
          title={t("password")}
          required={validation.password}
          type="password"
          name="password"
          onChange={handleChangeEvent}
          value={login.password}
          onKeyPress={handleKeyPressEvent}
        />
      </div>
      <div className="form-group text-end mt-2">
        <small className="text-secondary">
          <Link to="/forgot-password">{t("forgotpassword")}</Link>
        </small>
      </div>
      <div className="form-group mt-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleLogin}
          disabled={user.loading}
        >
          {user.loading ? "Loading..." : t("signin")}
        </button>
      </div>
      <div className="form-group mt-2">
        <small className="text-secondary">
          {t("donthaveaccount")} <Link to="/signup">{t("signup")}</Link>
        </small>
      </div>
    </div>
  );
};

export default LoginComponent;

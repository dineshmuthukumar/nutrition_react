import React, { useState } from "react";
import axios from "../utils/axios-utils";
import { useToasts } from "react-toast-notifications";
import { set_user } from "./auth";
import { connect } from "react-redux";
import { user_login_action } from "./../redux/actions/user_action";

const Login = (props) => {
  const { addToast } = useToasts();

  const [login, set_login] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!login.username) {
      addToast("Username Required", {
        appearance: "warning",
        autoDismiss: true,
      });

      return false;
    }

    if (!login.password) {
      addToast("Password Required", {
        appearance: "warning",
        autoDismiss: true,
      });

      return false;
    }

    axios
      .post(`${axios.defaults.baseURL}auth/login`, login)
      .then((response) => {
        addToast("Login successfull", {
          appearance: "success",
          autoDismiss: true,
        });
        set_user(response.data.data);
        props.user_login_action(response.data.data);
        props.history.push("/web");
      })
      .catch((error) => {
        if (error.status === 401) {
          addToast("Password Invalid", {
            appearance: "error",
            autoDismiss: true,
          });
        }

        if (error.status === 404) {
          addToast("User Invalid", {
            appearance: "error",
            autoDismiss: true,
          });
        }
        console.log(error, error.status);
      });
  };

  return (
    <>
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="text-center">
                <h3>Welcome to rukx-stockist app</h3>
              </div>
              <div className="w-25 m-auto">
                <div className="form-group">
                  <label>User Name</label>
                  <input
                    className="form-control"
                    type="text"
                    onChange={(e) =>
                      set_login({ ...login, username: e.target.value })
                    }
                  ></input>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    className="form-control"
                    type="password"
                    onChange={(e) =>
                      set_login({ ...login, password: e.target.value })
                    }
                  ></input>
                </div>
                <div className="form-group text-center">
                  <button type="submit" className="btn btn-dark">
                    Launch
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    user_login_action: (input) => {
      dispatch(user_login_action(input));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

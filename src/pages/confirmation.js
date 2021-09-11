import React, { useState, useEffect } from "react";
import { BiCheckDouble } from "react-icons/bi";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Header from "./../components/header/index";

const Confirmation = () => {
  const history = useHistory();
  const [seconds, setSeconds] = useState(5);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        history.push("/signin");
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [seconds]);

  return (
    <>
      <Header hideOptions />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5 col-sm-10 mt-5 text-center">
            <div className="bg-white rounded p-5">
              <BiCheckDouble size={80} color={"green"} />
              <h2>Confirmation</h2>
              <p>
                Account verified successfully please{" "}
                <Link to="/signin"> login </Link> to continue
              </p>
              <small>Redirecting to login page in {seconds} seconds</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirmation;

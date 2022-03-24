import React from "react";

import { BsExclamationCircle } from "react-icons/bs";
import { Navbar, Nav, Dropdown, Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <>
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{
            height: "100vh",
          }}
        >
          <center>
            <Navbar.Brand
              onClick={() =>
                window.open(process.env.REACT_APP_WEBSITE_URL, "_blank")
              }
              role="button"
              className="not-found"
            >
              BeyondLife.club
              <div
                className="sub-not-found not-found-powereby "
                role="button"
                onClick={() =>
                  window.open(process.env.REACT_APP_GUARDIAN_URL, "_blank")
                }
              >
                Powered by GuardianLink
              </div>
            </Navbar.Brand>
            {/* <br /> */}
            {/* <br /> */}
            <table border="0" align="center" cellpadding="4">
              <tbody>
                <tr>
                  <td>
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/common/kailey-kitty._CB485935150_.gif"
                      width="50"
                      height="45"
                    />
                  </td>
                  <td valign="middle" class="sans">
                    <b class="h1">Looking for something?</b>
                    <br />
                    We're sorry. The Web address you entered is not a
                    functioning page on our site.
                    <br />
                    <br />
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/common/orange-arrow._CB485935542_.gif"
                      width="10"
                      height="9"
                    />
                    <b>
                      Go to Marketplace{" "}
                      <a href="https://marketplace.beyondlife.club/">Home</a>{" "}
                      Page
                    </b>
                  </td>
                </tr>
              </tbody>
            </table>
          </center>
        </div>
      </div>
    </>
  );
};

export default NotFound;

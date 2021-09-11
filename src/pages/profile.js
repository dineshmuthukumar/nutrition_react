import React from "react";
import { Tabs, Tab, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router";

import Header from "./../components/header";
import ProfileInformation from "./../components/profile";
import ValidateProfile from "../components/validate-profile";
import CardDetails from "./../components/card-details";
import CryptoDetails from "./../components/crypto-details";

const Profile = () => {
  const location = useLocation();
  const history = useHistory();
  const hash = location.hash.replace("#", "");

  return (
    <>
      <Header />
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <Tabs
              defaultActiveKey={hash}
              className="mb-3"
              onSelect={(data) => history.push(`${location.pathname}#${data}`)}
            >
              <Tab eventKey="home" title="Profile">
                <ProfileInformation />
              </Tab>
              <Tab eventKey="wallet" title="Wallet">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <div>
                    <Nav variant="pills" className="flex-row">
                      <Nav.Item>
                        <Nav.Link eventKey="first" role="button">
                          Card
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" role="button">
                          Crypto
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>

                  <div>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <CardDetails />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <CryptoDetails />
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Tab.Container>
              </Tab>
              <Tab eventKey="activity" title="Activities">
                <ValidateProfile />
              </Tab>
              <Tab eventKey="settings" title="Settings">
                <ValidateProfile />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

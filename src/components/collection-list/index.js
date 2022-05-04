import React from "react";
import { useHistory } from "react-router";
import CollectionOne from "../../images/jump-trade/collection-1.gif";
import CollectionTwo from "../../images/jump-trade/collection-2.gif";
import "./style.scss";

const CollectionList = () => {
  const history = useHistory();
  return (
    <>
      <section className="collection-list-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="section-heading">
                <span className="main-title">COLLECTIONS</span>{" "}
                <span className="sub-title">CHECK IT OUT</span>
              </h1>

              <article className="collection-list">
                <div
                  className="collection-box"
                  onClick={() =>
                    history.push("/explore/category/3WAoJq4KtGY72QdN")
                  }
                >
                  <img src={CollectionOne} className="collection-img" />
                  <h4
                    style={{
                      textShadow: "3px 3px #093824",
                      textTransform: "uppercase",
                    }}
                  >
                    Meta Cricket League Players
                  </h4>
                </div>
                <div
                  className="collection-box"
                  onClick={() =>
                    history.push("/explore/category/5LpmjlAwtGEqK3rO")
                  }
                >
                  <img src={CollectionTwo} className="collection-img" />
                  <h4
                    style={{
                      textShadow: "3px 3px #093824",
                      textTransform: "uppercase",
                    }}
                  >
                    Meta Cricket League Signed Bat
                  </h4>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionList;

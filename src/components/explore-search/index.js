import React from "react";
import { VscSearch } from "react-icons/vsc";

import "./style.scss";
const ExploreSearch = () => {
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-12 ">
            <div className="search-block">
              <h4>Marketplace</h4>

              <div className={`input-search-container mt-5 mb-5`}>
                <input type="text" className="input-search" maxLength={20} />
                <VscSearch className="search-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreSearch;

import React from "react";
import "./style.scss";
import {IoIosCheckmark} from "react-icons/io"

const Seller = ({image}) => {
  return <>
    <div class="col-xl-3 col-lg-3 col-sm-6">
      <article className="user-card">
        <h5 className="user-count"> 1 </h5>
        <figure>
          <img src={image} alt="userImge" />
          <IoIosCheckmark className="user-verify" />
        </figure>
        <div className="user-content">
          <h3 className="user-name">James</h3>
          <h4 className="user-price">$480,000.00</h4>
        </div>
      </article>
    </div>
  </>;
};

export default Seller;

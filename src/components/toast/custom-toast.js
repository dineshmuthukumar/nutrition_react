import React from "react";
import { FiCheckCircle, FiAlertTriangle, FiInfo } from "react-icons/fi";
import { RiCloseCircleLine } from "react-icons/ri";

import "./style.scss";

const CustomToastComponent = (props) => {
  const { appearance, children } = props;
  return (
    <>
      {(() => {
        if (appearance === "warning") {
          return (
            <div className="r-toast-container warning">
              <div className="icon">
                <FiAlertTriangle></FiAlertTriangle>
              </div>
              <div className="toast-content">{children}</div>
            </div>
          );
        } else if (appearance === "success") {
          return (
            <div className="r-toast-container success">
              <div className="icon">
                <FiCheckCircle></FiCheckCircle>
              </div>
              <div className="toast-content">{children}</div>
            </div>
          );
        } else if (appearance === "error") {
          return (
            <div className="r-toast-container error">
              <div className="icon">
                <RiCloseCircleLine></RiCloseCircleLine>
              </div>
              <div className="toast-content">{children}</div>
            </div>
          );
        } else if (appearance === "info") {
          return (
            <div className="r-toast-container info">
              <div className="icon">
                <FiInfo></FiInfo>
              </div>
              <div className="toast-content">{children}</div>
            </div>
          );
        }
      })()}
    </>
  );
};

export default CustomToastComponent;

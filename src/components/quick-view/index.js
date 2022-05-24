import React from "react";
//import { useHistory } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";

const QuickView = ({ children, show = true, onHide = () => {} }) => {
  // const history = useHistory();

  return (
    <Offcanvas show={show} placement="end" className="w-100 w-md-100 w-lg-100">
      <Offcanvas.Body className="p-0 pop-cancel-body-container">
        {children}

        {/* {history.length > 2 && (
          <button type="button" onClick={onHide}>
            close
          </button>
        )} */}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default QuickView;

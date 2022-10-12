import React, { useState } from "react";
import "./accordion.scss";

const Accordion = ({ heading, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className="accordion-item">
      <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
        <h3>{heading}</h3><span>{isActive ? "-" : "+"}</span>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </li>
  );
};

export default Accordion;
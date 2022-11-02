import React, { useState } from "react";
import "./accordion.scss";

const Accordion = ({ content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className="accordion-item">
      <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
        <h3>{content?.title}</h3>
        <span>{isActive ? "-" : "+"}</span>
      </div>
      {isActive && (
        <div className="accordion-content">{content?.description}</div>
      )}
    </li>
  );
};

export default Accordion;
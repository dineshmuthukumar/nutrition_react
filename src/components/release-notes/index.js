import React, { useState } from "react";
import { FaFileAlt, FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import "./style.scss";

const ReleaseNotesComponent = () => {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: "MarketPlace",
      active: true,
    },
    {
      id: 2,
      name: "Mcl Game ",
      active: false,
    },
  ]);

  const [active, setActive] = useState(1);
  const [isActivePanel, setActivePanel] = useState({});

  const handleChange = (input) => {
    const info = [...tabs];

    const index = info.findIndex((o) => o.id === input.id);

    for (var x = 0; x < info.length; x++) {
      if (index === x) info[x] = { ...info[x], active: true };
      else info[x] = { ...info[x], active: false };
    }

    setTabs(info);
    setActive(input.id);

    if (input.id !== active) {
      setActivePanel({});
    }
  };

  return (
    <>
      <div className="faq-wrapper">
        {/* <div className="faq_header">
          <h2>FAQs</h2>{" "}
        </div> */}

        <div className="heading">
          <h3 className="heading heading-h3">Release Notes</h3>{" "}
        </div>

        <div className="c-tabs">
          {tabs.map((obj, i) => (
            <div
              role="button"
              onClick={() => handleChange(obj)}
              key={`navtab${i}`}
              className={`nav-tab ${obj.active ? "active" : ""}`}
            >
              {obj.name}
            </div>
          ))}
        </div>

        <div className="tab-divider"></div>

        <div className="tab-body">
          {(() => {
            if (active === 1) {
              return (
                <div className="row">
                  <div className="col-12 col-md-6">MarketPlace</div>
                </div>
              );
            } else if (active === 2) {
              return (
                <div className="row">
                  <div className="col-12 col-md-6">MCl Game</div>
                </div>
              );
            }
          })()}
        </div>
      </div>
    </>
  );
};

const Accordian = ({
  head,
  body,
  status = false,
  index,
  isActivePanel,
  setActivePanel,
}) => {
  // const [state, setState] = useState(false);

  //console.log(isActivePanel, "isActivePanel");
  const toggleItem = () => {
    setActivePanel((prevState) => ({
      ...prevState,
      [index]: !Boolean(prevState[index]),
    }));
  };
  return (
    <div className="c-accordian">
      <div className="c-accor-head" onClick={() => toggleItem(index)}>
        <div>
          <FaFileAlt color={"#f5ff00"} size={20} />
        </div>

        <div className="head-area">{head}</div>

        <div>
          {isActivePanel ? (
            <FaMinusCircle color={"#f5ff00"} size={20} />
          ) : (
            <FaPlusCircle color={"#f5ff00"} size={20} />
          )}
        </div>
      </div>
      {isActivePanel && <div className="c-accor-body">{body}</div>}
    </div>
  );
};

export default ReleaseNotesComponent;

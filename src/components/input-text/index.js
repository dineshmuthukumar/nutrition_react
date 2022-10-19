import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { blockInvalidChar } from "../../utils/common";

import "./style.scss";

const InputText = ({
  tooltip,
  title,
  name = "",
  type = "text",
  className = "",
  required = false,
  boxRequired = false,
  requiredBottom = false,
  restrictChar = false,
  scrollIncrese=false,
  placeholder = " ",
  onChange = () => { },
  value,
  isPop = false,
  lengthValue=100,
  popText,
  ...props
}) => {
  const x = Math.floor(Math.random() * 100 + 1);

  const popover = (
    <Popover>
      <Popover.Body>
        <p className="password-terms">{popText}</p>
      </Popover.Body>
    </Popover>
  );

  return (
    // <div className="form-floating mb-3">
    //   <input
    //     id={`floatingInput${x}`}
    //     type={type}
    //     className={`form-control ${className}`}
    //     placeholder={placeholder}
    //     onChange={onChange}
    //     value={value}
    //   />
    //   <label htmlFor={`floatingInput${x}`}>{title}</label>
    // </div>

    <>
      <label htmlFor={`floatingInput${x}`} className="input-title">
        {title} {tooltip && tooltip}
      </label>{" "}
      {!requiredBottom && required && (
        <small className="text-danger font-10">(Required)</small>
      )}
      {isPop ? (
        <OverlayTrigger trigger="focus" placement="top" overlay={popover}>
          <input
            {...props}
            id={`floatingInput${x}`}
            type={type}
            name={name}
            className={`form-control ${required && "border-danger"
              } ${className} `}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            autoComplete="off"
          />
        </OverlayTrigger>
      ) : (
        <input
          {...props}
          id={`floatingInput${x}`}
          type={type}
          name={name}
          className={`form-control ${(required || boxRequired) && "border-danger"
            }
            ${className}`}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          maxLength={lengthValue}
          onKeyDown={restrictChar && blockInvalidChar}
          autoComplete="off"
          onWheel={ scrollIncrese && (event => event.currentTarget.blur())}
        />
      )}
      {requiredBottom && (
        <small className="text-danger font-10">(Required)</small>
      )}
    </>
  );
};

export default InputText;

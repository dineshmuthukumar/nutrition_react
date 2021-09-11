import React from "react";

const InputTextArea = ({ title, rows, className = "", placeholder = " " }) => {
  const x = Math.floor(Math.random() * 100 + 1);

  return (
    // <div className="form-floating  mb-3">
    //   <textarea
    //     className={`form-control ${className}`}
    //     rows={rows}
    //     placeholder={placeholder}
    //     id={`floatingTextarea${x}`}
    //   ></textarea>
    //   <label htmlFor={`floatingTextarea${x}`}>{title}</label>
    // </div>

    <>
      <label htmlFor={`floatingTextarea${x}`}>{title}</label>
      <textarea
        className={`form-control ${className}`}
        rows={rows}
        placeholder={placeholder}
        id={`floatingTextarea${x}`}
      ></textarea>
    </>
  );
};

export default InputTextArea;

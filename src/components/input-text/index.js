import React from "react";

const InputText = ({
  title,
  name = "",
  type = "text",
  className = "",
  required = false,
  placeholder = " ",
  onChange = () => {},
  value,
  ...props
}) => {
  const x = Math.floor(Math.random() * 100 + 1);

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
      <label htmlFor={`floatingInput${x}`}>{title}</label>{" "}
      {required && <small className="text-danger font-10">(Required)</small>}
      <input
        {...props}
        id={`floatingInput${x}`}
        type={type}
        name={name}
        className={`form-control ${required && "border-danger"}  ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default InputText;

import React from "react";
import OtpInput from "react-otp-input";

const InputOTP = ({
  numInputs = 6,
  value = "",
  title,
  onChange,
  hideLabel = false,
  disabled = false,
}) => {
  return (
    <div className="otp-input">
      {!hideLabel && <label>{title}</label>}
      <OtpInput
        value={value}
        onChange={onChange}
        numInputs={numInputs}
        isInputNum={true}
        separator={"-"}
        isDisabled={disabled}
      />
    </div>
  );
};

export default InputOTP;

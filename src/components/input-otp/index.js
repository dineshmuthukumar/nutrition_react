import React, { useState } from "react";
import OtpInput from "react-otp-input";

const InputOTP = ({ numInputs = 6, value, title }) => {
  const [otp, setOtp] = useState("");

  const onChange = (otp) => {
    setOtp(otp);
  };

  return (
    <div className="otp-input">
      <label>{title}</label>
      <OtpInput
        value={otp}
        onChange={onChange}
        numInputs={numInputs}
        isInputNum={true}
        separator={"-"}
      />
    </div>
  );
};

export default InputOTP;

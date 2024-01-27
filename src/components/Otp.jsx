import { useState } from "react";
import OtpInput from "react-otp-input";

export default function Otp() {
  const [otp, setOtp] = useState("");

  return (
    <OtpInput
      inputStyle={{ height: "50px", width: "47px", margin: "5px" }}
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderInput={(props) => <input {...props} />}
    />
  );
}

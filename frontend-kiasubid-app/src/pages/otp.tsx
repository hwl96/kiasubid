import { useState, useRef } from "react";
import "../css/otp.css";

function OtpPage() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError("");
    } else {
      setError("Enter only numeric digits (0-9)");
    }
    if (inputs.current[index]?.value && /^\d?$/.test(value)) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !inputs.current[index]?.value) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="otp-container">
      <h2>OTP Verification</h2>
      <p>Please enter the 4-digit code sent to your email</p>
      <form>
        <div className="otp-inputs">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              ref={(el) => {
                inputs.current[index] = el;
              }}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>
        <span className="error-message" style={{ color: "red" }}>
          {error}
        </span>
        <input type="submit" value="Verify OTP" />
      </form>
    </div>
  );
}

export default OtpPage;

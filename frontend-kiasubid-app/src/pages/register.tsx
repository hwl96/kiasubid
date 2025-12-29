import { useState } from "react";
import "../css/register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const checkPasswordRegex = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      //handle response
      if (!response.ok) {
        const errorData = await response.json();
        if (response.status === 400) {
          setError(errorData.detail);
        }
      }
      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (!checkPasswordRegex(e.target.value)) {
      e.target.setCustomValidity(
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
    } else {
      e.target.setCustomValidity("");
    }
  };

  const handleConfrimPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      e.target.setCustomValidity("Passwords do not match");
    } else {
      e.target.setCustomValidity("");
    }
  };

  return (
    <div>
      <div className="register-form">
        <div className="register-form-header">
          <h2>Create Account</h2>
          <p>Join our community of parents and educators</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            <span className="form-label">Email:</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            <span className="form-label">Password:</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
              required
            />
          </label>
          <label>
            <span className="form-label">Confirm Password:</span>
            <input
              type="password"
              name="confirm-password"
              value={confirmPassword}
              onChange={handleConfrimPasswordChange}
              required
            />
          </label>
          <span className="error-message" style={{ color: "red" }}>
            {error}
          </span>
          <label>
            <input type="submit" value="Sign Up" />
          </label>
        </form>
      </div>
    </div>
  );
}

export default Register;

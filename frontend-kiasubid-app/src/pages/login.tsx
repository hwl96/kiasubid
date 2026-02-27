import { useState } from "react";
import "../css/login.css";
import { Link } from "react-router-dom";

const roles = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
];

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selected, setSelected] = useState<string | null>("client");
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // Handle login logic here
  }
  return (
    <div className="parentLogin">
      <div className="login-form">
        <div className="login-form-header">
          <h2>Sign In</h2>
          <p>Welcome back to KiasuConnect</p>
        </div>
        <form className="login-form-content" onSubmit={handleSubmit}>
          <div className="loginRoleContainer">
            <div className="loginRoleLabel">I am a...</div>
            <div className="role-selection">
              <label className="login-form-label-radio">
                {roles[0].icon}
                <span>Client</span>
                <input
                  type="radio"
                  name="role"
                  value="client"
                  checked={selected === "client"}
                  onChange={() => setSelected("client")}
                />
              </label>
              <label className="login-form-label-radio">
                {roles[1].icon}
                <span>Tutor</span>
                <input
                  type="radio"
                  name="role"
                  value="tutor"
                  checked={selected === "tutor"}
                  onChange={() => setSelected("tutor")}
                />
              </label>
            </div>
          </div>
          <label className="login-form-label">
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              required
            />
          </label>
          <label className="login-form-label">
            <div className="password-label">
              Password:
              <Link to="/ForgetPassword" className="forgot-password-link">
                Forgot Password?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <label className="login-form-submit-label">
            <input
              type="submit"
              value={
                selected === "client"
                  ? "Continue as a Client"
                  : selected === "tutor"
                    ? "Continue as a Tutor"
                    : "Select a role to continue"
              }
            />
          </label>
          <div className="signup-label">
            Don't have an account?
            <Link to="/register" className="signupLink">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;

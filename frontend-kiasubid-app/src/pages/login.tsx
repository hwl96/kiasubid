import { useState } from "react";
import "../css/login.css";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // Handle login logic here
  }
  return (
    <div>
      <div className="login-form">
        <div className="login-form-header">
          <h2>Sign In</h2>
          <p>Welcome back to Kiasubid</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
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
          <label>
            <input type="submit" value="Sign In" />
          </label>
        </form>
      </div>
    </div>
  );
}
export default Login;

import { Link } from "react-router-dom";
import "../css/banner.css";
import Logo from "../assets/kiasubid-logo.svg";
function Banner() {
  return (
    <div className="banner">
      <Link to="/" className="logo">
        <img src={Logo} alt="KiasuBid Logo" className="logo-image" />
      </Link>
      <div className="navigation-links">
        <nav>
          <Link to="/login" className="nav-link">
            Login
          </Link>
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </nav>
      </div>
    </div>
  );
}
export default Banner;

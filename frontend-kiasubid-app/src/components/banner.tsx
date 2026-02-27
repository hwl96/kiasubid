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
          <Link to="/catalog" className="nav-link">
            Our Tutors
          </Link>
          <Link to="/login" className="nav-link">
            Sign In
          </Link>
          <Link to="/register" className="nav-link">
            Join Us
          </Link>
        </nav>
      </div>
    </div>
  );
}
export default Banner;

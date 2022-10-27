import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/dogs"> Dogs</Link>
        <Link to="/cart"> my cart</Link>
      </nav>
    </>
  );
}

export default Navbar;

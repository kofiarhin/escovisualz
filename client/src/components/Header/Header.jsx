import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <Link to="/">
          <h1 className="logo">Escovisualz</h1>
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
          <Link className="booking" to="/booking">
            Book Session
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

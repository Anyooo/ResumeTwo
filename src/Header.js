import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link activeClass="active" className="nav-link" to="about" spy={true} smooth={true} duration={500}>
          About
        </Link>
        {/* Adding  nav links for other sections */}
      </nav>
    </header>
  );
};

export default Header;

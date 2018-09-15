import React from "react";

const Header = props => {
  let textColor = { color: `${props.textColor}`, margin: "auto" };
  return (
    <nav className="navbar navbar-light bg-dark">
      <span className="navbar-brand mb-0 h1" style={textColor}>
        Three-eyed Raven Memory Challenge - Don't click the same character twice
      </span>
    </nav>
  );
};

export default Header;

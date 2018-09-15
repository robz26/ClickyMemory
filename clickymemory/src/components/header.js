import React from "react";

const Header = (props) => {
  let textColor = {color: `${props.textColor}`}
  return (
  <nav className="navbar navbar-light bg-dark">
    <span className="navbar-brand mb-0 h1" style={textColor}>Three-eyed Raven Challenge</span>
  </nav> 
  )
};

export default Header;

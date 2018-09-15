import React from "react";

const Image = props => (
  <div className="hovereffect">
    <img
      src={props.imageNum}
      alt={props.name}
      onClick={props.shuffle}
      data-value={props.value}
    />
    <div className="overlay">
      <h2>{props.name}</h2>
    </div>
  </div>
);

export default Image;

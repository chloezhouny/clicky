import React from "react";
import "./style.css";

function Container(props) {
  return <div className="container uk-child-width-1-4@s uk-grid" uk-grid>{props.children}</div>;
}

export default Container;

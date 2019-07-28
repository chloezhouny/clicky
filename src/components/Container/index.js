import React from "react";
import "./style.css";

function Container(props) {
  return (
  	<div className="uk-animation-toggle uk-align-center d-flex justify-content-center">
  		  <div className={` container uk-child-width-1-4@s uk-grid ${props.shake}`} uk-grid>
  		{props.children}
  		</div>
  	</div>
);	

}

export default Container;

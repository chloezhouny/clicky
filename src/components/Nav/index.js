import React from "react";
import "./style.css";


function Nav(props)
{
return (

<div className = "nav" uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky;">
    <nav className="uk-navbar-container" uk-navbar>

        <div className="uk-navbar-left">
			<a className="uk-navbar-item uk-logo" href="#">Clicky Game</a>
			 <a className="uk-navbar-item" href="#">Score: {props.count}</a>


	            <a className="uk-navbar-item" href="#">Top Score: {props.highScore}</a>
	
        </div>

        <div className="uk-navbar-center">
	           <a className="uk-navbar-item" href="#">{props.message}</a>
        </div>


    </nav>
</div>



);

}




export default Nav;
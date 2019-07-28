import React from "react";
import "./style.css";


function Nav(props)
{
return (

<div className = "nav" uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky;">
    <nav className="uk-navbar-container d-flex justify-content-around" uk-navbar>

        <div >
			<a className="uk-navbar-item uk-logo" href="/">Clicky Game</a>
		
        </div>

        <div >
	           <a className="uk-navbar-item item" href="#" style={{color: props.correct ? "pink" : "black"}}>{props.message}</a>
        </div>


        <div className = "d-flex justify-content-around">

             <a className="uk-navbar-item item" href="#">Score: {props.count} </a>
            <a  className="uk-navbar-item item" href="#">Top Score: {props.highScore}</a>
    
        </div>

    </nav>
</div>



);

}




export default Nav;
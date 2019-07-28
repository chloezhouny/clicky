import React from "react";
import "./style.css";

function Title(props) {
  return (
// <div className="uk-height-large uk-background-cover uk-light uk-flex title" uk-parallax="bgy: -200" style={{backgroundImage: `url('https://images.unsplash.com/photo-1550785116-fe550d4904cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80')`}}>

//     <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">Headline</h1>

// </div>

<div className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top title" style={{backgroundImage: `url('https://images.unsplash.com/photo-1550785116-fe550d4904cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80')`}}>
    <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        <h1 ukParallax="opacity: 0.5,1; y: -100,0; scale: 2,1; viewport: 0.5;">Vija Celmins</h1>
        <p ukParallax="opacity: 0.5,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">American, born Latvia 1938</p>
        <p ukParallax="opacity: 0.5,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">Vija Celmins is a Latvian-American visual artist best known for photo-realistic paintings and drawings of natural environments and phenomena such as the ocean, spider webs, star fields, and rocks. Her earlier work included pop sculptures and monochromatic representational paintings. Based in New York City, she has been the subject of over forty solo exhibitions since 1965.</p> 
    </div>
</div>


  	);
}

export default Title;

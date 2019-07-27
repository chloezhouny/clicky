import React from "react";
import "./style.css";

function FriendCard(props) {
  return (

      <div>
      <div className="uk-card uk-card-default uk-card-hover uk-card-body">            
          <img alt={props.name} src={props.image} onClick={() => {props.shuffleFriend(); props.matchFriend(props.id)}}/>
      </div>
      </div>
   
);





}

export default FriendCard;

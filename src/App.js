import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {

  state = {
    friends,
    count: 0,
    highScore: 0,
    matchedFriends: [],
    message: "Click to play!"
  };

  shuffleFriend = () => {
    var tempCards = this.state.friends;

    for (let i = tempCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tempCards[i], tempCards[j]] = [tempCards[j], tempCards[i]];
    }
    this.setState({ friends: tempCards });
  };


  checkhighScore = () =>
  {
    console.log("In check function");
    var tempCount = this.state.count;
    var tempHighScore = this.state.highScore;

    console.log(tempCount);
    console.log(tempHighScore);

    if (tempCount > tempHighScore)
    {
       console.log(tempCount);

      this.setState({ highScore : this.state.highScore + 1});

    }
  }


  matchFriend = (id) => {

     console.log(this.state.count);


    var matchedFriends = this.state.matchedFriends;

    if (matchedFriends[0] === null)
    {

       this.checkhighScore();
      matchedFriends = [...matchedFriends, id];
     


      this.setState({ matchedFriends : matchedFriends});
      this.setState({ count : this.state.count + 1});
   

    }
    else
    {
      if (matchedFriends.includes(id))
      {
        this.setState({ count : 0 });
        this.setState({ matchedFriends: []});

        this.setState({message: "Game over. Start again."})
        setTimeout(function() {this.setState({message: "Click to Play"});}.bind(this),3000);
      }
      else
      {
        this.setState({ count : this.state.count + 1});
        // this.checkhighScore();


        if (this.state.count < 3)
        {
          matchedFriends = [...matchedFriends, id];
          this.setState({ matchedFriends : matchedFriends});
          
        }     
        else if (this.state.count === 3)
        {          
          this.setState({ matchedFriends: []});  

          this.setState({count: 0});
          this.setState({message: "You win!"});
          setTimeout(function() {this.setState({message: "Click to Play"});}.bind(this),3000);    
        }
      }
    }

  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <div> Count: {this.state.count} </div>
        <div> Total Count: 3 </div>
        <div> High Score: {this.state.highScore} </div>
        <div> {this.state.message} </div>
        {this.state.friends.map(friend => (
          <FriendCard
            shuffleFriend={this.shuffleFriend}
            matchFriend={this.matchFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

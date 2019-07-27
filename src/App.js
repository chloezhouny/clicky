import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./components/Container";
import Nav from "./components/Nav";
import friends from "./friends.json";


class App extends Component {

  state = {
    friends,
    count: 0,
    highScore: 0,
    matchedFriends: [],
    message: "Click to play!",
    scriptLoaded: false,
    scriptError: false
  };

  shuffleFriend = () => {
    var tempCards = this.state.friends;

    for (let i = tempCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tempCards[i], tempCards[j]] = [tempCards[j], tempCards[i]];
    }
    this.setState({ friends: tempCards });
  };


  checkhighScore = (count, highScore) =>
  {
    console.log("In check function");
    console.log("count", count);
    console.log("highScore", highScore);


    if (count > highScore)
    {
      this.setState({ highScore : count});
    }
  };







  matchFriend = (id) => {


    var matchedFriends = this.state.matchedFriends;
    var count = this.state.count;
    var highScore = this.state.highScore;
    var correct = false;



    if (matchedFriends[0] === null)
    {
   
      matchedFriends = [...matchedFriends, id];
      correct = true;

      this.setState({ matchedFriends : matchedFriends});
      this.setState({ count : count + 1});

    }
    else
    {
      if (matchedFriends.includes(id))
      {

        this.setState({ count : 0 });
        this.setState({ matchedFriends: []});
        this.setState({message: "Game over. Start again."});
        setTimeout(function() {this.setState({message: "Click to Play"});}.bind(this),3000);
      }
      else
      {
        correct = true;
        this.setState({ count : count + 1});
        matchedFriends = [...matchedFriends, id];
        this.setState({ matchedFriends : matchedFriends});
          

        if (count === 2)
        { 
          this.setState({ matchedFriends: []});  

          this.setState({count: 0});
          this.setState({message: "You win!"});
          setTimeout(function() {this.setState({message: "Click to Play"});}.bind(this),3000);    
        }
      }
    }


    if (correct === true)
    {
      count = count + 1;
      highScore = this.state.highScore; 
      this.checkhighScore(count, highScore);
    }

  };




  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (

  
      <Wrapper>
        <Nav 
        count={this.state.count} 
        highScore = {this.state.highScore}
        message = {this.state.message} 
        />
        <Title></Title>
        <Container>
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
        </Container>
      </Wrapper>
  
    );
  }
}

export default App;

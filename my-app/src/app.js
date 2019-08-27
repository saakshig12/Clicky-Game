import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import images from "./images.json";


class App extends Component {
    state = {
        images,
        clickId: [],
        score: 0,
        current: "",
    }
    shuffleImage = id => {
        let clickId = this.state.clickId,
        if(clickId === id){
            this.setState({clickId: [], score = 0, current: "You clicked on this image twice, you lose"});
            return;
        } 
        else {
            clickId.push(id)
            if(clickId.length === 9) {
                this.setState({score: 9, current: "You won! Great job.", clickId: []})
                return;
            }
            this.setState({ friends, clickedFriendIds, score: clickedFriendIds.length, status: " " });
       for (let i =friends.length - 1; i > 0; i--) {
         let j =Math.floor(Math.random() * (i + 1));
         [friends[i], friends[j]] = [friends[j], friends[i]];
        }
    };
};
    render() {
        return (
          <div className="App">
              <Navbar
              count = {this.state.current}
              score = {this.state.score}
              />
            <header className="App-header">
              <h1 className="App-title">Clicky</h1>
              <h2>Try not to click on an image twice!</h2>
            </header>
            <Score total={this.state.score}
                    goal={12}
                    status={this.state.status}
                    />
            <Wrapper>
              {this.state.images.map(image => (
                <ImageCard
                shuffleImage={this.shuffleImage}
                id={image.id}
                key={image.id}
                image={image.image}
                />
    
              ))}
            </Wrapper>
          </div>
        );
      }

};

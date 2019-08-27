import React, { Component } from "react";
import AnimalCard from "./components/AnimalCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import animals from "./Animals.json";


class App extends Component {
    state = {
        animals,
        clickId: [],
        Score: 0,
        current: "",
    }
    shuffleImage = id => {
        let clickId = this.state.clickId;
        if(clickId === clickId.id){
            this.setState({clickId: [], score: 0, current: "You clicked on this image twice, you lose"});
            return;
        } 
        else {
            clickId.push(id)
            if(clickId.length === 9) {
                this.setState({score: 9, current: "You won! Great job.", clickId: []})
                return;
            }
            this.setState({ animals, clickId, score: clickId.length, status: " " });
       for (let i =animals.length - 1; i > 0; i--) {
         let j =Math.floor(Math.random() * (i + 1));
         [animals[i], animals[j]] = [animals[j], animals[i]];
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
            {/* <Score total={this.state.score}
                    status={this.state.status}
                    /> */}
            <Wrapper>
              {this.state.images.map(images => {
                return(
                <AnimalCard
                shuffleImage={this.shuffleImage}
                id={animals.id}
                key={animals.id}
                image={animals.image}
                clickId={animals.clicked}
                />
                )
    
                })}
            </Wrapper>
          </div>
        );
    };
}

export default App; 


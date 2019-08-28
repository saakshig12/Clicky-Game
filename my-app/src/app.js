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
    shuffleImage ()
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
                id={animals.id}
                key={animals.id}
                image={animals.image}
                clickId={animals.clicked}
                shuffleImage={animals.shuffleImage}
                />
                )
    
                })}
            </Wrapper>
          </div>
        );
    };
}

export default App; 


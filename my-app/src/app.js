import React, { Component } from "react";
import AnimalCard from "./components/AnimalCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import animals from "./Animals.json";


class App extends Component {
  state = {
    animals,
    clickId: [],
    score: 0,
    current: "",
  }
  shuffleCard = (id) => {
    onClick
    let shuffle = Math.floor(Math.random(0, 9) * 2);
  }

};

render() {
  return (
    <div className="App">
      <Navbar
        count={this.state.current}
        score={this.state.score}
      />
      <header className="App-header">
        <h1 className="App-title">Clicky</h1>
        <h2>Try not to click on an image twice!</h2>
      </header>

      <Wrapper>
        {this.state.images.map(images => {
          return (
            <AnimalCard
              id={animals.id}
              key={animals.id}
              image={animals.image}
              clickId={animals.clicked}
              shuffleCard={image.shuffleCard}
            />
          )

        })}
      </Wrapper>
    </div>
  );
}


export default App;


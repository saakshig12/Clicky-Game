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
  



render() {
  return (
    <div className="App">
      <Navbar
        count={this.state.current}
        score={this.state.score}
      />
      <div className="jumbotron">
      <header className="header">
        <h1 className="title">Clicky</h1>
        <h2>Try not to click on an image twice!</h2>
      </header>
      </div>

      <Wrapper>
        <div className="row">
        {this.state.animals.map(animals => {
          return (
            <AnimalCard
              id={animals.id}
              key={animals.id}
              image={animals.image}
              clickId={animals.clicked}
              shuffleCard={animals.shuffleCard}
            />
          )
          })}
        </div>
      </Wrapper>
    </div>
  )
};
}


export default App;


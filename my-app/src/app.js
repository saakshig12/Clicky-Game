import React, { Component } from "react";
import AnimalCard from "./components/AnimalCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import animals from "./Animals.json";


class App extends Component {
  state = {
    animals,
    // clickId: [],
    score: 0,
    message: "",
  }

  shuffledAnimals = () => {

    const { animals } = this.state;
    animals.sort(() => Math.random() - 0.5);
    console.log("has been clicked");
    this.setState({ animals })
  }
  // handleClick = () => {
  //   this.shuffledAnimals();
  // }

  handleClick = (id) => {
    this.shuffledAnimals();
    // const { animals } = this.state;

    console.log(animals);

    this.state.animals.map(animal => {
      if(animal.id === id) {
        console.log(animal.id);
        if(animal.clicked === false) {
          animal.clicked = true
        }
        else {
          alert("lost the game")
        }

      }
    })

}


  render() {

    return (
      <div>
        <Wrapper>
          <Navbar />
          <div className="animal-images">
          {animals.map(animal => (
            <AnimalCard
              id={animal.id}
              key={animal.id}
              image={animal.image}
              handleClick={this.handleClick}
            />
          ))}
          </div>
        </Wrapper>
      </div>
    )
    // <div className="app">
    //   <Navbar
    //     count={this.state.current}
    //     score={this.state.score}
    //   />
    //   <div className="jumbotron">
    //     <header className="header">
    //       <h1 className="title">Clicky</h1>
    //       <h2>Try not to click on an image twice!</h2>
    //     </header>
    //   </div>

    //   <Wrapper>
    //     <div className="row">
    //       {this.state.animals.map(animal => {
    //         // return (
    //           <AnimalCard
    //             id={animal.id}
    //             key={animal.id}
    //             image={animal.image}
    //             // clickId={animals.clicked}
    //             shuffledAnimals={this.shuffledAnimals}
    //           />
    //         // )
    //       })}
    //     </div>
    //   </Wrapper>
    // </div>

  };
}


export default App;


import React, { Component } from "react";
import "./App.css";
import Validation from "./Validation";
import Char from "./Char";

class App extends Component {
  state = {
    userInput: ""
  };

  inputChangedHandler = event => {
    this.setState({
      userInput: event.target.value
    });
  };

  removeChar = index => {
    const input = this.state.userInput.split("");
    input.splice(index, 1);
    this.setState({
      userInput: input.join("")
    });
  };

  render() {
    const charList = this.state.userInput
      .split("")
      .map((char, index) => (
        <Char
          character={char}
          key={Math.random() * 10000}
          removeCharOnClick={() => this.removeChar(index)}
        />
      ));
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation text={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;

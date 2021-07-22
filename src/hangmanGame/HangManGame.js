import React, { Component } from "react";
import "./HangManGame.css";
class HangManGame extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [
      "/images/0.jpg",
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/4.jpg",
      "/images/5.jpg",
      "/images/6.jpg",
    ],
  };
  state = { nWrong: 0, guessed: new Set(), answer: "apple" };

  guessedWord() {
    return (
      this.state.answer
        .split("") //split word into an array

        //map each character into a new array
        //the array is either going to split out the character & _ or the actual letter
        .map((ltr) => (this.state.guessed.has(ltr) ? ltr : "_"))
    );
  }
  handleGuess = (e) => {
    let ltr = e.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
    }));
  };
  generateButtons() {
    //split 26 character into an array, and map each character into a new array
    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr) => (
      //each character has a button
      <button
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }
  render() {
    let gameState = this.generateButtons();
    return (
      <div className="HangMan">
        <h1>Hang Man</h1>
        <img src={this.props.images[this.state.nWrong]} alt="hangman"></img>
        <p className="hangman-word">{this.guessedWord}</p>
        <p>{gameState}</p>
      </div>
    );
  }
}

export default HangManGame;

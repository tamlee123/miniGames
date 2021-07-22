import React, { Component } from "react";

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
  state = { nWrong: 0, answer: "apple" };
  render() {
    return (
      <div>
        <h1>Hang Man</h1>
        <img src={this.props.images[this.state.nWrong]} alt="hangman"></img>
      </div>
    );
  }
}

export default HangManGame;

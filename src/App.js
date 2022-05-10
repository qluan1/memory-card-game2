import React from 'react';
import {Header} from './components/header';
import {CardGrid} from './components/cardGrid';

import './App.css';

let cards = [];
for (let i = 0; i < 12; i++) {
  let cardInfo = {};
  cardInfo.cardId = i.toString();
  cardInfo.cardName = 'Card No.' + (i+1).toString();
  cardInfo.cardSrc = require('./assets/img/saber' + (i+1).toString() + '.png').default;
  cards.push(cardInfo);
}


class App extends React.Component {
  constructor(props) {
    super(props);
    let cardIsClicked = Array(cards.length);
    cardIsClicked.fill(false);
    this.state = {
      currentScore: 0,
      bestScore: 0,
      cards : cards,
      cardIsClicked: cardIsClicked,
    };
    this.restartGame = this.restartGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  restartGame() {
    let arr = [];
    this.state.cards.forEach((a)=>{arr.push(a)});
    this.shuffle(arr);
    let cardIsClicked = Array(arr.length);
    cardIsClicked.fill(false);
    let bestScore = Math.max(this.state.bestScore, this.state.currentScore);
    this.setState({
      currentScore: 0,
      bestScore: bestScore,
      cards: arr,
      cardIsClicked: cardIsClicked,
    });
  }


  handleClick(cardId) {
    let i = parseInt(cardId);
    if (this.state.cardIsClicked[i] === true) {
      this.restartGame();
      return;
    }
    let newCardIsClicked = this.state.cardIsClicked.map((a)=> a);
    newCardIsClicked[i] = true;
    let newScore = this.state.currentScore + 1;
    let bestScore = Math.max(this.state.bestScore, newScore);
    let arr = this.state.cards.map((a) => a);
    this.shuffle(arr);
    this.setState({
      currentScore: newScore,
      bestScore: bestScore,
      cards: arr,
      cardIsClicked: newCardIsClicked,
    });
  }


  render () {
    let currentScore = this.state.currentScore;
    let bestScore = this.state.bestScore;
    return (
      <div className="App">
        <Header 
          currentScore = {currentScore} 
          bestScore = {bestScore}
        />
        <CardGrid 
          cards = {this.state.cards}
          handleClick = {this.handleClick}
        />
      </div>
    );
  }
}


export default App;

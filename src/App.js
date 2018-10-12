import React, { Component } from 'react';
import Header from './components/Header/Header';
import Table from './components/Table/Table'
import './App.css';
import deckOfCards from './functions/deckOfCards'

const getStateInitial = () => {
  const deck = deckOfCards();
  return {
    deck
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getStateInitial();

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Table 
          deck={this.state.desk}
        />
      </div>
    );
  }
}

export default App;

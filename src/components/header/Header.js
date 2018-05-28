import React, { Component } from 'react';

import './Header.css';

class Header extends Component {

  static defaultProps = {
    currentRoot: undefined,
    currentSequenceName: undefined
  };

  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">Fretboard Visualiser</h1>
        <h2>Currently displaying: {this.props.currentRoot + " " + this.props.currentSequenceName}</h2>
      </header>
    )
  }
}

export default Header;
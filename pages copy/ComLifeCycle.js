import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import {
  getRandomInteger,
  getRandomIntegers,
} from '@writetome51/get-random-integer-s';

class ComLifeCycle extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img
              alt="logo"
              src={process.env.PUBLIC_URL + '/logo.svg'}
              className="App-logo"
            />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Body />
        </div>
        <div className="testcode">
          <ul>
            <li>{getRandomInteger([-5, 5])}</li>
            <li>{getRandomIntegers(5, [-5, 5])}</li>
            <li>{getRandomInteger([0, 10])}</li>
            <li>{getRandomIntegers(5, [0, 10])}</li>
          </ul>
        </div>
      </div>
    );
  }
}

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
    this.generateRandomNumber = this.generateRandomNumber.bind(this);
  }

  generateRandomNumber = () => {
    const randomNumber = Math.random();
    this.setState({ number: randomNumber }); // **problem in this line**
  };

  render() {
    return (
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.generateRandomNumber}>Random number</button>
        <Number myNumber={this.state.number} />
      </div>
    );
  }
}

class Number extends Component {
  render() {
    return (
      <div>
        <br />
        <p>{this.props.myNumber}</p>
      </div>
    );
  }
}

export default ComLifeCycle;

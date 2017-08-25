import React, { Component } from 'react';
import './App.css';
import Head from "./Head";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head name="Mickey"/>
      </div>
    );
  }
}

export default App;


// VERY EASY: Create a React class component that renders "hello world" in an h1 tag. You don't need props for this one.

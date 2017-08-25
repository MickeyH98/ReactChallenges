import React, { Component } from 'react';
import './App.css';
import Head from "./Head";
import Persons from "./Persons";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Head name="Mickey"/>
        <Persons fname="Mickey" lname="Hernandez" phone="123-123-1234" />
      </div>
    );
  }
}

export default App;



// MEDIUM: Create a child Contact component inside the original component you created that you pass in a firstName, lastName, and phoneNumber and print out "You need to contact {firstName} {lastName} at {phoneNumber}

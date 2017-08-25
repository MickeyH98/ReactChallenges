import React, { Component } from 'react';
import './App.css';
import Persons from "./Persons";
import Head from "./Head";

class App extends Component {
  constructor(){
    super();
    this.state = {
      contactArray : [
        {
          fname: "Mark",
          lname: "Kroh",
          phone: "666-666-6666"
        },
        {
          fname: "Angel",
          lname: "Lopez",
          phone: "111-222-3333"
        },
        {
          fname: "Mickey",
          lname: "Hernandez",
          phone: "000-000-1337"
        }
      ]
    }
  }
  render() {

    var ContactLister = this.state.contactArray.map(function(person){
      return (
        <Persons fname={person.fname} lname={person.lname} phone={person.phone} />
      )
    }
  )

    return (
      <div className="App">
        <Head name="Mickey"/>
        {ContactLister}
      </div>
    );
  }
}

export default App;

//HARD: Using an array of contacts, loop through each one and create a new Contact component for each.

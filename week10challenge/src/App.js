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

      var contactArray = [
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
      ];

    var ContactLister = contactArray.map(function(person){
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


// VERY EASY: Create a React class component that renders "hello world" in an h1 tag. You don't need props for this one.
// EASY: Pass a prop for "name" into the component you just created so the h1 tag reads, "Hello world, {name}"
// MEDIUM: Create a child Contact component inside the original component you created that you pass in a firstName, lastName, and phoneNumber and print out "You need to contact {firstName} {lastName} at {phoneNumber}
// HARD: Using an array of contacts, loop through each one and create a new Contact component for each
// VERY HARD: In your list of Contacts, have a status icon by each one that starts as orange "Pending" status. Then have a call button that when clicked, changes the state to a green "Done" status.

import React, { Component } from 'react';
import './App.css';
import Persons from "./Persons";
import Head from "./Head";

class App extends Component {
  constructor(){
    super();
    this.statusChange = this.statusChange.bind(this);
    this.state = {
      contactArray : [
        {
          fname: "Mark",
          lname: "Kroh",
          phone: "666-666-6666",
          status: false
        },
        {
          fname: "Angel",
          lname: "Lopez",
          phone: "111-222-3333",
          status: false
        },
        {
          fname: "Mickey",
          lname: "Hernandez",
          phone: "000-000-1337",
          status: false
        }
      ]
    }
  }

  statusChange(event){
    var index = event.target.value;
    var newContacts = this.state.contactArray.slice();
    newContacts[index].status = !newContacts[index].status;
    this.setState({
      contactArray: newContacts
    })
  }

  render() {
    var ContactLister = [];
    for (var i in this.state.contactArray){
      ContactLister.push(
        <Persons
        value={i}
        fname={this.state.contactArray[i].fname}
        lname={this.state.contactArray[i].lname}
        phone={this.state.contactArray[i].phone}
        statusChange={this.statusChange}
        colorValue={this.state.contactArray[i].status}
        />
      )
    }

    return (
      <div className="App">
        <Head name="Mickey"/>
        {ContactLister}
      </div>
    );
  }
}

export default App;



// VERY HARD: In your list of Contacts, have a status icon by each one that starts as orange "Pending" status. Then have a call button that when clicked, changes the state to a green "Done" status.

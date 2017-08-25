import React from "react";

function Persons(props){
  var color = (props.colorValue) ? "green" : "orange";
  return (
    <div className="Contact">
      <div className="status" style={{'background-color': color}}>
      </div>
      <p>You need to contact {props.fname} {props.lname} at {props.phone}</p>
      <button id="myButton" onClick={props.statusChange} value={props.value}>Done</button>
    </div>
  )
}

export default Persons;

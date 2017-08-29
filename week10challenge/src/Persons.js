import React from "react";

function Persons(props){
  var color = (props.colorValue) ? "green" : "orange";
  var message = (props.colorValue) ? "Done" : "Call";
  var deco = (props.colorValue) ? "line-through" : "none";
  return (
    <div className="Contact">
      <div className="status" style={{'backgroundColor': color}}>
      </div>
      <p style={{'textDecoration': deco}}>You need to contact {props.fname} {props.lname} at {props.phone}</p>
      <button id="myButton" onClick={props.statusChange} value={props.value}>{message}</button>
    </div>
  )
}

export default Persons;

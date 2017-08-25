import React from "react";

function Persons(props){
  return (
    <p>You need to contact {props.fname} {props.lname} at {props.phone}</p>
  )
}

export default Persons;

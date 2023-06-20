import React from "react";
import "./TileList.css"

export const TileList = ({contact}) => {
  return (
    <div className="tile-container">
      <div><span>Name: </span>{contact.name}</div>
      <div><span>Phone Number: </span>{contact.phone}</div>
      <div><span>Email Address: </span>{contact.email}</div>
    </div>
  );
};

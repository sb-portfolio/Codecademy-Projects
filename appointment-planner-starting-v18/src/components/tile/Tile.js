import React from "react";

export default function Tile({data}){
  return (
    <div className="tile-container">
         <p className="tile-title">{data.name}</p>
         {data.description.map((info,index) => <p key={index} className="tile">{info}</p>)}
    </div>
  );
};



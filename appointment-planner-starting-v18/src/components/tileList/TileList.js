import React from "react";
import Tile from "../tile/Tile"
import "./TileList.css"

export const TileList = ({dataList}) => {



  return (
    <div className="tile-container">
        {dataList.map(data => {
          return <Tile />
        })}
    </div>
  );
};

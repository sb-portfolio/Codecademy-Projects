import React from "react";
import Tile from "../tile/Tile"
import "./TileList.css"

export const TileList = ({dataList}) => {

  return (
    <div>
        {dataList.map((data,index) => {
          return <Tile key={index} data={data}/>
        })}
    </div>
  );
};

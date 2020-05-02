import React from "react";
import WeaponCard from "./weaponCard";

function WeaponGrid() {
  let filler = ["", "", "", ""];

  return (
    <div className="flex">
      {filler.map(() => {
        return <WeaponCard />;
      })}
    </div>
  );
}

export default WeaponGrid;

import React from "react";
import WeaponCard from "./weaponCard";

import weapondata from "./shadowbringers_t1_weapons.json";

function WeaponGrid() {
  return (
    <div className="flex flex-wrap ml-8">
      {weapondata.map((w) => {
        return <WeaponCard weapon={w} key={w.item.name} />;
      })}
    </div>
  );
}

export default WeaponGrid;

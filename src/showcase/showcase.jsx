import React from "react";

import WeaponGrid from "./weaponGrid";
import ProfileCard from "./profileCard";

function Showcase() {
  return (
    <div className="grid grid-cols-3 gap-24 h-full">
      <ProfileCard />
      <WeaponGrid />
    </div>
  );
}

export default Showcase;

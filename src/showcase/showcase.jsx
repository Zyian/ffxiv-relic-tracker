import React from "react";

import WeaponGrid from "./weaponGrid";
import ProfileCard from "./profileCard";

function Showcase() {
  return (
    <div className="flex flex-no-wrap">
      <ProfileCard />
      <WeaponGrid />
    </div>
  );
}

export default Showcase;

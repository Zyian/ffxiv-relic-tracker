import React from "react";

function WeaponCard(props) {
  let name = props.weapon.item.name;

  return (
    <div className="w-48 border border-red-500 m-2 p-2">
      <img
        src={
          "https://garlandtools.org/files/icons/item/" +
          props.weapon.item.icon +
          ".png"
        }
        className="mx-auto mt-2"
      />
      <div className="mx-auto mt-4 text-center">{name}</div>
      <div></div>
    </div>
  );
}

export default WeaponCard;

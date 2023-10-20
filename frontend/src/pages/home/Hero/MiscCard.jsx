import React from "react";
import Circles from "../../../components/Circles";

export default function MiscCard() {
  const colorArray = [
    "#120603",
    "#45221d",
    "#793e37",
    "#ac5a51",
    "#df767b",
    "#f29295",
    "#f6afb0",
    "#f4bfc6",
  ];

  return (
    <div className="container px-0">
      <div className="row">
        <div className="col-6">
          <Circles colors={colorArray} />
        </div>
      </div>
    </div>
  );
}

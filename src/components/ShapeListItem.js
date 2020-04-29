import React from "react";
// import { Link } from "react-router-dom";

const ShapeListItem = ({ sideOne, sideTwo, sideThree, sideFour }) => {
  return (
    <div>
      <p>
        {sideOne} - {sideTwo} - {sideThree} - {sideFour}
      </p>
    </div>
  );
};

export default ShapeListItem;

import React from "react";
import styled from "@emotion/styled";

const ShapeListItem = ({ sideOne, sideTwo, sideThree, sideFour }) => {
  const Circle = styled.div`
    margin: 20px;
    width: ${sideOne * 10}px;
    height: ${sideOne * 10}px;
    background: black;
    border-radius: 50%;
  `;

  const Triangle = styled.div`
    margin: 20px;
    width: 0;
    height: 0;
    border-bottom: ${sideOne * 10}px solid black;
    border-left: ${sideTwo * 10}px solid transparent;
    border-right: ${sideThree * 10}px solid transparent;
  `;

  const Quadrilateral = styled.div`
    margin: 20px;
    width: ${sideFour * 10}px;
    height: 0;
    border-bottom: ${sideOne * 10}px solid black;
    border-left: ${sideTwo * 10}px solid transparent;
    border-right: ${sideThree * 10}px solid transparent;
  `;

  return (
    <div>
      <div>
        {sideOne && !sideTwo && <Circle />}
        {sideTwo && sideTwo && sideThree && !sideFour && <Triangle />}
        {sideTwo && sideTwo && sideThree && sideFour && <Quadrilateral />}
      </div>
    </div>
  );
};

export default ShapeListItem;

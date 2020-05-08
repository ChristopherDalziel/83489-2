import React from "react";
import styled from "@emotion/styled";
import { Stage, Layer, Shape } from "react-konva";

const ShapeListItem = ({ sideOne, sideTwo, sideThree, sideFour }) => {
  const heightCalc = () => {
    const longestSide = Math.max(sideOne, sideTwo, sideThree, sideFour);
    if (longestSide < 50) {
      return 30;
    } else {
      return longestSide;
    }
  };

  const Quadrilateral = () => {
    return (
      <Stage width={window.innerWidth} height={heightCalc() * 5}>
        <Layer>
          <Shape
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(100, 100); // placement within the canvas
              context.lineTo(`${sideOne * 5}`, 100); // 1st value = top line
              context.lineTo(`${sideThree * 5}`, `${sideTwo * 5}`); // 1st value = bottom line, 2nd value = right line
              context.lineTo(100, `${sideFour * 5}`); // 2nd value = left line
              context.lineTo(100, 100);
              context.closePath();

              context.fillStrokeShape(shape);
            }}
            fill="black"
            stroke="black"
            strokeWidth={2}
          />
        </Layer>
      </Stage>
    );
  };

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

  return (
    <div>
      {sideOne && !sideTwo && <Circle />}
      {sideTwo && sideTwo && sideThree && !sideFour && <Triangle />}
      {sideTwo && sideTwo && sideThree && sideFour && <Quadrilateral />}
    </div>
  );
};

export default ShapeListItem;

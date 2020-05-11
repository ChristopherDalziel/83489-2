import React from "react";
import styled from "@emotion/styled";
import { Stage, Layer, Shape } from "react-konva";

const ShapeListItem = ({ sideOne, sideTwo, sideThree, sideFour }) => {
  const stageHightCalc = () => {
    const longestSide = Math.max(sideOne, sideTwo, sideThree, sideFour);
    if (longestSide < 50) {
      return 30;
    } else {
      return longestSide;
    }
  };

  const Quadrilateral = () => {
    return (
      <Stage width={window.innerWidth} height={stageHightCalc() * 5}>
        <Layer>
          <Shape
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(100, 100); // placement within the canvas
              context.lineTo(`${sideOne}`, 100); // 1st argument = Top line
              context.lineTo(`${sideThree}`, `${sideTwo}`); // 1st argument = Bottom line, 2nd Value = Right line
              context.lineTo(100, `${sideFour}`); // 2nd value = Left line
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
    width: ${sideOne}px;
    height: ${sideOne}px;
    background: black;
    border-radius: 50%;
  `;

  const Triangle = styled.div`
    margin: 20px;
    width: 0;
    height: 0;
    border-bottom: ${sideOne}px solid black;
    border-left: ${sideTwo}px solid transparent;
    border-right: ${sideThree}px solid transparent;
  `;

  return (
    <div>
      {sideOne && !sideTwo && (
        <Circle aria-readonly="true" role="User created Circle" />
      )}
      {sideTwo && sideTwo && sideThree && !sideFour && (
        <Triangle aria-readonly="true" role="User created Triangle" />
      )}
      {sideTwo && sideTwo && sideThree && sideFour && (
        <Quadrilateral aria-readonly="true" role="User created Quadrilateral" />
      )}
    </div>
  );
};

export default ShapeListItem;

import React from "react";
import styled from "@emotion/styled";
import { Stage, Layer, Shape } from "react-konva";

// import GonnaBeMyShape from "../components/Shape";

const ShapeListItem = ({ sideOne, sideTwo, sideThree, sideFour }) => {
  const Quadrilateral = () => {
    console.log(sideOne);
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Shape
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(100, 100); // placement within the canvas
              context.lineTo(`${sideOne * 5}`, 100); // 1st value = top line
              context.lineTo(`${sideThree * 5}`, `${sideTwo * 5}`); // 1st value = bottom line, 2nd value = right line
              context.lineTo(100, `${sideFour * 5}`); // 2nd value = left line
              context.lineTo(100, 100); // close shape
              context.closePath();
              // (!) Konva specific method, it is very important
              context.fillStrokeShape(shape);
            }}
            fill="#00D2FF"
            stroke="black"
            strokeWidth={4}
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

  // const Quadrilateral = styled.div`
  //   margin: 20px;
  //   width: ${sideFour * 10}px;
  //   height: 0;
  //   border-bottom: ${sideOne * 10}px solid black;
  //   border-left: ${sideTwo * 10}px solid transparent;
  //   border-right: ${sideThree * 10}px solid transparent;
  // `;

  // const Square = styled.div`
  //   height: ${sideOne * 10}px;
  //   width: ${sideOne * 10}px;
  //   background: black;
  // `;

  return (
    <div>
      <div>
        {sideOne && !sideTwo && <Circle />}
        {sideTwo && sideTwo && sideThree && !sideFour && <Triangle />}
        {sideTwo && sideTwo && sideThree && sideFour && <Quadrilateral />}
        {/* {sideOne && sideTwo && sideThree && sideFour === sideOne && <Square />} */}
      </div>
    </div>
  );
};

export default ShapeListItem;

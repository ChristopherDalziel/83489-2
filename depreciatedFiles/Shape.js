import React, { Component } from "react";
import { Stage, Layer, Shape } from "react-konva";

class GonnaBeMyShape extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Shape
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(10, 10); // placement within the canvas
              context.lineTo(300, 10); // 1st value = top line
              context.lineTo(50, 50); // 1st value = bottom line, 2nd value = right line
              context.lineTo(10, 90); // 2nd value = left line
              context.lineTo(10, 10); // close shape
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
  }
}

export default GonnaBeMyShape;

import React from "react";

class Quadrilateral extends React.Component {
  componentDidMount(props) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(10, 10); // placement within the canvas
    ctx.lineTo(`${this.props.sideOne}`, 10); // 1st value = top line
    ctx.lineTo(`${this.props.sideThree}`, `${this.props.sideTwo}`); // 1st value = bottom line, 2nd value = right line
    ctx.lineTo(10, `${this.props.sideFour}`); // 2nd value = left line
    ctx.lineTo(10, 10); // close shape

    const createQuadrilateral = ctx.stroke();
    console.log();
  }

  // componentDidUpdate() {
  //   const c = document.getElementById("myCanvas");
  //   const circle = c.getContext("2d");
  //   circle.clearRect(0, 0, c.width, c.height);
  // }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.sideOne &&
          !this.props.sideTwo &&
          `${this.props.createQuadrilateral}`}
        <canvas id="myCanvas" width={2000} height={2000} />
      </div>
    );
  }
}

export default Quadrilateral;

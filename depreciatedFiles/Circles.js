import React from "react";

class Circles extends React.Component {
  componentDidMount(props) {
    const c = document.getElementById("myCanvas");
    const circle = c.getContext("2d");
    circle.beginPath();
    // circle.clearRect(0, 0, c.width, c.height);

    // const createCircle = circle.stroke();
    // console.log("circle", this.props);
  }

  componentDidUpdate(props) {
    const c = document.getElementById("myCanvas");
    const circle = c.getContext("2d");
    // const createCircle = circle.stroke();
    // circle.clearRect(0, 0, c.width, c.height);
    circle.beginPath();
    circle.arc(`100`, `75`, 100, 0, 2 * Math.PI);
  }

  render(props) {
    return (
      <>
        <div>{this.props.sideOne && !this.props.sideTwo && <p>hello</p>};</div>
        <div>
          <canvas id="myCanvas" width={2000} height={2000} />
        </div>
      </>
    );
  }
}

export default Circles;

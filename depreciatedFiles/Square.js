// import React from "react";

// const Square = ({ placement, sideOne, sideTwo, sideThree, sideFour }) => {
//   const c = document.getElementById("canvas");
//   const square = c.getContext("2d");
//   square.beginPath();
//   square.moveTo(`${placement}`, `${placement}`); // placement within the canvas
//   square.lineTo(`${sideOne * 10}`, `${placement}`); // 1st value = top line
//   square.lineTo(`${sideThree * 10}`, `${sideTwo * 10}`); // 1st value = bottom line, 2nd value = right line
//   square.lineTo(`${placement}`, `${sideFour * 10}`); // 2nd value = left line
//   square.lineTo(`${placement}`, `${placement}`); // close shape
//   square.closePath();

//   {
//     sideTwo && sideTwo && sideThree && sideFour && square.stroke();
//   }
//   return (
//     <div>
//       <canvas id="canvas" width={2000} height={2000} />
//     </div>
//   );
// };

// export default Square;

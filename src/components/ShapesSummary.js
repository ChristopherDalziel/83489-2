// import React from "react";
// import { connect } from "react-redux";
// import sortShapes from "../selectors/shapes";

// export const ShapesSummary = ({ shapeCount }) => {
//   const shapeWord = shapeCount === 1 ? "shape" : "shapes";
//   return (
//     <div>
//       <h2>
//         Viewing {shapeCount} {shapeWord}
//       </h2>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   const visibleShapes = sortShapes(state.shapes, state.filters);
//   return {
//     shapeCount: visibleShapes.length,
//   };
// };

// export default connect(mapStateToProps)(ShapesSummary);

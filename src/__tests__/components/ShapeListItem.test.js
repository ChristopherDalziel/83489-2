import React from "react";
import { shallow } from "enzyme";
import ShapeListItem from "../../components/ShapeListItem";
import { Quadrilateral } from "../../components/ShapeListItem";
import shapes from "../fixtures/shapes";

import toJSON from "enzyme-to-json";

test("Should render shape list item with data", () => {
  const wrapper = shallow(
    <ShapeListItem
      sideOne={shapes[0].sideOne}
      sideTwo={shapes[0].sideTwo}
      sideThree={shapes[0].sideThree}
      sideFour={shapes[0].sideFour}
    />
  );
  expect(toJSON(wrapper)).toMatchSnapshot();
});

// Wrapper returns weird due to returning styled div's or konva. Will come back to this.

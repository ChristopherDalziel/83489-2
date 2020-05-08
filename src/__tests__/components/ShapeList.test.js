import React from "react";
import { shallow } from "enzyme";
import { ShapeList } from "../../components/ShapeList";
import shapes from "../fixtures/shapes";

import toJSON from "enzyme-to-json";

test("Should render shape list with shapes", () => {
  const wrapper = shallow(<ShapeList shapes={shapes} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should render shape list with empty message", () => {
  const wrapper = shallow(<ShapeList shapes={[]} />);
});

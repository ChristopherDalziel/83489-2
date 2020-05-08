import React from "react";
import { shallow } from "enzyme";
import ShapeForm from "../../components/ShapeForm";
import shapes from "../fixtures/shapes";

import toJSON from "enzyme-to-json";

test("Should render shape form correctly", () => {
  const wrapper = shallow(<ShapeForm />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

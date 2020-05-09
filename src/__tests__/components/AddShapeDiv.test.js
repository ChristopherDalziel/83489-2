import React from "react";
import { shallow } from "enzyme";
import { AddShapeDiv } from "../../components/AddShapeDiv";
import shapes from "../fixtures/shapes";

import toJSON from "enzyme-to-json";

let addShape, wrapper;

beforeEach(() => {
  addShape = jest.fn();
  wrapper = shallow(<AddShapeDiv addShape={addShape} />);
});

test("Should render the AddShapeDiv correctly", () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should handle onSubmit", () => {
  wrapper.find("ShapeForm").prop("onSubmit")(shapes[1]);
  expect(addShape).toHaveBeenLastCalledWith(shapes[1]);
});

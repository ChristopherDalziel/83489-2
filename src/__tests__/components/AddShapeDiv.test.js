import React from "react";
import { shallow } from "enzyme";
import { AddShapeDiv, Button } from "../../components/AddShapeDiv";
import ShapeForm from "../../components/ShapeForm";
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
  wrapper.find(Button).at(0).simulate("click");
  wrapper.find(ShapeForm).at(0).prop("onSubmit")(shapes[1]);
  expect(addShape).toHaveBeenLastCalledWith(shapes[1]);
});

import React from "react";
import { mount } from "enzyme";
import { AddShapeDiv } from "../../components/AddShapeDiv";
import shapes from "../fixtures/shapes";

import toJSON from "enzyme-to-json";

let addShape, wrapper;

beforeEach(() => {
  addShape = jest.fn();
  wrapper = mount(<AddShapeDiv addShape={addShape} />);
});

test("Should render the AddShapeDiv correctly", () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

// This tests failed because when it's called it is testing the connected form, if it's changed to the named import within the 'AddShapeDiv' the test passes but the app crashes.
test("Should handle onSubmit", () => {
  wrapper.find("ShapeForm").at(0).prop("onSubmit")(shapes[1]);
  expect(addShape).toHaveBeenLastCalledWith(shapes[1]);
});

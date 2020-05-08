import React from "react";
import { shallow } from "enzyme";
import ShapeForm from "../../components/ShapeForm";
import shapes from "../fixtures/shapes";

import toJSON from "enzyme-to-json";

test("Should render shape form correctly", () => {
  const wrapper = shallow(<ShapeForm />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should render form with shape data", () => {
  const wrapper = shallow(<ShapeForm shape={shapes[0]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should render error for invalid form submission", () => {
  const wrapper = shallow(<ShapeForm />);
  expect(toJSON(wrapper)).toMatchSnapshot();
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should set sideOne on input change", () => {
  const value = "10";
  const wrapper = shallow(<ShapeForm />);
  wrapper.find("input").at(0).simulate("change", { target: { value } });
  expect(wrapper.state("sideOne")).toBe(value);
});

test("Should set sideTwo on input change", () => {
  const value = "15";
  const wrapper = shallow(<ShapeForm />);
  wrapper.find("input").at(1).simulate("change", { target: { value } });
  expect(wrapper.state("sideTwo")).toBe(value);
});

test("Should set sideThree on input change", () => {
  const value = "10";
  const wrapper = shallow(<ShapeForm />);
  wrapper.find("input").at(2).simulate("change", { target: { value } });
  expect(wrapper.state("sideThree")).toBe(value);
});

test("Should set sideFour on input change", () => {
  const value = "20";
  const wrapper = shallow(<ShapeForm />);
  wrapper.find("input").at(3).simulate("change", { target: { value } });
  expect(wrapper.state("sideFour")).toBe(value);
});

test("Should set sideOne if input is valid", () => {
  const value = "100.25";
  const wrapper = shallow(<ShapeForm />);
  wrapper.find("input").at(0).simulate("change", { target: { value } });
  expect(wrapper.state("sideOne")).toBe(value);
});

test("Should not set sideOne if input is invalid", () => {
  const value = "10.255";
  const wrapper = shallow(<ShapeForm />);
  wrapper.find("input").at(0).simulate("change", { target: { value } });
  expect(wrapper.state("sideOne")).toBe("");
});

test("Should set sideTwo if input is valid", () => {
  const value = "55.55";
  const wrapper = shallow(<ShapeForm />);
  wrapper.find("input").at(1).simulate("change", { target: { value } });
  expect(wrapper.state("sideTwo")).toBe(value);
});

test("Should not set sideTwo if input is invalid", () => {
  const value = "50.5510";
  const wrapper = shallow(<ShapeForm />);
  wrapper.find("input").at(1).simulate("change", { target: { value } });
  expect(wrapper.state("sideTwo")).toBe("");
});

test("Should set sideThree if input is valid", () => {
  const value = "40.45";
  const wrapper = shallow(<ShapeForm />);
  wrapper.find("input").at(2).simulate("change", { target: { value } });
  expect(wrapper.state("sideThree")).toBe(value);
});

test("Should not set sideThree if input is invalid", () => {
  const value = "29.015";
  const wrapper = shallow(<ShapeForm />);
  wrapper.find("input").at(2).simulate("change", { target: { value } });
  expect(wrapper.state("sideThree")).toBe("");
});

test("Should set sideFour if input is valid", () => {
  const value = "10";
  const wrapper = shallow(<ShapeForm />);
  wrapper.find("input").at(3).simulate("change", { target: { value } });
  expect(wrapper.state("sideFour")).toBe(value);
});

test("Should not set sideFour if input is invalid", () => {
  const value = "00.001";
  const wrapper = shallow(<ShapeForm />);
  wrapper.find("input").at(3).simulate("change", { target: { value } });
  expect(wrapper.state("sideFour")).toBe("");
});

test("Should call onSubmit prop for validation", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ShapeForm shape={shapes[2]} onSubmit={onSubmitSpy} />
  );
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    sideOne: shapes[2].sideOne,
    sideTwo: shapes[2].sideTwo,
    sideThree: shapes[2].sideThree,
    sideFour: shapes[2].sideFour,
  });
});

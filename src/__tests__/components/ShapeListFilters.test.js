import React from "react";
import { shallow } from "enzyme";
import { ShapeListFilters } from "../../components/ShapeListFilters";
import {
  filters,
  alternateFilterCircles,
  alternateFilterQuadrilaterals,
} from "../fixtures/filters";

import toJSON from "enzyme-to-json";

let sortByTriangles, sortByCircles, sortByQuadrilaterals, wrapper;

beforeEach(() => {
  sortByTriangles = jest.fn();
  sortByCircles = jest.fn();
  sortByQuadrilaterals = jest.fn();
  wrapper = shallow(
    <ShapeListFilters
      filters={filters}
      sortByCircles={sortByCircles}
      sortByQuadrilaterals={sortByQuadrilaterals}
      sortByTriangles={sortByTriangles}
    />
  );
});

test("Should render ShapeListFilters with default filter correctly", () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should render ShapeListFilters with alternateFilterCircle data correctly", () => {
  wrapper.setProps({ filters: alternateFilterCircles });
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should render ShapeListFilters with alternateFilterQuadrilaterals data correctly", () => {
  wrapper.setProps({ filters: alternateFilterQuadrilaterals });
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should sort by Triangles", () => {
  const value = "Triangles";
  wrapper.find("select").simulate("change", { target: { value } });
  expect(sortByTriangles).toHaveBeenCalled();
});

test("Should sort by Circles", () => {
  const value = "Circles";
  wrapper.find("select").simulate("change", { target: { value } });
  expect(sortByCircles).toHaveBeenCalled();
});

test("Should sort by Quadrilaterals", () => {
  const value = "Quadrilaterals";
  wrapper.find("select").simulate("change", { target: { value } });
  expect(sortByQuadrilaterals).toHaveBeenCalled();
});

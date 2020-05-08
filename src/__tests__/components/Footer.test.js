import React from "react";
import { shallow } from "enzyme";
import Footer from "../../components/Footer";

import toJSON from "enzyme-to-json";

test("Should render footer correctly", () => {
  const wrapper = shallow(<Footer />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

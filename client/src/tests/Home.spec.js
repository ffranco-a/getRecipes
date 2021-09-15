import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Home from "../components/Home.jsx";
import Pagination from "../components/Pagination.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { Provider } from "react-redux";
import store from "../store/index.js";

configure({ adapter: new Adapter() });

describe("<Home />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>);
  });

  it("should render a <Pagination /> component", () => {
    expect(wrapper.find(Pagination)).toHaveLength(1);
  });

  it("should render a <SearchBar /> component", () => {
    expect(wrapper.find(SearchBar)).toHaveLength(1);
  });
});
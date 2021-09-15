import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import NavBar from "../components/NavBar.jsx";
import { Link, NavLink } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("<NavBar />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  it("should render one <Link /> component and four <NavLink /> components", () => {
    expect(wrapper.find(Link)).toHaveLength(1);
    expect(wrapper.find(NavLink)).toHaveLength(4);
  });

  it('first <Link /> should redirect to Landing page (route "/") and text should be the app title', () => {
    expect(wrapper.find(Link).at(0).prop("to")).toEqual("/");
    expect(wrapper.find(Link).at(0).text()).toEqual("getRecipes() >");
  });

  it('first <NavLink /> should redirect to Home page (route "/home") and text should be "Explore"', () => {
    expect(wrapper.find(NavLink).at(0).prop("to")).toEqual("/home");
    expect(wrapper.find(NavLink).at(0).text()).toEqual("Explore");
  });

  it('second <NavLink /> should redirect to Recipe creation form (route "/create") and text should be "Create"', () => {
    expect(wrapper.find(NavLink).at(1).prop("to")).toEqual("/create");
    expect(wrapper.find(NavLink).at(1).text()).toEqual("Create");
  });

  it('third <NavLink /> should redirect to Diets page (route "/diets") and text should be "Diets"', () => {
    expect(wrapper.find(NavLink).at(2).prop("to")).toEqual("/diets");
    expect(wrapper.find(NavLink).at(2).text()).toEqual("Diets");
  });

  it('last <NavLink /> should redirect to Favorites page (route "/favorites") and text should be "Favorites"', () => {
    expect(wrapper.find(NavLink).at(3).prop("to")).toEqual("/favorites");
    expect(wrapper.find(NavLink).at(3).text()).toEqual("Favorites");
  });
});
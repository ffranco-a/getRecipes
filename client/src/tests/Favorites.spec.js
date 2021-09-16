import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Favorites from '../components/Favorites.jsx';
import { Provider } from 'react-redux';
import { Link, BrowserRouter } from 'react-router-dom';
import store from "../store/index.js";

configure({ adapter: new Adapter() });

describe('<Favorites />', () => {

  describe('When there are no favorite recipes', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(
        <Provider store={store}>
          <BrowserRouter>
            <Favorites />
          </BrowserRouter>
        </Provider>
      );
    });
  
    it('it should render a <Link /> component', () => {
      expect(wrapper.find(Link)).toHaveLength(1);
    });
  
    it('that <Link /> component should redirect to Home page (route "/home")', () => {
      expect(wrapper.find(Link).at(0).prop('to')).toEqual('/home');
    });
  
    it('that <Link /> component should have the text "go explore and find some!"', () => {
      expect(wrapper.find(Link).at(0).text()).toEqual('go explore and find some!');
    });    
  })
});

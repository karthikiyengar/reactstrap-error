import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configure} from "enzyme"
import {mount} from "enzyme"
import Adapter from "enzyme-adapter-react-16"

configure({adapter: new Adapter()})


it('renders without crashing', () => {
  const div = document.createElement('div');
  mount(<App/>);
});

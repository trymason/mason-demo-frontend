import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import h from 'react-hyperscript';

import About from './components/About';
import Chat from './components/Chat';
import Home from './components/Home';
import Pricing from './components/Pricing';
import WhySlack from './components/WhySlack';


class App extends Component {
  render() {
    return h('.min-vh-100.bg-white', [
      h(Router, [
        h(Switch, [
          h(Route, {
            exact: true,
            path: '/',
            component: Home
          }),
          h(Route, {
            exact: true,
            path: '/features',
            component: WhySlack
          }),
          h(Route, {
            exact: true,
            path: '/Pricing',
            component: Pricing
          }),
          h(Route, {
            exact: true,
            path: '/about',
            component: About
          }),
          h(Route, {
            exact: true,
            path: '/chat',
            component: Chat
          }),
          h(Route, {
            path: '/chat/:id',
            component: Chat
          }),
          h(Route, {
            render: () => h(Redirect, { to: '/' })
          })
        ])
      ])
    ])
  }
}

export default App;

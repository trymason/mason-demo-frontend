import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import h from 'react-hyperscript';
import _ from 'lodash';

import PrivateRoute from './utils/PrivateRoute';

import About from './components/About';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import Chat from './components/Chat';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Features from './components/Features';


class App extends Component {
  constructor(props) {
    super(props)
    this.checkIsAuthenticated = this.checkIsAuthenticated.bind(this)
  }

  checkIsAuthenticated() {
    return !!localStorage.getItem('mason_slack.user')
  }

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
            component: Features
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
          h(PrivateRoute, {
            auth: this.checkIsAuthenticated(),
            exact: true,
            path: '/chat',
            component: Chat
          }),
          h(Route, {
            path: '/chat/:id',
            component: Chat
          }),
          h(Route, {
            path: '/signin',
            render: () => {
              if (this.checkIsAuthenticated()) {
                return h(Redirect, { to: '/chat' })
              }
              return h(Login)
            }
          }),
          h(Route, {
            path: '/signup',
            render: () => {
              if (this.checkIsAuthenticated()) {
                return h(Redirect, { to: '/chat' })
              }
              return h(Register)
            }
          }),
          h(PrivateRoute, {
            auth: this.checkIsAuthenticated(),
            exact: true,
            path: '/logout',
            component: Logout
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

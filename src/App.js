import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import h from 'react-hyperscript';

import Home from './components/Home';
import Chat from './components/Chat';

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

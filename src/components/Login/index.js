import { Component } from 'react';
import h from 'react-hyperscript';
import Mason from 'mason-library';

import Login from './Login';

export default class _Login extends Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin({ user }) {
    localStorage.setItem('mason_slack.user', JSON.stringify(user));
    window.location.href = '/chat';
  }

  componentDidMount() {
    Mason({
      apiKey: "lF468QYy/S+M2LpKKIfxGsRqC18xARiJtoLXCAJ2Mhw=",
      componentIds: [
        "5b4674dc8c528d0003242f01", // Navbar
        "5b56659965d1fd0003d98611", // Login
        "5b46aa0c8c528d00032431b4", // footer
      ],
    });
  }
  render() {
    return h(Login, {
      handleLogin: this.handleLogin
    })
  }
}

import { Component } from 'react';
import h from 'react-hyperscript';
import Mason from 'mason-library';

import Register from './Register';

export default class _Register extends Component {
  constructor(props) {
    super(props)
    this.handleRegister = this.handleRegister.bind(this)
  }

  handleRegister({ user }) {
    localStorage.setItem('mason_slack.user', JSON.stringify(user));
    window.location.href = '/chat/5b5730e17ce495001ed52d45';
  }

  componentDidMount() {
    Mason({
      apiKey: "lF468QYy/S+M2LpKKIfxGsRqC18xARiJtoLXCAJ2Mhw=",
      componentIds: [
        "5b4674dc8c528d0003242f01", // Navbar
        "5b566c7d65d1fd0003d98737", // Register
        "5b46aa0c8c528d00032431b4", // footer
      ],
    });
  }
  render() {
    return h(Register, {
      handleRegister: this.handleRegister
    })
  }
}

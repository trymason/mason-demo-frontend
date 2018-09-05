import { Component } from 'react';
import h from 'react-hyperscript';
import { Canvas, Login } from 'mason-library';

export default class _Login extends Component {
  render() {
    return h('', [
      h('.bg-white.ph3.ph4-ns.bb.b--moon-gray', [
        h('.mw-body.center', [
          h(Canvas, { id: "5b4674dc8c528d0003242f01" }), // Navbar
        ])
      ]),
      h('.ph3.ph4-ns', { style: { background: "#F5F5F5" }}, [
        h('.mw6.center.pv7', [
          h(Login, {
            id: "5b56659965d1fd0003d98611",
            didReceiveData: this.props.handleLogin
          }) // Login
        ])
      ]),
      h('.ph3.ph4-ns', [
        h('.mw-body.center', [
          h(Canvas, { id: "5b46aa0c8c528d00032431b4" }) // Footer
        ])
      ])
    ])
  }
}

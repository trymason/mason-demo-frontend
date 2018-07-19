import { Component } from 'react';
import h from 'react-hyperscript';
import { Canvas } from 'mason-library';
import { Page } from 'mason-library';

export default class Pricing extends Component {
  render() {
    return h('', [
      h('.bg-white.ph3.ph4-ns.bb.b--moon-gray', [
        h('.mw-body.center', [
          h(Canvas, { id: "5b4674dc8c528d0003242f01" }), // Navbar
        ])
      ]),
      h('.bg-white.ph3.ph4-ns', [
        h('.mw-body.center', [
          h(Page, { id: "5b5030ef83d8f80003d6f91e"}), // clickable panel
        ])
      ]),
      h('.bg-white.ph3.ph4-ns', [
        h('.mw-body.center', [
          h(Canvas, { id: "5b4fc27283d8f80003d6f23f" }) // Body
        ])
      ]),
      h('.ph3.ph4-ns', { style: { background: '#F5F5F5' }}, [
        h('.mw-body.center', [
          h(Canvas, { id: "5b4fc3ff83d8f80003d6f24c" }) // Footer
        ])
      ])
    ])
  }
}

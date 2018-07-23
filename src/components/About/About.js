import { Component } from 'react';
import h from 'react-hyperscript';
import { Canvas } from 'mason-library';



export default class About extends Component {
  render() {
    return h('', [
      h('.bg-white.ph3.ph4-ns.bb.b--moon-gray', [
        h('.mw-body.center', [
          h(Canvas, { id: "5b4674dc8c528d0003242f01" }), // Navbar
        ])
      ]),
      h('.bg-white.ph3.ph4-ns.bb.b--moon-gray', [
        h('.mw-body.center', [
          h(Canvas, {id: "5b4e4a63cfef940003625a89" }), // Hero
        ])
      ]),
      h('.bg-transparent', [
        h('', [
          h(Canvas, { id: "5b4e3ed2cfef9400036259ad" }) // CTA
        ])
      ]),
      h('.bg-white.ph3.ph4-ns', [
        h('.mw-body.center', [
          h(Canvas, { id: "5b46aa0c8c528d00032431b4" }) // Footer
        ])
      ]),
      h('.ph3.ph4-ns', { style: { background: '#F5F5F5' }}, [
        h('.mw-body.center', [
          h(Canvas, { id: "5b477214ba8e5f0003457f7c" }) // Footer bottom
        ])
      ])
    ])
  }
}

import { Component } from 'react';
import h from 'react-hyperscript';

import Mason, { Canvas } from 'mason-library';

class App extends Component {
  componentDidMount() {
    Mason({
      apiKey: "lF468QYy/S+M2LpKKIfxGsRqC18xARiJtoLXCAJ2Mhw=",
      componentIds: [
        "5b4674dc8c528d0003242f01", // Navbar
        "5b467d5b8c528d0003242f90", // Home Hero
        "5b468ddd8c528d00032430be", // Home logos
        "5b4696958c528d0003243111", // Home get started
        "5b46aa0c8c528d00032431b4", // Footer
        "5b477214ba8e5f0003457f7c", // Footer bottom
      ],
    });
  }


  render() {
    return h('', [
      h('.bg-white.ph3.ph4-ns.bb.b--moon-gray', [
        h('.mw-body.center', [
          h(Canvas, { id: "5b4674dc8c528d0003242f01" }), // Navbar
        ])
      ]),
      h('.bg-white.ph3.ph4-ns', [
        h('.mw-body.center', [
          h(Canvas, { id: "5b467d5b8c528d0003242f90"}), // Home hero
        ])
      ]),
      h('.ph3.ph4-ns', { style: { background: "#F5F5F5" }}, [
        h('.mw-body.center', [
          h(Canvas, { id: "5b468ddd8c528d00032430be" }) // Home logos
        ])
      ]),
      h('.bg-transparent', [
        h('', [
          h(Canvas, { id: "5b4696958c528d0003243111" }) // Home get started
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

export default App;

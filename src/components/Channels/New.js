import { Component } from 'react';
import h from 'react-hyperscript';
import { Canvas } from 'mason-library';

export default class New extends Component {
  render() {
    return h('', [
      h('.bg-white.pa2.pa3-ns', [
        h('.center', { style: { maxWidth: 640 }}, [
          h(Canvas, {
            id: "5b579e3e36ed080003133d39",
            didReceiveData: (d) => {
              window.location.href = "/chat";
              return d;
            },
            onError: (e) => {
              console.log('error!', e)
            }
          }), // New channel form
        ])
      ]),
    ])
  }
}

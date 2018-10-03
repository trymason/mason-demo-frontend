import { Component } from 'react';
import h from 'react-hyperscript';
import { Canvas } from 'mason-library';

export default class Home extends Component {
  render() {
    return h('', [
      h(Canvas, { id: "5bb3ecfaff5fd200030f685b" }), // Navbar
      h(Canvas, { id: "5b467d5b8c528d0003242f90" }), // Home hero
      h(Canvas, { id: "5b906f5d8d4a9600035bfeac" }), // The hub for your team
      h(Canvas, { id: "5b90821e8d4a9600035c0069" }), // Built for every team
      h(Canvas, { id: "5ba410fb5eb9050003790d8d" }), // You're in good company
      h(Canvas, { id: "5b4696958c528d0003243111" }), // Try slack wiht your team
      h(Canvas, { id: "5b46aa0c8c528d00032431b4" }), // Footer
      h(Canvas, { id: "5b477214ba8e5f0003457f7c" }), // Footer bottom
    ])
  }
}

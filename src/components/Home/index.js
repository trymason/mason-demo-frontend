import { Component } from 'react';
import h from 'react-hyperscript';
import Mason from 'mason-library';

import Home from './Home';

export default class _Home extends Component {
  componentDidMount() {
    Mason({
      apiKey: "lF468QYy/S+M2LpKKIfxGsRqC18xARiJtoLXCAJ2Mhw=",
      componentIds: [
        "5bb3ecfaff5fd200030f685b", // Navbar
        "5b467d5b8c528d0003242f90", // Home Hero
        "5b468ddd8c528d00032430be", // Home logos
        "5b906f5d8d4a9600035bfeac", // The hub for your team
        "5b4696958c528d0003243111", // Home get started
        "5ba410fb5eb9050003790d8d", // You're in good company
        "5b46aa0c8c528d00032431b4", // Footer
        "5b477214ba8e5f0003457f7c", // Footer bottom
        "5b90821e8d4a9600035c0069", // built for every team
        "5b4cdf1a55ad93000368c6dd"
      ],
    });
  }
  render() {
    return h(Home)
  }
}

import { Component } from 'react';
import h from 'react-hyperscript';
import Mason from 'mason-library';

import Plans from './Plans';

export default class _Plans extends Component {
  componentDidMount() {
    Mason({
      apiKey: "lF468QYy/S+M2LpKKIfxGsRqC18xARiJtoLXCAJ2Mhw=",
      componentIds: [
        "5b4674dc8c528d0003242f01", // Navbar
        "5b4fc3ff83d8f80003d6f24c", // footer
        "5b4fc27283d8f80003d6f23f", // Body
        "5b5030ef83d8f80003d6f91e", // panel

      ],
    });
  }
  render() {
    return h(Plans)
  }
}

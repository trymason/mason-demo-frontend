import { Component } from 'react';
import _ from 'lodash';
import h from 'react-hyperscript';
import Mason from 'mason-library';

import New from './New';

class _Channels extends Component {
  componentDidMount() {
    Mason({
      apiKey: "lF468QYy/S+M2LpKKIfxGsRqC18xARiJtoLXCAJ2Mhw=",
      componentIds: [
        "5b579e3e36ed080003133d39", // New channels form
      ],
    });
  }
  render() {
    return h(New)
  }
}

export default _Channels;
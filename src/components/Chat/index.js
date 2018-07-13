import { Component } from 'react';
import h from 'react-hyperscript';
import Mason from 'mason-library';

import Chat from './Chat';

export default class _Chat extends Component {
  componentDidMount() {
    Mason({
      apiKey: "lF468QYy/S+M2LpKKIfxGsRqC18xARiJtoLXCAJ2Mhw=",
      componentIds: [
        "5b479273ba8e5f000345810e", // Left sidebar channel feed
      ],
    });
  }
  render() {
    return h(Chat)
  }
}
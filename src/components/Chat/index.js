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
        "5b4e968ecfef9400036264c0", // Chat feed
        "5b4d5a8a55ad93000368cec5", // Create new message
      ],
    });
  }
  render() {
    return h(Chat)
  }
}
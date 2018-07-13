import { Component } from 'react';
import h from 'react-hyperscript';
import { Feed } from 'mason-library';

export default class Chat extends Component {
  render() {
    return h('.flex', [
      h('.min-vh-100', { style: { backgroundColor: '#303E4D', width: 219 }}, [
        h(Feed, {
          id: "5b479273ba8e5f000345810e" // Left sidebar
        })
      ])
    ])
  }
}
import { Component } from 'react';
import h from 'react-hyperscript';
import { Canvas, Feed } from 'mason-library';

export default class Chat extends Component {
  render() {
    return h('.flex', [
      h('.min-vh-100', { style: { backgroundColor: '#303E4D', width: 219, minWidth: 219 }}, [
        h(Feed, {
          id: "5b4e968ecfef9400036264c0" // Left sidebar
        })
      ]),
      h('.fixed.top-0.bg-white.w-100.overflow-scroll', { style: { minWidth: 400, bottom: 60, left: 219 }}, [
        h('.h-100.w-100', [
          h(Feed, {
            id: "5b4d13c355ad93000368ca6d" // Chat
          })
        ])

      ]),
      h('.fixed.pa3.bottom-0.right-0.bg-white', { style: { left: 219 }}, [
        h(Canvas, {
          id: '5b4d5a8a55ad93000368cec5' // Create new message
        })
      ])
    ])
  }
}
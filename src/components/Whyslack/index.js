import { Component } from 'react';
import h from 'react-hyperscript';
import Mason from 'mason-library';

import WhySlack from './WhySlack';

export default class _WhySlack extends Component {
  componentDidMount() {
    Mason({
      apiKey: "lF468QYy/S+M2LpKKIfxGsRqC18xARiJtoLXCAJ2Mhw=",
      componentIds: [
        "5b4674dc8c528d0003242f01", // Navbar
        "5b4d175555ad93000368cab3", // Hero
        "5b4e3ed2cfef9400036259ad", // CTA
        "5b46aa0c8c528d00032431b4", // Footer
        "5b477214ba8e5f0003457f7c", // Footer bottom
        "5b4f8dd283d8f80003d6ef0d", // Body
        "5b4f7631c36cae0003c78809", // clickable Page
      ],
    });
  }
  render() {
    return h(WhySlack)
  }
}

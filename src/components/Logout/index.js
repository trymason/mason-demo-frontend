import { Component } from 'react';
import h from 'react-hyperscript';

export default class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem('mason_slack.user');
    window.location.href = "/signin";
  }
  render() {
    return null
  }
}

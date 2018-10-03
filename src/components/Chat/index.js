import { Component } from 'react';
import _ from 'lodash';
import h from 'react-hyperscript';
import Mason from 'mason-library';
import { withRouter } from 'react-router-dom';
import openSocket from 'socket.io-client';

import config from '../../config';
import Chat from './Chat';

class _Chat extends Component {
  constructor(props){
    super(props)
    this.socket = openSocket(config.apiURL);
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('mason_slack.user'))
  }

  componentDidMount() {
    Mason({
      apiKey: "lF468QYy/S+M2LpKKIfxGsRqC18xARiJtoLXCAJ2Mhw=",
      componentIds: [
        "5babf2a0dd3fc6000395eb59", // Left sidebar channel feed
        "5b4d13c355ad93000368ca6d", // Chat feed
        "5b4d5a8a55ad93000368cec5", // Create new message
        "5b4fcdd583d8f80003d6f328", // Chat header
      ],
    });
  }
  render() {
    const channelId = _.get(this.props.match, 'params.id', config.channels.general)
    return h(Chat, {
      channelId,
      socket: this.socket,
      user: this.getCurrentUser(),
    })
  }
}

export default withRouter(_Chat);

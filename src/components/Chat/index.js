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
  }

  componentDidMount() {
    Mason({
      apiKey: "lF468QYy/S+M2LpKKIfxGsRqC18xARiJtoLXCAJ2Mhw=",
      componentIds: [
        "5b4e968ecfef9400036264c0", // Left sidebar channel feed
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
    })
  }
}

export default withRouter(_Chat);
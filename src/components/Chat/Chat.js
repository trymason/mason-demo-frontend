import { Component } from 'react';
import h from 'react-hyperscript';
import { Canvas, Feed } from 'mason-library';
import _ from 'lodash';
import moment from 'moment';

export default class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.scrollChatIntoView = this.scrollChatIntoView.bind(this)
  }

  componentDidMount() {
    this.props.socket.on('new chat message', (message) => {
      this.setState(prevState => (
        { data: _.concat(prevState.data,
          {
            channelId: this.props.channelId,
            createdAt: moment(),
            message,
            userId: {
              _id: "5b4d5766bf2a66001e7d1937",
              name: 'tom mclaughlin',
              photoUrl: 'https://randomuser.me/api/portraits/men/4.jpg'
            },
          })
        }))
       this.scrollChatIntoView()
    });
  }

  scrollChatIntoView() {
    const chatItems = _.get(this.refs.chat, 'children[0].children[0].children', [])
    if (!_.isEmpty(chatItems)){
      const lastItem = chatItems[chatItems.length -1];
      lastItem.scrollIntoView();
    }
  }

  render() {
    const { socket, channelId } = this.props;

    return h('.flex', [
      h('.min-vh-100', { style: { backgroundColor: '#303E4D', width: 219, minWidth: 219 }}, [
        h(Feed, {
          id: "5b4e968ecfef9400036264c0" // Left sidebar
        })
      ]),
      h('.absolute.top-0.right-0.bb.b--moon-gray.z-1', { style: { left: 219, width: 'calc(vw - 219px)'}}, [
        h('.w-100', [
          h(Canvas, {
            id: '5b4fcdd583d8f80003d6f328',
            children: h('.f6.b.dark-gray.tl.pt2', { style: { fontFamily: 'Proxima' }}, ['#channel'])
          }) //Chat header
        ]),
      ]),
      h('.fixed.bg-white.w-100.overflow-scroll', { style: { minWidth: 400, bottom: 60, left: 219, top: 58 }}, [
        h('.h-100.w-100', { id: channelId, ref: 'chat' }, [
          h(Feed, {
            id: "5b4d13c355ad93000368ca6d", // Chat
            data: this.state.data,
            willFetchData: (d) => ({
              ...d,
              url: `http://mason-demo-be.herokuapp.com/channels/${channelId}/conversations`
            }),
            didFetchData: (d) => {
              setTimeout(() => {
                this.scrollChatIntoView();
              }, 600)
              return d
            }
          })
        ])
      ]),
      h('.fixed.pa3.bottom-0.right-0.bg-white', { style: { left: 219 }}, [
        h(Canvas, {
          id: '5b4d5a8a55ad93000368cec5', // Create new message
          willSendData: (d) => {
            socket.emit('new chat message', d.message)
            return d
          }
        })
      ])
    ])
  }
}
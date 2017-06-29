import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Conversation from './Conversation';
import MessageInput from './MessageInput';

import { updateNavbar } from '../actions/navbarActions';
import { sendInitChat } from '../actions/chatActions';
import {
  addMessageToChat, receivedAcceptChat, sendAcceptChat
} from '../actions/conversationsActions';

import { View } from 'react-native';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.updateChat = this.updateChat.bind(this);
  }

  componentDidMount() {
    const {
      updateNavbar, receiver,
      chatClient, conversation,
      user
    } = this.props;

    updateNavbar(receiver.username, '/contacts');
    chatClient.updateView = this.updateChat;

    if (!conversation || conversation.length === 0) {
      chatClient.initChat(user._id);
    }
  }

  updateChat(update){
    const { user, receiver } = this.props;
    switch(update.event){
      case 'init-chat':
        this.props.chatClient.acceptChat(user._id, receiver._id);
        this.props.sendAcceptChat(receiver._id);
        break;
      case 'accept-chat':
        this.props.receivedAcceptChat(user._id);
        break;
      case 'chat-msg':
        const { message } = update.data;
        this.props.addMessageToChat(message, message.emitterId);
        break;
      default:
        break;
    }
  }

  render() {
    const { user, receiver } = this.props;
    return (
      <View className="container">
        <Conversation receiverId={receiver._id} />
        <MessageInput emitterId={user._id} receiverId={receiver._id} />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const receiverId = ownProps.match.params.userId;
  const { onlineUsers, offlineUsers } = state.chat;
  const allUsers = onlineUsers.concat(offlineUsers);
  return {
    receiver: allUsers.find((user) => user._id === receiverId),
    user: state.user,
    chatClient: state.chat.client,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateNavbar,
    sendInitChat,
    sendAcceptChat,
    addMessageToChat,
    receivedAcceptChat
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);

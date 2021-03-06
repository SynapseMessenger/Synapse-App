/* **************************************************************
 *                  Synapse - Desktop Client
 * @author Marco Fernandez Pranno <mfernandezpranno@gmail.com>
 * @licence MIT
 * @link https://github.com/SynapseNetwork/Synapse-Desktop
 * @version 1.0
 * ************************************************************** */

'use babel';

import React from 'react';
import { connect } from 'react-redux';
import Conversation from './Conversation';
import MessageInput from './MessageInput';
import { bindActionCreators } from 'redux';
import { updateNavbar } from '../../actions/navbarActions';

import { View, Text, KeyboardAvoidingView } from 'react-native';
import { Link } from 'react-router-native';

import styles from '../../styles/Chat';

class Chat extends React.Component {

  componentWillMount() {
    this.props.updateNavbar(this.props.receiver.username, '/synapse/contacts');
  }

  render() {
    const { user, receiver } = this.props;
    return (
      <KeyboardAvoidingView style={styles.chatWrapper} behavior={'padding'}>
        <View>
          <Conversation
            receiverId={receiver._id}
          />
        </View>
        <View>
          <MessageInput
            emitterId={user._id}
            receiverId={receiver._id}
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const receiverId = ownProps.match.params.userId;
  const { onlineUsers, offlineUsers } = state.chat;
  return {
    receiver: onlineUsers[receiverId] || offlineUsers[receiverId] || null,
    user: state.chat.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateNavbar
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);

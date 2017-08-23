/* **************************************************************
 *                  Synapse - Desktop Client
 * @author Marco Fernandez Pranno <mfernandezpranno@gmail.com>
 * @licence MIT
 * @link https://github.com/SynapseNetwork/Synapse-Desktop
 * @version 1.0
 * ************************************************************** */

import React from 'react';
import { connect } from 'react-redux';
import Message from './Message';
import { View, Text, ScrollView } from 'react-native';
import styles from '../../styles/Chat';
import AutoScroll from './AutoScroll';

const Conversation = (props) => {
  const { messages, user } = props;
  if (messages && messages.length > 0) {
    return (
      <View style={styles.conversationWrapper}>
        <AutoScroll style={styles.scrollView}>
          { messages.map((message) => {
            return (
              <Message
                text={message.text}
                time={message.time}
                isOwn={message.emitterId === user._id}
                key={message.time + message.emitterId}
              />
            );
          })}
        </AutoScroll>
      </View>
    )
  } else return null;
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.chat.user,
    messages: state.chat.conversations[ownProps.receiverId]
  };
};

export default connect(mapStateToProps, null)(Conversation);

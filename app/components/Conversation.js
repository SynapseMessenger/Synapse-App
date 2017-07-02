import React from 'react';
import { connect } from 'react-redux';
import Message from './Message';
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/Chat';

const Conversation = (props) => {
  const { messages, user } = props;
  return (
    <View style={styles.conversationWrapper}>
        <ScrollView>
          {messages && messages.length > 0 && messages.map((message) => {
            return (
              <Message
                text={message.text}
                time={message.time}
                isOwn={message.emitterId === user._id}
                key={message.time + message.emitterId}
              />
            );
          })}
        </ScrollView>
    </View>
  )
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    messages: state.conversations[ownProps.receiverId]
  };
};

export default connect(mapStateToProps, null)(Conversation);

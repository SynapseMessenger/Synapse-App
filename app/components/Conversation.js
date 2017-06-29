import React from 'react';
import { connect } from 'react-redux';
import Message from './Message';
import { View } from 'react-native';

const Conversation = (props) => {
  const { messages, user } = props;
  if (messages && messages.length > 0) {
    return (
      <View className="row">
        <View className="col s12">
          <View className="conversation">
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
          </View>
        </View>
      </View>
    )
  } else return null;
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    messages: state.conversations[ownProps.receiverId]
  };
};

export default connect(mapStateToProps, null)(Conversation);

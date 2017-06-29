import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMessageToChat } from '../actions/conversationsActions';
import { View, Text, TextInput, Button } from 'react-native';

class MessageInput extends React.Component {
  constructor(props){
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
    this.state = {
      message: ''
    };
  }

  sendMessage() {
    const {
      emitterId, receiverId,
      chatClient, addMessageToChat
    } = this.props;
    const message = {
      text: this.state.message,
      time: Date.now(),
      emitterId,
      receiverId
    };
    console.log('Sending message: ', message);
    chatClient.sendMessage(message);
    addMessageToChat(message, message.receiverId);
    this.setState({
      message: ""
    });
  }

  render() {
    return (
      <View className="row input-message-wrapper">
        <View className="col s10">
          <TextInput
            multiline={true}
            numberOfLines={5}
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            className="materialize-textarea input-message"
            value={this.state.message}
            onChangeText={(text) => { this.setState({message: text}) } }
          />
        </View>
        <View className="col s2">
          <Button
            title='[Send]'
            className="btn-floating waves-effect waves-light"
            onPress={this.sendMessage}
          />
        </View>
      </View>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    chatClient: state.chat.client,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addMessageToChat
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);

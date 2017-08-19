/* **************************************************************
 *                  Synapse - Desktop Client
 * @author Marco Fernandez Pranno <mfernandezpranno@gmail.com>
 * @licence MIT
 * @link https://github.com/SynapseNetwork/Synapse-Desktop
 * @version 1.0
 * ************************************************************** */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMessageToSelf, sendMessage } from '../../actions/chatActions';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../../styles/Chat';

class MessageInput extends React.Component {
  constructor(props){
    super(props);
    this.handleSend = this.handleSend.bind(this);
    this.state = {
      message: ''
    };
  }

  handleSend() {
    const message = {
      text: this.state.message,
      time: Date.now(),
      emitterId: this.props.emitterId,
      receiverId: this.props.receiverId
    };
    this.props.addMessageToSelf(message, this.props.receiverId);
    this.props.sendMessage(message);
    this.setState({
      message: ""
    });
  }

  render() {
    return (
      <View style={styles.inputWrapper}>
        <View className="col s10">
          <TextInput
            multiline={true}
            numberOfLines={5}
            style={styles.inputText}
            className="materialize-textarea input-message"
            value={this.state.message}
            onChangeText={(text) => { this.setState({message: text}) } }
          />
        </View>
        <View className="col s2">
          <Button
            title='Send'
            style={styles.inputButton}
            onPress={this.sendMessage}
          />
        </View>
      </View>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addMessageToSelf,
    sendMessage
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(MessageInput);

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
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import styles from '../../styles/Chat';
import colors from '../../utils/colors';

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
        <TextInput
          multiline={true}
          numberOfLines={5}
          style={styles.inputText}
          className="materialize-textarea input-message"
          value={this.state.message}
          onChangeText={(text) => { this.setState({message: text}) } }
        />
        <TouchableHighlight onPress={this.handleSend} style={styles.sendWrapper}>
          <View>
            <Icon
              size={40}
              name='send'
              type='font-awesome'
              color={colors.blue}
            />
          </View>
        </TouchableHighlight>
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

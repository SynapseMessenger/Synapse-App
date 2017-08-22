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
import { bindActionCreators } from 'redux';
import { setUsername } from '../actions/chatActions';
import { View, Text, TextInput } from 'react-native';
import { Redirect } from 'react-router-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import styles from '../styles/Login';

class Login extends React.Component {

  constructor(props) {
    super(props);
    const { username } = props;
    this.state = {
      redirect: false,
      error: (!username && !username.length > 0)
    }
  }

  handleContinue (ev) {
    if (!this.props.username) {
      this.setState({ error: true })
    } else {
      this.setState({ redirect: true })
    }
  }

  render(){
    const { username, setUsername } = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.inputWrapper}>
          <FormLabel>USERNAME</FormLabel>
          <FormInput
            style={styles.input}
            onChangeText={ (text) => setUsername(text) }
            value={username}
            placeholder="Username"
            shake={this.state.error ? true : false}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            icon={{name: 'trending-flat'}}
            onPress={ this.handleContinue.bind(this) }
            title='CONTINUE'
            iconRight
            backgroundColor={'#1e88e5'}
            borderRadius={5}
          />
        </View>
        { this.state.redirect ? <Redirect to="/synapse/contacts" /> : null }
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setUsername
  }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    username: state.chat.username
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

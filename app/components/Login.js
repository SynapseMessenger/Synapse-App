import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUsername } from '../actions/chatActions';
import { View, Text, TextInput, Button } from 'react-native';
import { Redirect } from 'react-router-native';
import styles from '../styles/Login';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  render() {
    const { username, setUsername } = this.props;
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Login
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={(texto) => setUsername(texto)}
          value={username}
          placeholder="Username"
        />

        <Button
          title="Continue"
          onPress={ () => this.setState({ redirect: true })}
        />
        { this.state.redirect ? <Redirect to="/contacts" /> : null }
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

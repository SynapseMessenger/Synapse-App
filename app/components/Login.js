import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUsername } from '../actions/chatActions';
import { View, Text, TextInput } from 'react-native';
import { Link } from 'react-router-native';

const Login = ({ username, setUsername }) => (
  <View>
    <Text>Username:</Text>
    <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      onChange={(ev) => setUsername(ev.target.value)}
      value={username}
    />
    <Link to="/contacts">
      <Text>Continue</Text>
    </Link>
  </View>
)

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

import React from 'react'
import { View, Text, Button, Image } from 'react-native';
import { Link, Redirect } from 'react-router-native';
import styles from '../styles/LandingPage';
import logo from '../assets/images/logo.png';

class LandingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Synapse Messenger
        </Text>

        <Image source={logo} style={styles.logo} />

        <Button
          title="Login"
          onPress={ () => this.setState({ redirect: true })}
        />
        { this.state.redirect ? <Redirect to="/login" /> : null }
      </View>
    );
  }
}

export default LandingPage;

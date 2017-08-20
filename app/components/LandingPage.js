/* **************************************************************
 *                  Synapse - Desktop Client
 * @author Marco Fernandez Pranno <mfernandezpranno@gmail.com>
 * @licence MIT
 * @link https://github.com/SynapseNetwork/Synapse-Desktop
 * @version 1.0
 * ************************************************************** */

'use babel';

import React from 'react';
import { Link, Redirect } from 'react-router-native';
import { View, Text, Button, Image } from 'react-native';
import styles from '../styles/LandingPage';
import logo from '../assets/images/logo.png';


class LandingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Welcome to Synapse
        </Text>

        <Image source={logo} style={styles.logo} />

        <View style={styles.buttonWrapper}>
          <Button
            title="Login"
            onPress={ () => this.setState({ redirect: true })}
          />
        </View>
        { this.state.redirect ? <Redirect to="/login" /> : null }
      </View>
    );
  }
};

export default LandingPage;

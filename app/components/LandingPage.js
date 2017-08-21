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
import { View, Text, Image } from 'react-native';
import { Button, Header } from 'react-native-elements'
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

        <Image source={logo} style={styles.logo} />

        <View style={styles.buttonWrapper}>
          <Button
            icon={{name: 'touch-app'}}
            onPress={ () => this.setState({ redirect: true })}
            title='LOGIN'
            large
            backgroundColor={'#1e88e5'}
            borderRadius={5}
          />
        </View>
        { this.state.redirect ? <Redirect to="/login" /> : null }
      </View>
    );
  }
};

export default LandingPage;

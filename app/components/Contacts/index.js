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
import UserList from './UserList';
import { View, Text } from 'react-native';
import styles from '../../styles/Contacts';

const Contacts = ({ ready, connected }) => (
  <View style={styles.wrapper}>
    { ready ? <UserList /> : <LoadingScreen {...{connected}} /> }
  </View>
);

const LoadingScreen = ({ connected }) => (
  <Text style={styles.title}>
    { connected ? 'Connected' : 'Not connected' }
  </Text>
)


const mapStateToProps = (state) => {
  const { socket } = state.chat;
  const connected = socket && socket.connected;
  return {
    ready: connected,
    connected
  };
};

export default connect(mapStateToProps, null)(Contacts);

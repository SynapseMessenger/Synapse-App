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
import { View, Text, ActivityIndicator } from 'react-native';
import styles from '../../styles/Contacts';

const Contacts = ({ ready, connected }) => (
  <View style={styles.wrapper}>
    { connected ? <UserList /> : <LoadingScreen /> }
  </View>
);

const LoadingScreen = () => (
  <View>
    <Text style={styles.title}>
      Attempting connection...
    </Text>
    <ActivityIndicator animating={true} size={'large'} />
  </View>
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

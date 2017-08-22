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
import { View, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-elements';
import styles from '../../styles/Contacts';

const Contacts = ({ ready, connected }) => (
  <View style={styles.wrapper}>
    { connected ? <UserList /> : <LoadingScreen /> }
  </View>
);

const LoadingScreen = () =>
  <View style={styles.loader}>
    <ActivityIndicator
      animating={true}
      size={100}
      color={'rgba(211,211,211, .5)'}
    />
    <Text style={styles.loadingText}>
      Loading
    </Text>
  </View>


const mapStateToProps = (state) => {
  const { socket } = state.chat;
  const connected = socket && socket.connected;
  return {
    ready: connected,
    connected
  };
};

export default connect(mapStateToProps, null)(Contacts);

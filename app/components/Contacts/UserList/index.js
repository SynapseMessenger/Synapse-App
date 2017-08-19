import React from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import styles from '../../../styles/Contacts';
import UserItem from './UserItem';

function userListCount(userList) {
  return Object.keys(userList).length
}

const UserList = ({ onlineUsers, offlineUsers }) => (
  <View>
    <Text style={styles.title}>Contacts</Text>

    <Text style={styles.subtitle}>Online: ({onlineUsers.length})</Text>
    <ScrollView style={styles.contact_list} hidden={onlineUsers.length === 0}>
      { onlineUsers.map(user =>
        <UserItem key={`online-${user._id}`} id={user._id} username={user.username } />
      )}
    </ScrollView>

    <Text style={styles.subtitle}>Offline: ({offlineUsers.length})</Text>
    <ScrollView style={styles.contact_list} hidden={offlineUsers.length === 0}>
      { offlineUsers.map(user =>
        <UserItem key={`offline-${user._id}`} id={user._id} username={user.username } />
      )}
    </ScrollView>
  </View>
)

const mapStateToProps = (state) => {
  const { onlineUsers, offlineUsers } = state.chat;
  return {
    onlineUsers: Object.values(onlineUsers),
    offlineUsers: Object.values(offlineUsers),
  };
};

export default connect(mapStateToProps, null)(UserList);

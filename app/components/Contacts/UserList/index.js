import React from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import { List } from 'react-native-elements'
import styles from '../../../styles/UserList';
import UserItem from './UserItem';

function userListCount(userList) {
  return Object.keys(userList).length
}

const UserList = ({ onlineUsers, offlineUsers }) => (
  <View style={styles.wrapper}>
    <ScrollView style={styles.contact_list} hidden={onlineUsers.length === 0}>
      <List>
        { onlineUsers.map(({_id, username}) =>
          <UserItem
            key={`online-${_id}`}
            id={_id}
            username={username}
            status={'online'}
          />
        )}
        { offlineUsers.map(({_id, username}) =>
          <UserItem
            key={`offline-${_id}`}
            id={_id}
            username={username}
            status={'offline'}
          />
        )}
      </List>
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

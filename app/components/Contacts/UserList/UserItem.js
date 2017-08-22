import React from 'react';
import { ListItem } from 'react-native-elements'
import { withRouter } from 'react-router-native';
import colors from './../../../utils/colors';

const userStatus = {
  online: {
    iconName: 'user-following',
    itemColor: colors.white
  },
  offline: {
    iconName: 'user-unfollow',
    itemColor: colors.grey
  },
};

const UserItem = withRouter(({ id, username, status, history }) => (
  <ListItem
    onPress={() => history.push(`/synapse/chat/${id}`)}
    key={id}
    leftIcon={{ name: userStatus[status].iconName, type: 'simple-line-icon'}}
    title={username}
    containerStyle={{backgroundColor: userStatus[status].itemColor}}
    >
  </ListItem>
))

export default UserItem;

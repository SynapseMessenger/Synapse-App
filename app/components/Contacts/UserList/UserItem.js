import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import styles from '../../../styles/Contacts';

const UserItem = ({ id, username }) => (
  <Link
    to={`/synapse/chat/${id}`}
    style={styles.contact_item}
    key={id}
    >
    <Text>
      {user.username}
    </Text>
  </Link>
)

export default UserItem;

import React from 'react'
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

const LandingPage = () => (
  <View>
    <Text>Welcome to Synapse</Text>
    <Link to="/login">
      <Text>Login</Text>
    </Link>
  </View>
)

export default LandingPage;

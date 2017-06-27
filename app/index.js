import store from './store';
import React from 'react'
import { View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import Login        from './components/Login.js'
import Contacts     from './components/Contacts.js'
import Chat         from './components/Chat.js'
import LandingPage  from './components/LandingPage.js';

class SynapseApp extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <Route exact path="/"       component={LandingPage} />
          <Route path="/login"        component={Login}       />
          <Route path="/contacts"     component={Contacts}    />
          <Route path="/chat/:userId" component={Chat}        />
        </View>
      </NativeRouter>
    )
  }
}

export default SynapseApp;

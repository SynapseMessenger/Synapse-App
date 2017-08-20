import React from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native';
import { NativeRouter, Route, Redirect } from 'react-router-native';
import SynapseApp from './components/SynapseApp'
import Login from './components/Login.js'
import LandingPage from './components/LandingPage.js';
import ChatClient from './components/ChatClient.js';
import Contacts from './components/Contacts';

const App = () => (
  <NativeRouter>
    <View>
      <Route path="/" render={() => <Redirect to="/landing_page" />} />
      <Route path="/landing_page" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/synapse" component={ChatClient} />
    </View>
  </NativeRouter>
)

export default App;

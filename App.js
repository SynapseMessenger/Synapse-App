import React from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native';
import { NativeRouter, Route, Redirect } from 'react-router-native';

import store from './app/store';
import Login from './app/components/Login.js'
import LandingPage from './app/components/LandingPage.js';
import ChatClient from './app/components/ChatClient.js';
import Contacts from './app/components/Contacts';
import NavBar from './app/components/NavBar';

console.disableYellowBox = true;

const App = () => (
  <Provider store={store}>
    <NativeRouter>
      <View>
        <NavBar />
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/synapse" component={ChatClient} />
      </View>
    </NativeRouter>
  </Provider>
)

export default App;

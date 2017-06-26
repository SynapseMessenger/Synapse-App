import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import SynapseApp from './app';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SynapseApp />
      </Provider>
    );
  }
}

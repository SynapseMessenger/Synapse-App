import React from 'react';
import { connect } from 'react-redux';
import { Header } from 'react-native-elements';
import { withRouter } from 'react-router-native';
import navContent from '../utils/navBarContents';

const NavBar = ({ location: { pathname } }) => (
  <Header
    leftComponent={navContent(pathname).left}
    centerComponent={navContent(pathname).center}
    rightComponent={navContent(pathname).right}
    backgroundColor={'#1e88e5'}
  />
);

export default withRouter(NavBar);

import React from 'react';
import { connect } from 'react-redux';
import { Header } from 'react-native-elements';
import { withRouter } from 'react-router-native';
import navContent from '../utils/navBarContents';
import colors from '../utils/colors';

const NavBar = ({ history, location: { pathname } }) => {
  const {left, center, right} = navContent(pathname, history);
  return (
    <Header
      leftComponent={left}
      centerComponent={center}
      rightComponent={right}
      backgroundColor={colors.blue}
    />
  );
};

export default withRouter(NavBar);

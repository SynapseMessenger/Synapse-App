import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  navBar: {
    minHeight: 30,
    backgroundColor: 'rgba(211,211,211, .5)',
    justifyContent: 'center',
    padding: 5,
    paddingLeft: 25
  },
  navBarTitle: {
    fontSize: 20
  },
  conversationWrapper: {
    backgroundColor: 'rgba(211,211,211, .5)',
    height: 450
  },
  inputWrapper: {
    height: 75
  },
  inputText: {
    height: 60, borderColor: 'gray', borderWidth: 1,
    margin: 5,
    padding: 10
  },
  inputButton: {
    padding: 10
  }
});

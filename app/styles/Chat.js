import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  navBar: {
    minHeight: 30,
    backgroundColor: 'rgba(211,211,211, .5)',
    justifyContent: 'center',
    padding: 5,
    paddingLeft: 25,
    backgroundColor: 'rgba(128, 203, 196, 1)',
    borderBottomWidth: 1
  },
  navBarTitle: {
    fontSize: 20,
  },
  conversationWrapper: {
    backgroundColor: 'rgba(211,211,211, .5)',
    height: 450,
    padding: 20
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
  },
  ownMessage: {

  },
  otherMessage: {

  },
  ownWrapper: {
    alignSelf: 'flex-end',
    margin: 10,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 7,
    borderRadius: 6,
    backgroundColor: 'rgba(128, 203, 196, 1)'
  },
  otherWrapper: {
    alignSelf: 'flex-start',
    margin: 10,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 7,
    borderRadius: 6,
    backgroundColor: 'rgba(128, 222, 234, 1)'
  },
  messageText: {
    fontSize: 15
  },
  messageTime: {
    fontSize: 10
  }
});

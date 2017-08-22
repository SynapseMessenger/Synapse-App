import { StyleSheet } from 'react-native';
import colors from '../utils/colors';

export default styles = StyleSheet.create({
  chatWrapper: {
    height: '100%',
    justifyContent: 'space-between',
  },
  conversationWrapper: {
    backgroundColor: colors.grey,
    marginTop: 69,
    height: '75%',
    flexWrap: 'wrap'
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    borderColor: colors.grey,
  },
  inputText: {
    flex: 10,
    paddingLeft: 10
  },
  sendWrapper: {
    flex: 2,
    justifyContent: 'center'
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

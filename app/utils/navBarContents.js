import colors from './colors';

const mappedContent = (path, history) => {

  switch (path) {
    case '/':
      return {
        left: {},
        center:  { text: 'SYNAPSE', style: { color: colors.white } },
        right: {}
      };
    case '/login':
      return {
        left: {},
        center:  { text: 'LOGIN', style: { color: colors.white } },
        right: {}
      };
    case '/synapse/contacts':
      return {
        left: {},
        center: { text: 'CONTACTS', style: { color: colors.white } },
        right: {}
      };
    case '/synapse/chat':
      return {
        left: {
          icon: 'md-arrow-back',
          color: colors.white,
          type: 'ionicon',
          onPress: () => history.push('/synapse/contacts')
        },
        center: { text: 'CONVERSATION', style: { color: colors.white } },
        right: {}
      };
    default:
      return {
        left: {},
        center: {},
        right: {}
      }
    }
}



const mapContent = (path, history) => {
  if (path.startsWith('/synapse/chat/')) {
    path = '/synapse/chat';
  }

  return mappedContent(path, history);
}

export default mapContent;

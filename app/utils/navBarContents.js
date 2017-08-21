const mappedContent = {
  '/': {
    left: {},
    center:  { text: 'WELCOME TO SYNAPSE', style: { color: '#fff', fontSize: 20 } },
    right: {}
  },
  '/login': {
    left: {},
    center:  { text: 'LOGIN', style: { color: '#fff' } },
    right: {}
  },
  '/synapse/contacts': {
    left: {},
    center: { text: 'CONTACTS', style: { color: '#fff' } },
    right: {}
  },
  '/synapse/chat': {
    left: {},
    center: { text: 'CONVERSATION', style: { color: '#fff' } },
    right: {}
  }
}


const mapContent = (path) => {
  if (path.startsWith('/synapse/chat/')) {
    path = '/synapse/chat';
  }

  return mappedContent[path] || { left: {}, center: {}, right: {} };
}

export default mapContent;

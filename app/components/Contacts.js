import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPendingMessages } from '../actions/conversationsActions';
import { updateUserLists } from '../actions/chatActions';
import { setUser } from '../actions/userActions';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

class Contacts extends React.Component {

  constructor(props){
    super(props);
    this.connectToServer = this.connectToServer.bind(this);
    this.updateContacts = this.updateContacts.bind(this);
    this.showGreetings = this.showGreetings.bind(this);
    this.showUsers = this.showUsers.bind(this);

    this.state = {
      connectedToServer: props.chatClient.connected
    };
  }

  componentDidMount(){
    if(this.props.chatClient)
      this.props.chatClient.updateView = this.updateContacts;
      if(!this.props.chatClient.connected){
        this.connectToServer();
      }
  }

  connectToServer(){
    this.props.chatClient.connect();
  }

  updateContacts(update){
    switch(update.event){
      case 'connected':
        this.setState({ connectedToServer: true });
        break;
      case 'init-connection-msg':
        const { allUsers, pendingMessages, user } = update.data;
        this.props.updateUserLists(allUsers);
        this.props.addPendingMessages(pendingMessages);
        this.props.setUser(user);
      break;
    }
  }

  showGreetings(){
    return(
      <Text>
        Hello, {this.props.chatClient.username}!
        Connecting to server...
      </Text>
    )

  }

  showUsers(){
    const onlineCount = this.props.onlineUsers.length;
    const offlineCount = this.props.offlineUsers.length;
    return(
      <View>
        <Text className="center-align contacts-title">Contacts</Text>

        <Text className="left-align">Online: ({onlineCount})</Text>
        <View className="collection with-header user-list" hidden={onlineCount === 0}>
          { this.props.onlineUsers.map((user) => {
            return (
              <Link to={`/chat/${user._id}`} className="collection-item user-item" key={user._id}>
                  <Text>
                    {user.username}
                  </Text>
              </Link>
            )
          })}
        </View>

        <Text className="left-align">Offline: ({offlineCount})</Text>
        <View className="collection with-header user-list" hidden={offlineCount === 0}>
          { this.props.offlineUsers.map((user) => {
            return (
              <Link to={`/chat/${user._id}`} className="collection-item user-item" key={user._id}>
                <Text>
                  {user.username}
                </Text>
              </Link>
            )
          })}
        </View>
      </View>
    )
  }

  render() {
    const connectedAndUsers = this.state.connectedToServer && this.props.onlineUsers;
    const displayInfo = connectedAndUsers ? this.showUsers() : this.showGreetings();
    return (
      <View className="container">
        {displayInfo}
      </View>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateUserLists,
    addPendingMessages,
    setUser
  }, dispatch);
};

const mapStateToProps = (state) => {
  const {
    client,
    onlineUsers,
    offlineUsers
  } = state.chat;
  return {
    chatClient: client,
    onlineUsers,
    offlineUsers
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPendingMessages } from '../actions/conversationsActions';
import { updateUserLists } from '../actions/chatActions';
import { setUser } from '../actions/userActions';
import { View, Text, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import styles from '../styles/Contacts';

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
      <Text style={styles.title}>
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
        <Text style={styles.title}>Contacts</Text>

        <Text style={styles.subtitle}>Online: {onlineCount}</Text>
        <ScrollView style={styles.contact_list} hidden={onlineCount === 0}>
          { this.props.onlineUsers.map((user) => {
            return (
              <Link to={`/chat/${user._id}`} style={styles.contact_item} key={user._id}>
                  <Text>
                    {user.username}
                  </Text>
              </Link>
            )
          })}
        </ScrollView>

        <Text style={styles.subtitle}>Offline: {offlineCount}</Text>
        <ScrollView style={styles.contact_list} hidden={offlineCount === 0}>
          { this.props.offlineUsers.map((user) => {
            return (
              <Link to={`/chat/${user._id}`} style={styles.contact_item} key={user._id}>
                <Text>
                  {user.username}
                </Text>
              </Link>
            )
          })}
        </ScrollView>
      </View>
    )
  }

  render() {
    const connectedAndUsers = this.state.connectedToServer && this.props.onlineUsers;
    const displayInfo = connectedAndUsers ? this.showUsers() : this.showGreetings();
    return (
      <View style={styles.wrapper}>
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

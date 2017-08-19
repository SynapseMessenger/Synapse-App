/* **************************************************************
 *                  Synapse - Desktop Client
 * @author Marco Fernandez Pranno <mfernandezpranno@gmail.com>
 * @licence MIT
 * @link https://github.com/SynapseNetwork/Synapse-Desktop
 * @version 1.0
 * ************************************************************** */

import React from 'react';
import classNames from 'classnames';
import formatDate from '../../utils/format_date';
import { View, Text } from 'react-native';
import styles from '../../styles/Chat';

 const Message = (props) => {
   const { text, time, isOwn } = props;

   const {
      ownWrapper, otherWrapper,
      ownMessage, otherMessage,
      messageText, messageTime
    } = styles;

    const wrapperStyle = isOwn ? ownWrapper : otherWrapper;

    const messageStyle = isOwn ? ownMessage : otherMessage;

    const formatedTime = formatDate(new Date(time));

   return (
     <View style={wrapperStyle}>
       <View style={messageStyle}>
         <Text style={messageText}>
           {text}
         </Text>
         <Text style={messageTime}>
           {formatedTime}
         </Text>
       </View>
     </View>
   )
 };

 export default Message;

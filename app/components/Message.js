import React from 'react';
import classNames from 'classnames';
import formatDate from '../utils/format_date';
import { View, Text } from 'react-native';

 const Message = (props) => {
   const { text, time, isOwn } = props;
   const wrapperClassnames = classNames('col', 's10', {
       'own-user-message-wrapper': isOwn,
       'other-user-message-wrapper': !isOwn
     });

     const messageClassnames = classNames('conversation-message', {
       'own-user-message': isOwn,
       'other-user-message': !isOwn
     });

     const formatedTime = formatDate(new Date(time));

   return (
     <View className={wrapperClassnames}>
       <View className={messageClassnames}>
         <Text className="message-text">
           {text}
         </Text>
         <Text className="message-time">
           {formatedTime}
         </Text>
       </View>
     </View>
   )
 };

 export default Message;

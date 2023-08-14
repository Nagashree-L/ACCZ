import {React, useEffect, useState} from 'react';
import '../css/Chat.css';
import { useParams } from 'react-router-dom';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import db from './Firebase';
import Message from './Message';
import ChatInput from './ChatInput';

function Chat() {
  const { channelId } = useParams();
  const [chDetails, setChDetails] = useState(null);
  const [chMessages, setChMessages] = useState([]);

  useEffect(() => {
    if(channelId){
      db.collection('Channels')
        .doc(channelId)
        .onSnapshot(snapshot => (
          setChDetails(snapshot.data())
      ))
    }

    db.collection('Channels')
    .doc(channelId)
    .collection('collection1')
    .orderBy('timestamp', 'asc')
    .onSnapshot((snapshot) =>
      setChMessages(
        snapshot.docs.map(doc => doc.data())
      )
    )
  }, [channelId]);

  return (
    <div className='chat'>
        <div className='chat_header'>
          <div className='header_left'>
            <h4 className='chat_channel_name'>
              <strong>#{chDetails?.name}</strong>
              <StarBorderIcon />
            </h4>
          </div>
          <div className='header_right'>
            <p>
              <InfoOutlinedIcon /> Details
            </p>
          </div>
        </div>

        <div className='chat_message'>
          {chMessages.map(({message, timestamp, user, userImage}) => (
            <Message 
              message = {message}
              timestamp = {timestamp}
              user = {user}
              userImage = {userImage} />
          ))}
        </div>
        
        <ChatInput cId = {channelId} />
    </div>
  )
}
export default Chat;
//codeastro
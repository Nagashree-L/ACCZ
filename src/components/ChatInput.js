import React,{useState} from 'react';
import db from './Firebase';
import '../css/ChatInput.css';
import { useStateValue } from './StateProvider';
import firebase from 'firebase/compat/app';

function ChatInput({cId}) {

    const [input, setInput] = useState('');
    const [{ user }] = useStateValue();
    
    const sendMessage = (e) => {
        e.preventDefault();

        if(cId){
            db.collection('Channels')
            .doc(cId)
            .collection('collection1')
            .add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL,
            });
        }   
    }

    return (
    <div className='chat_input'>
        <form>
            <input value = {input}
                   onChange ={e => setInput(e.target.value)}
                   placeholder={`Message`} />
            <button type="submit" onClick={sendMessage}>SEND</button>
        </form>
    </div>
    )}

export default ChatInput;
import React from 'react';
import '../css/SidebarOptions.css';
import {useNavigate} from "react-router-dom";
import db from './Firebase';

function SidebarOptions({Icon, title, id, addChannelOption}) {
  
  const nav = useNavigate();

  const selectChannel = () => {
    if(id) {
      nav(`/channel/${id}`);
    } else {
      nav(title);
    }
  }

  const addChannel = () => {
      const channelName = prompt('Please enter Channel name');

      if(channelName) {
        db.collection('Channels').add({
          name: channelName,
        })
      }
  }
  
  return (
    <div className='sidebarOption' onClick={addChannelOption ? addChannel : selectChannel}>
        {Icon && <Icon className='sidebarOption_icon'/>}
        {Icon ? (<h3>{title}</h3>) : 
                (<h3 className='sidebarOption_channel'>
                    <span className='sidebarOption_hash'>#</span>
                    {title}
                </h3>)
        }
    </div>
  )
}

export default SidebarOptions;
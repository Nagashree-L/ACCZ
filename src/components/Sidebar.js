import React, { useEffect, useState } from 'react';
import '../css/Sidebar.css';
import SidebarOptions from './SidebarOptions';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { useStateValue } from  './StateProvider';

import db from "./Firebase";

function Sidebar() {

  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(()=>{
    db
    .collection('Channels')
    .onSnapshot((snapshot => (setChannels(snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name
        }))
      )
    ))
    )
  }, [])

  return (
    <div className='sidebar'>
        <div className='sidebar_header'>
            <div className='sidebar_info'>
                <h3>
                    <FiberManualRecordIcon />
                    {user?.displayName}
                </h3>
            </div>
        </div>
        <SidebarOptions Icon={InsertCommentIcon} title="Threads" />
        <SidebarOptions Icon={InboxIcon} title="Mentions & reactions" />
        <SidebarOptions Icon={DraftsIcon} title="Saved items" />
        <SidebarOptions Icon={BookmarkBorderIcon} title="Channel browser" />
        <SidebarOptions Icon={PeopleAltIcon} title="People & user groups" />
        <SidebarOptions Icon={AppsIcon} title="Apps" />
        <SidebarOptions Icon={FileCopyIcon} title="File browser" />
        <SidebarOptions Icon={ExpandLessIcon} title="Show less" />
        <hr/>
        <SidebarOptions Icon={ExpandMoreIcon} title="Channels" />
        <hr/>
        <SidebarOptions Icon={AddIcon} addChannelOption title="Add channel" />
        <hr/>
        {channels.map(ch => (
          <SidebarOptions id = {ch.id} title={ch.name} />
        ))}
    </div>
  );
} 

export default Sidebar;
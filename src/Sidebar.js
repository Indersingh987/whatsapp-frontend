import React from 'react'
import './Sidebar.css'
import SidebarChatRow from './SidebarChatRow'
import { Avatar, IconButton } from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SearchIcon from '@material-ui/icons/Search';

const Sidebar = () => {
    return (
        <div className='sidebar'>
           <div className='sidebar__header'>
                <Avatar />
                <div className='sidebar__header__right'>
                    <IconButton>
                        <VisibilityIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />    
                    </IconButton>
                </div>
           </div>
           <div className='sidebar__search'>
               <SearchIcon />
               <input placeholder='Search or start new chat...' type='text' />
           </div>
           <div className='sidebar__chat'>
               <SidebarChatRow />
               <SidebarChatRow />
               <SidebarChatRow />
               <SidebarChatRow />
               <SidebarChatRow />
               <SidebarChatRow />
               <SidebarChatRow />
               <SidebarChatRow />
           </div>
        </div>
    )
}

export default Sidebar

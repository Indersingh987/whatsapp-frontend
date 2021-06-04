import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChatRow.css'

const SidebarChatRow = () => {
    return (
        <div className='sidebarChatRow'>
            <Avatar />
            <div className='sidebarChatRow__info'>
                <h2>testing</h2>
                <p>last message</p>
            </div>
        </div>
    )
}

export default SidebarChatRow

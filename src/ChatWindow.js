import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MicOutlined, MoreVert, SearchOutlined, SentimentSatisfied } from '@material-ui/icons'
import React,{useState} from 'react'
import './ChatWindow.css'
import axios from './axios'

const ChatWindow = ({ messages }) => {
    const [input, setInput] = useState("")
    function submitHandler(e){
        e.preventDefault()
            axios.post('/api/messages/new',{
                name:'sender',
                message:input,
                timestamp:'current',
                received:false
            })
            setInput("");
    }

    return (
        <div className='chatWindow'>
            <div className = 'chatWindow__header'>
                <div className='chatWindow__header__left'>
                    <Avatar />
                    <h2>Testing<p>Last seen at ...</p></h2>
                    
                </div>
                <div className='chatWindow__header__right'>
                    <IconButton >
                        <SearchOutlined />
                    </IconButton >
                    <IconButton >
                        <AttachFile />
                    </IconButton >
                    <IconButton >
                        <MoreVert />
                    </IconButton >
                </div>
            </div> 
            
            <div className='chatWindow__body'
                 style={{backgroundImage:`url(${'images/whatsapp_background.jpg'})`}}>
                     {messages.map(message=>(<div key={message._id} className={`chatWindow__message ${message.received === false ? 'chat__received':''}`}>
                    <p>
                        <span className='chatWindow__name'>{message.name}</span> 
                        {message.message}
                        <span className='chatWindow__timestamp'>{message.timestamp}</span>
                    </p> 
                </div>))}
            </div>

            <div className='chatWindow__footer'>
                <IconButton >
                    <SentimentSatisfied />
                </IconButton>
                <form>
                    <input value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    placeholder='Type a message...' type='text' />
                    <button onClick={(e)=>submitHandler(e)}>Send Message</button>
                </form>
                <IconButton >
                    <MicOutlined />
                </IconButton>
            </div>
        </div>
    )
}

export default ChatWindow

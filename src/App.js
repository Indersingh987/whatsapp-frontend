import React,{ useEffect,useState } from 'react';
import './App.css';
import Sidebar from './Sidebar.js'
import ChatWindow from './ChatWindow.js'
import Pusher from 'pusher-js'
import axios from './axios'

function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/api/messages/sync')
    .then((response)=>setMessages(response.data))
    .catch((err)=>console.log(err))
  }, [])

  useEffect(() => {
    const pusher = new Pusher('baf215abe5b166a4e758', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      setMessages([...messages,data])
    });


    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])


  return (
    <div className="app">
        <div className="app__body">
          <Sidebar />
          <ChatWindow messages={messages} />
        </div>
    </div>
  );
}

export default App;

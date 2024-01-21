import React, { useState } from 'react';
import Training from "./components/Training/Training";


const TelegramWebApp = () => {
  // const [messages, setMessages] = useState([]);
  // const [newMessage, setNewMessage] = useState('');
  //
  // const handleSendMessage = () => {
  //   if (newMessage.trim() !== '') {
  //     setMessages([...messages, { text: newMessage, sender: 'user' }]);
  //     // Здесь вы можете добавить логику отправки сообщения через Telegram API
  //     setNewMessage('');
  //   }
  // };

  return (
    <div>
        <Training/>
      {/*<div style={{ height: '400px', border: '1px solid #ccc', overflowY: 'scroll' }}>*/}
      {/*  {messages.map((message, index) => (*/}
      {/*    <div key={index} style={{ padding: '8px', borderBottom: '1px solid #eee' }}>*/}
      {/*      {message.sender === 'user' ? 'You: ' : 'Bot: '}*/}
      {/*      {message.text}*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
      {/*<div style={{ marginTop: '8px' }}>*/}
      {/*  <input*/}
      {/*    type="text"*/}
      {/*    value={newMessage}*/}
      {/*    onChange={(e) => setNewMessage(e.target.value)}*/}
      {/*  />*/}
      {/*  <button onClick={handleSendMessage}>Send</button>*/}
      {/*</div>*/}
    </div>
  );
};

export default TelegramWebApp;
import React, { useContext, useState } from 'react';
import { ChatContext } from '../../context/ChatContext';

const Chat = () => {
  const { messages, sendMessage, setReplyTo } = useContext(ChatContext);
  const [messageText, setMessageText] = useState('');

  const handleSend = () => {
    if (messageText.trim()) {
      sendMessage(messageText);
      setMessageText('');
    }
  };

  const handleReply = (messageId) => {
    setReplyTo(messageId);
    const replyMessage = messages.find(msg => msg.id === messageId);
    setMessageText(`Replying to: ${replyMessage.text}`); 
  };

  return (
    <div className="chat-container ">
      <div className="messages">
        {messages.map(message => (
          <div key={message.id} className="message">
            <p>{message.text}</p>
            <button onClick={() => handleReply(message.id)}>Reply</button>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;

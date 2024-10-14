// src/context/ChatContext.js
import React, { createContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { getMessages, addMessage } from '../utils/api'; 

const socket = io('http://localhost:4000');

export const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [replyTo, setReplyTo] = useState(null);

  useEffect(() => {
    setMessages(getMessages());

    const messageHandler = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    socket.on('message', messageHandler);

    const intervalId = setInterval(() => {
      const randomMessage = {
        id: Date.now(),
        text: `Random message ${Math.random().toFixed(2)}`,
      };
      socket.emit('message', randomMessage);
    }, 2000);

    return () => {
      clearInterval(intervalId);
      socket.off('message', messageHandler);
    };
  }, []);

  const sendMessage = (text) => {
    const newMessage = { id: Date.now(), text, replyTo };
    addMessage(newMessage);
    socket.emit('message', newMessage);
    setReplyTo(null); 
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage, replyTo, setReplyTo }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;

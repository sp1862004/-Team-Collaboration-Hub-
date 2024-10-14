// src/mockApi.js
let messages = [];

export const getMessages = () => {
  return messages;
};

export const addMessage = (message) => {
  messages.push(message);
  return message;
};

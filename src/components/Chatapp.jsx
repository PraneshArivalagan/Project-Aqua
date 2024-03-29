import React, { useState } from 'react';
import './ChatApp.css';
import { useNavigate } from 'react-router-dom';

const users = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
  { id: 3, name: 'User 3' },
  // Add more users as needed
];

const dummyMessages = [
  {
    text: 'first chta',
    fromUser: 'User 3',
    toUser: 'User 1',
  },
  {
    text: '2nd chat',
    fromUser: 'User 1',
    toUser: 'User 2',
  },
  {
    text: 'Hi, User 3!',
    fromUser: 'User 2',
    toUser: 'User 3',
  },
  // Add more messages as needed
];

const initialMessages = {};
users.forEach((user) => {
  initialMessages[user.id] = [];
});

dummyMessages.forEach((message) => {
  const toUserId = users.find((user) => user.name === message.toUser)?.id;
  if (toUserId) {
    initialMessages[toUserId].push({
      text: message.text,
      fromUser: message.fromUser,
    });
  }
});

const Chatapp = () => {
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState(initialMessages);
  const [messageText, setMessageText] = useState('');

  const handleSendMessage = () => {
    if (messageText.trim() === '' || !selectedUser) return;

    const newMessage = {
      text: messageText,
      fromUser: 'Me',
    };

    const userId = selectedUser.id;

    setMessages((prevMessages) => ({
      ...prevMessages,
      [userId]: [...prevMessages[userId], newMessage],
    }));

    setMessageText('');
  };

  const handleLogin = () => {
    navigate('/ComplaintBox');
  };

  const handleTiming = () => {
    navigate('/Signedpage');
  };

  return (
    <div className="chat-app-container">
      <div className="title-bar">
        <div className="title-bar-links">
          <span>Home</span>
          <span onClick={handleLogin}>ComplaintBox</span>
          <span onClick={handleTiming}>Signedpage</span>
        </div>
        <div className="profile">
          <img src="profile-image.jpg" alt="Profile" />
          <span>UserEmail</span>
        </div>
      </div>
      <div className="chat-app">
        <div className="sidebar">
          <header>
            <h1>Chat App</h1>
          </header>
          <div className="user-list">
            <ul>
              {users.map((user) => (
                <li key={user.id} onClick={() => setSelectedUser(user)}>
                  {user.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="chat-window">
          {selectedUser ? (
            <>
              <header>
                <h2>Chat with {selectedUser.name}</h2>
              </header>
              <div className="message-container">
                {messages[selectedUser.id].map((message, index) => (
                  <div
                    key={index}
                    className={`message ${
                      message.fromUser === 'Me' ? 'sent' : 'received'
                    }`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>
              <div className="message-input">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </>
          ) : (
            <p>Select a user to start a chat.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chatapp;

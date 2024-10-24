import React, { useState } from "react";
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';
import { PiChatDotsBold } from "react-icons/pi";
import './Chatbot.css';
import botAvatar from './assets/laww.jpg';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(1);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      setUnreadMessages(0);
    }
  };

  const steps = [
    {
      id: 'Greet',
      message: 'Hello, Welcome to Anino\'s Toys Collections! What can I help you with today?',
      trigger: 'Select Concern'
    },
    {
      id: 'Select Concern',
      options: [
        { value: 'Product Availability', label: 'Product Availability', trigger: 'product' },
        { value: 'Shipping', label: 'Shipping', trigger: 'shipping' },
        { value: 'Return/Exchange', label: 'Return/Exchange', trigger: 'return' },
        { value: 'Others', label: 'Others', trigger: 'others' },
      ]
    },
    {
      id: 'product',
      message: 'Our products are updated frequently. You can check the New Arrivals section! What else can I assist you with?',
      trigger: 'Select Concern'
    },
    {
      id: 'shipping',
      message: 'We offer worldwide shipping. Delivery times vary by location. Is there anything else you need help with?',
      trigger: 'Select Concern'
    },
    {
      id: 'return',
      message: 'For returns and exchanges, please refer to our Return Policy page. How can I assist you further?',
      trigger: 'Select Concern'
    },
    {
      id: 'others',
      message: 'Feel free to share your concerns directly, and I\'ll do my best to assist you!',
      trigger: 'waiting1'
    },
    {
      id: 'waiting1',
      user: true,
      trigger: 'Final Message'
    },
    {
      id: 'Final Message',
      message: ({ previousValue }) => `Thank you for your message: "${previousValue}". I will get back to you shortly!`,
      end: true
    }
  ];

  return (
    <div className="chatbot-container">
      <div className="chatbot-button-container" onClick={toggleChatbot}>
        <div className="chatbot-icon">
          <PiChatDotsBold size={40} color="#FFBF00" />
          {unreadMessages > 0 && (
            <span className="notification-badge">
              {unreadMessages}
            </span>
          )}
        </div>
        <span className="chatbot-text">Chat</span>
      </div>

      {isOpen && (
        <Segment className="chatbot-segment">
          <ChatBot
            steps={steps}
            botAvatar={botAvatar}
          />
        </Segment>
      )}
    </div>
  );
}

export default Chatbot;

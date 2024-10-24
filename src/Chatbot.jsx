import React, { useState } from "react";
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';
import { PiChatDotsBold } from "react-icons/pi"; // Import the chat icon from react-icons
import './Chatbot.css';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const steps = [
    {
      id: 'Greet',
      message: 'Hello, Welcome to Anino\'s Toys Collections',
      trigger: 'Ask Name'
    },
    {
      id: 'Ask Name',
      message: 'Please enter your name & Your Contact number',
      trigger: 'waiting1'
    },
    {
      id: 'waiting1',
      user: true,
      trigger: 'Name'
    },
    {
      id: 'Name',
      message: ({ previousValue }) => `Hi ${previousValue}, please select your issue`,
      trigger: 'Select Issue'
    },
    {
      id: 'Select Issue',
      options: [
        { value: 'Product Availability', label: 'Product Availability', trigger: 'product' },
        { value: 'Shipping', label: 'Shipping', trigger: 'shipping' },
        { value: 'Others', label: 'Others', trigger: 'others' },
      ]
    },
    {
      id: 'product',
      message: 'Our products are updated frequently. You can check the New Arrivals section!',
      end: true
    },
    {
      id: 'shipping',
      message: 'We offer worldwide shipping. Delivery times vary by location.',
      end: true
    },
    {
      id: 'others',
      message: 'Feel free to contact us directly for further inquiries!',
      end: true
    }
  ];

  return (
    <div className="chatbot-container">

      <div className="chatbot-button-container" onClick={toggleChatbot}>
        <div className="chatbot-icon">
          {isOpen ? <PiChatDotsBold size={40} color="#FFBF00" /> : <PiChatDotsBold size={40} color="#FFBF00" />}

        </div>
        <span className="chatbot-text">Chat</span>
      </div>

      {isOpen && (
        <Segment className="chatbot-segment">
          <ChatBot steps={steps} />
        </Segment>
      )}
    </div>
  );
}

export default Chatbot;

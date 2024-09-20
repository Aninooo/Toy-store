import React, { useEffect, useState } from 'react';
import './Notification.css'; 

const Notification = ({ message, onClose }) => {
    return (
        <div className={`notification ${message ? 'show' : 'hidden'}`}>
            {message}
            <button onClick={onClose}>X</button>
        </div>
    );
};

export default Notification;

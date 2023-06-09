import React from 'react';
import './badge.css';

export const Badge = ({ label }) => {
    return (
        <div className='badge-container'>
            <span className='badge-contents'>{label}</span>
        </div>
    );
};

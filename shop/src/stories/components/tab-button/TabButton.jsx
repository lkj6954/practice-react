import React from 'react';
import { useEffect, useState } from 'react';
import './tab-button.css';
import PropTypes from 'prop-types';

export const TabButton = ({ btn0, btn1, btn2, active, handleTabClick }) => {
    // const [active, setActive] = useState(0);

    // useEffect(() => {
    //     const tabs = document.querySelectorAll('.tab-btn');
    //     tabs.forEach((tab, index) => {
    //         tab.classList.toggle('tab-btn-active', index === active);
    //     });
    // }, [active]);

    // const handleTabClick = (index) => {
    //     setActive(index);
    // };

    // useEffect(() => {
    //     setActive(btnActive);
    // }, [btnActive]);

    const tabData = [{ text: btn0 }, { text: btn1 }, { text: btn2 }];

    return (
        <ul className='tab-nav'>
            {tabData.map((tab, index) => (
                <li className='nav-item' key={index}>
                    <button
                        type='button'
                        className={`tab-btn tab-btn-default ${
                            index === active ? 'tab-btn-active' : ''
                        }`}
                        onClick={() => handleTabClick(index)}
                    >
                        <span>{tab.text}</span>
                    </button>
                </li>
            ))}
        </ul>
    );
};

TabButton.propTypes = {
    btn0: PropTypes.string,
    btn1: PropTypes.string,
    btn2: PropTypes.string,
    btnActive: PropTypes.oneOf([0, 1, 2]),
    active: PropTypes.number,
    handleTabClick: PropTypes.func,
};

TabButton.defaultProps = {
    btnActive: 0,
};

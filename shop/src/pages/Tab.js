import './tab.css';
import { useEffect, useState } from 'react';

export const Tab = ({ foundObjectOfData }) => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const tabs = document.querySelectorAll('.tab-btn');
        tabs.forEach((tab, index) => {
            tab.classList.toggle('tab-btn-active', index === active);
        });
    }, [active]);

    const handleTabClick = (index) => {
        setActive(index);
    };

    const tabData = [{ text: '상세 정보' }, { text: '리뷰' }, { text: 'Q&A' }];

    return (
        <div className='tab-container'>
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
            <section className='contents-container'>
                {active === 0 && <div>{foundObjectOfData.description}</div>}
                {active === 1 &&
                    foundObjectOfData.reviews.map((a, i) => (
                        <div key={i} className='review-container'>
                            <span>{a.customerId}</span>
                            <div className='badge-container'>
                                <span className='badge-contents'>
                                    {a.rating}
                                </span>
                            </div>
                            <span>{a.review}</span>
                        </div>
                    ))}
                {active === 2 &&
                    foundObjectOfData.qna.map((a, i) => (
                        <div key={i} className='qna-container'>
                            <span>{a.customerId}</span>
                            <span>Q : {a.question}</span>
                            <span>A : {a.answer}</span>
                        </div>
                    ))}
            </section>
        </div>
    );
};

import './tab.css';
import { useEffect, useState } from 'react';

export const Tab = ({ foundObjectOfData }) => {
    let [active, setActive] = useState(0);

    useEffect(() => {
        let tab0 = document.querySelector('.tab0').classList;
        let tab1 = document.querySelector('.tab1').classList;
        let tab2 = document.querySelector('.tab2').classList;

        if (active === 0) {
            tab0.add('tab-btn-active');
            tab1.remove('tab-btn-active');
            tab2.remove('tab-btn-active');
        } else if (active === 1) {
            tab0.remove('tab-btn-active');
            tab1.add('tab-btn-active');
            tab2.remove('tab-btn-active');
        } else if (active === 2) {
            tab0.remove('tab-btn-active');
            tab1.remove('tab-btn-active');
            tab2.add('tab-btn-active');
        }
    }, [active]);

    return (
        <div className='tab-container'>
            {/* <ul className='nav nav-tabs'> */}
            <ul className='tab-nav'>
                <li className='nav-item'>
                    <button
                        type='button'
                        className={`tab0 tab-btn-default`}
                        onClick={() => {
                            setActive(0);
                        }}
                    >
                        <span>상세 정보</span>
                    </button>
                </li>
                <li className='nav-item'>
                    <button
                        type='button'
                        className={`tab1 tab-btn-default`}
                        onClick={() => {
                            setActive(1);
                        }}
                    >
                        <span>리뷰</span>
                    </button>
                </li>
                <li className='nav-item'>
                    <button
                        type='button'
                        className={`tab2 tab-btn-default`}
                        onClick={() => {
                            setActive(2);
                        }}
                    >
                        <span>Q&A</span>
                    </button>
                </li>
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

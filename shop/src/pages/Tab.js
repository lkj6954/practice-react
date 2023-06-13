import './tab.css';
import { useEffect, useState } from 'react';
import { Badge } from '../stories/components/badge/Badge';
import { TabButton } from '../stories/components/tab-button/TabButton';

export const Tab = ({ foundObjectOfData }) => {
    const [active, setActive] = useState(0);
    const [fade, setFade] = useState('');

    useEffect(() => {
        const tabs = document.querySelectorAll('.tab-btn');
        tabs.forEach((tab, index) => {
            tab.classList.toggle('tab-btn-active', index === active);
        });
        setTimeout(() => {
            setFade('opacity-end');
        }, 100);
        console.log('useEffect');

        return () => {
            setFade('');
            console.log('clean up');
        };
    }, [active]);

    const handleTabClick = (index) => {
        setActive(index);
    };

    return (
        <div className='tab-container'>
            <TabButton
                btn0={'상세 정보'}
                btn1={'리뷰'}
                btn2={'Q&A'}
                active={active}
                handleTabClick={handleTabClick}
                setActive={setActive}
            />
            <section className={`contents-container opacity-start ${fade}`}>
                {active === 0 && <div>{foundObjectOfData.description}</div>}
                {active === 1 &&
                    foundObjectOfData.reviews.map((a, i) => (
                        <div key={i} className='review-container'>
                            <span>{a.customerId}</span>
                            <Badge label={a.rating} />
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

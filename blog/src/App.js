import './App.css';
import { useState } from 'react';

function App() {
    let [title, updateTitle] = useState([
        '남자코트 추천',
        '강남 우동맛집',
        '파이썬독학',
    ]);
    let [like, addLike] = useState(0);

    return (
        <div className='App'>
            <div className='black-nav'>
                <h4>ReactBlog</h4>
            </div>
            <div className='list'>
                <h4>
                    {title[0]} <span onClick={() => addLike(like + 1)}>👍</span>
                    {like}
                </h4>
                <p>2월 17일 발행</p>
            </div>
            <div className='list'>
                <h4>{title[1]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className='list'>
                <h4>{title[2]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <button
                onClick={() =>
                    updateTitle([
                        '여자코트 추천',
                        '강남 우동맛집',
                        '파이썬독학',
                    ])
                }
            >
                여자코트 추천으로 변경
            </button>
        </div>
    );
}

export default App;

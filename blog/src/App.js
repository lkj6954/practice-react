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
            <button
                onClick={() => {
                    let cp_title = [...title];
                    updateTitle(cp_title.sort());
                }}
            >
                가나다순 정렬
            </button>
            <button
                onClick={() => {
                    let cp_title = [...title];
                    cp_title[0] = '여자코트 추천';
                    updateTitle(cp_title);
                }}
            >
                여자코트 추천으로 변경
            </button>
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
        </div>
    );
}

export default App;

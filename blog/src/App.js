import './App.css';
import { useState } from 'react';

function App() {
    let [title, updateTitle] = useState([
        '남자코트 추천',
        '강남 우동맛집',
        '파이썬독학',
    ]);
    let [like, addLike] = useState([11, 22, 33]);
    let [modal, setModal] = useState(false);

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
            {title.map((a, i) => (
                <div className='list'>
                    <h4>
                        {a}{' '}
                        <span
                            onClick={() => {
                                let cp_like = [...like];
                                cp_like[i] += 1;
                                addLike(cp_like);
                            }}
                        >
                            👍
                        </span>
                        {like[i]}
                    </h4>
                    <p>2월 17일 발행</p>
                </div>
            ))}
            {/* <PostItem title={title} /> */}
            <button
                onClick={() => {
                    setModal(!modal);
                }}
            >
                모달 열고 닫기
            </button>
            {modal ? <Modal /> : ''}
        </div>
    );
}

// function PostItem({ title }) {
//     return (
//         <div className='list'>
//             <h4>{title[2]}</h4>
//             <p>2월 17일 발행</p>
//         </div>
//     );
// }

function Modal() {
    return (
        <div className='modal'>
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    );
}

export default App;

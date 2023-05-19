import './App.css';
import { useState } from 'react';

function App() {
    let [title, setTitle] = useState([
        '남자코트 추천',
        '강남 우동맛집',
        '파이썬독학',
    ]);
    let [like, setLike] = useState([11, 22, 33]);
    let [modal, setModal] = useState(false);
    let [clickedTitle, setClickedTitle] = useState('제목');
    let [inputTitle, setInputTitle] = useState('');
    let [issuedDate, setIssuedDate] = useState([
        '2023. 5. 19. 오전 9:59',
        '2023. 5. 19. 오전 10:58',
        '2023. 5. 19. 오후 2:58',
    ]);

    return (
        <div className='App'>
            <div className='black-nav'>
                <h4>ReactBlog</h4>
            </div>
            <button
                onClick={() => {
                    let cp_title = [...title];
                    setTitle(cp_title.sort());
                }}
            >
                가나다순 정렬
            </button>
            <button
                onClick={() => {
                    let cp_title = [...title];
                    cp_title[0] = '여자코트 추천';
                    setTitle(cp_title);
                }}
            >
                여자코트 추천으로 변경
            </button>
            {title.map((a, i) => (
                <div className='list' key={i}>
                    <h4
                        onClick={() => {
                            setModal(true);
                            setClickedTitle(a);
                        }}
                    >
                        {a}{' '}
                        <span
                            onClick={() => {
                                let cp_like = [...like];
                                cp_like[i] += 1;
                                setLike(cp_like);
                            }}
                        >
                            👍
                        </span>
                        {like[i]}
                    </h4>
                    <p>{issuedDate[i]} 발행</p>
                    <button
                        onClick={() => {
                            setTitle(
                                [...title].filter((item, index) => index !== i)
                            );
                            setLike(
                                [...like].filter((item, index) => index !== i)
                            );
                        }}
                    >
                        글 삭제
                    </button>
                </div>
            ))}

            <button
                onClick={() => {
                    setModal(!modal);
                }}
            >
                모달 열고 닫기
            </button>
            {modal ? (
                <Modal
                    title={title}
                    setTitle={setTitle}
                    clickedTitle={clickedTitle}
                />
            ) : (
                ''
            )}

            <input
                type='text'
                onChange={(e) => {
                    setInputTitle(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    if (inputTitle === '') {
                        alert('값 비어있음');
                    } else {
                        let cp_title = [...title, inputTitle];
                        let cp_like = [...like, 0];
                        setTitle(cp_title);
                        setLike(cp_like);
                        const currentDate = new Date();
                        const options = {
                            year: 'numeric',
                            month: 'numeric',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                        };
                        const formattedDate = currentDate.toLocaleString(
                            'ko-KR',
                            options
                        );

                        setIssuedDate([...issuedDate, formattedDate]);
                    }
                }}
            >
                글 생성
            </button>
        </div>
    );
}

function Modal(props) {
    return (
        <div className='modal'>
            <h4>{props.clickedTitle}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button
                onClick={() => {
                    let cp_title = [...props.title];
                    cp_title[0] = '여자코트 추천';
                    props.setTitle(cp_title);
                }}
            >
                글수정
            </button>
        </div>
    );
}

export default App;

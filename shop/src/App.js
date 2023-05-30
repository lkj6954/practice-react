import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import './App.css';
import importedData from './data.js';
import Detail from './pages/Detail.js';
import { Link, Route, Routes, Outlet } from 'react-router-dom';
import axios from 'axios';

function App() {
    let [data, setData] = useState(importedData);
    let [imgSrc] = useState([
        'https://codingapple1.github.io/shop/shoes1.jpg',
        'https://codingapple1.github.io/shop/shoes2.jpg',
        'https://codingapple1.github.io/shop/shoes3.jpg',
        'https://codingapple1.github.io/shop/shoes4.jpg',
        'https://codingapple1.github.io/shop/shoes5.jpg',
        'https://codingapple1.github.io/shop/shoes6.jpg',
        'https://codingapple1.github.io/shop/shoes7.jpg',
        'https://codingapple1.github.io/shop/shoes8.jpg',
        'https://codingapple1.github.io/shop/shoes9.jpg',
    ]);
    let [btnClickCnt, setBtnClickCnt] = useState(0);
    let [isLoading, setIsLoading] = useState(false);

    let fetchData = (url) => {
        axios
            .get(url)
            .then((result) => {
                setData((prevData) => [...prevData, ...result.data]);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
                console.log('axios get 실패');
            });
    };

    useEffect(() => {
        if (btnClickCnt === 1) {
            fetchData('https://codingapple1.github.io/shop/data2.json');
        } else if (btnClickCnt === 2) {
            fetchData('https://codingapple1.github.io/shop/data3.json');
        }
    }, [btnClickCnt]);

    useEffect(() => {
        console.log(isLoading);
    }, [isLoading]);

    return (
        <div className='App'>
            <nav className='navbar'>
                <Link to='/'>Jun</Link>
                <Link to='/detail'>상세페이지</Link>
            </nav>
            <div className='main-bg'></div>
            <Routes>
                <Route
                    path='/'
                    element={
                        <Container>
                            <Row>
                                {data.map((a, i) => {
                                    return (
                                        <Item
                                            key={i}
                                            dataDictionary={data[i]}
                                            imgSrcElement={imgSrc[i]}
                                        />
                                    );
                                })}
                            </Row>
                            {isLoading ? (
                                <p>상품 불러오는 중...</p>
                            ) : (
                                btnClickCnt !== 2 && (
                                    <button
                                        onClick={() => {
                                            setBtnClickCnt(
                                                (prevCount) => prevCount + 1
                                            );
                                            setIsLoading(true);
                                        }}
                                    >
                                        상품 더보기
                                    </button>
                                )
                            )}
                        </Container>
                    }
                />
                <Route
                    path='/detail/:dataId'
                    element={<Detail data={data} imgSrc={imgSrc} />}
                />
                <Route path='/event' element={<Event />}>
                    <Route
                        path='one'
                        element={<span>첫 주문시 양배추즙 서비스</span>}
                    />
                    <Route
                        path='two'
                        element={<span>생일기념 쿠폰받기</span>}
                    />
                </Route>
            </Routes>
        </div>
    );
}

function Item(props) {
    return (
        <Col className='col'>
            <img alt='shoes' src={props.imgSrcElement} width='80%' />
            <h4>{props.dataDictionary.title}</h4>
            <p>{props.dataDictionary.price}</p>
        </Col>
    );
}

function Event() {
    return (
        <>
            <h4>오늘의 이벤트</h4>
            <Outlet />
        </>
    );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import './App.css';
import importedData from './data.js';
import Detail from './pages/Detail.js';
import { Link, Route, Routes, useNavigate, Outlet } from 'react-router-dom';

function App() {
    let [data] = useState(importedData);
    let [imgSrc, setImgSrc] = useState([
        'https://codingapple1.github.io/shop/shoes1.jpg',
        'https://codingapple1.github.io/shop/shoes2.jpg',
        'https://codingapple1.github.io/shop/shoes3.jpg',
    ]);

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
                                            dataDictionary={data[i]}
                                            imgSrcElement={imgSrc[i]}
                                        />
                                    );
                                })}
                            </Row>
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

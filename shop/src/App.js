import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import './App.css';
import importedData from './data.js';

function App() {
    let [data] = useState(importedData);
    let [imgSrc, setImgSrc] = useState([
        'https://codingapple1.github.io/shop/shoes1.jpg',
        'https://codingapple1.github.io/shop/shoes2.jpg',
        'https://codingapple1.github.io/shop/shoes3.jpg',
    ]);
    return (
        <div className='App'>
            <Navbar bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href='#home'>Jun</Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#features'>Features</Nav.Link>
                        <Nav.Link href='#pricing'>Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className='main-bg'></div>
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

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';

function App() {
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
        </div>
    );
}

export default App;

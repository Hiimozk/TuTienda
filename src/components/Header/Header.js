import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import {Navbar, 
        Container,
        Nav,
        Row,
        
        } from 'react-bootstrap';
import {Link} from 'react-router-dom'

    const Header = () =>
    
        <Navbar bg="primary" variant="dark">
        <Container>
            <Row>
            <Link>
                <Navbar.Brand>Tu Tienda!</Navbar.Brand>
                </Link>
                <Nav className="me-auto">
                <Nav.Link href="#features">Compras</Nav.Link>
                <Nav.Link href="#pricing">Historial</Nav.Link>
                </Nav>
            </Row>
        <CartWidget/>
        
        </Container>
        </Navbar>
    
        
        
    
    
          
    
        
export default Header;
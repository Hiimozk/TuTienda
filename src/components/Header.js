import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import {Navbar, 
        Container,
        Nav,
        Row,
        
        } from 'react-bootstrap';

    const Header = () =>
    
        <Navbar bg="primary" variant="dark">
        <Container>
            <Row>
                <Navbar.Brand href="#home">Tienda!</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#features">Compras</Nav.Link>
                <Nav.Link href="#pricing">Historia</Nav.Link>
                </Nav>
            </Row>
        <CartWidget/>
        
        </Container>
        </Navbar>
    
        
        
    
    
          
    
        
export default Header;
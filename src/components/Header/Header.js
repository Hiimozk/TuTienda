import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import {Navbar, 
        Container,
        Nav,
        Row,
        LinkContainer,
        
        } from 'react-bootstrap';
import { Link } from 'react-router-dom'

    const Header = () =>
    
        <Navbar bg="danger" variant="dark">
        <Container>
            <Row>
            <Link to="/">
                <Navbar.Brand>Tu Tienda!</Navbar.Brand>
                </Link>
                <Nav className="me-auto">
                    
                <Nav.Link ><Link to="/categoria/1">Categoria 1</Link></Nav.Link>
                <Nav.Link ><Link to="/categoria/2">Categoria 2</Link></Nav.Link>
                </Nav>
            </Row>
        <CartWidget/>
        
        </Container>
        </Navbar>
    
        
        
    
    
          
    
        
export default Header;
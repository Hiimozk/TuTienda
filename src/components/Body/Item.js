import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import {Link} from "react-router-dom"


const Item = ({item}) =>{
    const onAdd = (cantidad) => {
        console.log(cantidad)
}

    return(
        <>
            
            <Col>
            
            <Card style={{ width: '18rem' }}>
            <Nav.Link>
            <Card.Body>
            <Link to={`/item/${item.id}`}>
            <Card.Img variant="top" style={{height:'10rem'}} src={item.img}/>
            </Link>
                <h1>{item.id}</h1>
                
                <Card.Title>{item.title}</Card.Title>
                <p> ${item.price}</p>
                <ItemCount stock={item.stock} initial={item.stock >= 1?1:0} onAdd={onAdd} /> 
            </Card.Body>
            </Nav.Link>
            </Card>
            
            </Col>
        
        
        </>
    )
    
}

export default Item






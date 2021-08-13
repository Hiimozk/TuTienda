import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import {Link} from "react-router-dom"





const Item = ({id,title,price,stock,img}) =>{
    const onAdd = (cantidad) => {
        console.log(cantidad)
}

    return(
        <>
            
            <Col>
            
            <Card style={{ width: '18rem' }}>
            <Nav.Link>
            <Card.Body>
            <Link to={`/item/${id}`}>
            <Card.Img variant="top" style={{height:'10rem'}} src={img}/>
            </Link>
                <h1>{id}</h1>
                
                <Card.Title>{title}</Card.Title>
                <p> ${price}</p>
                <ItemCount stock={stock} initial={stock >= 1?1:0} onAdd={onAdd} /> 
            </Card.Body>
            </Nav.Link>
            </Card>
            
            </Col>
            
            
            
       
        
        
        
        </>
    )
    
}

export default Item






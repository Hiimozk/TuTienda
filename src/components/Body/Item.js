import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import ItemDetail from './ItemDetail';





const Item = ({id,title,price,stock,img}) =>{
    const onAdd = (cantidad) => {
        console.log(cantidad)
}

    return(
        <>
            
            <Col>
            
            <Card style={{ width: '18rem' }}>
            <Nav.Link onClick={()=><ItemDetail id={id} />}>
            <Card.Body>
            <Card.Img variant="top" style={{height:'10rem'}} src={img}/>
                <h1>{id}</h1>
                
                <Card.Title>{title}</Card.Title>
                <p> ${price}</p>
                <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                
            </Card.Body>
            </Nav.Link>
            </Card>
            
            </Col>
            
            
            
       
        
        
        
        </>
    )
    
}

export default Item






import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'





const Item = ({id,title,price,stock,img}) =>{
    const onAdd = (cantidad) => {
        console.log(cantidad)
}

    return(
        <>
        
            <Col>
            <Card style={{ width: '18rem' }}>
            
            <Card.Body>
            <Card.Img variant="top" style={{height:'10rem'}} src={img}/>
                <h1>{id}</h1>
                
                <Card.Title>{title}</Card.Title>
                <p> ${price}</p>
                <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                
            </Card.Body>
            </Card>
            </Col>
            
            
       
        
        
        
        </>
    )

        
    


    
}

export default Item






import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';





const Item = ({id,title,price,stock,img}) =>{
    const onAdd = (cantidad) => {
        console.log(cantidad)
}

    return(
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img}  />
            
            <Card.Body>
                <h1>{id}</h1>
                <Card.Title>{title}</Card.Title>
                <p> ${price}</p>
                <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                
            </Card.Body>
        </Card>
        
        
        
        </>
    )

        
    


    
}

export default Item






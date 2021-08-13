import React   from 'react';
import Item from './Item'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'




const ItemList = ({productos}) => {
    return(
        <>
        <Container>
        <Row>
        
         {productos.map(item =>{
            return <Item id={item.id} title={item.title} price={item.price} stock={item.stock} img={item.img}/>   
        })}

        </Row>
        </Container>

        </>
        )
        

    
        
    }

export default ItemList
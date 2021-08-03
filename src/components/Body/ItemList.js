import React   from 'react';
import Item from './Item'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'




const ItemList = ({mostrar}) => {
    return(
        <>
        <Container>
        <Row>
         {mostrar.map(item =>{
            return <Item id={item.id} title={item.title} price={item.price} stock={item.stock} img={item.img}/>   
        })}
        </Row>
        </Container>

        </>
        )
        

    
        
    }

export default ItemList
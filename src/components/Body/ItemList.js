import React   from 'react';
import Item from './Item'




const ItemList = ({DataItems}) => {
    return(
        <>
        {DataItems.map(Item =>{
            return <Item id={Item.id} title={Item.title} price={Item.price} stock={Item.stock}/>
        
            
        })}
        </>
        )
        

    
        
    }

export default ItemList
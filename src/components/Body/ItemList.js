import React   from 'react';
import Item from './Item'




const ItemList = ({mostrar}) => {
    return(
        <>
         {mostrar.map(item =>{
            return <Item id={item.id} title={item.title} price={item.price} stock={item.stock}/>   
        })}

        </>
        )
        

    
        
    }

export default ItemList
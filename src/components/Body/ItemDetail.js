import React from 'react';
import ItemCount from './ItemCount';


const ItemDetail = ({item}) => {
    const onAdd = (cantidad) => {
        console.log(cantidad)
}
    
    return(
        <>
        <h1>Detalle Item</h1>
        <h1> {item.id} </h1>
        <h2>{item.title}</h2>
        <h3>{item.price}</h3>
        <img src={item.img}></img>
        <ItemCount stock={item.stock} initial={item.stock >= 1?1:0} onAdd={onAdd} />
        </>
        
        
        

    )



}

export default ItemDetail
import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';




const Item = ({id,title,price,stock}) =>{
    const onAdd = (cantidad) => {
        console.log(cantidad)
}
    
    return(
        <>
        <h1>{id}</h1>
        <p>{title} </p>
        <p>{price}</p>
        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        </>
    )

        
    


    
}

export default Item






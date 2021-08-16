import React, {useState} from 'react';
import ItemCount from './ItemCount';
import Button from 'react-bootstrap/Button';


const ItemDetail = ({item}) => {
    const [unidades, setUnidades] = useState()
    const onAdd = (cantidad) => {
        console.log(cantidad)
        setUnidades(cantidad)
        console.log(unidades)
}

    if(unidades>0){
    return(
        <>
        <h1>Detalle Item</h1>
        <h1> {item.id} </h1>
        <h2>{item.title}</h2>
        <h3>{item.price}</h3>
        <img src={item.img}></img>
        <ItemCount stock={item.stock} initial={item.stock >= 1?1:0} onAdd={onAdd} />
        <Button className="m-2" variant="success"  >Terminar compra</Button>
        
        
        </>
    )
}else {
    return (
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



}

export default ItemDetail
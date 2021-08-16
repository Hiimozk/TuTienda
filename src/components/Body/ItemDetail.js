import React, {useState , useContext} from 'react';
import ItemCount from './ItemCount';
import Button from 'react-bootstrap/Button';
import CartContext from '../Header/CartContext'
import { Link } from 'react-router-dom'


export default function ItemDetail ({item})  {

    const [unidades, setUnidades] = useState()
    const [showCounter, setShowCounter] = useState(true)
    const { addItem } = useContext(CartContext)

    const onAdd = (cantidad) => {
        setShowCounter(false)
        addItem(item, cantidad)
        setUnidades(cantidad)
        console.log(unidades)
    }

    
    return(
        <>
        <h1>Detalle Item</h1>
        <h1> {item.id} </h1>
        <h2>{item.title}</h2>
        <h3>{item.price}</h3>
        <img src={item.img}></img>
        <br/>
        { showCounter && <ItemCount stock={item.stock} initial={item.stock >= 1?1:0} onAdd={onAdd} />}
        {!showCounter &&
            <Link to='/cart'>
            <Button className="m-2" variant="success"  >Terminar compra</Button>
        </Link>
        }
        
        
        
        </>
    )




}


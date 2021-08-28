  
import { useContext, useState } from 'react'
import cartContext from './CartContext.js'
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function Cart() {
    
    const {items, finalPrice, removeItem} = useContext(cartContext);
    const [successBuy, setSuccessBuy] = useState(false);
        if (items.length === 0 && !successBuy)
        return (
        <>
            <p>No hay items en tu carrito!</p>
            <Link to="/">Volver a inicio</Link>
        </>
        )

    
    return (
        <>
        
            {items.map(item => 
            <div> {item.item.title}:{item.cantidad}
            <div>
            {`US$${item.item.price * item.cantidad}`}{" "}
            </div>
            <Button variant="danger" onClick={() => removeItem(item.item.id)}>Delete</Button>
             </div>)}
             <div>
             {`US$${finalPrice.toFixed(2)}`}
             </div>
        </>
    )
    
}

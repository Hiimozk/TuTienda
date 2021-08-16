  
import { useContext } from 'react'
import cartContext from './CartContext.js'

export default function Cart() {
    
    const { items } = useContext(cartContext)
    
    return (
        <>
            {items.map(item => <div> {item.item.title}: {item.cantidad} </div>)}
        </>
    )
}
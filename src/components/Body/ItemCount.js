import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom"

const ItemCount = ({ stock , initial , onAdd }) => {

    const [contador,setContador] = useState(initial)

    const aumentarContador = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const restarContador = () => {
        if(contador > 1){
            setContador(contador - 1)
        }
    }

    const confirmar = () => {
        if(stock > 0){
            onAdd(contador)
        }
    }

    return (
        <>
            <p>Cantidad : {contador}/{stock}</p>
            <Button className="m-2" variant="success"  onClick={aumentarContador}>+</Button>
            <Button className="m-2" variant="danger" onClick={restarContador}>-</Button>
            <Link to="/cart"><Button className="m-2"onClick={confirmar}>Confirmar</Button></Link>
        </>
    )

}

export default ItemCount
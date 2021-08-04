import React   from 'react';
import Item from './Item'
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'


const init ={id: 4, title: "p4", description:"asdasd" , price: 2500, img:"https://www.lhermetique.com/wp-content/uploads/sites/14/2020/02/IMAGEN-PUERTA2.jpg"}

const ItemDetailContainer = () =>{

    const [item,setItem] = useState(false)
    useEffect(() => {
        setTimeout(() => {
        Promise
            .resolve(init)
            .then(response => {
                setItem(response)
            })
        }, 2000)

    },[])
    return(
        <div>
        <h1>Detalle Item</h1>
        <ItemDetail item={item}/>
        </div>
        
    )
}

export default ItemDetailContainer 
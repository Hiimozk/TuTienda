import React from 'react';


const ItemDetail = ({item}) => {
    console.log(item)
    return(
        <>
       
        <h1> {item.id} </h1>
        <h2>{item.title}</h2>
        <h3>{item.price}</h3>
        <img src={item.img}></img>
        </>
        
        
        

    )



}

export default ItemDetail
import React from 'react';
import DataItems from  '../../data/items.json'
import ItemList from './ItemList';

const ItemListContainer = () => {
       
            const promesa = new Promise((resolver, rechazar)=>{
                setTimeout(()=>{
                    resolver(DataItems);  
                } , 2000); 
            })
            ///operacion.then pasa cuando todo esta bien
            promesa.then((DataItems)=>{
                console.log("Bien");
                console.log(DataItems)
                /* DataItems */
            })
            //operacion. finally pasa siempre
            //operacion. catch cuando todo esta mal
            promesa.catch(()=>{
                console.log("Mal");
            })
        
     
        return(
                <ItemList DataItems/>
        );
                  
     
       
            
    }
  
  export default ItemListContainer
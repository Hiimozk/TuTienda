import React , { useState } from 'react';
import DataItems from  '../../data/items.json'
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [mostrar, setMostrar] = useState([]);
            const promesa = new Promise((resolver, rechazar)=>{
                setTimeout(()=>{
                    resolver(DataItems);  
                } , 2000); 
            })
            ///operacion.then pasa cuando todo esta bien
            promesa.then((DataItems)=>{
                setMostrar(DataItems)
                
                
                console.log("Bien");
                
                /* DataItems */
            })
            //operacion. finally pasa siempre
            //operacion. catch cuando todo esta mal
            promesa.catch(()=>{
                console.log("Mal");
            })
        
     
        return(
                <ItemList mostrar= {mostrar}/>
        );
                  
     
       
            
    }
  
  export default ItemListContainer
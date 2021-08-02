import React , { useState, useEffect } from 'react';
import productos from  '../../data/productos.json'
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [mostrar, setMostrar] = useState([]);
    
            const promesa = new Promise((resolver, rechazar)=>{
                setTimeout(()=>{
                    resolver(productos);  
                } , 2000); 
            })
            useEffect(() => {
            ///operacion.then pasa cuando todo esta bien
            promesa.then((productos)=>{
                setMostrar(productos)
                
                
                console.log("Bien");
                
                /* DataItems */
            })
            //operacion. finally pasa siempre
            //operacion. catch cuando todo esta mal
            promesa.catch(()=>{
                console.log("Mal");
            })
        },[])
        
        
     
        return(
                <ItemList mostrar= {mostrar}/>
        );
                  
     
       
            
    }
  
  export default ItemListContainer
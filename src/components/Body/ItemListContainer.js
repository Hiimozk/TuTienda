import React , { useState, useEffect } from 'react';
import productos from  '../../data/productos'
import ItemList from './ItemList';
import {useParams} from "react-router-dom"

const ItemListContainer = () => {
    const [mostrar, setMostrar] = useState([]);
    const params = useParams()
    console.log(params)
    
    
            const promesa = new Promise((resolver, rechazar)=>{
                setTimeout(()=>{
                    if(params.id){
                        resolver(productos.filter(producto=>producto.categoria == params.id))
                    }
                    else{
                        resolver(productos)
                    }
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
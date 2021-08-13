import React   from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'
import productos from  '../../data/productos'
import {useParams} from "react-router-dom"




function ItemDetailContainer() {
    const [producto, setProducto] = useState({});
    const { id: id } = useParams();
  
    const getItems = () => {
      return new Promise((resolve, reject) => {
        const buscarProducto = productos.find(
          (item) => item.id === parseInt(id)
        );
        setTimeout(() => {
          resolve(buscarProducto);
          reject("errorp");
        }, 2000);
      });
    };
  
    useEffect(() => {
      setProducto({});
      getItems()
        .then((res) => setProducto(res))
        .catch((Error) => console.log(Error));
    }, [id]);
  
    return <ItemDetail item={producto} />;
  }
  
  export default ItemDetailContainer;
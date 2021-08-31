import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { firestore } from "../../firebase";

const ItemListContainer = () => {

  const [cantidad, setCantidad] = useState(0)
  const [items, setItems] = useState([])
  const params = useParams()

  useEffect(() => {

     
      //Referencia a la DB
      const db = firestore
      
      //Referencia a una coleccion
      const collection = db.collection("productos")

      //Este es mi query
      const query = collection.get()
     

      
      query.then((resultados)=>{
          const resultado_parseado = []
          //Recorro cada uno de los documentos
          resultados.map((documento)=>{
        
              const id = documento.id
              const data = documento.data()
              const data_final = {id,...data}
              resultado_parseado.push(data_final)
              return data_final
          })
          setItems(resultado_parseado)
      }) 

  }, [])

  const onAdd = (cantidad) => {
      console.log(cantidad)
  }

  return(
      <div>
          <ItemList items={items} />
      </div>
  )
}

export default ItemListContainer
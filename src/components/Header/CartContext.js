import React, { createContext, useState } from 'react'

const CartContext = createContext({})

export function CartContextProvider({ children }) {

    const [items, setItems] = useState([]);
    const [finalPrice, setFinalPrice] = useState(0);
    const [finalQuantity, setFinalQuantity] = useState(0);

    const addItem = (item, cantidad) => {
        const index = items.findIndex((itemInList) => itemInList.item.id === item.id);
        setFinalPrice(finalPrice + item.price * cantidad);
        setFinalQuantity(finalQuantity + cantidad);
    
        if (index !== -1) {
          const newItems = items;
          newItems[index] = {item: newItems[index].item, cantidad: newItems[index].cantidad };
          setItems(newItems);
        } else {
          setItems([...items, {item, cantidad}]);
        }
      };
      const removeItem = (id) => {
        const index = items.findIndex((itemInList) => itemInList.item.id === id);
        setFinalPrice(finalPrice - items[index].item.price * items[index].cantidad);
        setFinalQuantity(finalQuantity - items[index].cantidad);
    
        if (index !== -1) items.splice(index, 1);
    
        setItems([...items]);
      };

      const clear = () => {
        setFinalQuantity(0);
        setFinalPrice(0);
        setItems([]);
      };

    return (
        <CartContext.Provider value={{items, finalPrice, finalQuantity, addItem, removeItem, clear}}>
        {children}
      </CartContext.Provider>
    )
}

export default CartContext
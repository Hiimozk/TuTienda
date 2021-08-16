import React from 'react';
import Header from './components/Header/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './components/Body/ItemListContainer';
import ItemDetailContainer from './components/Body/ItemDetailContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Cart from "./components/Header/Cart.js"
import { CartContextProvider } from './components/Header/CartContext'




const App=()=>{
    
    return(
        
    <>
    <BrowserRouter>
    <Header/>
    <CartContextProvider>
    <Switch>
        <Route path="/" component={ItemListContainer} exact/>
        <Route path="/categoria/:id" component={ItemListContainer}/>
        <Route path="/item/:id" component={ItemDetailContainer}/>   
        <Route path="/cart" component={Cart}/>  
    </Switch> 
    </CartContextProvider>
    </BrowserRouter>
    </>
    )
}

    export default App;
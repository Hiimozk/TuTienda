import React from 'react';
import Header from './components/Header/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './components/Body/ItemListContainer';
import ItemDetailContainer from './components/Body/ItemDetailContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom'




const App=()=>{
    
    return(
        
    <>
    <BrowserRouter>
    <Header/>
    <Switch>
        <Route path="/" component={ItemListContainer} exact/>
        <Route path="/categoria/:id" component={ItemListContainer}/>
        <Route path="/item/:id" component={ItemDetailContainer}/>   
        <Route path="/cart"/>  
    </Switch> 
    </BrowserRouter>
    </>
    )
}

    export default App;
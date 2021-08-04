import React from 'react';
import Header from './components/Header/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './components/Body/ItemListContainer';
import ItemDetailContainer from './components/Body/ItemDetailContainer';
import {BrowserRouter} from 'react-router-dom'




const App=()=>{
    
    return(
        
    <>
    <BrowserRouter>
    <Header/>
    <ItemListContainer/>
    <ItemDetailContainer />
    </BrowserRouter>
    </>
    )
}

    export default App;
import React from 'react';
import Header from './components/Header/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './components/Body/ItemListContainer';




const App=()=>{
    
    return(
    <>
    <Header/>
    <ItemListContainer/>
    </>
    )
}

    export default App;
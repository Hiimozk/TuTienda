import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './3669231_cart_shopping_ic_icon.png'
import Image from 'react-bootstrap/Image'
import {Link} from "react-router-dom";


    const CartWidget = () =>
    
        
           
            <Link to="/cart"><Image src={img1} width="40" rounded />
            </Link>
         
       
    

    export default CartWidget;
import React , { useState} from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

 export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();
    const onAdd= (quantity) => {
       setGoToCart(true);
       addProduct (data, quantity);
    }
    return(
        <div className= "container">
            
            <img className="detail-image" src= {data.image} alt=""/>
            <div className= "content">
                <h1>{data.title}</h1>
                <h2>{data.desc}</h2>
                <h6> Stock {data.stock}</h6>
                {
                    goToCart
                    ? <Link to= '/Cart'> Terminar Compra </Link>
                    :<ItemCount initial= {1} stock={data.stock} onAdd={onAdd}/>
                }
                
                
            </div>        
        </div>
    );
 }
export default ItemDetail;
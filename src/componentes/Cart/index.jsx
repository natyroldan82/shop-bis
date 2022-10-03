import React from 'react'
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart';


export const Cart = () => {
  const {cart, totalPrice}= useCartContext();
if (cart.length ===0){
  return(
    <>
    <h1 className='text-black text-center  p-5'>Tu carrito está vacío.</h1>
   
    <Link className='bg-danger text-white p-2 m-5' to='/'>Volver a la Tienda</Link>
   
    </>
  );
}

  return (
   <>
   {
    cart.map(product => <ItemCart key = {product.id} product= {product}/>)
   }
   <p className="bg-dark text-white text-center">
    Total $ {totalPrice()}
   </p>
   </>
  )
}
export default Cart;

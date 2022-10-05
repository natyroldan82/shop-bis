import React from 'react'
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart';

import {addDoc, collection, getFirestore} from 'firebase/firestore';

export const Cart = () => {
  const {cart, totalPrice}= useCartContext();

  const order= {
    buyer: {
      name: 'Natalia',
      email : 'natyroldan82@gmail.com',
      phone : '321321',
      address: 'Argentina'
    },
    items : cart.map(productos =>({id: productos.id, title: productos.title, price: productos.price, quantity:productos.quantity})),
    total: totalPrice(),
  }

const handleClick = () => {

   const db = getFirestore();
   const ordersCollection = collection(db,'orders');
   addDoc(ordersCollection, order)
    .then(({id}) => console.log(id))
}


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
   <p className="bg-dark text-white text-center ">
    Total del carrito $ {totalPrice()}
   
   </p>
   <div>
   <button className="py-4 mt-3 bg-success me-md-2 text-white"onClick={handleClick()}> Terminar Compra</button>
   </div>
  
  
   </>
   
   
  )
}
export default Cart;

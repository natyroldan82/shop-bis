import './App.css';
import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import NavBar from './componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Servicio from './componentes/Servicio';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Cart from './componentes/Cart/index';
import ItemListContainer from './componentes/ItemListContainer';
import React from 'react';
import CartProvider from './context/CartContext';
function App() {
  return (
    <BrowserRouter>
   
     <CartProvider >
     <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}></Route> 
        <Route path='/categoria/:categoryId' element={<ItemListContainer/>}></Route>
        <Route path='Servicio' element={<Servicio/>}></Route>
        <Route path='Cart' element={<Cart/>}></Route>
        <Route path='detalle/:detalleId' element={<ItemDetailContainer/>}></Route>
      </Routes>
      </CartProvider>
    
  </BrowserRouter>
  );
}

export default App;

import React , {useContext}from 'react'
import { Link } from 'react-router-dom';

const Item = ({info}) => {
  
  return (
        <>
          
           <div className='card text-center bg-dark '>
               <img src= {info.image} alt=""/>
               <div className='card-body text-light'>
                   <h4 className='card-title'>{info.title}</h4>
                   <p className='card-text text-secondary'> USD {info.price}</p>
                   <Link to = {`/detalle/${info.id}`} className='btn btn-outline-secondary bg-info'>INFO </Link>  
               </div>
           </div>
          
        </>
  );
}
export default Item;
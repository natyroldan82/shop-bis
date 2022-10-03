import React from 'react';
import Item from '../Item';

const ItemList = ({data = []}) => {
  return (
    <>
    <div className="container d-flex justify-content-center align-items-center h-100">
         <div className='row'>
            {
             data.map( film =>(
             
               <div className='col-md-4 p-2'>
                 <Item
                   key={film.id}
                   info ={film}/>
                 </div>
             ))
            }
           
        </div>
    
      </div>
      </>
  )
}

export default ItemList;
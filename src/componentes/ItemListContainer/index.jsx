import React from 'react'
import { useEffect, useState } from 'react';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';

export const ItemListContainer = () => {
  const [data, setData]= useState([]); 
  const { categoryId } = useParams();

    useEffect(()=> {
      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'productos');

      if(categoryId){
        const queryFilter = query(queryCollection, where('category', '==', categoryId))
          getDocs(queryFilter)
              .then(res => setData(res.docs.map(productos => ({id: productos.id, ...productos.data() }))))
      } else {
        getDocs(queryCollection)
          .then(res => setData(res.docs.map(productos => ({id: productos.id, ...productos.data() }))))
      }
      
 }, [categoryId])


    
  return (
    <>
    
    <ItemList data = {data}/>
    </>
  );
}
export default ItemListContainer;

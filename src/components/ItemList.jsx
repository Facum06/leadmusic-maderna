import React, { useEffect, useState } from 'react';
import Item from './Item';
import { useParams } from "react-router-dom";
import { list, listCate } from "../firebase/leadmusic-model";

export default function ItemListContainer(props) {
  const [listaProductos, setListaProductos] = useState([]);
  const { cate } = useParams()

  useEffect(() => {   
    if(cate !== null && cate !== undefined ){
      const lista = listCate(cate);
      lista.then((data) => {
        const rows = []
        data.forEach(item =>{
          rows.push({id: item.id, title: item.data().title, description: item.data().description, price: item.data().price, stock: item.data().stock, cate: item.data().cate, pictureUrl: item.data().pictureUrl, caracte: item.data().caracte });
        });
          setListaProductos(rows);
         }) 
        } else {
          const lista = list();
          lista.then((data) => {
            const rows = []
            data.forEach(item =>{
              rows.push({id: item.id, title: item.data().title, description: item.data().description, price: item.data().price, stock: item.data().stock, cate: item.data().cate, pictureUrl: item.data().pictureUrl, caracte: item.data().caracte });
            });
              setListaProductos(rows);
             }) 
        }

},[cate])

  return (
    <>
      <ul className="itemListContainer">
        {listaProductos.map(producto => (           
          <Item 
            key={producto.id} 
            description={producto.description} 
            price={producto.price}  
            title={producto.title} 
            pictureUrl={producto.pictureUrl} 
            cate={producto.cate} 
            id={producto.id} 
          />
        ))}
      </ul>
    </>
  );
}

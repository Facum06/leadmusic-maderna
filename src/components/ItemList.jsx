import React, { useEffect, useState } from 'react';
import mokProductos from '../data/mokProductos';
import Item from './Item';
import { useParams } from "react-router-dom";

export default function ItemListContainer(props) {
  const [listaProductos, setListaProductos] = useState([]);
  const { cate } = useParams()

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {        
        resolve(mokProductos);
		reject({
			status: 404
		  });
      }, 2000);
    })
      .then(dataResolve => {
        if(cate !== null && cate !== undefined ){
          const filtro=dataResolve.filter((producto)=> producto.cate === cate)
          setListaProductos(filtro)          
        }else {
          setListaProductos(dataResolve);
        }        
      })
      .catch(error => {
        console.log('ERROR ITEM LIST: ' + error);
      });
  }, [cate]);

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

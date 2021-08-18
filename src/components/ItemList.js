import React, { useEffect, useState } from 'react';
import Item from './Item';

export default function ItemListContainer(props) {
  const [listaProductos, setListaProductos] = useState([]);
  const productos = [
		{
			id: '1',
			title: 'Fender Telecaster',
			description: 'USA',
			price: 'U$D 2000',
			pictureUrl: 'https://bairesrocks.vteximg.com.br/arquivos/ids/205176/901818-MLA40608594961_012020-F.jpg?v=637313070689700000'
		},
		{
			id: '2',
			title: 'Fender Stratocaster',
			description: 'USA',
			price: 'U$D 1800',
			pictureUrl: 'https://emavemusical.com/wp-content/uploads/2021/04/Fender-Stratocaster-Standard-Mexico-Sunburst-1-4068-1-1.jpg'
		},
		{
			id: '3',
			title: 'Fender Firebird',
			description: 'USA',
			price: 'U$D 2300',
			pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR90pc_6QWRYOnkIcy7XOeq-JUJ-TGV0kqffQ&usqp=CAU'
		},
		{
			id: '4',
			title: 'Fender Telecaster',
			description: 'MEX',
			price: 'U$D 850',
			pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_794869-MLA44727426259_012021-O.jpg'
		}
	]
  
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {        
        resolve(productos);
      }, 2000);
    })
      .then(dataResolve => {
        console.log('data Resolve', dataResolve);        
        setListaProductos(dataResolve);
      })
      .catch(error => {
        console.log('err', error);
      });
  }, []);

  return (
    <>
      <div className="itemListContainer">
        {listaProductos.map(producto => (           
          <Item key={producto.id} description={producto.description} price={producto.price}  title={producto.title} pictureUrl={producto.pictureUrl}/>
        ))}
      </div>
    </>
  );
}

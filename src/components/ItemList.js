import React from "react";
import Item from "./Item";
import { useState } from "react"


function ItemList (){

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

	const ItemList = productos.map(producto => <Item key={producto.id} description={producto.description} price={producto.price}  title={producto.title} pictureUrl={producto.pictureUrl}/>);
	
	
	const getProduct = (id = null) => {
		console.log('waiting for response...');
		return new Promise((resolve, reject) => {
		  setTimeout(() => {		    
		    //const producto = productos.find(producto => producto.id == id);
		    const producto = productos.map(producto => <Item key={producto.id} description={producto.description} price={producto.price}  title={producto.title} pictureUrl={producto.pictureUrl}/>);		    
		    if (producto != null) resolve(producto);		    
		    reject({
		      status: 404
		    });
		  }, 2000);
		});
	};
  
  const myPromise = new Promise(async (resolve, reject) => {
    const product = await getProduct().catch(
      err => reject(err)
    );   
    product? resolve(product) : reject('not product');
  });

  	myPromise.then(function(valor){  				
	    console.log(valor);	    
	    return valor;
	}).catch(err => console.log(err));
	
	return (
		<>
			<div className="carritoitems">
				{ItemList}
			</div>
		</>
	);
}

export default ItemList;
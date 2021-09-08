import React, { useState } from 'react';


const useItemCount = (stock = 0, inicial = 0 )  =>{
    
    const [cantidad, setCantidad] = useState(inicial)

    const agregarCart = () => {
        if (cantidad < stock) setCantidad(cantidad + 1)
    }
    
    const removerCart = () => {
        if (cantidad > 1) setCantidad(cantidad - 1)
    }
  
    return {
        
        cantidad,   
        agregarCart,
        removerCart
    }
}


export default function ItemCounter( {stock = 0, inicial = 1 , onAdd = () =>{} }){

  const {cantidad, agregarCart, removerCart} = useItemCount(stock, inicial) 

  return (
    <>
      <div align='center' className='item-counter'>
        <div className="counterBtn">
          <button className="btn btn-danger" onClick= { () => removerCart()}>-</button>     
          <div className="counterFrm"><b className="counterB">{cantidad}</b></div>          
          <button className="btn btn-success" onClick= { () => agregarCart()}>+</button>   
        </div>
        <br/>
        <button onClick={()=> onAdd(cantidad)} className = 'btn btn-primary'> Agregar a Carrito</button>
      </div>
    </>
  );
}
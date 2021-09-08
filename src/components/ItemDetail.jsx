import ItemCounter from "./ItemCounter";
import React, { useContext, useState } from 'react';
import ItemView from "./ItemView";
import { Context } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function ItemDetail({desc, price, pictureUrl, caracte, stock, id, title}) {
   
  
   const [ItemCountVisible, setItemCountVisible] = useState(true)   
   const [FinalizarCompra, setFinalizarCompra] = useState(false)   
   const datoContexto = useContext(Context)
  
   const agregar = (cantidad) => {
   
    setItemCountVisible(false)
    setFinalizarCompra(true)       
    datoContexto.addItem(id,desc,cantidad, price,title);
   } 

   const openCartView = () => {       
      setFinalizarCompra(false) 
    }

    return( 
    <>  
        <div>
       
        <ItemView  desc = {desc} price = {price} caracte = {caracte} stock = {stock} pictureUrl = {pictureUrl} title={title} />
       
        {ItemCountVisible && 
                 <ItemCounter stock= {stock} inicial = {1} onAdd={agregar} />
        }
        {FinalizarCompra &&
            <div align='center'>
                <Link to='/'><button className='btn btn-warning'>SEGUIR COMPRANDO</button></Link> &nbsp;
                <Link to='/cart'><button onClick={()=> openCartView()} className="btn btn-danger">FINALIZAR COMPRA</button></Link>
            </div>
        }
       
        </div>    
    </>
    )
}
import React, { useContext } from 'react';
import { Context } from "../context/CartContext";

export default function CartItem ({id, desc, cantidad, price, title}) {
    const datoContexto = useContext(Context)
    const BorrarCart = (id) => {
        datoContexto.removeItem(id)
    }

    return(
        <>
            <li className='contenedor-cart'>
                <div className="card card-cart">
                    <div className="title-cart">
                            {title} <br />{desc}
                    </div>				
					<div className="body-cart">
						<span>Cantidad: <b>{cantidad}</b></span><br />
						<span>Precio: <b>{price}</b></span>					
					</div>				
                <div className='btn-cart'>
                    <button className='btn btn-danger' onClick={()=> BorrarCart(id)} >Borrar</button> 
                </div>
				</div>
                                           
            </li>
        </>

    )
}
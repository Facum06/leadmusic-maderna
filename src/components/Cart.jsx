import React, { useContext } from 'react';
import { Context } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function Cart (){    
    const datoContexto = useContext(Context)
        
    return(
        <>
        <div className='row row-cart' align='center'>
            <h3 className='alert alert-light'>
                MI CARRITO DE COMPRAS
            </h3>
        </div>
        {datoContexto.cart == "" &&
            <div className='row-cart-empty' align='center'>
                <h4 className='alert alert-light'>
                    UPS! NO TIENES NINGÚN PRODUCTO EN EL CARRITO
                    <br/><br/><Link to='/'><button className='btn btn-dark'>IR A COMPRAR</button></Link>
                </h4>
                
            </div>
        }
        <ul>
        {   
            datoContexto.cart.map((cart)=>
                <CartItem key={cart.idArt} id={cart.idArt} desc={cart.desc} cantidad={cart.cantidad} price={cart.price} title={cart.title}>

                </CartItem>
            )
        }
        </ul>
        </>
    )
} 
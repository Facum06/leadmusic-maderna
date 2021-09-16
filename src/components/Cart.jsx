import React, { useContext , useState} from 'react';
import { Context } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { guardoBuyer } from "../firebase/leadmusic-model";

export default function Cart (){    
    const datoContexto = useContext(Context)
    const {totalCompra} = useContext(Context)
    const [finCarrito, setFinCarrito] = useState(false)
    const [idCompra, setIdCompra] = useState()
    
    const finCompra = () => {       
        const newOrder = {
            buyer: {
                name: 'Facu Maderna',
                phone: '+54 9 1234-56789',
                email: 'facu.maderna@gmail.com'
            },
            items: datoContexto.cart,
            date: new Date().toString(),
            total: totalCompra()
        }
        guardoBuyer('ordenes',newOrder).then((docRef) => {
            setIdCompra(docRef.id);
            setFinCarrito(true);
        });      
         
    }

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
        <ul className='cartfinal-contenedor'>
        {   
            datoContexto.cart.map((cart)=>
                <CartItem key={cart.idArt} id={cart.idArt} desc={cart.desc} cantidad={cart.cantidad} price={cart.price} title={cart.title}>

                </CartItem>
            )
        }
        </ul>
        
        {datoContexto.cart != "" &&
            <div className='row row-cart' align='center'>
                <h3 className='alert alert-light'>
                    PRECIO FINAL: U$D {totalCompra()}
                </h3>
                <div align='center'><button onClick={()=> finCompra()} className='btn btn-success tcompra'>TERMINAR COMPRA</button></div>
            </div>
        }
        {finCarrito &&
            <div className='row row-cart' align='center'>
            <h3 className='alert alert-success'>
                FELICITACIONES! TU ID DE COMPRA ES: {idCompra}
            </h3>
        </div>
        }
        </>
    )
} 
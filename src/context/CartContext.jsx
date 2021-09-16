import React, { useState } from 'react';



export const Context = React.createContext();

export default function CartContext({ value = [] , children }) {
 
  const [cart, setCart] = useState(value);
  const [cantCarrito, setCantCarrito] = useState(0);
  const [hayCarrito, setHayCarrito] = useState(false);


  const addItem = (idArt, desc, cantidad, price, title) => {
    if(!isInCart(idArt)){
      setCart([...cart, {idArt, desc, cantidad, price, title}]);
      setCantCarrito(cantCarrito + 1)
      cantItems(cantCarrito)
    } else {
      console.log("ya existe")
    }        
  };
  
  const removeItem = (idArt) => {
    const remove=cart.filter(item => item.idArt !==idArt)
    setCart(remove)
    setCantCarrito(cantCarrito - 1)
    cantItems(cantCarrito)
  };

  const clear = () => {
      setCart([])
      setCantCarrito(0)
      cantItems(0)
  };

  const isInCart = (id) => {  
    const existe = cart.find(item => item.idArt ===id)
    if (existe === undefined){    
      return false
    } else {    
      return true
    }
  };

  const cantItems = (cantidad) => {  
    if(cantidad === 0 ){
        setHayCarrito(false)      
    } else {
        setHayCarrito(true)      
    }
  }

  const totalCompra = () => {
    let tot = 0
    cart.forEach(item => { 
        tot = tot + (item.cantidad * item.price);
    });
    return tot
  };

  return (
    <>
      <Context.Provider value={{hayCarrito: hayCarrito, totalCompra: totalCompra, cantCarrito: cantCarrito, cart: cart, addItem: addItem, removeItem: removeItem, clear: clear, isInCart: isInCart }}>
        {children}
      </Context.Provider>
    </>
  );
}

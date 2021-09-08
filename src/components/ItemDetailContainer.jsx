
import  { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import mokProductos from "../data/mokProductos";
import { useParams } from "react-router-dom";


export default function ItemDetailContainer() {

    const { id } = useParams() 
   
    const [viewProdu, setviewProdu] = useState([]);
    const [cargando, setCargando] = useState(true);
   

    const getItem = (id = null) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const item = mokProductos.find(item => item.id === id);
          if (item != null) resolve(item);
          reject({
            status: 404
          });
        }, 2000);
      });
    };
    
  useEffect(() => {  
    const mipromesa =  getItem(id);
    mipromesa.then(result => {
     // console.log(result);
      setviewProdu(result)
      setCargando(false)
      }).catch(err => console.log("ERROR MI PROMESA" +err));
  },[id, viewProdu])
 
   return( 
    <>  
      {cargando ? <div>Cargando producto</div> :
       <ItemDetail 
        key= {viewProdu.id} 
        desc={viewProdu.description} 
        price={viewProdu.price} 
        pictureUrl={viewProdu.pictureUrl} 
        caracte={viewProdu.caracte}         
        stock={viewProdu.stock} 
        id={viewProdu.id}         
        title={viewProdu.title} 
        >  
       </ItemDetail>
      }
    </>
    )
}
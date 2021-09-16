
import  { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { rowProduct } from "../firebase/leadmusic-model";

export default function ItemDetailContainer() {

    const { id } = useParams() 
   
    const [viewProdu, setviewProdu] = useState([]);
    const [cargando, setCargando] = useState(true);

  
    useEffect(() => {  
      const item = rowProduct(id);
      item.then((data) => {
        setviewProdu({id:data.id, ...data.data()});
        setCargando(false);
        }).catch(err => console.log("ERROR AL FILTRAR POR PRODUCTO ID" +err));
    },[id])

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
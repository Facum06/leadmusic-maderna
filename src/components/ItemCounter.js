import { useState } from "react"


export default function ItemCounter( {cantidad = 0, stock, onAdd = () =>{} }){
	const [userSelected, setUserSelected] = useState(cantidad)
	const [addedToCarrito, setAddedToCarrito] = useState(false)
	const agregarCart = () => {
		if (userSelected < stock){
			setUserSelected(userSelected + 1)
		}
	}

	const removerCart = () => {
		if (userSelected > 0){
			setUserSelected(userSelected - 1)
		}
	}

	const handleOnAddCart = (event) =>{
		if (userSelected > 0){
			setAddedToCarrito(true)
			onAdd(event);
		}
	}

	return (
		<>
			<div className="counterBtn">
				<button className="btn btn-danger" onClick= { () => agregarCart()}>+</button>
				<div className="counterFrm"><b className="counterB">{userSelected}</b></div>
				<button className="btn btn-success" onClick= { () => removerCart()}>-</button>				
			</div>
			{!addedToCarrito &&
				<button className="btn btn-primary" onClick={handleOnAddCart}>Mostrar/Ocultar</button>
			}
		</>
	);
}
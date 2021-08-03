

function Button(props){
	function inicioFrm(e) {
		e.preventDefault();
	    console.log('Probando boton, pulsaste: ' + e.target.innerHTML);
	 }
	return (
		<>
			<button onClick={inicioFrm} className="btn btn-dark boton-nav">{props.text}</button>
		</>
	)
}

export {Button}
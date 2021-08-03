import { Button } from "./Button";
import logolead from './leadmusiclogo.png';


export default function NavBar(){
	return (
		<>
		<div className='navbar navbar-expand navbar-dark bg-dark'>
			<img src={logolead} className="lead-logo" alt="logo" />
			<Button text='INICIO' />
			<Button text='PRODUCTOS' />
			<Button text='VINTAGE' />
			<Button text='VINILOS-DISCOS' />			
			<Button text='CONTACTO' />
			<div className='tituloApp' align='right'><h4>PRIVATE STOCK</h4><a href='#'>Iniciar Sesion</a></div>
		</div>
		</>
	)
}
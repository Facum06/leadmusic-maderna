import Button from "./Button";
import logolead from './leadmusiclogo.png';
import CartWidget from './CartWidget';

function NavBar(){
	return (
		<>
		<div className='navbar navbar-expand navbar-dark bg-dark'>
			<img src={logolead} className="lead-logo" alt="logo" />
			<Button text='INICIO' milink='/' />
			<Button text='PRODUCTOS' milink='/productos' />
			<Button text='VINTAGE' milink='/vintage' />
			<Button text='VINILOS' milink='/vinilos'/>			
			<Button text='CONTACTO' />
			<div className='tituloApp' align='right'><h4 className='hEst'>PRIVATE STOCK</h4><CartWidget />  </div>
		
		
		</div>
		</>
	)
}

export default NavBar;
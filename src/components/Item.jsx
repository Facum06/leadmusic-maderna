import { Link } from 'react-router-dom';
import React from "react";

function Item({title, description, price, pictureUrl, cate, id}) {
	return (
		<>
			<li className='contenedor-cart'>
			<Link to={`/${cate}/${id}`} className="link-productos">
				<div className="card">
				<div className="title">
						{title}
				</div>
				<div className='divimgcarr'><img src={pictureUrl} alt="imagen" className="card-img-top imgcarrito" /></div>				
					<div className="card-body">
						<p>{description}</p>
						<p>{price}</p>					
					</div>				
				</div>
			</Link>
			</li>
		</>
	);
}

export default Item;
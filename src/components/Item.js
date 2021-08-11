import React from "react";

function Item({title, description, price, pictureUrl}) {
	return (
		<>
			<div className="card">
			<div className="title">
					{title}
			</div>
			<div className='divimgcarr'><img src={pictureUrl} className="card-img-top imgcarrito" /></div>				
				<div className="card-body">
					<p>{description}</p>
					<p>{price}</p>					
				</div>				
			</div>
		</>
	);
}

export default Item;
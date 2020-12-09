import React from 'react'
import './ListItem.css'


const ListItem = (props) => {
	return <div className="item">
		<p>AGOTADO</p>
		<img src={props.image} width="150" height="150" alt={props.name} />
		<p>{props.name}</p>
		<strike className="list_price">${props.listPrice}</strike>
		<span className="discount">{props.discount}% OFF</span>
		<strong className="price block">${props.price}</strong>
	</div>
}

export default ListItem
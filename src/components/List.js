import React from 'react'
import './List.css'

//import ListClient from '../clients/ListClient'
import ListItem from './ListItem'


class List extends React.Component {
	

  /* constructor(props) {
		super(props);
    	this.state = {
			products: []
		}
		this.setState = this.setState.bind(this)
		let cliente = new ListClient(this.setState)
		this.listClient = cliente
   }
   

   componentDidMount() {
		//this.listClient.requestProducts()
	}*/
   
   
   render(){
		console.log('444', this.state.products)

		const items = this.state.products.map((product, idx) =>
			<ListItem 
				image={product.image_url}
				name={product.description}
				listPrice={product.list_price}
				discount={product.discount}
				price={product.price}
				key={idx}
			/>	
		)

		
      return <div className="list">
		 	{items}
      </div>
   }
}

export default List
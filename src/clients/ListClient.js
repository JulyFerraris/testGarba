class ListClient {

   constructor(updateState){
      this._updateState = updateState
   }

   requestProducts = () => {
      fetch('http://garbarino-mock-api.s3-website-us-east-1.amazonaws.com/products/')
      .then(response => response.json())
      .then(response => this._updateState({ products: response.items}))
      .catch(err => console.log(err)) 
   }    
}


export default ListClient

let productService = {}

productService.requestProducts = () => {
   tableros.push({
      'tableroId': tableros.length, 
      'tablero': miTablero,
      'alto': alto,
      'ancho': ancho
   })
   return tableros[tableros.length - 1]
}

module.exports = productService
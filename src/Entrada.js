import { useState, useEffect } from "react"

const Entrada = ({ history, location, match }) => {
const [producto, setProducto] = useState({})
  console.log(match.params.entrada)

  useEffect( () => {
    fetch(`https://api.mercadolibre.com/items/${match.params.entrada}`)
    .then(res=> res.json())
    .then(data => setProducto(data))
  }, [match.params.entrada])

  console.log(producto)
  return (
    <div>
    <h4>Producto de Mercado Libre</h4>
    <p>{producto.title}</p>
    </div>
  )
}

export default Entrada

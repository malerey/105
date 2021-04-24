import { useState, useEffect } from "react"
import { useHistory, useParams, useLocation } from 'react-router-dom'

const Entrada = () => {

  // nos permite acceder a los metodos de history como .push y goBack
  const history = useHistory();
  
  // nos permite acceder a la ruta en la que estoy y el estado de la ruta
  const location = useLocation();
console.log(location.state)
  // nos da acceso a los parametros de la ruta (las variables que declaramos con :)
  const params = useParams()




const [producto, setProducto] = useState({})

  useEffect( () => {
    fetch(`https://api.mercadolibre.com/items/${params.entrada}`)
    .then(res=> res.json())
    .then(data => setProducto(data))
  }, [params.entrada])

  return (
    <div>
    <h4>Producto de Mercado Libre</h4>
    <p>{producto.title}</p>
    </div>
  )
}

export default Entrada

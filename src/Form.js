import { Redirect} from 'react-router-dom'

const Form = () => {

  const estaLogueado = false
  
  return (
    <>

    {estaLogueado 
    ? 
    <>
    <input type="text"></input>
    <input type="submit" value="Enviar"></input>
    </>
    : 

    <Redirect to="/blog" />
    }
   


    </>
  )
}

export default Form

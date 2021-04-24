import {Link} from 'react-router-dom'

const Blog = ({ history }) => {



  const handleClick = () => {
    // history.push("/home")
    // history.replace("/home")
    history.goBack()
  }


  return (
    <>
    <h2>Soy un blog</h2>


<form>
  <input type="text"></input>

</form>

    
    
<button type="submit" onClick={handleClick}>Enviar formulario</button>
{/* <Link to="/blog/MLA898844422">Entrada "MLA898844422"</Link>
<Link to="/blog/MLA913217176">Entrada MLA913217176</Link> */}
     
    </>
  )
}

export default Blog

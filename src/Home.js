import { Link} from 'react-router-dom'

const Home = () => {

const entradas = [
  {
    id: 1, 
    titulo: "Mi primera entrada", 
    contenido: "Contenido"
  }, 
  {
    id: 2, 
    titulo: "Mi segunda entrada", 
    contenido: "Contenido"
  }, 
  {
    id: 3, 
    titulo: "Mi tercera entrada", 
    contenido: "Contenido"
  }, 
]
  return (
    <>
    <h2>Soy home</h2>
    
    <section>
    <h3>Mira nuestro blog</h3>
    {
      entradas.map(entrada => 
      <Link 
      to={{
        pathname: `/blog/${entrada.id}`,
        state: "el usuario entro desde un link en home"
        }}
       
       >
      <article>
        <h4>{entrada.titulo}</h4>
        <p>{entrada.contenido}</p>
      </article>
      </Link>
      )
    }
    </section>

    </>
  )
}

export default Home

import {BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'

import './App.css';
import Blog from './Blog'
import Home from './Home'
import Contacto from './Contacto'
import Entrada from './Entrada'
import Form from './Form'
import Page404 from './Page404'

function App() {


  return (
    <BrowserRouter>

      <nav>

      <p >
      <Link to="/home">Home</Link>
      </p>

        <p><Link to="/blog">Blog</Link></p>
        <p><Link to="/blog/MLA898844422">Entrada "MLA898844422"</Link></p>
        <p><Link to="/blog/MLA913217176">Entrada MLA913217176</Link></p>
        <p><Link to="/contacto">Contacto</Link></p>
        <p><Link to="/form">Formulario Pago</Link></p>

      </nav>

    <Switch>
    {/* // asi le pasamos params a un componente declarado en una ruta
    // ojo, si hacen esto hay algo mal en su arquitectura!! */}
      <Route exact path="/" component={() => <Home nombre="hola"/>}/>
      <Route exact path="/blog" component={Blog}/>
      <Route exact path="/blog/:entrada" component={Entrada}/>
     
  {/* {   estaLogueado 
  ?   <>
        <Route exact path="/contacto" component={Contacto}/>
        <Route exact path="/form" component={Form}/>
      </>
  : <Redirect to="/"></Redirect>} */}


      <Route component={Page404}/>
    </Switch>

    </BrowserRouter>

 
  );
}

export default App;

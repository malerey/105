import { useState } from 'react';
import {BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import './App.css';
import Blog from './Blog'
import Home from './Home'
import Contacto from './Contacto'
import Entrada from './Entrada'

function App() {
  return (
    <BrowserRouter>

      <nav>
      <p><Link to="/">Home</Link></p>
        <p><Link to="/blog">Blog</Link></p>
        <p><Link to="/blog/MLA898844422">Entrada "MLA898844422"</Link></p>
        <p><Link to="/blog/MLA913217176">Entrada MLA913217176</Link></p>
        <p><Link to="/contacto">Contacto</Link></p>
      </nav>

    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/blog" component={Blog}/>
      <Route exact path="/blog/:entrada" component={Entrada}/>
      <Route exact path="/contacto" component={Contacto}/>
    </Switch>

    </BrowserRouter>

 
  );
}

export default App;

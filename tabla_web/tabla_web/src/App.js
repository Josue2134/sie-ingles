import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rutas from './Rutas.js'

function App(){

  return(
<div className='app'>
  <BrowserRouter>
  <Rutas/>
  </BrowserRouter>
</div>
  )

}


  export default App;

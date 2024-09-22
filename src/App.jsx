import React from 'react';
import Formulario from './components/Formulario';
import ListaEstudiante from './components/ListaEstudiantes';

function App() {
  return (
    <div className='m-4'>
      <Formulario />
      <ListaEstudiante />
    </div>
  );
}

export default App;
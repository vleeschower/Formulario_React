import React, { useState } from 'react';
import Formulario from './components/Formulario';
import ListaEstudiante from './components/ListaEstudiantes';

function App() {
  // Estado para almacenar la lista de estudiantes
  const [estudiantes, setEstudiantes] = useState([]);

  // Función para agregar un nuevo estudiante
  const agregarEstudiante = (nuevoEstudiante) => {
    setEstudiantes([...estudiantes, nuevoEstudiante]);
  };

  return (
    <div className="App">
      <div className="row">
        <Formulario agregarEstudiante={agregarEstudiante} />
        <ListaEstudiante estudiantes={estudiantes} />
      </div>
    </div>
  );
}

export default App;

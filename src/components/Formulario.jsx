import React, { useState } from 'react';

const Formulario = ({ agregarEstudiante }) => {
  // Estado del formulario
  const [formData, setFormData] = useState({
    ine: '',
    nombre: '',
    apellidoPaterno: '',
    telefono: '',
    correo: ''
  });

  // Función para manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Llamamos a la función para agregar un nuevo estudiante
    agregarEstudiante(formData);
    // Limpiar el formulario después del envío
    setFormData({
      ine: '',
      nombre: '',
      apellidoPaterno: '',
      telefono: '',
      correo: ''
    });
  };

  // Función para restablecer los valores del formulario
  const handleReset = () => {
    setFormData({
      ine: '',
      nombre: '',
      apellidoPaterno: '',
      telefono: '',
      correo: ''
    });
  };

  return (
    <div className="col-md-5 mt-2">
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header">Formulario</div>
          <div className="card-body">
            <div className="input-group mb-3">
              <span className="input-group-text">Num. Ine:</span>
              <input 
                type="number" 
                className="form-control"
                name="ine"
                value={formData.ine}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">Nombre:</span>
              <input 
                type="text" 
                className="form-control"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">Apellido Paterno:</span>
              <input 
                type="text" 
                className="form-control"
                name="apellidoPaterno"
                value={formData.apellidoPaterno}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">Teléfono:</span>
              <input 
                type="tel" 
                className="form-control"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">Correo:</span>
              <input 
                type="email" 
                className="form-control"
                name="correo"
                value={formData.correo}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="btn btn-success">Enviar</button>
            <button type="button" className="btn btn-info ms-2" onClick={handleReset}>Restablecer</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Formulario;

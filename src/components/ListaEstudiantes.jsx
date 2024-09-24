const ListaEstudiante = ({ estudiantes }) => {
    return (
      <div className="col-md-5 mt-2">
        <div className="card">
          <div className="card-header">Lista de Estudiantes</div>
          <div className="card-body">
            <ul className="list-group">
              {estudiantes.length > 0 ? (
                estudiantes.map((estudiante, index) => (
                  <li key={index} className="list-group-item">
                    <strong>INE:</strong> {estudiante.ine} <br />
                    <strong>Nombre:</strong> {estudiante.nombre} <br />
                    <strong>Apellido Paterno:</strong> {estudiante.apellidoPaterno} <br />
                    <strong>Teléfono:</strong> {estudiante.telefono} <br />
                    <strong>Correo:</strong> {estudiante.correo}
                  </li>
                ))
              ) : (
                <li className="list-group-item">No hay estudiantes registrados.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default ListaEstudiante;
  
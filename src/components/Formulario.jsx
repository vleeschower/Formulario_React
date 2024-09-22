const Formulario = () => {
  return (
    <div className="col-md-4 mt-2">
      <form action="">
        <div className="card">
          <div className="card-header text-center">Formulario</div>
          <div className="card-body">
            
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Num. Ine:</span>
              <input type="number" className="form-control" />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Nombre:</span>
              <input type="text" className="form-control" />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Apellido Paterno:</span>
              <input type="text" className="form-control" />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Teléfono:</span>
              <input type="tel" className="form-control" />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Correo:</span>
              <input type="email" className="form-control" />
            </div>

            <div className="d-grid mb-2">
              <button type="submit" className="btn btn-success">Enviar</button>
            </div>
           
            <div className="d-grid">
              <button type="button" className="btn btn-info">Restablecer</button>
            </div>

          </div>
        </div>
      </form>
    </div>
  );
};

export default Formulario;

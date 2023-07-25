import React from 'react'


function InputAgregar() {
    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" className="Input-Agregar" placeholder="Ingrese una tarea" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Agregar</button>
            </div>
        </div>
    )
}

export default InputAgregar;